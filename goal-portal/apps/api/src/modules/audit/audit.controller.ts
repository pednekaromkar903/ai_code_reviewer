import { Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../../middleware/auth';

const prisma = new PrismaClient();

export const getGoalAuditTrail = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const logs = await prisma.auditLog.findMany({
      where: { goalId: req.params.id },
      orderBy: { changedAt: 'desc' },
    });
    res.json(logs);
  } catch (error) {
    next(error);
  }
};
