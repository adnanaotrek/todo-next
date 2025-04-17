import { getAllPosts } from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

const PostPage = async () => {
    const postData = await getAllPosts();

    return (
        <div className='container mx-auto grid grid-cols-4 gap-10 h-screen py-20'>
            {
                postData?.map(post =>
                    <Link
                        href={`post/${post?.id}`}
                        key={post?.id}
                        className='border rounded border-white dark:border-white p-5 cursor-pointer'
                    >
                        <h1>{post?.title}</h1>
                        <p>{post?.body}</p>
                    </Link>
                )
            }
        </div>
    );
};

export default PostPage;