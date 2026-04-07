'use client';

import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import CourseSidebar from '../../../components/CourseSidebar';
import CourseContent from '../../../components/CourseContent';
import { courses } from '../../../data/courseData';

export default function TopicPage() {
    const { id } = useParams();
    const { user, loading } = useAuth();
    const router = useRouter();

    // Get Course ID from URL and normalize
    const courseId = typeof id === 'string' ? id.toLowerCase() : '';
    const course = courses[courseId];

    // State for course navigation
    const [activeTopicId, setActiveTopicId] = useState('');
    const [activeSubItemId, setActiveSubItemId] = useState('');

    // Update state when course loads or changes
    useEffect(() => {
        if (course && course.topics.length > 0) {
            const firstTopic = course.topics[0];
            setActiveTopicId(firstTopic.id);
            if (firstTopic.subItems && firstTopic.subItems.length > 0) {
                setActiveSubItemId(firstTopic.subItems[0].id);
            } else {
                setActiveSubItemId(firstTopic.id);
            }
        }
    }, [course]);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!user) {
        return null; // Will redirect
    }

    if (!course) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Course Not Found</h2>
                        <p className="text-gray-600 mt-2">The requested course content is not available.</p>
                        <button onClick={() => router.push('/')} className="mt-4 text-blue-600 hover:underline">Go Back Home</button>
                    </div>
                </div>
            </div>
        );
    }

    // Find the active content
    const activeTopic = course.topics.find(t => t.id === activeTopicId);
    let activeSubItem = activeTopic?.subItems?.find(s => s.id === activeSubItemId);

    // If the topic doesn't have subItems, it acts as its own subItem
    const isDirectTopic = activeTopic && (!activeTopic.subItems || activeTopic.subItems.length === 0);
    const displayTitle = isDirectTopic ? activeTopic.title : (activeSubItem?.title || "Select a Topic");
    const displayContent = isDirectTopic ? activeTopic.content : (activeSubItem?.content || <div>Select a topic to view content</div>);

    const handleSelect = (topicId: string, subItemId: string) => {
        setActiveTopicId(topicId);
        setActiveSubItemId(subItemId);
        window.scrollTo(0, 0);
    };

    // Simple navigation logic
    const handleNext = () => {
        // Logic to find next item... omitted for brevity but can be added if needed
        alert("Next button clicked - Logic to be implemented for full traversal");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <div className="flex-1 flex max-w-8xl mx-auto w-full">
                {/* Sidebar */}
                <div className="hidden md:block">
                    <CourseSidebar
                        topics={course.topics}
                        activeTopicId={activeTopicId}
                        activeSubItemId={activeSubItemId}
                        onSelect={handleSelect}
                    />
                </div>

                {/* Main Content */}
                <CourseContent
                    courseTitle={course.title}
                    title={displayTitle}
                    lastUpdated={course.lastUpdated}
                    content={displayContent}
                    onNext={handleNext}
                    onPrev={() => { }}
                />
            </div>
        </div>
    );
}
