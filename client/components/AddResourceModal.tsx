'use client';

import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

interface AddResourceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onResourceAdded: () => void;
}

export default function AddResourceModal({ isOpen, onClose, onResourceAdded }: AddResourceModalProps) {
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('article');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };

            await axios.post(
                'http://localhost:5000/api/resources',
                {
                    title,
                    url,
                    description,
                    type,
                    tags: tags.split(',').map(tag => tag.trim()),
                },
                config
            );

            toast.success('Resource added successfully');
            setTitle('');
            setUrl('');
            setDescription('');
            setTags('');
            onResourceAdded();
            onClose();
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to add resource');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add New Resource</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">URL</label>
                        <input
                            type="url"
                            className="w-full p-2 border rounded"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Type</label>
                        <select
                            className="w-full p-2 border rounded"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="article">Article</option>
                            <option value="video">Video</option>
                            <option value="documentation">Documentation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="react, javascript, tutorial"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Add Resource
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
