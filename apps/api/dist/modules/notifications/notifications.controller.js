"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifications = void 0;
const prisma_1 = require("../../lib/prisma");
const getNotifications = async (req, res, next) => {
    try {
        const notifications = [];
        // 1. High priority unresolved complaints
        const complaints = await prisma_1.prisma.customerEmail.findMany({
            where: {
                isResolved: false,
                priority: 'HIGH'
            },
            orderBy: { receivedAt: 'desc' },
            take: 3
        });
        complaints.forEach(c => {
            notifications.push({
                id: `complaint-${c.id}`,
                title: 'High Priority Complaint',
                description: `Unresolved issue: ${c.subject}`,
                timestamp: c.receivedAt,
                type: 'tech',
                read: false
            });
        });
        // 2. Goal deadlines (using goals that are NOT_STARTED or ON_TRACK)
        const goals = await prisma_1.prisma.goal.findMany({
            where: {
                status: { in: ['NOT_STARTED', 'ON_TRACK'] }
            },
            orderBy: { updatedAt: 'desc' },
            take: 2
        });
        goals.forEach(g => {
            notifications.push({
                id: `goal-${g.id}`,
                title: 'Goal Update',
                description: `Update on goal: ${g.title}`,
                timestamp: g.updatedAt,
                type: 'reminder',
                read: false
            });
        });
        // 3. System alert
        notifications.push({
            id: `sys-${Date.now()}`,
            title: 'System Active',
            description: 'Intelligence Dashboard is online.',
            timestamp: new Date().toISOString(),
            type: 'system',
            read: false
        });
        // Sort by timestamp desc
        notifications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        res.json({ success: true, notifications });
    }
    catch (error) {
        next(error);
    }
};
exports.getNotifications = getNotifications;
