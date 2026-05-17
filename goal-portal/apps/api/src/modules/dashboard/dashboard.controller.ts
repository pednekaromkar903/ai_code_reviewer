import { Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../../middleware/auth';

const prisma = new PrismaClient();

export const getManagerDashboard = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const managerId = req.user!.id;

    const team = await prisma.user.findMany({
      where: { managerId },
      include: {
        goals: {
          include: { checkIns: true },
        },
      },
    });

    const stats = team.map(member => {
      const totalGoals = member.goals.length;
      const completedGoals = member.goals.filter(g => g.status === 'COMPLETED').length;
      const avgScore = member.goals.length > 0 
        ? member.goals.reduce((acc, g) => acc + (g.checkIns[0]?.computedScore.toNumber() || 0), 0) / totalGoals 
        : 0;

      return {
        id: member.id,
        name: member.name,
        totalGoals,
        completionRate: totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0,
        avgScore,
        statusBreakdown: {
          NOT_STARTED: member.goals.filter(g => g.status === 'NOT_STARTED').length,
          ON_TRACK: member.goals.filter(g => g.status === 'ON_TRACK').length,
          COMPLETED: completedGoals,
        }
      };
    });

    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export const getAdminDashboard = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        users: {
          include: { goals: true },
        },
      },
    });

    const heatmap = departments.map(dept => {
      const allGoals = dept.users.flatMap(u => u.goals);
      const total = allGoals.length;
      const completed = allGoals.filter(g => g.status === 'COMPLETED').length;

      return {
        department: dept.name,
        completionRate: total > 0 ? (completed / total) * 100 : 0,
        goalCount: total,
      };
    });

    res.json(heatmap);
  } catch (error) {
    next(error);
  }
};
