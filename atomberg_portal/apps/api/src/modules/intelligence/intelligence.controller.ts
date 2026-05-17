import { Response, NextFunction } from 'express';
import { z } from 'zod';
import { AuthRequest } from '../../middleware/auth';
import { IntelligenceService } from './intelligence.service';
import { ChatService } from '../chat/chat.service';

const service = new IntelligenceService();
const chatService = new ChatService();

const connectSchema = z.object({
  name: z.string().optional(),
  host: z.string().min(1),
  port: z.number().int().positive(),
  database: z.string().min(1),
  username: z.string().min(1),
  password: z.string().optional(),
  dbType: z.enum(['postgresql', 'mysql', 'sqlserver', 'sap_hana']).default('postgresql')
});

export const testConnection = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const config = connectSchema.parse(req.body);
    const result = await service.testConnection(config);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const saveConnection = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const config = connectSchema.parse(req.body);
    const conn = await service.saveConnection(config);
    res.json({ success: true, connection: conn });
  } catch (error) {
    next(error);
  }
};

export const getConnection = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const conn = await service.getActiveConnection();
    res.json({ success: true, connection: conn });
  } catch (error) {
    next(error);
  }
};

export const getSchema = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const schema = service.getSchema();
    res.json({ success: true, ...schema });
  } catch (error) {
    next(error);
  }
};

export const queryIntelligence = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { query } = req.body;
    if (!query?.trim()) {
      return res.status(400).json({ message: 'Query is required' });
    }
    const result = await chatService.processMessage(
      query.trim(),
      req.user!.id,
      req.user!.role
    );
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};

export const getLegacyGoals = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const goals = await service.getLegacyGoals();
    res.json({ success: true, goals });
  } catch (error) {
    next(error);
  }
};
