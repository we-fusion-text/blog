import { useState } from 'react';
import axios from 'axios';

interface BlogModalProps {
    onClose: () => void;
}

export default function BlogModal({ onClose }: BlogModalProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                '/api/blogs/create',
                { title, body, tags: tags.split(',') },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onClose();
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create a New Blog</h2>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full text-black p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Content"
                    className="w-full p-2 text-black mb-4 border border-gray-300 rounded-lg h-32"
                />
                <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Tags (comma separated)"
                    className="w-full p-2 mb-4 text-black border border-gray-300 rounded-lg"
                />
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Add Blog
                    </button>
                </div>
            </div>
        </div>
    );
}
