'use client';

import React from 'react';

const ProgressSection = () => {
    return (
        <div className="px-6 py-6 pb-24"> {/* Added padding bottom for BottomNav */}
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h2>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                        {/* Circular Progress Placeholder */}
                        <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
                            <path
                                className="text-gray-100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                            <path
                                className="text-blue-600"
                                strokeDasharray="75, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-900">75%</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900">Fullstack Web Dev</h3>
                        <p className="text-xs text-gray-500 mt-1">12 of 16 lessons completed</p>
                        {/* Progress Bar Line */}
                        <div className="w-32 bg-gray-100 rounded-full h-1.5 mt-2">
                            <div className="bg-blue-600 h-1.5 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>

                <button className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProgressSection;
