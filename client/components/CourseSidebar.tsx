'use client';

import React, { useState } from 'react';

interface SubItem {
    id: string;
    title: string;
}

interface Topic {
    id: string;
    title: string;
    subItems?: SubItem[];
}

interface CourseSidebarProps {
    topics: Topic[];
    activeTopicId: string;
    activeSubItemId: string;
    onSelect: (topicId: string, subItemId: string) => void;
}

const CourseSidebar = ({ topics, activeTopicId, activeSubItemId, onSelect }: CourseSidebarProps) => {
    // State to track which section is expanded. Default to having the active topic expanded.
    const [expandedTopic, setExpandedTopic] = useState<string | null>(activeTopicId);

    const toggleTopic = (topicId: string, hasSubItems: boolean) => {
        if (!hasSubItems) {
            onSelect(topicId, topicId); // If it's a top-level link, just select it directly
            return;
        }
        
        if (expandedTopic === topicId) {
            setExpandedTopic(null); // Close if already open
        } else {
            setExpandedTopic(topicId); // Open the new one, closing the others
        }
    };

    return (
        <aside className="w-full md:w-64 bg-white border-r border-gray-200 md:h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden-scrollbar">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Course Content</h3>
            </div>
            <div className="py-2">
                {topics.map((topic) => {
                    const hasSubItems = Boolean(topic.subItems && topic.subItems.length > 0);
                    const isExpanded = expandedTopic === topic.id;
                    const isDirectlyActive = !hasSubItems && activeTopicId === topic.id;

                    return (
                        <div key={topic.id} className="border-b border-gray-50 last:border-none">
                            <button
                                onClick={() => toggleTopic(topic.id, hasSubItems)}
                                className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors focus:outline-none ${isDirectlyActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-800'}`}
                            >
                                <span className={`font-medium text-sm ${isDirectlyActive ? 'text-blue-600' : 'text-gray-800'}`}>{topic.title}</span>
                                {hasSubItems && (
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>

                            {hasSubItems && isExpanded && (
                                <div className="bg-gray-50/50 pb-2">
                                    {topic.subItems!.map((subItem) => {
                                        const isActive = activeSubItemId === subItem.id && activeTopicId === topic.id;
                                        return (
                                            <button
                                                key={subItem.id}
                                                onClick={() => onSelect(topic.id, subItem.id)}
                                                className={`w-full text-left px-4 py-2 pl-8 text-sm transition-colors border-l-2 ${isActive
                                                    ? 'text-blue-600 font-medium bg-blue-50 border-blue-600'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-transparent'
                                                    }`}
                                            >
                                                {subItem.title}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

export default CourseSidebar;
