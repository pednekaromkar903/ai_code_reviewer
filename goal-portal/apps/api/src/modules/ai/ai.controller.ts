import { Response, NextFunction } from 'express';
import { AIService } from './ai.service';
import { SuggestionService } from './suggestion.service';
import { AuthRequest } from '../../middleware/auth';

const aiService = new AIService();
const suggestionService = new SuggestionService();

export const queryAI = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { query } = req.body;
    const userId = req.user!.id;
    const role = req.user!.role;

    const result = await aiService.processQuery(query, userId, role);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getSuggestions = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const role = req.user!.role;

    const suggestions = await suggestionService.getSuggestions(userId, role);
    res.json(suggestions);
  } catch (error) {
    next(error);
  }
};
