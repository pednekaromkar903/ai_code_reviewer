"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSharedGoal = exports.adminUnlock = exports.rejectGoal = exports.approveGoal = exports.submitGoal = exports.createGoal = exports.getGoals = void 0;
const prisma_1 = require("../../lib/prisma");
const redis_1 = require("../../lib/redis");
const auth_1 = require("../../middleware/auth");
const zod_1 = require("zod");
const createGoalSchema = zod_1.z.object({
    title: zod_1.z.string().min(5).max(200),
    description: zod_1.z.string().optional(),
    thrustArea: zod_1.z.string().min(1),
    uomType: zod_1.z.enum(['MIN', 'MAX', 'TIMELINE', 'ZERO']),
    targetValue: zod_1.z.number().positive(),
    weightage: zod_1.z.number().min(10).max(100),
    categoryType: zod_1.z.string().default('RND'),
    channelType: zod_1.z.string().optional()
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
            return res.status(400).json({ message: 'Maximum 8 goals allowed per employee' });
        }
        // Validation: Total weightage must be 100
        const weightSum = await prisma_1.prisma.goal.aggregate({
            where: { employeeId: userId },
            _sum: { weightage: true }
        });
        const currentTotal = weightSum._sum.weightage || 0;
        if (currentTotal + data.weightage > 100) {
            return res.status(400).json({
                message: `Total weightage would be ${currentTotal + data.weightage}%. Must equal exactly 100%.`
            });
        }
        const goal = await prisma_1.prisma.goal.create({
            data: { ...data, employeeId: userId, status: 'NOT_STARTED' }
        });
        await (0, redis_1.cacheDel)(`goals:${userId}:${req.user.role}`);
        res.status(201).json({ success: true, goal });
    }
    catch (error) {
        next(error);
    }
};
exports.createGoal = createGoal;
const submitGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        // Final weightage validation before submit
        const weightSum = await prisma_1.prisma.goal.aggregate({
            where: { employeeId: userId },
            _sum: { weightage: true }
        });
        if ((weightSum._sum.weightage || 0) !== 100) {
            return res.status(400).json({ message: 'Total weightage must equal exactly 100% before submission' });
        }
        const goal = await prisma_1.prisma.goal.update({
            where: { id, employeeId: userId },
            data: { status: 'PENDING' }
        });
        res.json({ success: true, goal });
    }
    catch (error) {
        next(error);
    }
};
exports.submitGoal = submitGoal;
const approveGoal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { targetValue, weightage, comment } = req.body;
        const managerId = req.user.id;
        const goal = await prisma_1.prisma.goal.findFirst({
            where: { id, employee: { managerId } }
        });
        if (!goal)
            return res.status(404).json({ message: 'Goal not found or not your direct report' });
        const updateData = {
            status: 'ON_TRACK',
            lockedAt: new Date(),
            approvedBy: managerId,
            approvedAt: new Date()
        };
        if (targetValue !== undefined)
            updateData.targetValue = targetValue;
        if (weightage !== undefined)
            updateData.weightage = weightage;
        const updated = await prisma_1.prisma.goal.update({
            where: { id },
            data: updateData
        });
        // Audit log
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
            return res.status(404).json({ message: 'Goal not found' });
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
        const goals = await Promise.all(recipientIds.map(async (empId) => {
            return prisma_1.prisma.goal.create({
                data: {
                    employeeId: empId,
                    title,
                    description,
                    thrustArea,
                    uomType,
                    targetValue,
                    categoryType,
                    isShared: true,
                    weightage: 10, // default, employee can adjust
                    status: 'NOT_STARTED'
                }
            });
        }));
        res.status(201).json({ success: true, goals, count: goals.length });
    }
    catch (error) {
        next(error);
    }
};
exports.createSharedGoal = createSharedGoal;
