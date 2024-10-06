'use client';
import { useState } from 'react';
import BlogModal from './BlogModal';

export default function Sidebar() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleClick() {
        setModalOpen((prev) => !prev);
    }

    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
            <button
                onClick={handleClick}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
                Create Blog
            </button>
            {modalOpen && <BlogModal onClose={() => setModalOpen(false)} />}
        </aside>
    );
}
