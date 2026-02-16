import { Request, Response } from 'express';
import Resource from '../models/Resource';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
    user?: IUser;
}

export const getResources = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const resources = await Resource.find().populate('createdBy', 'username');
        res.json(resources);
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const createResource = async (req: AuthRequest, res: Response): Promise<void> => {
    const { title, url, description, type, tags } = req.body;

    try {
        const resource = new Resource({
            title,
            url,
            description,
            type,
            tags,
            createdBy: req.user?._id,
        });

        const createdResource = await resource.save();
        res.status(201).json(createdResource);
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

export const deleteResource = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const resource = await Resource.findById(req.params.id);

        if (resource) {
            // Check if user owns the resource
            if (resource.createdBy.toString() !== req.user?._id.toString()) {
                res.status(401).json({ message: 'Not authorized' });
                return;
            }
            await resource.deleteOne();
            res.json({ message: 'Resource removed' });
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }

    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
