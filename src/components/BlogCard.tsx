import React from 'react';
import Image from 'next/image';
import { Blog } from '@/app/dashboard/page';
import DOMPurify from 'dompurify';

const BlogCard = ({ blog }: { blog: Blog }) => {
    const sanitizedBody = DOMPurify.sanitize(blog.body);

    return (
        <div className="bg-white w-full rounded-lg shadow-md overflow-hidden">
            {blog.imageUrl && (
                <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>

                {/* Render the sanitized HTML content */}
                <div
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: sanitizedBody }}
                />

                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                        <Image
                            src={blog.author.authorImageUrl}
                            alt={blog.author.name}
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium">{blog.author.name}</p>
                        <p className="text-gray-500 text-sm">{blog.author.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
