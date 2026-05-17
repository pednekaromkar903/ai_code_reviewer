"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoalAuditTrail = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getGoalAuditTrail = async (req, res, next) => {
    try {
        const logs = await prisma.auditLog.findMany({
            where: { goalId: req.params.id },
            orderBy: { changedAt: 'desc' },
        });
        res.json(logs);
    }
    catch (error) {
        next(error);
    }
};
exports.getGoalAuditTrail = getGoalAuditTrail;
