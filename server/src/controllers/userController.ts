import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

interface AuthRequest extends Request {
    user?: IUser;
}

export const toggleFavoriteArticle = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id;
        const { articleId } = req.body;

        if (!articleId) {
            res.status(400).json({ message: 'Article ID is required' });
            return;
        }

        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const isFavorite = user.favoriteArticles.includes(articleId);

        if (isFavorite) {
            user.favoriteArticles = user.favoriteArticles.filter(id => id !== articleId);
        } else {
            user.favoriteArticles.push(articleId);
        }

        await user.save();

        res.json({ message: isFavorite ? 'Article removed from favorites' : 'Article added to favorites', favoriteArticles: user.favoriteArticles });
    } catch (error: any) {
        console.error("Toggle favorite error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getFavoriteArticles = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id;
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json({ favoriteArticles: user.favoriteArticles });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
