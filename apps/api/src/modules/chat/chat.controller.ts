import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../middleware/auth';
import { ChatService } from './chat.service';

const chatService = new ChatService();

export const queryChat = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { query } = req.body;
    if (!query?.trim()) {
      return res.status(400).json({ message: 'Query is required' });
    }
    const result = await chatService.processMessage(query.trim(), req.user!.id, req.user!.role);
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};
