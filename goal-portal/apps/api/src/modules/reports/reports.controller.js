"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAchievementReport = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAchievementReport = async (req, res, next) => {
    try {
        const goals = await prisma.goal.findMany({
            include: {
                employee: { include: { department: true, manager: true } },
                checkIns: { orderBy: { checkInDate: 'desc' }, take: 1 },
            },
        });
        const csvRows = [
            'Employee Name,Department,Goal Title,UoM Type,Target,Actual,Status,Weightage,Computed Score,Manager Name',
            ...goals.map(g => {
                const checkIn = g.checkIns[0];
                return `"${g.employee.name}","${g.employee.department.name}","${g.title}","${g.uomType}",${g.targetValue},${g.actualValue},"${g.status}",${g.weightage},${checkIn?.computedScore || 0},"${g.employee.manager?.name || 'N/A'}"`;
            })
        ];
        res.header('Content-Type', 'text/csv');
        res.attachment('achievement-report.csv');
        res.send(csvRows.join('\n'));
    }
    catch (error) {
        next(error);
    }
};
exports.getAchievementReport = getAchievementReport;
