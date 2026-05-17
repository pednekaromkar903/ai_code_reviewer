"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDashboard = exports.getManagerDashboard = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getManagerDashboard = async (req, res, next) => {
    try {
        const managerId = req.user.id;
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
    }
    catch (error) {
        next(error);
    }
};
exports.getManagerDashboard = getManagerDashboard;
const getAdminDashboard = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.getAdminDashboard = getAdminDashboard;
