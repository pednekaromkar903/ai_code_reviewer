"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NLQueryEngine = void 0;
const FORBIDDEN = /\b(DELETE|UPDATE|INSERT|DROP|ALTER|TRUNCATE|CREATE|GRANT|REVOKE)\b/i;
class NLQueryEngine {
    parse(query, role) {
        const q = query.toLowerCase().trim();
        const tokens = q.split(/\s+/);
        const lineMatch = q.match(/line\s*[#]?\s*(\d)/i);
        const lineId = lineMatch ? parseInt(lineMatch[1], 10) : null;
        const quarterMatch = q.match(/\bq([1-4])\b/i);
        const quarter = quarterMatch ? `Q${quarterMatch[1].toUpperCase()}` : null;
        if (this.matches(q, ['completion', 'completed', 'how many goals', 'goal status', 'my progress', 'on track'])) {
            return {
                plan: {
                    intent: 'GOAL_COMPLETION',
                    source: 'goals',
                    sql: this.buildGoalsSql(role, { metric: 'completion' }),
                    summary: 'Analyzing goal completion rates from the performance database.',
                    chartType: 'metric',
                    followUps: ['Which goals are behind target?', 'Show my team performance', 'Compare Q1 vs Q2'],
                    filters: { role }
                }
            };
        }
        if (this.matches(q, ['behind', 'at risk', 'delayed', 'not on track', 'underperform'])) {
            return {
                plan: {
                    intent: 'GOAL_ALERT',
                    source: 'goals',
                    sql: this.buildGoalsSql(role, { filter: 'behind' }),
                    summary: 'Finding goals behind target (computed score < 70%).',
                    chartType: 'table',
                    followUps: ['Schedule check-in', 'Show manufacturing goals', 'Export achievement report'],
                    filters: { role, scoreBelow: 0.7 }
                }
            };
        }
        if (this.matches(q, ['weight', 'weightage', 'validate', '100%', 'allocation'])) {
            return {
                plan: {
                    intent: 'WEIGHT_VALIDATION',
                    source: 'goals',
                    sql: `SELECT employee_id, SUM(weightage) AS total_weight, COUNT(*) AS goal_count FROM "Goal" GROUP BY employee_id HAVING SUM(weightage) != 100 LIMIT 100`,
                    summary: 'Validating goal weightage totals (must equal 100%, max 8 goals).',
                    chartType: 'table',
                    followUps: ['Adjust my goals', 'Show pending approvals'],
                    filters: { role }
                }
            };
        }
        if (this.matches(q, ['compare', 'quarter', 'qoq', 'q1 vs', 'q2 vs', 'trend']) || quarter) {
            return {
                plan: {
                    intent: 'QUARTER_COMPARE',
                    source: 'checkins',
                    sql: `SELECT quarter, AVG(computed_score) AS avg_score, COUNT(*) AS checkins FROM "CheckIn" GROUP BY quarter ORDER BY quarter LIMIT 100`,
                    summary: 'Quarter-over-quarter performance comparison from check-in records.',
                    chartType: 'bar',
                    followUps: ['Show Q2 details', 'Which department improved most?'],
                    filters: { quarter: quarter || 'ALL' }
                }
            };
        }
        if (this.matches(q, ['report', 'achievement', 'planned vs actual', 'csv', 'export data'])) {
            return {
                plan: {
                    intent: 'ACHIEVEMENT_REPORT',
                    source: 'goals',
                    sql: `SELECT e.name, g.title, g.target_value, g.actual_value, g.status, g.weightage FROM "Goal" g JOIN "User" e ON g.employee_id = e.id ORDER BY e.name LIMIT 100`,
                    summary: 'Achievement report: planned vs actual across all goals.',
                    chartType: 'table',
                    followUps: ['Download CSV from Reports', 'Filter by manufacturing', 'Show only behind target'],
                    filters: { role }
                }
            };
        }
        if (this.matches(q, ['team', 'direct report', 'my team', 'subordinate'])) {
            return {
                plan: {
                    intent: 'TEAM_PERFORMANCE',
                    source: 'goals',
                    sql: `SELECT u.name, COUNT(g.id) AS goals, AVG(c.computed_score) AS avg_score FROM "User" u JOIN "Goal" g ON g.employee_id = u.id LEFT JOIN "CheckIn" c ON c.goal_id = g.id WHERE u.manager_id = $userId GROUP BY u.name LIMIT 100`,
                    summary: 'Team performance summary for direct reports.',
                    chartType: 'table',
                    followUps: ['Who needs a check-in?', 'Show completion rate'],
                    filters: { role }
                }
            };
        }
        if (this.matches(q, ['rejection', 'paint shop', 'manufacturing', 'production', 'line', 'output', 'energy', 'units produced'])) {
            const sql = lineId
                ? `SELECT date, line_id, units_produced, rejection_rate, energy_kwh FROM manufacturing_daily WHERE line_id = ${lineId} ORDER BY date DESC LIMIT 100`
                : `SELECT line_id, ROUND(AVG(rejection_rate)::numeric, 4) AS avg_rejection, SUM(units_produced) AS total_units FROM manufacturing_daily GROUP BY line_id LIMIT 100`;
            return {
                plan: {
                    intent: 'MANUFACTURING',
                    source: 'manufacturing',
                    sql,
                    summary: lineId
                        ? `Production & quality metrics for Line ${lineId} (Pune facility).`
                        : 'Manufacturing KPIs aggregated across all production lines.',
                    chartType: lineId ? 'line' : 'bar',
                    followUps: ['Show paint shop rejection trend', 'Compare line 2 vs line 3', 'Energy consumption by line'],
                    filters: { lineId: lineId ?? 0 }
                }
            };
        }
        if (this.matches(q, ['b2b', 'd2c', 'revenue', 'sales', 'channel', 'ceramic', 'deploy', 'fan sales'])) {
            const channel = q.includes('b2b') ? 'B2B' : q.includes('d2c') ? 'D2C' : null;
            const sql = channel
                ? `SELECT month, channel, revenue, units_sold, region FROM sales_monthly WHERE channel = '${channel}' ORDER BY month DESC LIMIT 100`
                : `SELECT month, channel, SUM(revenue) AS revenue, SUM(units_sold) AS units_sold FROM sales_monthly GROUP BY month, channel ORDER BY month LIMIT 100`;
            return {
                plan: {
                    intent: 'SALES',
                    source: 'sales',
                    sql,
                    summary: channel
                        ? `${channel} channel revenue and unit sales by month.`
                        : 'B2B vs D2C revenue comparison across channels.',
                    chartType: 'bar',
                    followUps: ['Compare B2B vs D2C this quarter', 'Show ceramic deployment goals', 'Regional breakdown'],
                    filters: { channel: channel || 'ALL' }
                }
            };
        }
        if (this.matches(q, ['patent', 'r&d', 'rnd', 'renesa', 'bom', 'motor'])) {
            return {
                plan: {
                    intent: 'RND',
                    source: 'legacy_goals',
                    sql: `SELECT g.title, g.target, g.actual, g.quarter, e.name, e.department FROM legacy_goals g JOIN legacy_employees e ON g.employee_id = e.id WHERE g.title ILIKE '%patent%' OR g.title ILIKE '%renesa%' OR g.title ILIKE '%bom%' LIMIT 100`,
                    summary: 'R&D goals: Renesa motor BOM, patents, and innovation targets.',
                    chartType: 'table',
                    followUps: ['Reduce BOM cost progress', 'Patent filing status', 'All R&D goals'],
                    filters: { department: 'R&D' }
                }
            };
        }
        if (this.matches(q, ['vendor', 'l1', 'procurement', 'sourcing'])) {
            return {
                plan: {
                    intent: 'PROCUREMENT',
                    source: 'legacy_goals',
                    sql: `SELECT title, target, actual, (target - actual) AS gap FROM legacy_goals WHERE title ILIKE '%vendor%' OR title ILIKE '%L1%' OR title ILIKE '%procurement%' LIMIT 100`,
                    summary: 'L1 vendor procurement targets vs actuals.',
                    chartType: 'table',
                    followUps: ['Manufacturing procurement goals', 'Goals behind on L1'],
                    filters: {}
                }
            };
        }
        if (this.matches(q, ['safety', 'zero incident', 'pune facility'])) {
            return {
                plan: {
                    intent: 'SAFETY',
                    source: 'legacy_goals',
                    sql: `SELECT title, target, actual, quarter FROM legacy_goals WHERE title ILIKE '%safety%' OR title ILIKE '%incident%' LIMIT 100`,
                    summary: 'Safety goals — zero incidents at Pune facility.',
                    chartType: 'metric',
                    followUps: ['All manufacturing goals', 'Operational excellence KPIs'],
                    filters: {}
                }
            };
        }
        if (this.matches(q, ['employee', 'headcount', 'department', 'staff', 'workforce'])) {
            return {
                plan: {
                    intent: 'WORKFORCE',
                    source: 'legacy_employees',
                    sql: `SELECT department, COUNT(*) AS employee_count FROM legacy_employees GROUP BY department ORDER BY employee_count DESC LIMIT 100`,
                    summary: 'Workforce distribution across R&D, Manufacturing, and Sales.',
                    chartType: 'bar',
                    followUps: ['List manufacturing team', 'Goals by department'],
                    filters: {}
                }
            };
        }
        if (this.matches(q, ['goal', 'kpi', 'target', 'performance', 'okr'])) {
            return {
                plan: {
                    intent: 'ALL_GOALS',
                    source: 'legacy_goals',
                    sql: `SELECT g.title, g.target, g.actual, ROUND((g.actual::float / NULLIF(g.target, 0) * 100)::numeric, 1) AS pct, g.quarter, e.name, e.department FROM legacy_goals g JOIN legacy_employees e ON g.employee_id = e.id ORDER BY pct ASC LIMIT 100`,
                    summary: 'All performance goals with actuals vs targets (sorted by completion %).',
                    chartType: 'table',
                    followUps: ['Goals behind target', 'B2B goals only', 'Q2 check-in status'],
                    filters: {}
                }
            };
        }
        if (this.matches(q, ['manufacturing department', 'mfg', 'factory', 'plant'])) {
            return {
                plan: {
                    intent: 'DEPT_MANUFACTURING',
                    source: 'goals',
                    sql: `SELECT g.title, g.target_value, g.actual_value, g.status, u.name FROM "Goal" g JOIN "User" u ON g.employee_id = u.id WHERE g.category_type = 'MANUFACTURING' LIMIT 100`,
                    summary: 'Manufacturing department goals including paint shop and L1 vendor KPIs.',
                    chartType: 'table',
                    followUps: ['Paint shop rejection rate', 'Why is manufacturing behind?'],
                    filters: { categoryType: 'MANUFACTURING' }
                }
            };
        }
        return {
            clarification: 'I can translate your question into a database query. Try asking about:\n\n' +
                '• **Goals** — completion rate, weightage, team performance\n' +
                '• **Manufacturing** — rejection rate, line output, energy\n' +
                '• **Sales** — B2B vs D2C revenue, ceramic deployments\n' +
                '• **Reports** — planned vs actual, quarterly trends',
            followUps: [
                'What is my completion rate?',
                'Show rejection rate for line 3',
                'Compare B2B vs D2C revenue',
                'Which goals are behind target?'
            ]
        };
    }
    validateSQL(sql) {
        if (FORBIDDEN.test(sql))
            return false;
        if (!/^\s*SELECT/i.test(sql))
            return false;
        if (!/LIMIT\s+\d+/i.test(sql))
            return false;
        return true;
    }
    matches(q, keywords) {
        return keywords.some((k) => q.includes(k));
    }
    buildGoalsSql(role, opts) {
        let where = '1=1';
        if (role === 'EMPLOYEE')
            where = `g.employee_id = $userId`;
        if (role === 'MANAGER')
            where = `u.manager_id = $userId`;
        if (opts.filter === 'behind') {
            return `SELECT g.title, g.target_value, g.actual_value, g.status, c.computed_score FROM "Goal" g LEFT JOIN "CheckIn" c ON c.goal_id = g.id JOIN "User" u ON g.employee_id = u.id WHERE ${where} AND (c.computed_score < 0.7 OR c.computed_score IS NULL) LIMIT 100`;
        }
        return `SELECT g.status, COUNT(*) AS count FROM "Goal" g JOIN "User" u ON g.employee_id = u.id WHERE ${where} GROUP BY g.status LIMIT 100`;
    }
}
exports.NLQueryEngine = NLQueryEngine;
