import { Router } from 'express';
import { getGoalAuditTrail, getAllAuditLogs } from './audit.controller';
import { authenticate, authorize } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.get('/', authorize(['ADMIN']), getAllAuditLogs);
router.get('/goal/:id', getGoalAuditTrail);
router.get('/all', authorize(['ADMIN']), getAllAuditLogs); // Keep for compatibility

export default router;
