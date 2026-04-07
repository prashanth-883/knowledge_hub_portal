'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../../../../components/Navbar';
import { useAuth } from '../../../../context/AuthContext';
import { quizzes } from '../../../../data/quizData';
import BottomNav from '../../../../components/BottomNav';
import { API_BASE_URL } from '@/lib/api-config';

export default function QuizPage() {
    const { id } = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user } = useAuth();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [randomizedQuestions, setRandomizedQuestions] = useState<any[]>([]);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [results, setResults] = useState<{ earned: boolean, score: number, correctCount: number } | null>(null);

    const quiz = quizzes[id as string];

    useEffect(() => {
        const view = searchParams.get('view');
        const urlScore = searchParams.get('score');
        
        if (view === 'certificate' && urlScore) {
            setResults({
                earned: true,
                score: parseFloat(urlScore),
                correctCount: Math.round((parseFloat(urlScore) / 100) * 20)
            });
        }
    }, [searchParams]);

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    useEffect(() => {
        if (quiz?.questions) {
            let selected = quiz.questions;
            if (quiz.questions.length > 20) {
                const shuffled = [...quiz.questions].sort(() => 0.5 - Math.random());
                selected = shuffled.slice(0, 20);
            }
            setRandomizedQuestions(selected);
            setUserAnswers(new Array(selected.length).fill(null));
        }
    }, [quiz]);

    if (!quiz) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 via-[#F8F8FF] to-white flex flex-col justify-center px-6">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Quiz not found</h1>
                    <button onClick={() => router.push('/certifications')} className="mt-4 text-indigo-600 hover:underline">
                        Back to Certifications
                    </button>
                </div>
            </div>
        );
    }

    if (randomizedQuestions.length === 0) return null; // Loading state

    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    const selectedOption = userAnswers[currentQuestionIndex];

    const handleSelectOption = (index: number) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = index;
        setUserAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (selectedOption === null) return;
        if (currentQuestionIndex < randomizedQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleSkip = () => {
        if (currentQuestionIndex < randomizedQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        
        let correctAnswers = 0;
        userAnswers.forEach((ans, index) => {
            if (ans === randomizedQuestions[index].answer) {
                correctAnswers++;
            }
        });

        const finalScore = (correctAnswers / randomizedQuestions.length) * 100;
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/certifications/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
                body: JSON.stringify({
                    courseId: id,
                    score: finalScore,
                    selectedQuestions: randomizedQuestions,
                    userAnswers: userAnswers
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'Server error occurred');
            }

            const data = await response.json();
            setResults({
                earned: finalScore >= 75,
                score: finalScore,
                correctCount: correctAnswers
            });
        } catch (error: any) {
            console.error("Error submitting quiz:", error);
            alert(error.message || "An error occurred while submitting. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (results) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 via-[#F8F8FF] to-white pb-24 font-sans text-gray-900">
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <button onClick={() => router.push('/certifications')} className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">Certification</h1>
                    <button className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    </button>
                </div>

                <div className="px-6 flex flex-col items-center">
                    {/* Medal / Status */}
                    <div className="text-center mt-2 w-full">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-yellow-200/50 blur-[30px] rounded-full scale-150"></div>
                            <div className="w-[88px] h-[88px] bg-gradient-to-b from-yellow-50 to-[#FFF8E1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-yellow-200/50 relative z-10 transition-transform duration-500 hover:scale-105">
                                {results.earned ? (
                                    <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 1.5L15.09 7.76L22 8.77L17 13.64L18.18 20.5L12 17.25L5.82 20.5L7 13.64L2 8.77L8.91 7.76L12 1.5Z" stroke="#B45309" strokeWidth="1" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <h2 className="text-[2.6rem] font-black tracking-[-0.03em] mb-4 text-[#1a1a2e]">
                            {results.earned ? 'Congratulations!' : 'Keep Pushing!'}
                        </h2>
                        
                        <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm shadow-sm ${results.earned ? 'bg-purple-100/60 border-purple-200/60 text-indigo-700' : 'bg-red-50 focus:border-red-200 text-red-600'}`}>
                            {results.earned ? (
                                <>
                                    <span className="text-yellow-500">✨</span>
                                    <span className="font-bold text-[11px] tracking-[0.15em] upper">CERTIFIED PROFESSIONAL</span>
                                    <span className="text-yellow-500">✨</span>
                                </>
                            ) : (
                                <span className="font-bold text-[11px] tracking-[0.15em] upper">NOT CERTIFIED</span>
                            )}
                        </div>
                    </div>

                    {/* Cards Stack */}
                    <div className="w-full max-w-lg mt-8 space-y-4">
                        
                        {/* Exam Result */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-[28px] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mb-3">Exam Result</p>
                            <div className="flex items-start justify-center gap-1 mb-2">
                                <span className="text-[4.5rem] font-black text-[#5B4EFF] leading-none tracking-tighter shadow-sm">{Math.round(results.score)}</span>
                                <span className="text-3xl font-bold text-[#8981FF] mt-2">%</span>
                            </div>
                            <p className="text-gray-600 font-medium text-[15px]">{results.correctCount} out of {randomizedQuestions.length} questions correct</p>
                        </div>

                        {/* Subject */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-[28px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mb-4">Subject</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-5">{quiz.courseTitle}</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1C2033] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-0.5">Level</p>
                                    <p className="font-bold text-gray-900 text-sm">Intermediate (L2)</p>
                                </div>
                            </div>
                        </div>

                        {/* Questions Row (Removed Time Taken) */}
                        <div className="bg-[#FAF9FF]/80 backdrop-blur-xl rounded-[28px] p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-md shadow-indigo-200">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-1">Questions</p>
                            <p className="font-bold text-gray-900 text-lg">{randomizedQuestions.length} / {randomizedQuestions.length}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 space-y-4">
                            {!results.earned && (
                                <button onClick={() => window.location.reload()} className="w-full py-4 bg-[#9385C6] text-white font-bold text-sm tracking-wide rounded-[20px] hover:bg-[#8072B3] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#D1C8ED]">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    RETAKE EXAM
                                </button>
                            )}
                            <button onClick={() => router.push('/certifications')} className={`w-full py-4 font-bold text-sm tracking-wide rounded-[20px] transition-all flex items-center justify-center gap-3 ${results.earned ? 'bg-[#6F61FF] text-white shadow-lg shadow-indigo-200/50 hover:bg-indigo-600' : 'bg-[#EAE4FF] text-[#3D3175] hover:bg-[#DED7F5]'}`}>
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                BACK TO COURSES
                            </button>
                        </div>

                        <p className="text-center text-[13px] text-gray-500 font-medium pt-4 pb-12">
                            Share your feedback on this exam
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 via-[#F8F8FF] to-white flex flex-col justify-center px-6">
                <div className="max-w-md mx-auto w-full bg-white/80 backdrop-blur-xl rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 text-center border border-white">
                    <h1 className="text-3xl font-extrabold text-[#1a1a2e] mb-4">Quiz Finished!</h1>
                    <p className="text-[#595975] mb-8 font-medium">Ready to submit and see your results?</p>
                    <div className="space-y-4">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#6F61FF] text-white font-bold rounded-[20px] hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 disabled:opacity-50 tracking-wide"
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT RESULTS'}
                        </button>
                        <button
                            onClick={() => setIsFinished(false)}
                            className="w-full py-4 bg-[#EAE4FF] text-[#6F61FF] font-bold rounded-[20px] hover:bg-indigo-100 transition-all tracking-wide"
                        >
                            GO BACK
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const progress = ((currentQuestionIndex + 1) / randomizedQuestions.length) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-[#F8F8FF] to-white font-sans text-gray-900 pb-12">
            {/* Header info */}
            <div className="flex items-center justify-center py-5">
                <h1 className="text-[17px] font-extrabold tracking-tight text-[#1a1a2e]">Certification Quiz</h1>
            </div>
            
            <div className="max-w-[480px] mx-auto px-6 py-2">
                {/* Progress Bar Header */}
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <p className="text-[11px] font-bold text-[#8981FF] uppercase tracking-[0.15em] mb-1">
                            STEP {currentQuestionIndex + 1} OF {randomizedQuestions.length}
                        </p>
                        <h2 className="text-[20px] font-bold text-[#1a1a2e]">{quiz.courseTitle}</h2>
                    </div>
                    {/* Circle Progress */}
                    <div style={{ background: `conic-gradient(#6F61FF ${progress}%, #EAE4FF 0)` }} className="w-12 h-12 rounded-full flex items-center justify-center relative shadow-sm">
                        <div className="absolute inset-1 bg-[#F8F8FF] rounded-full flex items-center justify-center">
                            <span className="text-[9px] font-bold text-[#1a1a2e]">{Math.round(progress)}%</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar Line */}
                <div className="w-full h-1.5 bg-[#EAE4FF] rounded-full mb-6 overflow-hidden">
                    <div 
                        className="h-full bg-[#6F61FF] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Question Card */}
                <div className="bg-white/90 backdrop-blur-3xl rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 mb-4 border border-white">
                    <h3 className="text-[17px] font-bold text-[#1a1a2e] leading-snug">
                        {currentQuestion.question}
                    </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                    {currentQuestion.options.map((option: string, index: number) => (
                        <button
                            key={index}
                            onClick={() => handleSelectOption(index)}
                            className={`w-full text-left p-4 rounded-[20px] transition-all duration-200 group flex items-center justify-between ${
                                selectedOption === index 
                                ? 'bg-[#5B4EFF] text-white shadow-xl shadow-indigo-200/50 scale-[1.02] border border-transparent' 
                                : 'bg-white/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:border-indigo-100'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                                    selectedOption === index ? 'bg-white/20 text-white' : 'bg-[#EAE4FF] text-[#6F61FF]'
                                }`}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className={`font-semibold text-[15px] ${selectedOption === index ? 'text-white' : 'text-[#30304D]'}`}>
                                    {option}
                                </span>
                            </div>
                            {selectedOption === index && (
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                            )}
                        </button>
                    ))}
                </div>

                {/* Footer Navigation */}
                <div className="mt-8">
                    <button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={`w-full py-3.5 rounded-[20px] font-bold text-[13px] tracking-wide transition-all ${
                            selectedOption === null 
                            ? 'bg-[#EAE4FF] text-[#B4A6DB] cursor-not-allowed' 
                            : 'bg-[#8981FF] text-white hover:bg-[#6F61FF] shadow-lg shadow-indigo-200/50 hover:scale-105 active:scale-95'
                        }`}
                    >
                        {currentQuestionIndex < randomizedQuestions.length - 1 ? 'NEXT QUESTION' : 'FINISH QUIZ'}
                    </button>
                </div>
            </div>
        </div>
    );
}
