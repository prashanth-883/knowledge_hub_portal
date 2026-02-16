'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface User {
    _id: string;
    username: string;
    email: string;
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            router.push('/');
        } catch (error: any) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            throw error;
        }
    };
    const register = async (username: string, email: string, password: string) => {
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
        } catch (error: any) {
            console.error('Registration failed:', error.response?.data?.message || error.message);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
