import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    try {
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            res.status(400).json({ message: 'Username is already taken' });
            return;
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        if (user) {
            res.status(201).json({
                _id: (user._id as unknown as string),
                username: user.username,
                email: user.email,
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error: any) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: (user._id as unknown as string),
                username: user.username,
                email: user.email,
                token: generateToken(user._id as unknown as string),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
