import { Router } from 'express';
import { createGoal, submitGoal, approveGoal, rejectGoal, getGoals, getGoalById, unlockGoal, createSharedGoal } from './goal.controller';
import { authenticate, authorize } from '../../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/', getGoals);
router.get('/:id', getGoalById);
router.post('/', createGoal);
router.put('/:id/submit', submitGoal);
router.put('/:id/approve', authorize(['MANAGER', 'ADMIN']), approveGoal);
router.put('/:id/reject', authorize(['MANAGER', 'ADMIN']), rejectGoal);
router.post('/shared', authorize(['ADMIN']), createSharedGoal);
router.post('/:id/unlock', authorize(['ADMIN']), unlockGoal);

export default router;
