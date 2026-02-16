'use client';

import React, { ReactNode } from 'react';

interface CourseContentProps {
    title: string;
    lastUpdated: string;
    content: ReactNode;
    courseTitle: string;
    onNext?: () => void;
    onPrev?: () => void;
}

const CourseContent = ({ title, lastUpdated, content, courseTitle, onNext, onPrev }: CourseContentProps) => {
    return (
        <div className="flex-1 min-w-0 bg-white">
            {/* Header / Breadcrumb area */}
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center bg-white sticky top-16 z-10 md:static md:z-0">
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span className="font-medium text-gray-900">{courseTitle}</span>
                    <span className="text-gray-300">/</span>
                    <span>{title}</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-sm shadow-blue-200">
                    Explore
                </button>
            </div>

            <div className="p-6 md:p-10 max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                        {title}
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mt-3">
                        <span>Last Updated: {lastUpdated}</span>
                        <div className="flex space-x-3">
                            <button className="hover:text-gray-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></button>
                            <button className="hover:text-gray-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg></button>
                        </div>
                    </div>
                </div>

                <div className="prose prose-blue max-w-none prose-lg text-gray-600">
                    {content}
                </div>

                {/* Navigation Buttons Removed as per request */}

            </div>
        </div>
    );
};

export default CourseContent;
