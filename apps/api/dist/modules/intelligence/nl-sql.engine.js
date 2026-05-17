"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NLSQLEngine = void 0;
const FORBIDDEN = /\b(DELETE|UPDATE|INSERT|DROP|ALTER|TRUNCATE|CREATE|GRANT|REVOKE)\b/i;
const SYSTEM_PROMPT = `You are Atomberg Intelligence, a manufacturing analytics expert.
Convert natural language to safe, read-only SQL.
Never use DELETE, UPDATE, INSERT, DROP.
Always add LIMIT 100.
If question is vague, ask for clarification.`;
class NLSQLEngine {
    getSystemPrompt() {
        return SYSTEM_PROMPT;
    }
    parseQuery(query, role) {
        const q = query.toLowerCase().trim();
        if (q.includes('rejection') || q.includes('paint shop') || q.includes('manufacturing output') || q.includes('line')) {
            const lineMatch = q.match(/line\s*(\d)/);
            const lineId = lineMatch ? parseInt(lineMatch[1], 10) : null;
            return {
                sql: lineId
                    ? `SELECT date, line_id, units_produced, rejection_rate, energy_kwh FROM manufacturing_daily WHERE line_id = ${lineId} ORDER BY date DESC LIMIT 100`
                    : `SELECT line_id, AVG(rejection_rate) as avg_rejection, SUM(units_produced) as total_units FROM manufacturing_daily GROUP BY line_id LIMIT 100`,
                summary: lineId
                    ? `Manufacturing metrics for Line ${lineId} (last 100 records).`
                    : 'Rejection rates and output aggregated by production line.',
                data: [],
                chartType: 'line',
                followUps: ['Compare all 3 lines', 'Show energy consumption trend', 'What was yesterday rejection rate on line 3?']
            };
        }
        if (q.includes('b2b') || q.includes('d2c') || q.includes('revenue') || q.includes('sales')) {
            return {
                sql: `SELECT month, channel, SUM(revenue) as revenue, SUM(units_sold) as units FROM sales_monthly GROUP BY month, channel ORDER BY month DESC LIMIT 100`,
                summary: 'B2B vs D2C revenue comparison across months.',
                data: [],
                chartType: 'bar',
                followUps: ['Which channel grew faster?', 'Show Q2 B2B revenue only', 'Compare West vs Pan-India regions']
            };
        }
        if (q.includes('patent') || q.includes('r&d') || q.includes('rnd')) {
            return {
                sql: `SELECT title, target, actual, quarter FROM legacy_goals WHERE title ILIKE '%patent%' LIMIT 100`,
                summary: 'R&D patent filing goals from HR performance system.',
                data: [],
                chartType: 'table',
                followUps: ['How many patents filed vs target?', 'Show all R&D goals']
            };
        }
        if (q.includes('vendor') || q.includes('l1') || q.includes('procurement')) {
            return {
                sql: `SELECT title, target, actual FROM legacy_goals WHERE title ILIKE '%vendor%' OR title ILIKE '%L1%' LIMIT 100`,
                summary: 'L1 vendor procurement targets from legacy HR goals.',
                data: [],
                chartType: 'table',
                followUps: ['Which vendors are behind on L1 targets?', 'Show manufacturing procurement goals']
            };
        }
        if (q.includes('ceramic') || q.includes('deploy') || q.includes('fan')) {
            return {
                sql: `SELECT title, target, actual, quarter FROM legacy_goals WHERE title ILIKE '%ceramic%' OR title ILIKE '%deploy%' LIMIT 100`,
                summary: 'Ceramic industry deployment goals and actuals.',
                data: [],
                chartType: 'table',
                followUps: ['What is deployment completion %?', 'Compare B2B deployment vs target']
            };
        }
        if (q.includes('employee') || q.includes('headcount') || q.includes('department')) {
            return {
                sql: `SELECT department, COUNT(*) as count FROM legacy_employees GROUP BY department LIMIT 100`,
                summary: 'Employee distribution by department.',
                data: [],
                chartType: 'bar',
                followUps: ['List all manufacturing employees', 'Show sales team structure']
            };
        }
        if (q.includes('goal') || q.includes('performance') || q.includes('target')) {
            return {
                sql: `SELECT g.title, g.target, g.actual, g.quarter, e.name, e.department FROM legacy_goals g JOIN legacy_employees e ON g.employee_id = e.id LIMIT 100`,
                summary: 'Performance goals with Q2 actuals vs targets.',
                data: [],
                chartType: 'table',
                followUps: ['Which goals are behind target?', 'Show manufacturing goals only']
            };
        }
        if (role === 'EMPLOYEE') {
            return {
                clarification: 'Try asking about manufacturing rejection rates, B2B vs D2C revenue, patent filings, or your department goals.'
            };
        }
        return {
            clarification: 'I can analyze manufacturing lines, sales channels (B2B/D2C), R&D patents, procurement, and HR goals. What would you like to explore?'
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
}
exports.NLSQLEngine = NLSQLEngine;
