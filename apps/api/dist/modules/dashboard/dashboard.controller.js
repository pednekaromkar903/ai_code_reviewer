"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDashboard = exports.getManagerDashboard = void 0;
const prisma_1 = require("../../lib/prisma");
const getManagerDashboard = async (req, res, next) => {
    try {
        const managerId = req.user.id;
        const teamMembers = await prisma_1.prisma.user.findMany({
            where: { managerId },
            include: {
                goals: {
                    include: { checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 } }
                },
                department: true
            }
        });
        const stats = teamMembers.map(member => {
            const goals = member.goals;
            const totalGoals = goals.length;
            const completedGoals = goals.filter(g => g.status === 'COMPLETED').length;
            const pendingCheckins = goals.filter(g => g.status === 'NOT_STARTED').length;
            const scores = goals
                .map(g => g.checkIns[0]?.computedScore)
                .filter((s) => s !== null && s !== undefined)
                .map(s => Number(s));
            const avgScore = scores.length > 0
                ? scores.reduce((a, b) => a + b, 0) / scores.length
                : 0;
            return {
                id: member.id,
                name: member.name,
                email: member.email,
                department: member.department.name,
                totalGoals,
                completedGoals,
                completionRate: totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0,
                avgScore,
                pendingCheckins,
                goals: goals.map(g => ({
                    id: g.id,
                    title: g.title,
                    status: g.status,
                    weightage: g.weightage,
                    target: g.targetValue,
                    actual: g.actualValue,
                    computedScore: g.checkIns[0]?.computedScore || 0
                }))
            };
        });
        res.json({ success: true, teamSize: teamMembers.length, stats });
    }
    catch (error) {
        next(error);
    }
};
exports.getManagerDashboard = getManagerDashboard;
const getAdminDashboard = async (req, res, next) => {
    try {
        const departments = await prisma_1.prisma.department.findMany({
            include: {
                users: {
                    include: {
                        goals: { include: { checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 } } }
                    }
                }
            }
        });
        const heatmap = departments.map(dept => {
            const allGoals = dept.users.flatMap(u => u.goals);
            const total = allGoals.length;
            const completed = allGoals.filter(g => g.status === 'COMPLETED').length;
            const onTrack = allGoals.filter(g => g.status === 'ON_TRACK').length;
            const notStarted = allGoals.filter(g => g.status === 'NOT_STARTED').length;
            return {
                department: dept.name,
                thrustArea: dept.thrustArea,
                completionRate: total > 0 ? (completed / total) * 100 : 0,
                onTrackRate: total > 0 ? (onTrack / total) * 100 : 0,
                notStartedRate: total > 0 ? (notStarted / total) * 100 : 0,
                goalCount: total,
                employeeCount: dept.users.length
            };
        });
        // Overall stats
        const allGoals = await prisma_1.prisma.goal.findMany();
        const totalGoals = allGoals.length;
        const totalCompleted = allGoals.filter(g => g.status === 'COMPLETED').length;
        const totalPending = allGoals.filter(g => g.status === 'PENDING').length;
        res.json({
            success: true,
            overall: {
                totalGoals,
                completionRate: totalGoals > 0 ? (totalCompleted / totalGoals) * 100 : 0,
                pendingApprovals: totalPending
            },
            heatmap
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAdminDashboard = getAdminDashboard;
