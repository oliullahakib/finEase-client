import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Mydiv from './Mydiv';
import { motion } from "motion/react"
import { AuthContext } from './Context/AuthContext';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { user,logoutUser } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme')||"light")
    const location = useLocation()
    const links = <>
        <li><NavLink to={'/'} >Home</NavLink></li>
        <li><NavLink to={'/add-transaction'} >Add Transaction</NavLink></li>
        <li><NavLink to={'/reports'} >Reports</NavLink></li>
        {
            user && <li><NavLink to={'/my-transactions'} >My Transaction</NavLink></li>  
        }
    </>
    useEffect(() => {
      document.querySelector('html').setAttribute('data-theme',theme)
      localStorage.setItem("theme",theme)
    }, [theme])
    
    const handleLogout=()=>{
        logoutUser()
        .then(()=>{
            toast.success('Logout')
        })
    }
    const handleMode=(e)=>{
       setTheme(e.target.checked?"dark":"light")
         
    }
    return (
        <Mydiv className="px-3 rounded-full sticky z-10 glass-card top-0">
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 my-3 w-52 p-3 shadow">
                            {links}
                           {
                             <div className={`${user?"hidden":"flex"} flex-col gap-5 mt-5`}>
                                <motion.button
                                    whileHover={{ scale: .9 }}
                                    transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link state={location.pathname} className='btn primary-btn w-full ' to={"/login"}>Login</Link>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: .9 }}
                                    transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link className='btn glass-btn w-full' to={"/register"}>Register</Link>
                                </motion.button>
                            </div>
                           }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className='w-12' src="https://img.icons8.com/avantgarde/100/box.png" alt="logo" /> Fin<span className='text-primary'>Ease</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <p className='text-xl text-center'>{user?.displayName || "Name"}</p>
                            <p className='text-gray-400 text-center'>{user?.email ||"example@gmail.com"}</p>
                            <Link to={'/profile'} className='font-bold  my-3'> Profile</Link>
                            {/* mode control  */}
                            <div>
                                <input onClick={handleMode} defaultChecked={theme==="dark"} type="checkbox" className="toggle m-2" />
                                <span className='font-bold'>{theme==="dark"?"Dark":"Light"} Mode</span>
                            </div>
                            {
                                user&&<button onClick={handleLogout} className='font-bold mt-3 btn text-black btn-error rounded-full'>Logout</button>
                            }
                            
                            
                        </ul>
                    </div>:<div className='hidden gap-5 lg:flex'>
                                <motion.button
                                    whileHover={{ scale: .9 }}
                                    transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link state={location.pathname} className='btn primary-btn w-full mx-3' to={"/login"}>Login</Link>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: .9 }}
                                    transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link className='btn glass-btn w-full' to={"/register"}>Register</Link>
                                </motion.button>
                            </div>
                    }
                    
                </div>
            </div>
        </Mydiv>


    );
};

export default Navbar;