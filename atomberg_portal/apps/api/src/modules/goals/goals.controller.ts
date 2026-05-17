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
  targetValue: z.number().positive(),
  weightage: z.number().min(10).max(100),
  categoryType: z.string().default('RND'),
  channelType: z.string().optional()
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
      return res.status(400).json({ message: 'Maximum 8 goals allowed per employee' });
    }

    // Validation: Total weightage must be 100
    const weightSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true }
    });
    const currentTotal = weightSum._sum.weightage || 0;
    if (currentTotal + data.weightage > 100) {
      return res.status(400).json({ 
        message: `Total weightage would be ${currentTotal + data.weightage}%. Must equal exactly 100%.` 
      });
    }

    const goal = await prisma.goal.create({
      data: { ...data, employeeId: userId, status: 'NOT_STARTED' }
    });

    await cacheDel(`goals:${userId}:${req.user!.role}`);
    res.status(201).json({ success: true, goal });
  } catch (error) {
    next(error);
  }
};

export const submitGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    // Final weightage validation before submit
    const weightSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true }
    });
    if ((weightSum._sum.weightage || 0) !== 100) {
      return res.status(400).json({ message: 'Total weightage must equal exactly 100% before submission' });
    }

    const goal = await prisma.goal.update({
      where: { id, employeeId: userId },
      data: { status: 'PENDING' }
    });

    res.json({ success: true, goal });
  } catch (error) {
    next(error);
  }
};

export const approveGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { targetValue, weightage, comment } = req.body;
    const managerId = req.user!.id;

    const goal = await prisma.goal.findFirst({
      where: { id, employee: { managerId } }
    });

    if (!goal) return res.status(404).json({ message: 'Goal not found or not your direct report' });

    const updateData: any = {
      status: 'ON_TRACK',
      lockedAt: new Date(),
      approvedBy: managerId,
      approvedAt: new Date()
    };
    if (targetValue !== undefined) updateData.targetValue = targetValue;
    if (weightage !== undefined) updateData.weightage = weightage;

    const updated = await prisma.goal.update({
      where: { id },
      data: updateData
    });

    // Audit log
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

    if (!goal) return res.status(404).json({ message: 'Goal not found' });

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

    const goals = await Promise.all(
      recipientIds.map(async (empId: string) => {
        return prisma.goal.create({
          data: {
            employeeId: empId,
            title,
            description,
            thrustArea,
            uomType,
            targetValue,
            categoryType,
            isShared: true,
            weightage: 10, // default, employee can adjust
            status: 'NOT_STARTED'
          }
        });
      })
    );

    res.status(201).json({ success: true, goals, count: goals.length });
  } catch (error) {
    next(error);
  }
};
