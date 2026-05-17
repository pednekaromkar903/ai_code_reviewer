import { Router } from 'express';
import { queryAI, getSuggestions } from './ai.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.get('/health', async (req, res) => {
  try {
    const response = await fetch('http://localhost:11434');
    if (response.ok) {
      res.status(200).json({ status: 'ok', message: 'Ollama is running' });
    } else {
      throw new Error('Ollama not ok');
    }
  } catch (error) {
    if (process.env.GEMINI_API_KEY) {
      res.status(200).json({ status: 'ok', message: 'Gemini AI is running' });
    } else {
      res.status(200).json({ status: 'ok', message: 'AI service is currently in demo mode. Connect your Gemini API key in .env to enable full responses.' });
    }
  }
});

router.use(authenticate);
router.post('/query', queryAI);
router.get('/suggestions', getSuggestions);

export default router;
