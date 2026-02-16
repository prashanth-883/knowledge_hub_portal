'use client';

import React from 'react';

const categories = [
    { name: 'Design', active: true },
    { name: 'Coding', active: false },
    { name: 'Business', active: false },
    { name: 'Marketing', active: false },
];

const CategorySection = () => {
    return (
        <div className="py-4">
            <div className="flex justify-between items-center px-6 mb-4">
                <h2 className="text-lg font-bold text-gray-900">Categories</h2>
                <button className="text-blue-600 text-sm font-medium">See All</button>
            </div>
            <div className="flex px-6 space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${cat.active
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                            }`}
                    >
                        {cat.active && <span className="mr-2">🎨</span>} {/* Icon placeholder for Design */}
                        {cat.name === 'Coding' && <span className="mr-2 text-gray-400">&lt;/&gt;</span>}
                        {cat.name === 'Business' && <span className="mr-2 text-gray-400">📈</span>}
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
