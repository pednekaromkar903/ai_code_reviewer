"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.generateReport = exports.resolveEmail = exports.getDashboardStats = exports.classifyManualEmail = exports.getEmails = exports.connectEmail = void 0;
const prisma_1 = require("../../lib/prisma");
const emailClassifier_1 = require("../../services/emailClassifier");
const connectEmail = async (req, res, next) => {
    try {
        const { email, provider } = req.body;
        const userId = req.user.id;
        const integration = await prisma_1.prisma.emailIntegration.create({
            data: {
                userId,
                email,
                provider,
                accessToken: 'mock_token_' + Math.random().toString(36).substring(7),
                isActive: true
            }
        });
        res.status(201).json({ success: true, integration });
    }
    catch (error) {
        next(error);
    }
};
exports.connectEmail = connectEmail;
const getEmails = async (req, res, next) => {
    try {
        const { category, sentiment, priority, isComplaint, isResolved } = req.query;
        const filters = {};
        if (category)
            filters.category = category;
        if (sentiment)
            filters.sentiment = sentiment;
        if (priority)
            filters.priority = priority;
        if (isComplaint !== undefined)
            filters.isComplaint = isComplaint === 'true';
        if (isResolved !== undefined)
            filters.isResolved = isResolved === 'true';
        const emails = await prisma_1.prisma.customerEmail.findMany({
            where: filters,
            orderBy: { receivedAt: 'desc' }
        });
        res.json({ success: true, emails });
    }
    catch (error) {
        next(error);
    }
};
exports.getEmails = getEmails;
const classifyManualEmail = async (req, res, next) => {
    try {
        const { subject, body } = req.body;
        const result = await (0, emailClassifier_1.classifyEmail)(subject, body);
        res.json({ success: true, classification: result });
    }
    catch (error) {
        next(error);
    }
};
exports.classifyManualEmail = classifyManualEmail;
const getDashboardStats = async (req, res, next) => {
    try {
        const totalEmails = await prisma_1.prisma.customerEmail.count();
        const totalComplaints = await prisma_1.prisma.customerEmail.count({ where: { isComplaint: true } });
        const resolvedComplaints = await prisma_1.prisma.customerEmail.count({ where: { isComplaint: true, isResolved: true } });
        const complaintsByCategory = await prisma_1.prisma.customerEmail.groupBy({
            by: ['category'],
            where: { isComplaint: true },
            _count: true
        });
        const sentimentDistribution = await prisma_1.prisma.customerEmail.groupBy({
            by: ['sentiment'],
            _count: true
        });
        res.json({
            success: true,
            stats: {
                totalEmails,
                totalComplaints,
                resolvedComplaints,
                escalationRate: totalComplaints > 0 ? (totalComplaints / totalEmails * 100).toFixed(1) : 0,
                complaintsByCategory,
                sentimentDistribution
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getDashboardStats = getDashboardStats;
const resolveEmail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { resolution } = req.body;
        const userId = req.user.id;
        const updated = await prisma_1.prisma.customerEmail.update({
            where: { id },
            data: {
                isResolved: true,
                resolution,
                assignedTo: userId
            }
        });
        res.json({ success: true, email: updated });
    }
    catch (error) {
        next(error);
    }
};
exports.resolveEmail = resolveEmail;
const generateReport = async (req, res, next) => {
    try {
        const { period } = req.body; // WEEKLY or MONTHLY
        const now = new Date();
        const startDate = new Date();
        if (period === 'WEEKLY')
            startDate.setDate(now.getDate() - 7);
        else
            startDate.setMonth(now.getMonth() - 1);
        const emails = await prisma_1.prisma.customerEmail.findMany({
            where: { receivedAt: { gte: startDate } }
        });
        const complaints = emails.filter(e => e.isComplaint);
        // Aggregate by category
        const byCategory = {};
        complaints.forEach(c => {
            byCategory[c.category] = (byCategory[c.category] || 0) + 1;
        });
        // Aggregate by sentiment
        const bySentiment = {};
        complaints.forEach(c => {
            bySentiment[c.sentiment] = (bySentiment[c.sentiment] || 0) + 1;
        });
        const topIssue = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || 'NONE';
        const insights = `This ${period.toLowerCase()} we received ${emails.length} customer emails, ${complaints.length} were complaints. The top issue was ${topIssue}. Recommendation: Focus on ${topIssue} reduction.`;
        const report = await prisma_1.prisma.complaintReport.create({
            data: {
                period,
                startDate,
                endDate: now,
                totalEmails: emails.length,
                complaints: complaints.length,
                byCategory,
                bySentiment,
                trends: { topIssue, vsLastPeriod: "N/A" },
                insights
            }
        });
        res.status(201).json({ success: true, report });
    }
    catch (error) {
        next(error);
    }
};
exports.generateReport = generateReport;
const getReports = async (req, res, next) => {
    try {
        const reports = await prisma_1.prisma.complaintReport.findMany({
            orderBy: { generatedAt: 'desc' }
        });
        res.json({ success: true, reports });
    }
    catch (error) {
        next(error);
    }
};
exports.getReports = getReports;
