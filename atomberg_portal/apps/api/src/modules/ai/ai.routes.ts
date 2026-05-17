import { Router } from 'express';
import { queryAI, getSuggestions } from './ai.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.post('/query', queryAI);
router.get('/suggestions', getSuggestions);

export default router;
