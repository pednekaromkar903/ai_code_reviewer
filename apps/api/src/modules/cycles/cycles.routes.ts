import { Router } from 'express';
import { authenticate, authorize } from '../../middleware/auth';
import { getCycles, updateCycleStatus, getActiveCycle } from './cycles.controller';

const router = Router();

router.use(authenticate);
router.get('/', getCycles);
router.get('/active', getActiveCycle);
router.put('/:id/status', authorize(['ADMIN']), updateCycleStatus);

export default router;
