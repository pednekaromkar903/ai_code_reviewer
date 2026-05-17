"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAuditLogs = exports.getGoalAuditTrail = void 0;
const prisma_1 = require("../../lib/prisma");
const getGoalAuditTrail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const logs = await prisma_1.prisma.auditLog.findMany({
            where: { goalId: id },
            include: {
                user: { select: { name: true, role: true } }
            },
            orderBy: { changedAt: 'desc' }
        });
        res.json({ success: true, goalId: id, count: logs.length, logs });
    }
    catch (error) {
        next(error);
    }
};
exports.getGoalAuditTrail = getGoalAuditTrail;
const getAllAuditLogs = async (req, res, next) => {
    try {
        const logs = await prisma_1.prisma.auditLog.findMany({
            include: {
                goal: { select: { title: true } },
                user: { select: { name: true, role: true } }
            },
            orderBy: { changedAt: 'desc' },
            take: 100
        });
        res.json({ success: true, count: logs.length, logs });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllAuditLogs = getAllAuditLogs;
