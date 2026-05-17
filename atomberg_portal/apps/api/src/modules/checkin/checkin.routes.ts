import { Router } from 'express';
import { createCheckIn, getEmployeeCheckIns } from './checkin.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);
router.post('/', createCheckIn);
router.get('/', getEmployeeCheckIns);
router.get('/employee/:id', getEmployeeCheckIns);

export default router;
