import express from 'express';
import { toggleFavoriteArticle, getFavoriteArticles } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/favorites')
    .get(protect as unknown as express.RequestHandler, getFavoriteArticles)
    .put(protect as unknown as express.RequestHandler, toggleFavoriteArticle);

export default router;
