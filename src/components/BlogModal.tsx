import { useState } from 'react';
import axios from 'axios';

export default function BlogModal() {
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
            // handle success
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Content" />
            <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
            <button onClick={handleSubmit}>Create Blog</button>
        </div>
    );
}
