import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { AuthRequest } from '../../middleware/auth';

export const getCycles = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const cycles = await prisma.goalCycle.findMany({
      orderBy: { startDate: 'asc' }
    });
    res.json({ success: true, cycles });
  } catch (error) {
    next(error);
  }
};

export const updateCycleStatus = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const cycle = await prisma.goalCycle.update({
      where: { id },
      data: { status }
    });
    res.json({ success: true, cycle });
  } catch (error) {
    next(error);
  }
};
