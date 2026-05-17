import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SuggestionService {
  async getSuggestions(userId: string, role: string) {
    const suggestions = [];

    if (role === 'MANAGER') {
      const pendingApprovals = await prisma.goal.count({
        where: { employee: { managerId: userId }, lockedAt: null },
      });
      if (pendingApprovals > 0) {
        suggestions.push(`You have ${pendingApprovals} goals pending approval.`);
      }
    }

    const weightSum = await prisma.goal.aggregate({
      where: { employeeId: userId },
      _sum: { weightage: true },
    });

    if ((weightSum._sum.weightage || 0) < 100) {
      suggestions.push("Your goal weightage is less than 100%. Please allocate the remaining weight.");
    }

    if (suggestions.length === 0) {
      suggestions.push("All clear! Your team is on track.");
    }

    return suggestions;
  }
}
