'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const recommendedCourses = [
    {
        id: 1,
        title: 'Master Modern UI Design 2024',
        author: 'Sarah Jenkins',
        price: '49.99',
        rating: 4.9,
        image: '/images/ui-design.png', // Placeholder path
        bestseller: true,
        bg: 'bg-orange-100' // Placeholder background color
    },
    {
        id: 2,
        title: 'Advanced Typography Mastery',
        author: 'David Wilson',
        price: '59.99',
        rating: 4.8,
        image: '/images/typography.png',
        bestseller: false,
        bg: 'bg-indigo-100'
    },
    {
        id: 3,
        title: 'React Native for Beginners',
        author: 'Emma Wilson',
        price: '39.99',
        rating: 4.7,
        image: '/images/react.png',
        bestseller: true,
        bg: 'bg-blue-100'
    }
];

const RecommendedSection = () => {
    return (
        <div className="py-6">
            <div className="flex justify-between items-center px-6 mb-4">
                <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
                <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>

            <div className="flex px-6 space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
                {recommendedCourses.map((course) => (
                    <div key={course.id} className="min-w-[280px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100 snap-center">
                        {/* Course Image Area */}
                        <div className={`h-48 rounded-2xl mb-4 relative overflow-hidden ${course.bg}`}>
                            {/* Placeholder visual */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-20">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                            </div>

                            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center shadow-sm">
                                <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                <span className="text-xs font-bold text-gray-900">{course.rating}</span>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg mb-1 leading-snug">{course.title}</h3>

                        <div className="flex items-center mb-3">
                            <div className="h-6 w-6 rounded-full bg-gray-200 mr-2 overflow-hidden">
                                {/* User Avatar Placeholder */}
                                <div className="bg-gray-400 w-full h-full"></div>
                            </div>
                            <span className="text-sm text-gray-500">{course.author}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-bold text-lg">${course.price}</span>
                            {course.bestseller && (
                                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Bestseller</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedSection;
