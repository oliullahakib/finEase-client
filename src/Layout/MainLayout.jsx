import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div className='roboto-font flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;