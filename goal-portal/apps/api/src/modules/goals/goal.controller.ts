import { Response, NextFunction } from 'express';
import { PrismaClient, GoalProgressStatus, ActionType } from '@prisma/client';
import { AuthRequest } from '../../middleware/auth';

const prisma = new PrismaClient();

export const createGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { title, description, thrustArea, uomType, targetValue, weightage, categoryType, cycleId } = req.body;
    const userId = req.user!.id;

    // 1. Check max 8 goals
    const existingGoalsCount = await prisma.goal.count({
      where: { employeeId: userId },
    });
    if (existingGoalsCount >= 8) {
      return res.status(400).json({ message: 'Maximum 8 goals allowed per cycle' });
    }

    // 2. Min 10% weightage
    if (weightage < 10) {
      return res.status(400).json({ message: 'Minimum weightage per goal is 10%' });
    }

    // 3. Check total weightage <= 100
    const currentWeightageSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true },
    });
    const totalWeight = (currentWeightageSum._sum.weightage || 0) + weightage;
    if (totalWeight > 100) {
      return res.status(400).json({ message: `Total weightage (${totalWeight}%) exceeds 100%` });
    }

    const goal = await prisma.goal.create({
      data: {
        employeeId: userId,
        title,
        description,
        thrustArea,
        uomType,
        targetValue,
        weightage,
        categoryType,
        status: 'NOT_STARTED',
      },
    });

    res.status(201).json(goal);
  } catch (error) {
    next(error);
  }
};

export const submitGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    // Validation: Total weightage must be exactly 100 before submission
    const goal = await prisma.goal.findUnique({ where: { id } });
    if (!goal) return res.status(404).json({ message: 'Goal not found' });

    const weightageSum = await prisma.goal.aggregate({
      where: { employeeId: goal.employeeId },
      _sum: { weightage: true },
    });

    if (weightageSum._sum.weightage !== 100) {
      return res.status(400).json({ message: 'Total weightage across all goals must be exactly 100% before submission' });
    }

    const updatedGoal = await prisma.goal.update({
      where: { id },
      data: { status: 'NOT_STARTED' }, // In a real app, maybe a 'PENDING' status
    });

    res.json(updatedGoal);
  } catch (error) {
    next(error);
  }
};

export const approveGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { targetValue, weightage } = req.body; // Managers can edit targets/weightage on approval

    const goal = await prisma.goal.update({
      where: { id },
      data: {
        targetValue: targetValue || undefined,
        weightage: weightage || undefined,
        lockedAt: new Date(),
        approvedBy: req.user!.id,
        approvedAt: new Date(),
      },
    });

    await prisma.auditLog.create({
      data: {
        goalId: id,
        changedBy: req.user!.id,
        fieldName: 'status',
        oldValue: 'PENDING',
        newValue: 'APPROVED',
        actionType: 'APPROVAL',
      },
    });

    res.json(goal);
  } catch (error) {
    next(error);
  }
};

export const rejectGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    const goal = await prisma.goal.update({
      where: { id },
      data: {
        lockedAt: null, // Ensure it's unlocked for rework
      },
    });

    // In a real app, we'd store the rejection comment in a related table or notification
    res.json({ message: 'Goal rejected for rework', goal });
  } catch (error) {
    next(error);
  }
};

export const getGoals = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const where: any = {};
    if (req.user!.role === 'EMPLOYEE') {
      where.employeeId = req.user!.id;
    } else if (req.user!.role === 'MANAGER') {
      where.OR = [
        { employeeId: req.user!.id },
        { employee: { managerId: req.user!.id } }
      ];
    }

    const goals = await prisma.goal.findMany({
      where,
      include: { employee: { select: { name: true, department: true } } },
    });
    res.json(goals);
  } catch (error) {
    next(error);
  }
};

export const getGoalById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const goal = await prisma.goal.findUnique({
      where: { id: req.params.id },
      include: { checkIns: true, auditLogs: true, employee: true },
    });
    res.json(goal);
  } catch (error) {
    next(error);
  }
};

export const createSharedGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { title, description, thrustArea, uomType, targetValue, recipientIds } = req.body;

    const results = await Promise.all(recipientIds.map(async (empId: string) => {
      return prisma.goal.create({
        data: {
          employeeId: empId,
          title,
          description,
          thrustArea,
          uomType,
          targetValue,
          weightage: 10, // Default weight for shared KPIs
          categoryType: 'MANUFACTURING', // Default or from body
          isShared: true,
        }
      });
    }));

    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
};

export const unlockGoal = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const goal = await prisma.goal.update({
      where: { id },
      data: { lockedAt: null },
    });

    await prisma.auditLog.create({
      data: {
        goalId: id,
        changedBy: req.user!.id,
        fieldName: 'lockedAt',
        oldValue: 'locked',
        newValue: 'unlocked',
        actionType: 'UNLOCK',
      },
    });

    res.json({ message: 'Goal unlocked', goal });
  } catch (error) {
    next(error);
  }
};
