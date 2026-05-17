import { prisma } from '../../lib/prisma';

export class SuggestionService {
  async getSuggestions(userId: string, role: string) {
    const suggestions = [];

    // Manager suggestions
    if (role === 'MANAGER') {
      const pendingApprovals = await prisma.goal.count({
        where: { employee: { managerId: userId }, status: 'PENDING' }
      });
      if (pendingApprovals > 0) {
        suggestions.push(`📋 You have ${pendingApprovals} goal(s) pending approval from your team.`);
      }

      const overdueCheckins = await prisma.goal.count({
        where: {
          employee: { managerId: userId },
          status: { not: 'COMPLETED' },
          checkIns: { none: {} }
        }
      });
      if (overdueCheckins > 0) {
        suggestions.push(`⏰ ${overdueCheckins} employee(s) have not completed their quarterly check-in.`);
      }
    }

    // Employee suggestions
    if (role === 'EMPLOYEE') {
      const weightSum = await prisma.goal.aggregate({
        where: { employeeId: userId },
        _sum: { weightage: true },
        _count: { id: true }
      });

      const totalWeight = weightSum._sum.weightage || 0;
      const goalCount = weightSum._count.id || 0;

      if (goalCount === 0) {
        suggestions.push("🎯 You haven't created any goals yet. Start by creating your Goal Sheet for this quarter.");
      } else if (totalWeight < 100) {
        suggestions.push(`⚖️ Your goal weightage is ${totalWeight}%. You need ${100 - totalWeight}% more to reach 100%.`);
      }

      const pendingSubmit = await prisma.goal.count({
        where: { employeeId: userId, status: 'NOT_STARTED' }
      });
      if (pendingSubmit > 0 && totalWeight === 100) {
        suggestions.push(`📤 You have ${pendingSubmit} goal(s) ready to submit for manager approval.`);
      }
    }

    // Admin suggestions
    if (role === 'ADMIN') {
      const totalUsers = await prisma.user.count();
      const totalGoals = await prisma.goal.count();
      const pendingApprovals = await prisma.goal.count({ where: { status: 'PENDING' } });

      suggestions.push(`🏢 Organization Overview: ${totalUsers} users, ${totalGoals} goals tracked.`);
      if (pendingApprovals > 0) {
        suggestions.push(`⚠️ ${pendingApprovals} goals pending approval across all managers.`);
      }
    }

    if (suggestions.length === 0) {
      suggestions.push("✅ All clear! Everything is on track.");
    }

    return suggestions;
  }
}
