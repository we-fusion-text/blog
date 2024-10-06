'use client';
import { useState } from 'react';
import BlogModal from './BlogModal';

export default function Sidebar() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <aside className="w-64">
            <button onClick={() => setModalOpen(true)}>Create Blog</button>
            {modalOpen && <BlogModal />}
            <BlogModal />
        </aside>
    );
}
