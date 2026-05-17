import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { AuthRequest } from '../../middleware/auth';

export const getGoalAuditTrail = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const logs = await prisma.auditLog.findMany({
      where: { goalId: id },
      include: {
        user: { select: { name: true, role: true } }
      },
      orderBy: { changedAt: 'desc' }
    });

    res.json({ success: true, goalId: id, count: logs.length, logs });
  } catch (error) {
    next(error);
  }
};

export const getAllAuditLogs = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const logs = await prisma.auditLog.findMany({
      include: {
        goal: { select: { title: true } },
        user: { select: { name: true, role: true } }
      },
      orderBy: { changedAt: 'desc' },
      take: 100
    });

    res.json({ success: true, count: logs.length, logs });
  } catch (error) {
    next(error);
  }
};
