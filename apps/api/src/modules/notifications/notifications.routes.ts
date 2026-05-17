import { Router } from 'express';
import { getNotifications } from './notifications.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.get('/', getNotifications);

export default router;