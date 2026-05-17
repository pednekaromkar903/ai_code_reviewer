import { prisma } from '../../lib/prisma';
import { QueryPlan } from './nl-query.engine';
import { AIService } from '../ai/ai.service';

const aiService = new AIService();

export class ChatExecutor {
  async execute(plan: QueryPlan, naturalQuery: string, userId: string, role: string) {
    if (plan.source === 'goals' || plan.source === 'checkins') {
      const aiResult = await aiService.processQuery(naturalQuery, userId, role);
      const data = Array.isArray(aiResult.data)
        ? aiResult.data
        : aiResult.data
          ? [aiResult.data]
          : [];
      return {
        summary: aiResult.summary,
        sql: plan.sql,
        data,
        chartType: plan.chartType,
        intent: aiResult.intent || plan.intent,
        followUps: aiResult.suggestedActions || plan.followUps,
        rowCount: data.length
      };
    }

    const data = await this.runLegacyQuery(plan, naturalQuery.toLowerCase());
    const summary = this.buildDataSummary(plan, data);

    return {
      summary,
      sql: plan.sql,
      data,
      chartType: plan.chartType,
      intent: plan.intent,
      followUps: plan.followUps,
      rowCount: data.length
    };
  }

  private buildDataSummary(plan: QueryPlan, data: Record<string, unknown>[]): string {
    if (data.length === 0) {
      return `${plan.summary}\n\nNo matching records found in the database.`;
    }
    return `${plan.summary}\n\n**${data.length}** record(s) returned from query execution.`;
  }

  private async runLegacyQuery(plan: QueryPlan, q: string): Promise<Record<string, unknown>[]> {
    const lineId = plan.filters.lineId as number | undefined;

    if (plan.source === 'manufacturing') {
      if (lineId && lineId > 0) {
        const rows = await prisma.manufacturingDaily.findMany({
          where: { lineId },
          orderBy: { date: 'desc' },
          take: 100
        });
        return rows.map((r) => ({
          date: r.date.toISOString().split('T')[0],
          line_id: r.lineId,
          units_produced: r.unitsProduced,
          rejection_rate: Number(r.rejectionRate),
          energy_kwh: Number(r.energyKwh)
        }));
      }
      const grouped = await prisma.manufacturingDaily.groupBy({
        by: ['lineId'],
        _avg: { rejectionRate: true, energyKwh: true },
        _sum: { unitsProduced: true }
      });
      return grouped.map((g) => ({
        line_id: g.lineId,
        avg_rejection_pct: (Number(g._avg.rejectionRate || 0) * 100).toFixed(3),
        total_units: g._sum.unitsProduced,
        avg_energy_kwh: Number(g._avg.energyKwh || 0).toFixed(0)
      }));
    }

    if (plan.source === 'sales') {
      const channel = plan.filters.channel as string;
      const where = channel && channel !== 'ALL' ? { channel } : {};
      const rows = await prisma.salesMonthly.findMany({
        where,
        orderBy: { month: 'asc' },
        take: 100
      });
      return rows.map((r) => ({
        month: r.month.toISOString().split('T')[0].slice(0, 7),
        channel: r.channel,
        revenue_cr: (Number(r.revenue) / 10_000_000).toFixed(2),
        units_sold: r.unitsSold,
        region: r.region
      }));
    }

    if (plan.source === 'legacy_employees') {
      const grouped = await prisma.legacyEmployee.groupBy({
        by: ['department'],
        _count: { id: true }
      });
      return grouped.map((g) => ({ department: g.department, employee_count: g._count.id }));
    }

    if (plan.source === 'legacy_goals') {
      if (plan.intent === 'RND') {
        const rows = await prisma.legacyGoal.findMany({
          where: {
            OR: [
              { title: { contains: 'patent', mode: 'insensitive' } },
              { title: { contains: 'renesa', mode: 'insensitive' } },
              { title: { contains: 'bom', mode: 'insensitive' } }
            ]
          },
          include: { employee: true },
          take: 100
        });
        return this.mapLegacyGoals(rows);
      }
      if (plan.intent === 'PROCUREMENT' || q.includes('vendor') || q.includes('l1')) {
        const rows = await prisma.legacyGoal.findMany({
          where: {
            OR: [
              { title: { contains: 'vendor', mode: 'insensitive' } },
              { title: { contains: 'L1', mode: 'insensitive' } },
              { title: { contains: 'procurement', mode: 'insensitive' } }
            ]
          },
          include: { employee: true },
          take: 100
        });
        return this.mapLegacyGoals(rows);
      }
      if (q.includes('ceramic') || q.includes('deploy')) {
        const rows = await prisma.legacyGoal.findMany({
          where: {
            OR: [
              { title: { contains: 'ceramic', mode: 'insensitive' } },
              { title: { contains: 'deploy', mode: 'insensitive' } }
            ]
          },
          include: { employee: true },
          take: 100
        });
        return this.mapLegacyGoals(rows);
      }
      if (plan.intent === 'SAFETY') {
        const rows = await prisma.legacyGoal.findMany({
          where: {
            OR: [
              { title: { contains: 'safety', mode: 'insensitive' } },
              { title: { contains: 'incident', mode: 'insensitive' } }
            ]
          },
          include: { employee: true },
          take: 100
        });
        return this.mapLegacyGoals(rows);
      }

      const rows = await prisma.legacyGoal.findMany({
        include: { employee: true },
        take: 100
      });
      return this.mapLegacyGoals(rows);
    }

    return [];
  }

  private mapLegacyGoals(rows: Array<{
    title: string;
    target: unknown;
    actual: unknown;
    quarter: string;
    employee: { name: string; department: string };
  }>) {
    return rows.map((g) => {
      const target = Number(g.target);
      const actual = Number(g.actual);
      const pct = target > 0 ? ((actual / target) * 100).toFixed(1) : '0';
      return {
        goal: g.title,
        target,
        actual,
        completion_pct: pct,
        quarter: g.quarter,
        employee: g.employee.name,
        department: g.employee.department,
        status: actual >= target ? 'On Track' : 'Behind'
      };
    });
  }
}
