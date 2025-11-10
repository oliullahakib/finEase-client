import React, { use } from 'react';
import { AuthContext } from '../component/Context/AuthContext';

const MyProfile = () => {
    const { user } = use(AuthContext)
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content bg-linear-to-b from-base-200 via-[#1a1a19ba] to-[#28D99D] rounded-3xl flex-col lg:flex-row-reverse">
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body md:h-96 md:w-96">
                            <fieldset className="fieldset">
                                <img className='border w-40 h-40 mx-auto rounded-full' src={user?.photoURL} alt="user" />
                                <h2 className='text-3xl text-center momo-font linear-text'>{user.displayName}</h2>
                                <p className='text-xl text-center text-secondary'>{user.email}</p>
                                <button className="btn btn-warning mt-4">Update Profile</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;