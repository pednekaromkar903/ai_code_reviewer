import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { AuthRequest, rbacFilter } from '../../middleware/auth';
import { z } from 'zod';

const checkinSchema = z.object({
  goalId: z.string().uuid(),
  cycleId: z.string().uuid().optional(),
  quarter: z.enum(['Q1', 'Q2', 'Q3', 'Q4']),
  actualValue: z.number(),
  status: z.enum(['NOT_STARTED', 'ON_TRACK', 'COMPLETED']),
  managerComment: z.string().optional()
});

export const createCheckIn = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const data = checkinSchema.parse(req.body);
    const userId = req.user!.id;

    const goal = await prisma.goal.findFirst({
      where: { id: data.goalId, employeeId: userId }
    });

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found or not owned by you' });
    }

    // Compute score based on UoM
    let computedScore = 0;
    const actual = data.actualValue;
    const target = Number(goal.targetValue);

    switch (goal.uomType) {
      case 'MIN':
        computedScore = target > 0 ? actual / target : 0;
        break;
      case 'MAX':
        computedScore = actual > 0 ? target / actual : 0;
        break;
      case 'TIMELINE':
        computedScore = data.status === 'COMPLETED' ? 1.0 : 0.0;
        break;
      case 'ZERO':
        computedScore = actual === 0 ? 1.0 : 0.0;
        break;
    }

    // Cap between 0 and 1.5
    computedScore = Math.min(Math.max(computedScore, 0), 1.5);

    const checkIn = await prisma.checkIn.create({
      data: {
        goalId: data.goalId,
        cycleId: data.cycleId,
        quarter: data.quarter,
        plannedValue: goal.targetValue,
        actualValue: data.actualValue,
        status: data.status,
        managerComment: data.managerComment,
        computedScore
      }
    });

    // Update goal actual and status
    await prisma.goal.update({
      where: { id: data.goalId },
      data: { actualValue: data.actualValue, status: data.status }
    });

    res.status(201).json({ success: true, checkIn, computedScore: computedScore.toFixed(4) });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeCheckIns = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const filter = rbacFilter(req);
    const checkIns = await prisma.checkIn.findMany({
      where: {
        goal: filter
      },
      include: {
        goal: {
          include: {
            employee: { select: { name: true, email: true } }
          }
        }
      },
      orderBy: { checkInDate: 'desc' }
    });
    res.json({ success: true, checkIns });
  } catch (error) {
    next(error);
  }
};
