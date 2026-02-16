'use client';

import React from 'react';

const SearchBar = () => {
    return (
        <div className="px-6 py-2">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-2xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 shadow-sm ring-1 ring-gray-100 sm:text-sm"
                    placeholder="What do you want to learn?"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {/* Optional filter icon or similar could go here */}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
