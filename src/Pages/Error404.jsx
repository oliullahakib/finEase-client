import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='linear-text font-bold  momo-font text-2xl md:text-7xl'>404</h1>
            <p className='text-3xl text-gray-400 font-semibold'>OOps!Page Not Found</p>
             <Link className='btn primary-btn w-40 m-3' to={"/"}>Go To Home</Link>
        </div>
    );
};

export default Error404;