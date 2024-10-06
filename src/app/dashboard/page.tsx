'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
    _id: string;
    title: string;
    body: string;
    author: {
        name: string;
        email: string;
    };
}

export default function Dashboard() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data } = await axios.get('/api/blogs/getBlogs');
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Your Blogs</h1>
            <ul>
                {blogs.map((blog: Blog) => (
                    <li key={blog._id}>{blog.title} by {blog.author.name}</li>
                ))}
            </ul>
        </div>
    );
}
