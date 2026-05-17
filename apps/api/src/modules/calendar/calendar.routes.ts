import { Router } from 'express';
import * as calendarController from './calendar.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/events', calendarController.getCalendarEvents);
router.post('/events', calendarController.createCalendarEvent);

export default router;
