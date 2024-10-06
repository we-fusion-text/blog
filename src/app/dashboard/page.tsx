'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';

export interface Blog {
    _id: string;
    title: string;
    body: string;
    imageUrl?: string;
    author: {
        name: string;
        email: string;
        authorImageUrl: string;
    };
}

export default function Dashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data } = await axios.get('/api/blogs/getBlogs');
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div className="w-3/4 min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Find Something Interesting today!!
            </h1>
            <div className="container p-8 mx-auto flex flex-wrap justify-center items-center gap-8">
                {blogs.map((blog: Blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
