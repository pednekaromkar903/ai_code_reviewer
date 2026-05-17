import { Response, NextFunction } from 'express';
import { PrismaClient, UomType } from '@prisma/client';
import { AuthRequest } from '../../middleware/auth';

const prisma = new PrismaClient();

export const createCheckIn = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { goalId, cycleId, quarter, actualValue, status, managerComment } = req.body;

    const goal = await prisma.goal.findUnique({ where: { id: goalId } });
    if (!goal) return res.status(404).json({ message: 'Goal not found' });

    // AUTO-COMPUTE computedScore
    let computedScore = 0;
    const target = Number(goal.targetValue);
    const actual = Number(actualValue);

    switch (goal.uomType) {
      case 'MIN':
        computedScore = actual / target;
        break;
      case 'MAX':
        computedScore = target / actual;
        break;
      case 'TIMELINE':
        // Simplified: if check-in is before cycle end date, assume on track (1.0)
        computedScore = status === 'COMPLETED' ? 1.0 : 0.5;
        break;
      case 'ZERO':
        computedScore = actual === 0 ? 1.0 : 0.0;
        break;
    }

    // Cap at 1.5 for overachievement
    computedScore = Math.min(Math.max(computedScore, 0), 1.5);

    const checkIn = await prisma.checkIn.create({
      data: {
        goalId,
        cycleId,
        quarter,
        plannedValue: goal.targetValue,
        actualValue,
        status,
        managerComment,
        computedScore,
      },
    });

    // Update goal's actual value and status
    await prisma.goal.update({
      where: { id: goalId },
      data: { actualValue, status },
    });

    res.status(201).json(checkIn);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeCheckIns = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const checkIns = await prisma.checkIn.findMany({
      where: { goal: { employeeId: req.params.id } },
      include: { goal: true },
      orderBy: { checkInDate: 'desc' },
    });
    res.json(checkIns);
  } catch (error) {
    next(error);
  }
};
