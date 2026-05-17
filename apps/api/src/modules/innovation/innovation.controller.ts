import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { AuthRequest } from '../../middleware/auth';

export const getIdeas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mockIdeas = [
      { id: "1", title: "AI-Powered Quality Control", description: "Use computer vision for automated defect detection on the BLDC motor assembly line.", status: "Ideas", department: "Manufacturing", votes: 12, impactScore: 9, submittedBy: "Ramesh Kumar", comments: 3 },
      { id: "2", title: "Solar Fan for Rural Markets", description: "Hybrid DC fan that works directly with small solar panels without inverters.", status: "In Progress", department: "R&D", votes: 8, impactScore: 8, submittedBy: "Priya Sharma", comments: 5 },
      { id: "3", title: "Smart Mixer Grinder Presets", description: "IoT enabled mixer grinder with downloadable recipe presets for different cuisines.", status: "Review", department: "Software", votes: 15, impactScore: 7, submittedBy: "Anil Desai", comments: 2 },
      { id: "4", title: "Biodegradable Packaging", description: "Replace all EPS foam packaging with molded pulp to meet 2025 sustainability goals.", status: "Implemented", department: "Supply Chain", votes: 24, impactScore: 10, submittedBy: "Meera Patel", comments: 8 },
      { id: "5", title: "B2B Bulk Order Portal", description: "Self-service portal for B2B clients to place and track bulk fan orders.", status: "Ideas", department: "Sales", votes: 5, impactScore: 6, submittedBy: "Vikram Singh", comments: 1 },
      { id: "6", title: "Voice-Controlled Ceiling Fans", description: "Native integration with Alexa and Google Home without external hubs.", status: "In Progress", department: "R&D", votes: 18, impactScore: 9, submittedBy: "Neha Gupta", comments: 6 },
      { id: "7", title: "Predictive Maintenance App", description: "App for industrial clients to predict motor failure before it happens.", status: "Ideas", department: "Software", votes: 7, impactScore: 8, submittedBy: "Rahul Verma", comments: 0 },
      { id: "8", title: "Employee Carpool System", description: "Internal system to coordinate carpooling to the manufacturing plant.", status: "Review", department: "HR", votes: 11, impactScore: 5, submittedBy: "Sanjay Joshi", comments: 4 }
    ];
    res.json(mockIdeas);
  } catch (error) {
    next(error);
  }
};

export const createIdea = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { title, description, impactScore } = req.body;
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({ where: { id: userId }, include: { department: true } });
    
    const idea = await prisma.innovationIdea.create({
      data: {
        title,
        description,
        impactScore: parseInt(impactScore),
        submittedBy: userId,
        department: user?.department.name || 'Unknown'
      }
    });
    res.status(201).json({ success: true, idea });
  } catch (error) {
    next(error);
  }
};

export const upvoteIdea = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const idea = await prisma.innovationIdea.update({
      where: { id },
      data: { upvotes: { increment: 1 } }
    });
    res.json({ success: true, idea });
  } catch (error) {
    next(error);
  }
};

export const addComment = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user!.id;
    
    const comment = await prisma.ideaComment.create({
      data: {
        content,
        ideaId: id,
        userId
      },
      include: { user: { select: { name: true } } }
    });
    res.status(201).json({ success: true, comment });
  } catch (error) {
    next(error);
  }
};
