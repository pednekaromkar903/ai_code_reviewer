import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { classifyEmail } from '../../services/emailClassifier';
import { AuthRequest } from '../../middleware/auth';

export const connectEmail = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { email, provider } = req.body;
    const userId = req.user!.id;

    const integration = await prisma.emailIntegration.create({
      data: {
        userId,
        email,
        provider,
        accessToken: 'mock_token_' + Math.random().toString(36).substring(7),
        isActive: true
      }
    });

    res.status(201).json({ success: true, integration });
  } catch (error) {
    next(error);
  }
};

export const getEmails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, sentiment, priority, isComplaint, isResolved } = req.query;
    
    const filters: any = {};
    if (category) filters.category = category;
    if (sentiment) filters.sentiment = sentiment;
    if (priority) filters.priority = priority;
    if (isComplaint !== undefined) filters.isComplaint = isComplaint === 'true';
    if (isResolved !== undefined) filters.isResolved = isResolved === 'true';

    const emails = await prisma.customerEmail.findMany({
      where: filters,
      orderBy: { receivedAt: 'desc' }
    });

    res.json({ success: true, emails });
  } catch (error) {
    next(error);
  }
};

export const classifyManualEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { subject, body } = req.body;
    const result = await classifyEmail(subject, body);
    res.json({ success: true, classification: result });
  } catch (error) {
    next(error);
  }
};

export const getDashboardStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const totalEmails = await prisma.customerEmail.count();
    const totalComplaints = await prisma.customerEmail.count({ where: { isComplaint: true } });
    const resolvedComplaints = await prisma.customerEmail.count({ where: { isComplaint: true, isResolved: true } });
    
    const complaintsByCategory = await prisma.customerEmail.groupBy({
      by: ['category'],
      where: { isComplaint: true },
      _count: true
    });

    const sentimentDistribution = await prisma.customerEmail.groupBy({
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
  } catch (error) {
    next(error);
  }
};

export const resolveEmail = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { resolution } = req.body;
    const userId = req.user!.id;

    const updated = await prisma.customerEmail.update({
      where: { id },
      data: {
        isResolved: true,
        resolution,
        assignedTo: userId
      }
    });

    res.json({ success: true, email: updated });
  } catch (error) {
    next(error);
  }
};

export const generateReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { period } = req.body; // WEEKLY or MONTHLY
    const now = new Date();
    const startDate = new Date();
    if (period === 'WEEKLY') startDate.setDate(now.getDate() - 7);
    else startDate.setMonth(now.getMonth() - 1);

    const emails = await prisma.customerEmail.findMany({
      where: { receivedAt: { gte: startDate } }
    });

    const complaints = emails.filter(e => e.isComplaint);
    
    // Aggregate by category
    const byCategory: any = {};
    complaints.forEach(c => {
      byCategory[c.category] = (byCategory[c.category] || 0) + 1;
    });

    // Aggregate by sentiment
    const bySentiment: any = {};
    complaints.forEach(c => {
      bySentiment[c.sentiment] = (bySentiment[c.sentiment] || 0) + 1;
    });

    const topIssue = Object.entries(byCategory).sort((a: any, b: any) => b[1] - a[1])[0]?.[0] || 'NONE';

    const insights = `This ${period.toLowerCase()} we received ${emails.length} customer emails, ${complaints.length} were complaints. The top issue was ${topIssue}. Recommendation: Focus on ${topIssue} reduction.`;

    const report = await prisma.complaintReport.create({
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
  } catch (error) {
    next(error);
  }
};

export const getReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reports = await prisma.complaintReport.findMany({
      orderBy: { generatedAt: 'desc' }
    });
    res.json({ success: true, reports });
  } catch (error) {
    next(error);
  }
};
