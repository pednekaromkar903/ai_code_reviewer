import { Router } from 'express';
import { getAchievementReport } from './reports.controller';
import { authenticate, authorize } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.get('/achievement', authorize(['MANAGER', 'ADMIN']), getAchievementReport);

export default router;
