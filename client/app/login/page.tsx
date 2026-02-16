'use client';

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
            toast.success('Logged in successfully!');
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Toaster />
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
}
