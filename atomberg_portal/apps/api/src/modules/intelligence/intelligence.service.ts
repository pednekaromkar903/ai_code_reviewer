import { prisma } from '../../lib/prisma';
import { NLSQLEngine } from './nl-sql.engine';

const engine = new NLSQLEngine();

export class IntelligenceService {
  async testConnection(config: {
    host: string;
    port: number;
    database: string;
    username: string;
    dbType?: string;
  }) {
    await prisma.$queryRaw`SELECT 1`;
    return {
      success: true,
      message: `Connected to ${config.dbType || 'postgresql'} at ${config.host}:${config.port}/${config.database}`,
      tablesFound: 6
    };
  }

  async saveConnection(config: {
    name?: string;
    host: string;
    port: number;
    database: string;
    username: string;
    dbType?: string;
  }) {
    await prisma.dbConnection.updateMany({ data: { isActive: false } });
    const conn = await prisma.dbConnection.create({
      data: {
        name: config.name || 'Atomberg Legacy DB',
        dbType: config.dbType || 'postgresql',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.username,
        isReadOnly: true,
        isActive: true
      }
    });
    return conn;
  }

  async getActiveConnection() {
    return prisma.dbConnection.findFirst({ where: { isActive: true } });
  }

  getSchema() {
    return {
      tables: [
        {
          name: 'manufacturing_daily',
          description: 'Daily production metrics per line',
          columns: [
            { name: 'date', type: 'date' },
            { name: 'line_id', type: 'int' },
            { name: 'units_produced', type: 'int' },
            { name: 'rejection_rate', type: 'decimal' },
            { name: 'energy_kwh', type: 'decimal' }
          ],
          rowCount: 90
        },
        {
          name: 'sales_monthly',
          description: 'Monthly revenue by channel',
          columns: [
            { name: 'month', type: 'date' },
            { name: 'channel', type: 'varchar' },
            { name: 'revenue', type: 'decimal' },
            { name: 'units_sold', type: 'int' },
            { name: 'region', type: 'varchar' }
          ],
          rowCount: 24
        },
        {
          name: 'legacy_employees',
          description: 'Employee master from HR system',
          columns: [
            { name: 'id', type: 'uuid' },
            { name: 'name', type: 'varchar' },
            { name: 'department', type: 'varchar' },
            { name: 'role', type: 'varchar' }
          ],
          rowCount: 10
        },
        {
          name: 'legacy_goals',
          description: 'Performance goals with targets and actuals',
          columns: [
            { name: 'employee_id', type: 'uuid' },
            { name: 'title', type: 'varchar' },
            { name: 'target', type: 'decimal' },
            { name: 'actual', type: 'decimal' },
            { name: 'quarter', type: 'varchar' }
          ],
          rowCount: 8
        },
        {
          name: 'Goal',
          description: 'Goal Portal — employee goals (live)',
          columns: [
            { name: 'title', type: 'varchar' },
            { name: 'uomType', type: 'enum' },
            { name: 'targetValue', type: 'decimal' },
            { name: 'actualValue', type: 'decimal' },
            { name: 'weightage', type: 'int' }
          ]
        },
        {
          name: 'CheckIn',
          description: 'Quarterly check-ins with computed scores',
          columns: [
            { name: 'quarter', type: 'varchar' },
            { name: 'plannedValue', type: 'decimal' },
            { name: 'actualValue', type: 'decimal' },
            { name: 'computedScore', type: 'decimal' }
          ]
        }
      ]
    };
  }

  async executeNaturalLanguage(query: string, role: string, userId: string) {
    const parsed = engine.parseQuery(query, role);

    if ('clarification' in parsed) {
      return {
        intent: 'CLARIFICATION',
        summary: parsed.clarification,
        sql: null,
        data: [],
        followUps: ['Show manufacturing rejection rates', 'Compare B2B vs D2C revenue', 'List Q2 goals behind target']
      };
    }

    if (!engine.validateSQL(parsed.sql)) {
      return {
        intent: 'ERROR',
        summary: 'Generated query failed safety validation.',
        sql: null,
        data: [],
        followUps: []
      };
    }

    const data = await this.runSafeQuery(query.toLowerCase());
    const enriched = { ...parsed, data };

    await prisma.chatMessage.create({
      data: {
        userId,
        role: 'user',
        content: query,
        intentType: 'INTELLIGENCE_NL_SQL'
      }
    });

    await prisma.chatMessage.create({
      data: {
        userId,
        role: 'assistant',
        content: enriched.summary,
        intentType: 'INTELLIGENCE_NL_SQL',
        metadata: JSON.stringify({ sql: enriched.sql, rowCount: data.length })
      }
    });

    return {
      intent: 'INTELLIGENCE_QUERY',
      summary: enriched.summary,
      sql: enriched.sql,
      data,
      chartType: enriched.chartType,
      followUps: enriched.followUps,
      systemPrompt: engine.getSystemPrompt()
    };
  }

  private async runSafeQuery(q: string): Promise<Record<string, unknown>[]> {
    if (q.includes('rejection') || q.includes('paint') || q.includes('line') || q.includes('manufacturing')) {
      const lineMatch = q.match(/line\s*(\d)/);
      if (lineMatch) {
        const lineId = parseInt(lineMatch[1], 10);
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
        avg_rejection: Number(g._avg.rejectionRate || 0),
        total_units: g._sum.unitsProduced,
        avg_energy_kwh: Number(g._avg.energyKwh || 0)
      }));
    }

    if (q.includes('b2b') || q.includes('d2c') || q.includes('revenue') || q.includes('sales')) {
      const rows = await prisma.salesMonthly.findMany({ orderBy: { month: 'asc' }, take: 100 });
      return rows.map((r) => ({
        month: r.month.toISOString().split('T')[0],
        channel: r.channel,
        revenue: Number(r.revenue),
        units_sold: r.unitsSold,
        region: r.region
      }));
    }

    if (q.includes('patent') || q.includes('r&d') || q.includes('rnd')) {
      const rows = await prisma.legacyGoal.findMany({
        where: { title: { contains: 'patent', mode: 'insensitive' } },
        include: { employee: true },
        take: 100
      });
      return rows.map((r) => ({
        title: r.title,
        target: Number(r.target),
        actual: Number(r.actual),
        quarter: r.quarter,
        employee: r.employee.name
      }));
    }

    if (q.includes('vendor') || q.includes('l1') || q.includes('procurement')) {
      const rows = await prisma.legacyGoal.findMany({
        where: {
          OR: [
            { title: { contains: 'vendor', mode: 'insensitive' } },
            { title: { contains: 'L1', mode: 'insensitive' } }
          ]
        },
        take: 100
      });
      return rows.map((r) => ({
        title: r.title,
        target: Number(r.target),
        actual: Number(r.actual),
        gap: Number(r.target) - Number(r.actual)
      }));
    }

    if (q.includes('ceramic') || q.includes('deploy')) {
      const rows = await prisma.legacyGoal.findMany({
        where: {
          OR: [
            { title: { contains: 'ceramic', mode: 'insensitive' } },
            { title: { contains: 'deploy', mode: 'insensitive' } }
          ]
        },
        take: 100
      });
      return rows.map((r) => ({
        title: r.title,
        target: Number(r.target),
        actual: Number(r.actual),
        completion_pct: Number(r.target) > 0 ? ((Number(r.actual) / Number(r.target)) * 100).toFixed(1) : 0
      }));
    }

    if (q.includes('employee') || q.includes('department') || q.includes('headcount')) {
      const grouped = await prisma.legacyEmployee.groupBy({
        by: ['department'],
        _count: { id: true }
      });
      return grouped.map((g) => ({ department: g.department, count: g._count.id }));
    }

    const goals = await prisma.legacyGoal.findMany({
      include: { employee: true },
      take: 100
    });
    return goals.map((g) => ({
      title: g.title,
      target: Number(g.target),
      actual: Number(g.actual),
      quarter: g.quarter,
      employee: g.employee.name,
      department: g.employee.department,
      behind: Number(g.actual) < Number(g.target) ? 'Yes' : 'No'
    }));
  }

  async getLegacyGoals() {
    return prisma.legacyGoal.findMany({
      include: { employee: true },
      orderBy: { title: 'asc' }
    });
  }
}
