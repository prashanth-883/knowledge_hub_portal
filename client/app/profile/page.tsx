'use client';

import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { articles } from '../../data/articlesData';

const ProfilePage = () => {
    const { user, favoriteArticles, logout, toggleFavorite, loading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [userCertifications, setUserCertifications] = useState<any[]>([]);

    useEffect(() => {
        const fetchCertifications = async () => {
            if (!user) return;
            try {
                const response = await fetch('http://localhost:5000/api/certifications/me', {
                    headers: {
                        'Authorization': `Bearer ${user?.token}`
                    }
                });
                const data = await response.json();
                if (data.certifications) {
                    setUserCertifications(data.certifications);
                }
            } catch (error) {
                console.error("Error fetching certifications:", error);
            }
        };

        fetchCertifications();
    }, [user]);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">Loading...</div>;
    }

    const mappedFavoriteArticles = favoriteArticles
        .map(id => articles.find(a => a.id === id))
        .filter(Boolean);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Dark Blue Header Section */}
            <div className="bg-[#0f172a] rounded-b-[2.5rem] pt-6 px-6 pb-12 shadow-md relative">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-bold text-lg">
                        Knowledge Hub <span className="text-blue-400">Portal</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-gray-300 text-sm font-medium hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                             </svg>
                             Home
                        </Link>
                        <button className="relative p-1 text-gray-300 hover:text-white">
                            <span className="sr-only">Notifications</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0f172a]" />
                        </button>
                        <button onClick={logout} className="text-gray-300 text-sm font-medium hover:text-white transition-colors">
                            Logout
                        </button>
                    </div>
                </div>

                {/* Profile Identity */}
                <div className="flex flex-col items-center mt-4">
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-orange-200 to-orange-100 border-2 border-white/20 p-0.5 overflow-hidden flex justify-center items-end">
                            {/* Simple illustration avatar */}
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Philip" alt="User" className="w-full h-full object-cover rounded-full bg-orange-100" />
                        </div>
                        <div className="absolute bottom-1 right-1 h-5 w-5 bg-green-500 border-2 border-[#0f172a] rounded-full"></div>
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-white tracking-wide">
                        {user.username}
                    </h1>
                    <p className="mt-2 text-center text-gray-400 text-sm max-w-xs leading-relaxed">
                        Enthusiastic learner exploring the intersections of Biotechnology and Artificial Intelligence.
                    </p>
                </div>

                {/* Stats Container Inside Header */}
                <div className="mt-8 mx-auto max-w-sm border border-white/10 bg-white/5 rounded-2xl py-4 flex justify-between px-6 backdrop-blur-sm">
                    <div className="text-center flex-1">
                        <div className="text-white font-bold text-xl">{mappedFavoriteArticles.length}</div>
                        <div className="text-gray-400 text-[10px] font-semibold tracking-widest mt-1">FAV ARTICLES</div>
                    </div>
                    <div className="w-[1px] bg-white/10 hidden sm:block"></div>
                    <div className="text-center flex-1 border-l border-r border-white/10">
                        <div className="text-white font-bold text-xl">08</div>
                        <div className="text-gray-400 text-[10px] font-semibold tracking-widest mt-1">COURSES</div>
                    </div>
                    <div className="w-[1px] bg-white/10 hidden sm:block"></div>
                    <div className="text-center flex-1">
                        <div className="text-white font-bold text-xl">1,250</div>
                        <div className="text-gray-400 text-[10px] font-semibold tracking-widest mt-1">POINTS</div>
                    </div>
                </div>
            </div>

            {/* Toggle Tabs overlaying the border */}
            <div className="max-w-md mx-auto px-6 -mt-6 relative z-10">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {['Dashboard', 'Certificates'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-sm transition-all ${activeTab === tab
                                ? 'bg-blue-500 text-white shadow-blue-500/30'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="max-w-md mx-auto mt-8 px-6 space-y-8">

                {/* Favorite Articles Section */}
                {activeTab === 'Dashboard' && (
                    <section>
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-xl font-bold text-[#1e293b]">Favorite Articles</h2>
                            <button onClick={() => router.push('/articles')} className="text-blue-500 text-xs font-bold tracking-wide hover:text-blue-600 uppercase">View All</button>
                        </div>

                        <div className="space-y-4">
                            {mappedFavoriteArticles.length === 0 ? (
                                <div className="text-center py-6 text-gray-500 text-sm bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    You haven't added any favorite articles yet.<br />
                                    <Link href="/articles" className="text-blue-500 hover:underline mt-2 inline-block">Explore Articles</Link>
                                </div>
                            ) : (
                                mappedFavoriteArticles.map((article: any) => (
                                    <div 
                                        key={article.id} 
                                        className="group relative bg-black rounded-2xl h-44 overflow-hidden shadow-sm cursor-pointer border border-gray-100"
                                        onClick={() => router.push(`/articles/${article.slug}`)}
                                    >
                                        {article.imageUrl ? (
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className={`w-full h-full opacity-60 bg-gradient-to-br ${article.color} group-hover:scale-105 transition-transform duration-700`} />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                                                {article.category}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 cursor-pointer">
                                            <h3 className="text-white font-bold text-base leading-snug mb-1 pr-6 hover:text-blue-300 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-300 text-xs line-clamp-1">
                                                {article.description}
                                            </p>
                                        </div>

                                        {/* Like Button */}
                                        <button 
                                            className="absolute bottom-4 right-4 text-white hover:scale-110 transition-transform group/like"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFavorite(article.id);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-red-500 text-red-500 group-hover/like:text-red-400 group-hover/like:fill-red-400 transition-colors" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                )}

                {activeTab === 'Certificates' && (
                    <section>
                        <h2 className="text-xl font-bold text-[#1e293b] mb-4">Your Achievements</h2>
                        <div className="space-y-4">
                            {userCertifications.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
                                    <div className="text-4xl mb-4">🎓</div>
                                    <p className="text-gray-500 text-sm mb-4">You haven't earned any certifications yet.</p>
                                    <Link href="/certifications" className="px-6 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 transition-all">
                                        Browse Certifications
                                    </Link>
                                </div>
                            ) : (
                                userCertifications.map((cert) => (
                                    <div key={cert.courseId} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold">
                                            ✓
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 text-sm capitalize">{cert.courseId === 'java' ? 'Java Programming' : cert.courseId} - Certified</h3>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Pass Percentage: {Math.round(cert.score)}%</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">GOLD TIER</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
