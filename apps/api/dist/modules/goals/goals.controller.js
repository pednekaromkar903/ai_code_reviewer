"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSharedGoal = exports.adminUnlock = exports.rejectGoal = exports.approveGoal = exports.submitGoal = exports.updateGoal = exports.createGoal = exports.getGoals = void 0;
const prisma_1 = require("../../lib/prisma");
const redis_1 = require("../../lib/redis");
const auth_1 = require("../../middleware/auth");
const zod_1 = require("zod");
const createGoalSchema = zod_1.z.object({
    title: zod_1.z.string().min(5).max(200),
    description: zod_1.z.string().optional(),
    thrustArea: zod_1.z.string().min(1),
    uomType: zod_1.z.enum(['MIN', 'MAX', 'TIMELINE', 'ZERO']),
    targetValue: zod_1.z.number().nonnegative(),
    weightage: zod_1.z.number().min(10).max(100),
    categoryType: zod_1.z.string().default('RND'),
    channelType: zod_1.z.string().optional()
});
const updateGoalSchema = zod_1.z.object({
    title: zod_1.z.string().min(5).max(200).optional(),
    description: zod_1.z.string().optional(),
    targetValue: zod_1.z.number().nonnegative().optional(),
    weightage: zod_1.z.number().min(10).max(100).optional(),
    status: zod_1.z.enum(['NOT_STARTED', 'ON_TRACK', 'COMPLETED', 'PENDING']).optional(),
});
const getGoals = async (req, res, next) => {
    try {
        const filter = (0, auth_1.rbacFilter)(req);
        const cacheKey = `goals:${req.user.id}:${req.user.role}`;
        const cached = await (0, redis_1.cacheGet)(cacheKey);
        if (cached) {
            return res.json({ success: true, goals: cached.goals, cached: true });
        }
        const goals = await prisma_1.prisma.goal.findMany({
            where: filter,
            include: {
                employee: { select: { name: true, email: true, department: { select: { name: true } } } },
                checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 }
            },
            orderBy: { createdAt: 'desc' }
        });
        await (0, redis_1.cacheSet)(cacheKey, { goals }, 120);
        res.json({ success: true, goals });
    }
    catch (error) {
        next(error);
    }
};
exports.getGoals = getGoals;
const createGoal = async (req, res, next) => {
    try {
        const data = createGoalSchema.parse(req.body);
        const userId = req.user.id;
        // Validation: Max 8 goals
        const existingCount = await prisma_1.prisma.goal.count({ where: { employeeId: userId } });
        if (existingCount >= 8) {
            return res.status(400).json({ success: false, message: 'Maximum 8 goals allowed per employee' });
        }
        // Validation: Check if adding this would exceed 100%
        const weightSum = await prisma_1.prisma.goal.aggregate({
            where: { employeeId: userId },
            _sum: { weightage: true }
        });
        const currentTotal = weightSum._sum.weightage || 0;
        if (currentTotal + data.weightage > 100) {
            return res.status(400).json({
                success: false,
                message: `Total weightage would be ${currentTotal + data.weightage}%. Must not exceed 100%.`
            });
        }
        const goal = await prisma_1.prisma.goal.create({
            data: {
                ...data,
                employee: { connect: { id: userId } },
                status: 'NOT_STARTED'
            }
        });
        await (0, redis_1.cacheDel)(`goals:${userId}:${req.user.role}`);
        res.status(201).json({ success: true, goal });
    }
    catch (error) {
        next(error);
    }
};
exports.createGoal = createGoal;
const updateGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const data = updateGoalSchema.parse(req.body);
        const existing = await prisma_1.prisma.goal.findUnique({
            where: { id }
        });
        if (!existing)
            return res.status(404).json({ success: false, message: 'Goal not found' });
        if (existing.employeeId !== userId && req.user.role === 'EMPLOYEE') {
            return res.status(403).json({ success: false, message: 'Unauthorized' });
        }
        // Audit Trail for locked goals
        if (existing.lockedAt && (data.title || data.targetValue !== undefined || data.weightage !== undefined)) {
            const auditEntries = [];
            if (data.title && data.title !== existing.title) {
                auditEntries.push({ field: 'title', old: existing.title, new: data.title });
            }
            if (data.targetValue !== undefined && Number(data.targetValue) !== Number(existing.targetValue)) {
                auditEntries.push({ field: 'targetValue', old: String(existing.targetValue), new: String(data.targetValue) });
            }
            if (data.weightage !== undefined && data.weightage !== existing.weightage) {
                auditEntries.push({ field: 'weightage', old: String(existing.weightage), new: String(data.weightage) });
            }
            for (const entry of auditEntries) {
                await prisma_1.prisma.auditLog.create({
                    data: {
                        goalId: id,
                        changedBy: userId,
                        fieldName: entry.field,
                        oldValue: entry.old,
                        newValue: entry.new,
                        actionType: 'EDIT_LOCKED',
                        ipAddress: req.ip || 'unknown'
                    }
                });
            }
        }
        // Shared Goal Restrictions
        if (existing.isShared && existing.employeeId === userId) {
            if (data.title || data.targetValue !== undefined) {
                return res.status(400).json({
                    success: false,
                    message: 'Title and Target of a Shared Goal can only be edited by Admin.'
                });
            }
        }
        if (data.weightage !== undefined) {
            const weightSum = await prisma_1.prisma.goal.aggregate({
                where: { employeeId: existing.employeeId, id: { not: id } },
                _sum: { weightage: true }
            });
            const otherTotal = weightSum._sum.weightage || 0;
            if (otherTotal + data.weightage > 100) {
                return res.status(400).json({
                    success: false,
                    message: `Total weightage would be ${otherTotal + data.weightage}%. Must not exceed 100%.`
                });
            }
        }
        const updated = await prisma_1.prisma.goal.update({
            where: { id },
            data: { ...data }
        });
        await (0, redis_1.cacheDel)(`goals:${existing.employeeId}:${req.user.role}`);
        res.json({ success: true, goal: updated });
    }
    catch (error) {
        next(error);
    }
};
exports.updateGoal = updateGoal;
const submitGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const goal = await prisma_1.prisma.goal.findUnique({ where: { id } });
        if (!goal || goal.employeeId !== userId) {
            return res.status(404).json({ success: false, message: 'Goal not found' });
        }
        const weightSum = await prisma_1.prisma.goal.aggregate({
            where: { employeeId: userId },
            _sum: { weightage: true }
        });
        if ((weightSum._sum.weightage || 0) !== 100) {
            return res.status(400).json({
                success: false,
                message: `Total weightage is ${weightSum._sum.weightage || 0}%. It must be exactly 100% before submission.`
            });
        }
        const updated = await prisma_1.prisma.goal.update({
            where: { id },
            data: { status: 'PENDING' }
        });
        res.json({ success: true, goal: updated });
    }
    catch (error) {
        next(error);
    }
};
exports.submitGoal = submitGoal;
const approveGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { targetValue, weightage } = req.body;
        const managerId = req.user.id;
        const goal = await prisma_1.prisma.goal.findFirst({
            where: { id, employee: { managerId } }
        });
        if (!goal)
            return res.status(404).json({ success: false, message: 'Goal not found or not your direct report' });
        const updateData = {
            status: 'ON_TRACK',
            lockedAt: new Date(),
            approvedBy: managerId,
            approvedAt: new Date()
        };
        if (targetValue !== undefined)
            updateData.targetValue = targetValue;
        if (weightage !== undefined) {
            const weightSum = await prisma_1.prisma.goal.aggregate({
                where: { employeeId: goal.employeeId, id: { not: id } },
                _sum: { weightage: true }
            });
            const otherTotal = weightSum._sum.weightage || 0;
            if (otherTotal + weightage > 100) {
                return res.status(400).json({
                    success: false,
                    message: `Manager edit failed: Total weightage for employee would be ${otherTotal + weightage}%.`
                });
            }
            updateData.weightage = weightage;
        }
        const updated = await prisma_1.prisma.goal.update({
            where: { id },
            data: updateData
        });
        await prisma_1.prisma.auditLog.create({
            data: {
                goalId: id,
                changedBy: managerId,
                fieldName: 'status',
                oldValue: goal.status,
                newValue: 'ON_TRACK',
                actionType: 'APPROVAL',
                ipAddress: req.ip || 'unknown'
            }
        });
        res.json({ success: true, goal: updated });
    }
    catch (error) {
        next(error);
    }
};
exports.approveGoal = approveGoal;
const rejectGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const managerId = req.user.id;
        const goal = await prisma_1.prisma.goal.findFirst({
            where: { id, employee: { managerId } }
        });
        if (!goal)
            return res.status(404).json({ success: false, message: 'Goal not found' });
        const updated = await prisma_1.prisma.goal.update({
            where: { id },
            data: { status: 'NOT_STARTED' }
        });
        res.json({ success: true, goal: updated, reworkComment: comment });
    }
    catch (error) {
        next(error);
    }
};
exports.rejectGoal = rejectGoal;
const adminUnlock = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const adminId = req.user.id;
        const goal = await prisma_1.prisma.goal.update({
            where: { id },
            data: { lockedAt: null, status: 'NOT_STARTED' }
        });
        await prisma_1.prisma.auditLog.create({
            data: {
                goalId: id,
                changedBy: adminId,
                fieldName: 'lockedAt',
                oldValue: 'LOCKED',
                newValue: 'UNLOCKED',
                actionType: 'ADMIN_UNLOCK',
                ipAddress: req.ip || 'unknown'
            }
        });
        res.json({ success: true, goal, unlockReason: reason });
    }
    catch (error) {
        next(error);
    }
};
exports.adminUnlock = adminUnlock;
const createSharedGoal = async (req, res, next) => {
    try {
        const { title, description, thrustArea, uomType, targetValue, categoryType, recipientIds } = req.body;
        const adminId = req.user.id;
        // Create template goal (parent)
        const templateGoal = await prisma_1.prisma.goal.create({
            data: {
                employeeId: adminId,
                title,
                description,
                thrustArea,
                uomType,
                targetValue,
                categoryType,
                isShared: true,
                weightage: 0, // Template weightage
                status: 'ON_TRACK',
                lockedAt: new Date()
            }
        });
        const goals = await Promise.all(recipientIds.map(async (empId) => {
            return prisma_1.prisma.goal.create({
                data: {
                    employee: { connect: { id: empId } },
                    title,
                    description,
                    thrustArea,
                    uomType,
                    targetValue,
                    categoryType,
                    isShared: true,
                    parentGoalId: templateGoal.id,
                    weightage: 10,
                    status: 'NOT_STARTED'
                }
            });
        }));
        res.status(201).json({ success: true, templateId: templateGoal.id, goals, count: goals.length });
    }
    catch (error) {
        next(error);
    }
};
exports.createSharedGoal = createSharedGoal;
