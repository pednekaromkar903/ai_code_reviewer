import { Router } from 'express';
import * as controller from './email-analytics.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);

router.post('/connect', controller.connectEmail);
router.get('/emails', controller.getEmails);
router.post('/classify', controller.classifyManualEmail);
router.get('/dashboard', controller.getDashboardStats);
router.get('/reports', controller.getReports);
router.post('/reports', controller.generateReport);
router.post('/resolve/:id', controller.resolveEmail);

export default router;
