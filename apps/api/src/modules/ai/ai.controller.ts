import { Response, NextFunction } from 'express';
import { SuggestionService } from './suggestion.service';
import { ChatService } from '../chat/chat.service';
import { AuthRequest } from '../../middleware/auth';

const chatService = new ChatService();
const suggestionService = new SuggestionService();

export const queryAI = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { query } = req.body;
    const userId = req.user!.id;
    const role = req.user!.role;

    if (!query || query.trim().length === 0) {
      return res.status(400).json({ message: 'Query is required' });
    }

    const result = await chatService.processMessage(query.trim(), userId, role);
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};

export const getSuggestions = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const role = req.user!.role;

    const suggestions = await suggestionService.getSuggestions(userId, role);
    res.json({ success: true, suggestions });
  } catch (error) {
    next(error);
  }
};
