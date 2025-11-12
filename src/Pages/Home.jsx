import React, { use } from 'react';
import Banner from '../component/HomePage/Banner';
import OverView from '../component/HomePage/OverView';
import BudgetTips from '../component/HomePage/BudgetTips';
import WhyFinance from '../component/HomePage/WhyFinance';
import { AuthContext } from '../component/Context/AuthContext';
import { Link } from 'react-router';

const Home = () => {
    const {user}=use(AuthContext)
    return (
        <div>
            <Banner/>
            {
                user?<OverView/>:<div className='flex flex-col pt-40 items-center min-h-40 justify-center'>
                    <h2 className='text-3xl font-bold opacity-55 text-center'>To Access Over View </h2>
                    <Link className='btn primary-btn w-40 mt-5 mx-auto' to={"/login"}>Login Now</Link>
                </div>
            }
            <BudgetTips/>
            <WhyFinance/>
        </div>
    );
};

export default Home;