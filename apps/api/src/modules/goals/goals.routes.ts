import { Router } from 'express';
import { authenticate, authorize } from '../../middleware/auth';
import {
  getGoals, createGoal, updateGoal, submitGoal, approveGoal, rejectGoal, adminUnlock, createSharedGoal
} from './goals.controller';

const router = Router();

router.use(authenticate);

router.get('/', getGoals);
router.post('/', createGoal);
router.patch('/:id', updateGoal);
router.post('/shared', authorize(['ADMIN', 'MANAGER']), createSharedGoal);
router.put('/:id/submit', submitGoal);
router.put('/:id/approve', authorize(['MANAGER', 'ADMIN']), approveGoal);
router.put('/:id/reject', authorize(['MANAGER', 'ADMIN']), rejectGoal);
router.put('/:id/admin-unlock', authorize(['ADMIN']), adminUnlock);

export default router;
