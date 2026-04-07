import express from 'express';
import { submitQuizResult, getMyCertifications } from '../controllers/certificationController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/submit', protect as unknown as express.RequestHandler, submitQuizResult);
router.get('/me', protect as unknown as express.RequestHandler, getMyCertifications);

export default router;
