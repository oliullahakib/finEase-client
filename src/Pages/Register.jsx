import React, { useState } from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {
    const [show, setShow] = useState(false)
    const handleRegister=(e)=>{
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("register",{displayName,photoURL,email,password})
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content bg-linear-to-t from-base-200 via-[#1a1a19ba] to-[#28D99D90] flex-col lg:flex-row-reverse rounded-3xl">
                        <div className="card glass-card w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body min-h-96 md:w-96">
                                <h1 className="text-5xl momo-font linear-text font-bold text-center">Register now</h1>
                                <div className='border border-white opacity-60 mt-5'></div>
                                <form onSubmit={handleRegister} className="fieldset ">
                                    {/* Name  */}
                                    <label className="label text-white">Name</label>
                                    <input name='name' required type="text" className="input glass-btn" placeholder="Name" />
                                    {/* Photo URL  */}
                                    <label className="label text-white">Photo URL</label>
                                    <input name='photo' required type="text" className="input glass-btn" placeholder="Photo URL" />
                                    {/* email  */}
                                    <label className="label text-white">Email</label>
                                    <input name='email' required type="email" className="input glass-btn" placeholder="Email" />
                                    {/* password  */}
                                   <div className='relative'>
                                     <label className="label text-white">Password</label>
                                    <input name='password' required type={show?"text":"password"} className="input glass-btn" placeholder="Password" />
                                    <span onClick={()=>setShow(!show)} className='absolute cursor-pointer top-7 right-7'>
                                        {
                                            show?<FaEyeSlash size={20} />:<FaEye size={20} />
                                        }
                                    </span>
                                   </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn outline-0 border-0 primary-btn mt-4">Register</motion.button>
                                    <div className='flex items-center mt-3'>
                                        <div className='w-1/2 border border-white opacity-60 h-px'></div>
                                        <p className='mx-2 font-semibold'>OR</p>
                                        <div className='w-1/2 border border-white opacity-60 h-px'></div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ ease: [0, 0.71, 0.2, 1.01], duration: .5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn bg-white text-black border-[#e5e5e5] rounded-full">
                                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                        Login with Google
                                    </motion.button>
                                     <p className='text-center font-semibold mt-3'>Already have Account?Please <Link className=' text-blue-400 hover:text-blue-500' to={"/login"} >Login</Link> </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;