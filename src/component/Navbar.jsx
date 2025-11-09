import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'} >Home</NavLink></li>
        <li><NavLink to={'/addTransaction'} >Add Transaction</NavLink></li>
        <li><NavLink to={'/myTransaction'} >My Transaction</NavLink></li>
        <li><NavLink to={'/reports'} >Reports</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className='w-12' src="https://img.icons8.com/avantgarde/100/box.png" alt="" /> Fin<span className='text-primary'>Ease</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <p className='text-xl'>Alia Neni</p>
                            <p className='text-gray-400'>example@gmail.com</p>
                            <li className='font-bold mt-3'><a> Profile</a></li>
                            <li className='font-bold mt-3 btn text-black btn-secondary'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;