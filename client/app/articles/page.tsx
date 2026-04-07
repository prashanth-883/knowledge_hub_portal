'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/navigation';
import { articles } from '../../data/articlesData';

import { useAuth } from '../../context/AuthContext';

const allCategories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

export default function ArticlesPage() {
    const { user, favoriteArticles, toggleFavorite } = useAuth();
    const [activeFilter, setActiveFilter] = useState('All');
    const router = useRouter();

    const filtered = activeFilter === 'All'
        ? articles
        : articles.filter(a => a.category === activeFilter);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)' }} />
                <div className="relative max-w-4xl mx-auto text-center">
                    <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                        Knowledge Hub
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Articles</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Dive deep into diverse fields of knowledge — from the laws of physics to the philosophy of mind. Curated articles written for curious minds.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">📚 <strong className="text-white">{articles.length}</strong> Articles</span>
                        <span className="flex items-center gap-2">🏷️ <strong className="text-white">{allCategories.length - 1}</strong> Categories</span>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${activeFilter === cat
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <p className="text-sm text-gray-500 mb-8">
                    Showing <strong className="text-gray-800">{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
                    {activeFilter !== 'All' && <span> in <strong className="text-indigo-600">{activeFilter}</strong></span>}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map(article => (
                        <div
                            key={article.id}
                            onClick={() => router.push(`/articles/${article.slug}`)}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.imageUrl}
                                    alt={article.category}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-60 mix-blend-multiply`} />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-3 right-3 text-4xl">
                                    {article.icon}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex flex-col flex-1 relative">
                                <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug pr-8">
                                    {article.title}
                                </h2>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (user) {
                                            toggleFavorite(article.id);
                                        } else {
                                            router.push('/login');
                                        }
                                    }}
                                    className="absolute top-5 right-5 z-10 p-1.5 rounded-full hover:bg-gray-100 transition-colors group/btn"
                                    aria-label="Like article"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 transition-colors ${favoriteArticles.includes(article.id) ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400 group-hover/btn:text-red-400'}`}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={favoriteArticles.includes(article.id) ? 1 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>

                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 mt-2">
                                    {article.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-2">
                                    {article.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-[11px] bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-full font-medium"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center pb-12 text-sm text-gray-400">
                📖 More articles coming soon — stay curious!
            </div>
        </div>
    );
}
