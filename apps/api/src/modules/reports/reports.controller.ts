import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { AuthRequest } from '../../middleware/auth';

export const getAchievementReport = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const goals = await prisma.goal.findMany({
      include: {
        employee: {
          include: {
            department: true,
            manager: { select: { name: true } }
          }
        },
        checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
      },
      orderBy: { createdAt: 'desc' }
    });

    const csvHeader = 'Employee Name,Department,Goal Title,Thrust Area,UoM Type,Target,Actual,Status,Weightage,Computed Score,Manager Name,Locked Date';

    const csvRows = goals.map(g => {
      const checkIn = g.checkIns[0];
      return [
        `"${g.employee.name}"`,
        `"${g.employee.department.name}"`,
        `"${g.title}"`,
        `"${g.thrustArea}"`,
        g.uomType,
        g.targetValue,
        g.actualValue,
        g.status,
        g.weightage,
        checkIn?.computedScore || 0,
        `"${g.employee.manager?.name || 'N/A'}"`,
        g.lockedAt ? g.lockedAt.toISOString() : 'N/A'
      ].join(',');
    });

    const csv = [csvHeader, ...csvRows].join('\n');

    res.header('Content-Type', 'text/csv');
    res.header('Content-Disposition', 'attachment; filename="atomberg-achievement-report.csv"');
    res.send(csv);
  } catch (error) {
    next(error);
  }
};
