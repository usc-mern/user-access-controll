import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-3 justify-center items-center  h-full gap-10'>
            <button className="btn btn-outline btn-primary">Add</button>
            <button className="btn btn-outline btn-accent">Update</button>
            <button className="btn btn-outline btn-secondary">Delete</button>
        </div>
    );
};

export default Blog;