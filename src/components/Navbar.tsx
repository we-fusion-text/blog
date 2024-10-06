'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if the user is logged in by checking for a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        router.push('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">My Blog</Link>
                </div>

                {/* Links */}
                <div className="space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-800">
                        Home
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-gray-600 hover:text-gray-800">
                                Login
                            </Link>
                            <Link href="/signup" className="text-gray-600 hover:text-gray-800">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
