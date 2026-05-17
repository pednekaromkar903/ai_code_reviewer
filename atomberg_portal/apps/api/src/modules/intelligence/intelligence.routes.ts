import { Router } from 'express';
import { authenticate, authorize } from '../../middleware/auth';
import {
  testConnection,
  saveConnection,
  getConnection,
  getSchema,
  queryIntelligence,
  getLegacyGoals
} from './intelligence.controller';

const router = Router();

router.use(authenticate);

router.post('/connect/test', authorize(['ADMIN', 'MANAGER']), testConnection);
router.post('/connect/save', authorize(['ADMIN']), saveConnection);
router.get('/connect', getConnection);
router.get('/schema', getSchema);
router.post('/query', queryIntelligence);
router.get('/goals', getLegacyGoals);

export default router;
