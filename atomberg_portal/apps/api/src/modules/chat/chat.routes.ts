import { Router } from 'express';
import { authenticate } from '../../middleware/auth';
import { queryChat } from './chat.controller';

const router = Router();

router.use(authenticate);
router.post('/query', queryChat);

export default router;
