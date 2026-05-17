import { Router } from 'express';
import * as innovationController from './innovation.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.use(authenticate);

// Re-added authentication
router.get('/ideas', innovationController.getIdeas);
router.post('/ideas', innovationController.createIdea);
router.post('/ideas/:id/upvote', innovationController.upvoteIdea);
router.post('/ideas/:id/comments', innovationController.addComment);

export default router;
