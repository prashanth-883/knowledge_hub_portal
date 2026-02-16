import express from 'express';
import { getResources, createResource, deleteResource } from '../controllers/resourceController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(protect, getResources).post(protect, createResource);
router.route('/:id').delete(protect, deleteResource);

export default router;
