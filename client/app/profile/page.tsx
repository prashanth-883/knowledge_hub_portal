'use client';

import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const recentlyViewed = [
        {
            id: 1,
            title: 'Advanced UX Design',
            image: '/images/user_aptitude.jpg', // Placeholder reusing an existing image
            progress: 75,
            lessonsCompleted: 12,
            totalLessons: 16
        },
        {
            id: 2,
            title: 'Python for Beginners',
            image: '/images/python.jpg',
            progress: 30,
            lessonsCompleted: 3,
            totalLessons: 10
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-8">
                {/* Profile Header */}
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-gray-900 self-start mb-6">Profile</h1>

                    <div className="relative">
                        <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                            <Image
                                src="/images/avatar.svg"
                                alt="Profile"
                                width={112}
                                height={112}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white border-2 border-white cursor-pointer hover:bg-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">{user.username}</h2>
                    <p className="text-gray-500 text-sm">Member since January 2026</p>
                </div>

                {/* Last Viewed Courses */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Last Viewed Courses</h3>
                        <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">View All</button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {recentlyViewed.map((course) => (
                                <div key={course.id} className="min-w-[260px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0">
                                    <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-3 truncate">{course.title}</h4>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs text-gray-500 font-medium">
                                            <span>{course.progress}% Complete</span>
                                            <span>{course.lessonsCompleted}/{course.totalLessons} Lessons</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="bg-blue-600 h-1.5 rounded-full"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Account Settings */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Account Settings</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {[
                            { name: 'My Certificates', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'bg-blue-100 text-blue-600' },
                            { name: 'Payment Methods', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: 'bg-indigo-100 text-indigo-600' },
                            { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', color: 'bg-blue-50 text-blue-600' }
                        ].map((item, index) => (
                            <Link href="#" key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0 border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${item.color}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-900">{item.name}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Log Out Button */}
                <button
                    onClick={logout}
                    className="w-full bg-white text-red-500 font-bold py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
