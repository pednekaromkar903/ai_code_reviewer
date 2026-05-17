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
      res.status(503).json({ status: 'error', message: 'Ollama returned error' });
    }
  } catch (error) {
    res.status(503).json({ status: 'error', message: 'Ollama is offline' });
  }
});

router.use(authenticate);
router.post('/query', queryAI);
router.get('/suggestions', getSuggestions);

export default router;
