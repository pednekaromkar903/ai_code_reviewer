"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeCheckIns = exports.createCheckIn = void 0;
const prisma_1 = require("../../lib/prisma");
const auth_1 = require("../../middleware/auth");
const zod_1 = require("zod");
const checkinSchema = zod_1.z.object({
    goalId: zod_1.z.string().uuid(),
    cycleId: zod_1.z.string().uuid().optional(),
    quarter: zod_1.z.enum(['Q1', 'Q2', 'Q3', 'Q4']),
    actualValue: zod_1.z.number(),
    status: zod_1.z.enum(['NOT_STARTED', 'ON_TRACK', 'COMPLETED']),
    managerComment: zod_1.z.string().optional()
});
const createCheckIn = async (req, res, next) => {
    try {
        const data = checkinSchema.parse(req.body);
        const userId = req.user.id;
        const now = new Date();
        // Schedule Enforcement: Check for active cycle
        const activeCycle = await prisma_1.prisma.goalCycle.findFirst({
            where: {
                status: 'ACTIVE',
                startDate: { lte: now },
                endDate: { gte: now }
            }
        });
        if (!activeCycle) {
            return res.status(403).json({
                success: false,
                message: 'Check-ins are only allowed during active cycle windows (Q1-July, Q2-Oct, Q3-Jan, Q4-Mar/Apr).'
            });
        }
        const goal = await prisma_1.prisma.goal.findFirst({
            where: { id: data.goalId, employeeId: userId }
        });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found or not owned by you' });
        }
        // Compute score based on UoM
        let computedScore = 0;
        const actual = data.actualValue;
        const target = Number(goal.targetValue);
        switch (goal.uomType) {
            case 'MIN':
                computedScore = target > 0 ? actual / target : 0;
                break;
            case 'MAX':
                computedScore = actual > 0 ? target / actual : 0;
                break;
            case 'TIMELINE':
                computedScore = data.status === 'COMPLETED' ? 1.0 : 0.0;
                break;
            case 'ZERO':
                computedScore = actual === 0 ? 1.0 : 0.0;
                break;
        }
        // Cap between 0 and 1.5
        computedScore = Math.min(Math.max(computedScore, 0), 1.5);
        const checkIn = await prisma_1.prisma.checkIn.create({
            data: {
                goalId: data.goalId,
                cycleId: data.cycleId,
                quarter: data.quarter,
                plannedValue: goal.targetValue,
                actualValue: data.actualValue,
                status: data.status,
                managerComment: data.managerComment,
                computedScore
            }
        });
        // Update goal actual and status
        await prisma_1.prisma.goal.update({
            where: { id: data.goalId },
            data: { actualValue: data.actualValue, status: data.status }
        });
        // Achievement sync for Shared Goals
        if (goal.isShared && goal.parentGoalId) {
            await prisma_1.prisma.goal.updateMany({
                where: {
                    parentGoalId: goal.parentGoalId,
                    id: { not: data.goalId }
                },
                data: {
                    actualValue: data.actualValue,
                    status: data.status
                }
            });
        }
        res.status(201).json({ success: true, checkIn, computedScore: computedScore.toFixed(4) });
    }
    catch (error) {
        next(error);
    }
};
exports.createCheckIn = createCheckIn;
const getEmployeeCheckIns = async (req, res, next) => {
    try {
        const filter = (0, auth_1.rbacFilter)(req);
        const checkIns = await prisma_1.prisma.checkIn.findMany({
            where: {
                goal: filter
            },
            include: {
                goal: {
                    include: {
                        employee: { select: { name: true, email: true } }
                    }
                }
            },
            orderBy: { checkInDate: 'desc' }
        });
        res.json({ success: true, checkIns });
    }
    catch (error) {
        next(error);
    }
};
exports.getEmployeeCheckIns = getEmployeeCheckIns;
