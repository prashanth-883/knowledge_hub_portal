'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-safe flex justify-between items-center z-50">
            <Link href="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive('/') ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-[10px] font-medium">Home</span>
            </Link>

            <Link href="/courses" className={`flex flex-col items-center gap-1 ${isActive('/courses') ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive('/courses') ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-[10px] font-medium">Courses</span>
            </Link>

            <div className="relative -top-5">
                <button className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-300 hover:bg-blue-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            <Link href="/saved" className={`flex flex-col items-center gap-1 ${isActive('/saved') ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive('/saved') ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-[10px] font-medium">Saved</span>
            </Link>

            <Link href="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive('/profile') ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[10px] font-medium">Profile</span>
            </Link>
        </div>
    );
};

export default BottomNav;
