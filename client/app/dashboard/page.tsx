'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import AddResourceModal from '../../components/AddResourceModal';

interface Resource {
    _id: string;
    title: string;
    url: string;
    description: string;
    type: string;
    tags: string[];
    createdBy: { username: string };
    createdAt: string;
}

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const [resources, setResources] = useState<Resource[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    const fetchResources = async () => {
        if (user) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` },
                };
                const { data } = await axios.get('http://localhost:5000/api/resources', config);
                setResources(data);
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch resources');
            }
        }
    };

    useEffect(() => {
        fetchResources();
    }, [user]);

    if (loading || !user) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Toaster />
            <AddResourceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onResourceAdded={fetchResources}
            />
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Knowledge Hub</h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-600 hidden md:inline">Welcome, {user.username}</span>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition shadow"
                    >
                        + Add Resource
                    </button>
                    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition shadow">Logout</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map(res => (
                    <div key={res._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-2"><a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{res.title}</a></h3>
                            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full uppercase">{res.type}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{res.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {res.tags.map(tag => (
                                <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">#{tag}</span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">Added by {res.createdBy?.username || 'Unknown'} on {new Date(res.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
                {resources.length === 0 && (
                    <div className="col-span-full text-center text-gray-500 py-10">
                        No resources found. Add some!
                    </div>
                )}
            </div>
        </div>
    );
}
