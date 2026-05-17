"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerSapSync = exports.getSapSalesMetrics = exports.getSapProductionMetrics = exports.getSapDepartments = exports.getSapEmployees = void 0;
const prisma_1 = require("../../lib/prisma");
const getSapEmployees = async (req, res, next) => {
    try {
        const employees = await prisma_1.prisma.sapEmployee.findMany();
        res.json({ success: true, employees });
    }
    catch (error) {
        next(error);
    }
};
exports.getSapEmployees = getSapEmployees;
const getSapDepartments = async (req, res, next) => {
    try {
        const departments = await prisma_1.prisma.sapDepartment.findMany();
        res.json({ success: true, departments });
    }
    catch (error) {
        next(error);
    }
};
exports.getSapDepartments = getSapDepartments;
const getSapProductionMetrics = async (req, res, next) => {
    try {
        const metrics = await prisma_1.prisma.sapProductionMetric.findMany({
            orderBy: { month: 'asc' }
        });
        res.json({ success: true, metrics });
    }
    catch (error) {
        next(error);
    }
};
exports.getSapProductionMetrics = getSapProductionMetrics;
const getSapSalesMetrics = async (req, res, next) => {
    try {
        const metrics = await prisma_1.prisma.sapSalesMetric.findMany({
            orderBy: { month: 'asc' }
        });
        res.json({ success: true, metrics });
    }
    catch (error) {
        next(error);
    }
};
exports.getSapSalesMetrics = getSapSalesMetrics;
const triggerSapSync = async (req, res, next) => {
    try {
        // Simulate a sync delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        // In a real scenario, we might call external SAP APIs and update our DB.
        // Here we just return success as requested.
        res.json({
            success: true,
            message: 'SAP Synchronization completed successfully',
            timestamp: new Date().toISOString(),
            stats: {
                employeesSynced: await prisma_1.prisma.sapEmployee.count(),
                departmentsSynced: await prisma_1.prisma.sapDepartment.count(),
                metricsProcessed: (await prisma_1.prisma.sapProductionMetric.count()) + (await prisma_1.prisma.sapSalesMetric.count())
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.triggerSapSync = triggerSapSync;
