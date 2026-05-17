"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const prisma_1 = require("../../lib/prisma");
class AIService {
    async processQuery(query, userId, role) {
        const normalized = query.toLowerCase();
        let intent = 'GENERAL';
        let data = null;
        let summary = '';
        let suggestedActions = [];
        // INTENT: Completion Rate / Overview
        if (normalized.includes('completion rate') || normalized.includes('how many completed') || normalized.includes('overview')) {
            intent = 'REPORT';
            let whereClause = {};
            if (role === 'MANAGER') {
                whereClause = { employee: { managerId: userId } };
            }
            else if (role === 'EMPLOYEE') {
                whereClause = { employeeId: userId };
            }
            const goals = await prisma_1.prisma.goal.findMany({ where: whereClause });
            const completed = goals.filter(g => g.status === 'COMPLETED').length;
            const onTrack = goals.filter(g => g.status === 'ON_TRACK').length;
            const notStarted = goals.filter(g => g.status === 'NOT_STARTED').length;
            const total = goals.length;
            const rate = total > 0 ? (completed / total) * 100 : 0;
            data = { total, completed, onTrack, notStarted, rate: rate.toFixed(1) };
            summary = `📊 Goal Overview: ${completed} completed, ${onTrack} on track, ${notStarted} not started out of ${total} total goals (${rate.toFixed(1)}% completion rate).`;
            suggestedActions = ['View Detailed Report', 'Export CSV'];
        }
        // INTENT: Behind Target / Delayed / At Risk
        else if (normalized.includes('behind') || normalized.includes('delayed') || normalized.includes('at risk') || normalized.includes('not on track')) {
            intent = 'ALERT';
            let whereClause = { status: { not: 'COMPLETED' } };
            if (role === 'MANAGER') {
                whereClause = { ...whereClause, employee: { managerId: userId } };
            }
            else if (role === 'EMPLOYEE') {
                whereClause = { ...whereClause, employeeId: userId };
            }
            const goals = await prisma_1.prisma.goal.findMany({
                where: whereClause,
                include: {
                    employee: { select: { name: true, email: true, department: { select: { name: true } } } },
                    checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
                }
            });
            // Filter for truly behind (score < 0.7 or no checkin and not started)
            const behind = goals.filter(g => {
                const latest = g.checkIns[0];
                if (!latest)
                    return g.status === 'NOT_STARTED';
                return Number(latest.computedScore) < 0.7;
            });
            data = behind.map(g => ({
                id: g.id,
                title: g.title,
                employee: g.employee.name,
                department: g.employee.department?.name,
                status: g.status,
                target: g.targetValue,
                actual: g.actualValue,
                score: g.checkIns[0]?.computedScore || 0,
                uomType: g.uomType
            }));
            summary = behind.length > 0
                ? `⚠️ Found ${behind.length} goal(s) behind target or at risk.`
                : `✅ All goals are on track! No delayed items found.`;
            suggestedActions = behind.length > 0 ? ['Schedule Check-in', 'Notify Team', 'View Team Dashboard'] : ['View All Goals'];
        }
        // INTENT: Validate Weightage
        else if (normalized.includes('validate') || normalized.includes('weightage') || normalized.includes('weight') || normalized.includes('check my')) {
            intent = 'VALIDATION';
            const targetUserId = role === 'MANAGER' ? undefined : userId;
            const weightSum = await prisma_1.prisma.goal.aggregate({
                where: { employeeId: targetUserId || userId },
                _sum: { weightage: true },
                _count: { id: true }
            });
            const total = weightSum._sum.weightage || 0;
            const count = weightSum._count.id || 0;
            const remaining = 100 - total;
            data = { total, count, remaining, maxAllowed: 8 };
            if (total === 100 && count <= 8) {
                summary = `✅ Validation Passed! Total weightage: ${total}% across ${count} goals. Ready for submission.`;
            }
            else if (total > 100) {
                summary = `❌ Validation Failed! Total weightage is ${total}%. You need to reduce by ${total - 100}%.`;
            }
            else if (count >= 8) {
                summary = `⚠️ You have ${count} goals (max 8 allowed). Cannot add more goals.`;
            }
            else {
                summary = `ℹ️ Total weightage: ${total}% across ${count} goals. You have ${remaining}% remaining to allocate across ${8 - count} possible goal slots.`;
            }
            suggestedActions = ['Adjust Goals', 'Add New Goal', 'View Dashboard'];
        }
        // INTENT: Compare / Quarter over Quarter
        else if (normalized.includes('compare') || normalized.includes('quarter') || normalized.includes('qoq') || normalized.includes('trend')) {
            intent = 'COMPARISON';
            const checkins = await prisma_1.prisma.checkIn.groupBy({
                by: ['quarter'],
                _avg: { computedScore: true },
                _count: { id: true }
            });
            data = checkins.map(c => ({
                quarter: c.quarter,
                avgScore: Number(c._avg.computedScore || 0).toFixed(3),
                checkInCount: c._count.id
            }));
            summary = `📈 Quarter-over-Quarter Performance: ${data.map((d) => `${d.quarter}: ${d.avgScore} avg score`).join(', ')}.`;
            suggestedActions = ['View Detailed Analytics', 'Export Trend Report'];
        }
        // INTENT: My Team / Team Performance
        else if (normalized.includes('my team') || normalized.includes('team performance') || normalized.includes('direct reports')) {
            intent = 'REPORT';
            if (role === 'EMPLOYEE') {
                summary = 'ℹ️ Team view is only available for Managers and Admin.';
                suggestedActions = ['View My Goals'];
            }
            else {
                const members = await prisma_1.prisma.user.findMany({
                    where: { managerId: userId },
                    include: {
                        goals: { include: { checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 } } }
                    }
                });
                data = members.map(m => {
                    const goals = m.goals;
                    const completed = goals.filter(g => g.status === 'COMPLETED').length;
                    const scores = goals
                        .map(g => g.checkIns[0]?.computedScore)
                        .filter((s) => s != null)
                        .map(s => Number(s));
                    const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
                    return {
                        name: m.name,
                        totalGoals: goals.length,
                        completed,
                        avgScore: avg.toFixed(3),
                        pending: goals.filter(g => g.status === 'NOT_STARTED').length
                    };
                });
                summary = `👥 Team Performance: ${members.length} direct reports. ${data.reduce((acc, m) => acc + m.pending, 0)} pending check-ins.`;
                suggestedActions = ['View Team Dashboard', 'Send Reminders'];
            }
        }
        // INTENT: Manufacturing / Department specific
        else if (normalized.includes('manufacturing') || normalized.includes('paint shop') || normalized.includes('rejection')) {
            intent = 'REPORT';
            const goals = await prisma_1.prisma.goal.findMany({
                where: {
                    categoryType: 'MANUFACTURING',
                    ...(role === 'MANAGER' ? { employee: { managerId: userId } } :
                        role === 'EMPLOYEE' ? { employeeId: userId } : {})
                },
                include: {
                    employee: { select: { name: true } },
                    checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
                }
            });
            data = goals.map(g => ({
                title: g.title,
                employee: g.employee.name,
                target: g.targetValue,
                actual: g.actualValue,
                status: g.status,
                score: g.checkIns[0]?.computedScore || 0
            }));
            const behind = goals.filter(g => {
                const score = Number(g.checkIns[0]?.computedScore || 0);
                return score < 0.7 && g.status !== 'COMPLETED';
            });
            summary = `🏭 Manufacturing Goals: ${goals.length} total. ${behind.length} behind target. ${goals.filter(g => g.status === 'COMPLETED').length} completed.`;
            suggestedActions = ['View Manufacturing Dashboard', 'Schedule Quality Review'];
        }
        // INTENT: B2B / Sales / Ceramic
        else if (normalized.includes('b2b') || normalized.includes('ceramic') || normalized.includes('sales') || normalized.includes('deploy')) {
            intent = 'REPORT';
            const goals = await prisma_1.prisma.goal.findMany({
                where: {
                    categoryType: 'B2B',
                    ...(role === 'MANAGER' ? { employee: { managerId: userId } } :
                        role === 'EMPLOYEE' ? { employeeId: userId } : {})
                },
                include: {
                    employee: { select: { name: true } },
                    checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
                }
            });
            data = goals.map(g => ({
                title: g.title,
                employee: g.employee.name,
                target: g.targetValue,
                actual: g.actualValue,
                status: g.status,
                score: g.checkIns[0]?.computedScore || 0
            }));
            summary = `🏭 B2B Sales Goals: ${goals.length} active goals. Energy savings and deployment targets tracked.`;
            suggestedActions = ['View B2B Pipeline', 'Export Sales Report'];
        }
        // Default / General
        else {
            if (process.env.GEMINI_API_KEY) {
                try {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: query }] }]
                        })
                    });
                    const result = await response.json();
                    summary = result.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
                }
                catch (error) {
                    console.error('Gemini error:', error);
                    summary = 'Error connecting to Gemini API.';
                }
            }
            else {
                summary = 'AI service is currently in demo mode. Connect your Gemini API key in .env to enable full responses.';
            }
            suggestedActions = ['Show Completion Rate', 'Check Team Status', 'Validate Goals'];
        }
        return { intent, data, summary, suggestedActions };
    }
}
exports.AIService = AIService;
