"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCycleStatus = exports.getCycles = void 0;
const prisma_1 = require("../../lib/prisma");
const getCycles = async (req, res, next) => {
    try {
        const cycles = await prisma_1.prisma.goalCycle.findMany({
            orderBy: { startDate: 'asc' }
        });
        res.json({ success: true, cycles });
    }
    catch (error) {
        next(error);
    }
};
exports.getCycles = getCycles;
const updateCycleStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const cycle = await prisma_1.prisma.goalCycle.update({
            where: { id },
            data: { status }
        });
        res.json({ success: true, cycle });
    }
    catch (error) {
        next(error);
    }
};
exports.updateCycleStatus = updateCycleStatus;
