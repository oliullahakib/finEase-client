import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';

const MainLayout = () => {
    return (
        <div className='roboto-font'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;