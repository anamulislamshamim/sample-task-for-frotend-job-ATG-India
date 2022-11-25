import React from 'react';
import BlogAndPostNav from './BlogAndPostNav';
import BlogAndProductsData from './BlogAndProductsData';
const BlogAndPosts = () => {
    return (
        <div className='mt-3'>
            <BlogAndPostNav />
            <BlogAndProductsData />
        </div>
    );
};

export default BlogAndPosts;