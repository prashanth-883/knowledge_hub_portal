'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { articles } from '../../../data/articlesData';
import { useAuth } from '../../../context/AuthContext';

export default function ArticleDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;
    const { user, favoriteArticles, toggleFavorite } = useAuth();

    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <Navbar />
                <p className="text-gray-500 text-lg mt-20">Article not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero */}
            <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-70`} />
                
                {/* Like Button (Top Right) */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (user) {
                            toggleFavorite(article.id);
                        } else {
                            router.push('/login');
                        }
                    }}
                    className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all group/btn"
                    aria-label="Like article"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-7 w-7 transition-colors ${favoriteArticles.includes(article.id) ? 'fill-red-500 text-red-500' : 'fill-none text-white group-hover/btn:text-red-300'}`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={favoriteArticles.includes(article.id) ? 1 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                    <span className="inline-block bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                        {article.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl pr-12">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map(tag => (
                            <span key={tag} className="text-xs bg-white/20 backdrop-blur border border-white/20 text-white px-3 py-1 rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold mb-8 group transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Articles
                </button>

                {/* Lead */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-indigo-500 pl-5 italic">
                    {article.description}
                </p>

                {/* Sections */}
                <div className="space-y-10">
                    {article.content.map((section, i) => (
                        <div key={i} className="group">
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${article.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                                    {i + 1}
                                </span>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                    {section.heading}
                                </h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed md:text-lg pl-11">
                                {section.body}
                            </p>
                            {i < article.content.length - 1 && (
                                <div className="mt-10 border-b border-gray-100" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className={`mt-14 rounded-2xl bg-gradient-to-br ${article.color} p-8 text-white text-center shadow-xl`}>
                    <div className="text-5xl mb-3">{article.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
                    <p className="text-white/80 mb-5 text-sm">Explore more topics across the Knowledge Hub</p>
                    <button
                        onClick={() => router.push('/articles')}
                        className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-lg"
                    >
                        Browse All Articles →
                    </button>
                </div>
            </div>
        </div>
    );
}
