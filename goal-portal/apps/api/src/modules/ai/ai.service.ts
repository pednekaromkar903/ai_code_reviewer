import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AIService {
  async processQuery(query: string, userId: string, role: string) {
    const normalizedQuery = query.toLowerCase();
    let intent = 'GENERAL';
    let data: any = null;
    let summary = '';
    let suggestedActions: string[] = [];

    if (normalizedQuery.includes('completion rate') || normalizedQuery.includes('how many completed')) {
      intent = 'REPORT';
      const goals = await prisma.goal.findMany();
      const completed = goals.filter(g => g.status === 'COMPLETED').length;
      const rate = goals.length > 0 ? (completed / goals.length) * 100 : 0;
      data = { rate, total: goals.length, completed };
      summary = `The overall goal completion rate is ${rate.toFixed(1)}%.`;
      suggestedActions = ['View Completion Heatmap', 'Export Achievement Report'];
    } 
    else if (normalizedQuery.includes('behind target') || normalizedQuery.includes('delayed')) {
      intent = 'ALERT';
      data = await prisma.goal.findMany({
        where: {
          OR: [
            { status: 'NOT_STARTED' },
            { status: 'ON_TRACK', actualValue: { lt: prisma.goal.fields.targetValue } }
          ],
          employeeId: role === 'EMPLOYEE' ? userId : undefined,
          employee: role === 'MANAGER' ? { managerId: userId } : undefined,
        },
        include: { employee: { select: { name: true } } },
      });
      summary = `Found ${data.length} goals that are currently behind target or not started.`;
      suggestedActions = ['Notify Employees', 'Schedule Check-in'];
    }
    else if (normalizedQuery.includes('validate') || normalizedQuery.includes('weightage')) {
      intent = 'VALIDATION';
      const weightSum = await prisma.goal.aggregate({
        where: { employeeId: userId },
        _sum: { weightage: true },
      });
      const total = weightSum._sum.weightage || 0;
      data = { total, remaining: 100 - total };
      summary = `Your total weightage is ${total}%. ${total === 100 ? 'Your goals are perfectly balanced.' : `You have ${100 - total}% remaining to allocate.`}`;
      suggestedActions = ['Adjust Goal Weights', 'Add New Goal'];
    }
    else {
      summary = "I'm the Atomberg AI assistant. I can help you with completion rates, identifying delayed goals, or validating your goal weightage.";
    }

    return { intent, data, summary, suggestedActions };
  }
}
