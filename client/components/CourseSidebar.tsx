'use client';

import React, { useState } from 'react';

interface SubItem {
    id: string;
    title: string;
}

interface Topic {
    id: string;
    title: string;
    subItems: SubItem[];
}

interface CourseSidebarProps {
    topics: Topic[];
    activeTopicId: string;
    activeSubItemId: string;
    onSelect: (topicId: string, subItemId: string) => void;
}

const CourseSidebar = ({ topics, activeTopicId, activeSubItemId, onSelect }: CourseSidebarProps) => {
    // State to track which sections are expanded. Default to having the active topic expanded.
    const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set([activeTopicId]));

    const toggleTopic = (topicId: string) => {
        const newExpanded = new Set(expandedTopics);
        if (newExpanded.has(topicId)) {
            newExpanded.delete(topicId);
        } else {
            newExpanded.add(topicId);
        }
        setExpandedTopics(newExpanded);
    };

    return (
        <aside className="w-full md:w-64 bg-white border-r border-gray-200 h-fit md:min-h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Course Content</h3>
            </div>
            <div className="py-2">
                {topics.map((topic) => {
                    const isExpanded = expandedTopics.has(topic.id);
                    return (
                        <div key={topic.id} className="border-b border-gray-50 last:border-none">
                            <button
                                onClick={() => toggleTopic(topic.id)}
                                className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                            >
                                <span className="font-medium text-gray-800 text-sm">{topic.title}</span>
                                <svg
                                    className={`w-4 h-4 text-gray-500 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isExpanded && (
                                <div className="bg-gray-50/50 pb-2">
                                    {topic.subItems.map((subItem) => {
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
