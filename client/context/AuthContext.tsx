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
    favoriteArticles: number[];
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    toggleFavorite: (articleId: number) => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [favoriteArticles, setFavoriteArticles] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        const fetchFavorites = async () => {
             if (user?.token) {
                 try {
                     const { data } = await axios.get('http://localhost:5000/api/users/favorites', {
                         headers: { Authorization: `Bearer ${user.token}` }
                     });
                     setFavoriteArticles(data.favoriteArticles || []);
                 } catch (error) {
                     console.error('Failed to fetch favorite articles:', error);
                 }
             } else {
                 setFavoriteArticles([]);
             }
        };
        fetchFavorites();
    }, [user]);

    const login = async (username: string, password: string) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            router.push('/');
        } catch (error: any) {
            if (error.code === 'ERR_NETWORK') {
                throw new Error('Cannot connect to server. Ensure the backend is running.');
            }
            console.error('Login failed:', error.response?.data?.message || error.message);
            throw error;
        }
    };
    const register = async (username: string, email: string, password: string) => {
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
        } catch (error: any) {
            if (error.code === 'ERR_NETWORK') {
                throw new Error('Cannot connect to server. Ensure the backend is running.');
            }
            console.error('Registration failed:', error.response?.data?.message || error.message);
            throw error;
        }
    };

    const toggleFavorite = async (articleId: number) => {
        if (!user?.token) return;
        try {
            const { data } = await axios.put(
                'http://localhost:5000/api/users/favorites',
                { articleId },
                { headers: { Authorization: `Bearer ${user.token}` } }
            );
            setFavoriteArticles(data.favoriteArticles);
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        setFavoriteArticles([]);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, favoriteArticles, login, register, logout, toggleFavorite, loading }}>
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
