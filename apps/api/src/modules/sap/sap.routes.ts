import { Router } from 'express';
import * as sapController from './sap.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

// All SAP routes require authentication
router.use(authenticate);

router.get('/employees', sapController.getSapEmployees);
router.get('/departments', sapController.getSapDepartments);
router.get('/metrics/production', sapController.getSapProductionMetrics);
router.get('/metrics/sales', sapController.getSapSalesMetrics);
router.post('/sync', sapController.triggerSapSync);

export default router;
