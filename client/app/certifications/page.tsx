'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { quizzes } from '../../data/quizData';
import { API_BASE_URL } from '@/lib/api-config';

export default function CertificationsPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [userCertifications, setUserCertifications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertifications = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/api/certifications/me`, {
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
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, [user]);

    const quizList = Object.values(quizzes);

    const isCertified = (courseId: string) => {
        return userCertifications.some(cert => cert.courseId === courseId);
    };

    const getScore = (courseId: string) => {
        const cert = userCertifications.find(cert => cert.courseId === courseId);
        return cert ? cert.score : null;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)' }} />
                <div className="relative max-w-4xl mx-auto text-center">
                    <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                        Mastery Rewards
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                        Earn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Certifications</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Validate your expertise! Complete high-quality quizzes for our 8 core courses, score above 75%, and earn official knowledge certificates.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">🏆 <strong className="text-white">8</strong> Core Courses</span>
                        <span className="flex items-center gap-2">✅ <strong className="text-white">75%</strong> Passing Score</span>
                    </div>
                </div>
            </div>

            {/* Certifications Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600">🎓</span>
                    Available Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {quizList.map(quiz => (
                        <div
                            key={quiz.courseId}
                            onClick={() => {
                                if (!user) router.push('/login');
                                else if (isCertified(quiz.courseId)) {
                                    router.push(`/certifications/${quiz.courseId}/quiz?view=certificate&score=${getScore(quiz.courseId)}`);
                                } else {
                                    router.push(`/certifications/${quiz.courseId}/quiz`);
                                }
                            }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer border border-gray-100 h-full"
                        >
                            {/* Card Banner */}
                            <div className="relative h-[170px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8050fa] to-[#7f4af5]">
                                <div className="text-white/10 text-[5.5rem] font-black tracking-widest select-none transform scale-y-110 pt-2">QUIZ</div>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 py-6 flex flex-col flex-grow bg-white">
                                <h3 className="text-[17px] font-bold text-[#1a1a2e] mb-10 group-hover:text-[#7f4af5] transition-colors leading-relaxed">
                                    {quiz.courseTitle}
                                </h3>
                                
                                <div className="mt-auto flex items-center justify-between text-[13px]">
                                    {isCertified(quiz.courseId) ? (
                                        <span className="text-[#3b82f6] font-semibold text-[13px]">Completed</span>
                                    ) : (
                                        <span className="text-[#a1a1aa] font-semibold text-[13px]">Not Started</span>
                                    )}
                                    <button className="px-5 py-2.5 rounded-full text-[12px] font-bold transition-all bg-[#F3F1FE] text-[#6b31fb] group-hover:bg-[#6b31fb] group-hover:text-white">
                                        {isCertified(quiz.courseId) ? 'View Cert' : 'Take Quiz'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center pb-12 text-sm text-gray-400 flex flex-col items-center gap-2">
                <p>⚠️ All quizzes require a minimum of 75% to pass.</p>
                <div className="h-px w-24 bg-gray-200" />
                <p>Unlock your achievements today!</p>
            </div>
        </div>
    );
}
