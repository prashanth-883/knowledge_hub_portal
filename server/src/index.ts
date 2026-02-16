import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

dotenv.config();

connectDB();

import authRoutes from './routes/authRoutes';

const app: Application = express();

app.use(express.json());
app.use(cors());

import resourceRoutes from './routes/resourceRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
