import { Router } from 'express';
import { getManagerDashboard, getAdminDashboard } from './dashboard.controller';
import { authenticate, authorize } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.get('/manager', authorize(['MANAGER', 'ADMIN']), getManagerDashboard);
router.get('/admin', authorize(['ADMIN']), getAdminDashboard);

export default router;
