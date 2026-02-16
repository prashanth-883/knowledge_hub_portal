'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left Side: Logo & Links */}
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-gray-800">Knowledge Hub Portal</span>
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-800 text-sm font-medium">
                                Courses
                            </Link>
                            <a href="#" className="text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-800 hover:text-gray-900 text-sm font-medium">
                                Tutorials
                            </a>
                            <a href="#" className="text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-800 hover:text-gray-900 text-sm font-medium">
                                Jobs
                            </a>
                            <a href="#" className="text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-800 hover:text-gray-900 text-sm font-medium">
                                Practice
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {user && (
                            <button className="text-gray-500 hover:text-gray-700 relative">
                                <span className="sr-only">Notifications</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                            </button>
                        )}

                        {user ? (
                            <div className="flex items-center space-x-3">
                                {/* User Avatar */}
                                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer" title={user.username}>
                                    {user.username.charAt(0).toUpperCase()}
                                </div>
                                <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-900">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Link href="/login" className="px-4 py-1.5 rounded text-sm font-medium text-gray-700 hover:bg-gray-100">
                                    Login
                                </Link>
                                <Link href="/register" className="bg-gray-800 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-700">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
