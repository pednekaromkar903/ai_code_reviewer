import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { cacheGet, cacheSet, cacheDel } from '../../lib/redis';
import { AuthRequest, rbacFilter } from '../../middleware/auth';
import { z } from 'zod';

const createGoalSchema = z.object({
  title: z.string().min(5).max(200),
  description: z.string().optional(),
  thrustArea: z.string().min(1),
  uomType: z.enum(['MIN', 'MAX', 'TIMELINE', 'ZERO']),
  targetValue: z.number().nonnegative(),
  weightage: z.number().min(10).max(100),
  categoryType: z.string().default('RND'),
  channelType: z.string().optional()
});

const updateGoalSchema = z.object({
  title: z.string().min(5).max(200).optional(),
  description: z.string().optional(),
  targetValue: z.number().nonnegative().optional(),
  weightage: z.number().min(10).max(100).optional(),
  status: z.enum(['NOT_STARTED', 'ON_TRACK', 'COMPLETED', 'PENDING']).optional(),
});

export const getGoals = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const filter = rbacFilter(req);
    const cacheKey = `goals:${req.user!.id}:${req.user!.role}`;
    const cached = await cacheGet<{ goals: unknown[] }>(cacheKey);
    if (cached) {
      return res.json({ success: true, goals: cached.goals, cached: true });
    }
    const goals = await prisma.goal.findMany({
      where: filter,
      include: {
        employee: { select: { name: true, email: true, department: { select: { name: true } } } },
        checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
      },
      orderBy: { createdAt: 'desc' }
    });
    await cacheSet(cacheKey, { goals }, 120);
    res.json({ success: true, goals });
  } catch (error) {
    next(error);
  }
};

export const createGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const data = createGoalSchema.parse(req.body);
    const userId = req.user!.id;

    // Validation: Max 8 goals
    const existingCount = await prisma.goal.count({ where: { employeeId: userId } });
    if (existingCount >= 8) {
      return res.status(400).json({ success: false, message: 'Maximum 8 goals allowed per employee' });
    }

    // Validation: Check if adding this would exceed 100%
    const weightSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true }
    });
    const currentTotal = weightSum._sum.weightage || 0;
    if (currentTotal + data.weightage > 100) {
      return res.status(400).json({ 
        success: false,
        message: `Total weightage would be ${currentTotal + data.weightage}%. Must not exceed 100%.` 
      });
    }

    const goal = await prisma.goal.create({
      data: { 
        ...(data as any), 
        employee: { connect: { id: userId } }, 
        status: 'NOT_STARTED' 
      }
    });

    await cacheDel(`goals:${userId}:${req.user!.role}`);
    res.status(201).json({ success: true, goal });
  } catch (error) {
    next(error);
  }
};

export const updateGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;
    const data = updateGoalSchema.parse(req.body);

    const existing = await prisma.goal.findUnique({
      where: { id }
    });

    if (!existing) return res.status(404).json({ success: false, message: 'Goal not found' });
    
    if (existing.employeeId !== userId && req.user!.role === 'EMPLOYEE') {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    // Audit Trail for locked goals
    if (existing.lockedAt && (data.title || data.targetValue !== undefined || data.weightage !== undefined)) {
      const auditEntries = [];
      if (data.title && data.title !== existing.title) {
        auditEntries.push({ field: 'title', old: existing.title, new: data.title });
      }
      if (data.targetValue !== undefined && Number(data.targetValue) !== Number(existing.targetValue)) {
        auditEntries.push({ field: 'targetValue', old: String(existing.targetValue), new: String(data.targetValue) });
      }
      if (data.weightage !== undefined && data.weightage !== existing.weightage) {
        auditEntries.push({ field: 'weightage', old: String(existing.weightage), new: String(data.weightage) });
      }

      for (const entry of auditEntries) {
        await prisma.auditLog.create({
          data: {
            goalId: id,
            changedBy: userId,
            fieldName: entry.field,
            oldValue: entry.old,
            newValue: entry.new,
            actionType: 'EDIT_LOCKED',
            ipAddress: req.ip || 'unknown'
          }
        });
      }
    }

    // Shared Goal Restrictions
    if (existing.isShared && existing.employeeId === userId) {
      if (data.title || data.targetValue !== undefined) {
        return res.status(400).json({ 
          success: false, 
          message: 'Title and Target of a Shared Goal can only be edited by Admin.' 
        });
      }
    }

    if (data.weightage !== undefined) {
      const weightSum = await prisma.goal.aggregate({
        where: { employeeId: existing.employeeId, id: { not: id } },
        _sum: { weightage: true }
      });
      const otherTotal = weightSum._sum.weightage || 0;
      if (otherTotal + data.weightage > 100) {
        return res.status(400).json({ 
          success: false,
          message: `Total weightage would be ${otherTotal + data.weightage}%. Must not exceed 100%.` 
        });
      }
    }

    const updated = await prisma.goal.update({
      where: { id },
      data: { ...data } as any
    });

    await cacheDel(`goals:${existing.employeeId}:${req.user!.role}`);
    res.json({ success: true, goal: updated });
  } catch (error) {
    next(error);
  }
};

export const submitGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    const goal = await prisma.goal.findUnique({ where: { id } });
    if (!goal || goal.employeeId !== userId) {
      return res.status(404).json({ success: false, message: 'Goal not found' });
    }

    const weightSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true }
    });
    
    if ((weightSum._sum.weightage || 0) !== 100) {
      return res.status(400).json({ 
        success: false, 
        message: `Total weightage is ${weightSum._sum.weightage || 0}%. It must be exactly 100% before submission.` 
      });
    }

    const updated = await prisma.goal.update({
      where: { id },
      data: { status: 'PENDING' }
    });

    res.json({ success: true, goal: updated });
  } catch (error) {
    next(error);
  }
};

export const approveGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { targetValue, weightage } = req.body;
    const managerId = req.user!.id;

    const goal = await prisma.goal.findFirst({
      where: { id, employee: { managerId } }
    });

    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found or not your direct report' });

    const updateData: any = {
      status: 'ON_TRACK',
      lockedAt: new Date(),
      approvedBy: managerId,
      approvedAt: new Date()
    };
    if (targetValue !== undefined) updateData.targetValue = targetValue;
    if (weightage !== undefined) {
      const weightSum = await prisma.goal.aggregate({
        where: { employeeId: goal.employeeId, id: { not: id } },
        _sum: { weightage: true }
      });
      const otherTotal = weightSum._sum.weightage || 0;
      if (otherTotal + weightage > 100) {
        return res.status(400).json({ 
          success: false,
          message: `Manager edit failed: Total weightage for employee would be ${otherTotal + weightage}%.` 
        });
      }
      updateData.weightage = weightage;
    }

    const updated = await prisma.goal.update({
      where: { id },
      data: updateData
    });

    await prisma.auditLog.create({
      data: {
        goalId: id,
        changedBy: managerId,
        fieldName: 'status',
        oldValue: goal.status,
        newValue: 'ON_TRACK',
        actionType: 'APPROVAL',
        ipAddress: req.ip || 'unknown'
      }
    });

    res.json({ success: true, goal: updated });
  } catch (error) {
    next(error);
  }
};

export const rejectGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const managerId = req.user!.id;

    const goal = await prisma.goal.findFirst({
      where: { id, employee: { managerId } }
    });

    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found' });

    const updated = await prisma.goal.update({
      where: { id },
      data: { status: 'NOT_STARTED' }
    });

    res.json({ success: true, goal: updated, reworkComment: comment });
  } catch (error) {
    next(error);
  }
};

export const adminUnlock = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const adminId = req.user!.id;

    const goal = await prisma.goal.update({
      where: { id },
      data: { lockedAt: null, status: 'NOT_STARTED' }
    });

    await prisma.auditLog.create({
      data: {
        goalId: id,
        changedBy: adminId,
        fieldName: 'lockedAt',
        oldValue: 'LOCKED',
        newValue: 'UNLOCKED',
        actionType: 'ADMIN_UNLOCK',
        ipAddress: req.ip || 'unknown'
      }
    });

    res.json({ success: true, goal, unlockReason: reason });
  } catch (error) {
    next(error);
  }
};

export const createSharedGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { title, description, thrustArea, uomType, targetValue, categoryType, recipientIds } = req.body;
    const adminId = req.user!.id;

    // Create template goal (parent)
    const templateGoal = await prisma.goal.create({
      data: {
        employeeId: adminId,
        title,
        description,
        thrustArea,
        uomType,
        targetValue,
        categoryType,
        isShared: true,
        weightage: 0, // Template weightage
        status: 'ON_TRACK',
        lockedAt: new Date()
      }
    });

    const goals = await Promise.all(
      recipientIds.map(async (empId: string) => {
        return prisma.goal.create({
          data: {
            employee: { connect: { id: empId } },
            title,
            description,
            thrustArea,
            uomType,
            targetValue,
            categoryType,
            isShared: true,
            parentGoalId: templateGoal.id,
            weightage: 10,
            status: 'NOT_STARTED'
          }
        });
      })
    );

    res.status(201).json({ success: true, templateId: templateGoal.id, goals, count: goals.length });
  } catch (error) {
    next(error);
  }
};
