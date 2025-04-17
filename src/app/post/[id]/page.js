import { getAllPosts, getPost } from '@/lib/getAllPost';
import React from 'react';

const PostDetailsPage = async ({ params }) => {
    const singlePost = await getPost(params?.id)

    return (
        <div>
            <div
                className='border rounded border-black dark:border-white p-5 cursor-pointer'
            >
                <h1>{singlePost?.title}</h1>
                <p>{singlePost?.body}</p>
            </div>
        </div>
    );
};

export default PostDetailsPage;



export async function generateStaticParams() {
    const postsData = await getAllPosts();

    return postsData?.map(post => ({
        id: post?.id?.toString()
    }))

}