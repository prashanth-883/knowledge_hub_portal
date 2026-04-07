import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import QuizAttempt from '../models/QuizAttempt';

interface AuthRequest extends Request {
    user?: IUser;
}

export const submitQuizResult = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id;
        const { courseId, score, selectedQuestions = [], userAnswers = [] } = req.body;

        if (!courseId || score === undefined) {
            res.status(400).json({ message: 'Course ID and score are required' });
            return;
        }

        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const isPassed = score >= 75;

        // Save Quiz Attempt
        const attempt = new QuizAttempt({
            userId,
            courseId,
            selectedQuestions,
            userAnswers,
            score,
            isPassed,
            isCertified: isPassed
        });
        await attempt.save();

        // Requirements: score above 75% for certification
        if (isPassed) {
            // Check if user already has this certification
            const existingCert = user.certifications.find(cert => cert.courseId === courseId);
            
            if (existingCert) {
                // Update score if higher
                if (score > existingCert.score) {
                    existingCert.score = score;
                    existingCert.completedAt = new Date();
                }
            } else {
                user.certifications.push({
                    courseId,
                    score,
                    completedAt: new Date()
                });
            }

            await user.save();
            res.json({ message: 'Certification earned!', certifications: user.certifications });
        } else {
            res.json({ message: 'Quiz submitted. Score below 75%, no certification earned.', score });
        }
    } catch (error: any) {
        console.error("Submit quiz error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getMyCertifications = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id;
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json({ certifications: user.certifications });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
