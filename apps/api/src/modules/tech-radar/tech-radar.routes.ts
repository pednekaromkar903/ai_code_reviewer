import { Router } from 'express';
import * as techRadarController from './tech-radar.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);

// Re-added authentication
router.get('/entries', techRadarController.getTechEntries);

export default router;
