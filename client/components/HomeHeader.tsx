'use client';

import React from 'react';
import Link from 'next/link';

const HomeHeader = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-50">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Knowledge Hub</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <span className="sr-only">Notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-2 right-2.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 p-0.5 cursor-pointer">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="User Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
