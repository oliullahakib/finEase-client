import React from 'react';
import Mydiv from '../Mydiv';
import { FaLightbulb } from 'react-icons/fa';

const BudgetTips = () => {
    return (
        <Mydiv className='bg-linear-to-b lg:bg-linear-to-r from-black  to-[#28d99e9f] rounded-2xl mt-40 mb-10'>
            <h2 className='text-3xl font-semibold text-white momo-font ml-10 pt-10 mb-5'>Budgeting Tips</h2>
            <Mydiv className="hero min-h-96">
                <div className="hero-content w-full gap-5  flex-col lg:flex-row">
                    <img
                        src="https://www.careeraddict.com/uploads/article/63872/personal-finance-tips.png"
                        className="lg:max-w-xl lg:min-w-40 rounded-lg shadow-2xl "
                    />
                    <div className=' p-10 space-y-3 text-2xl glass-card'>
                        <h1 className="text-3xl flex gap-1 items-center font-bold"> <FaLightbulb size={30} color='yellow' /> Tips</h1>
                            <li>Give Every Dollar a Job</li>
                            <li>Allocate by Percentage</li>
                            <li>Set Category Limits</li>
                            <li>Budget for Irregular Bills</li>
                            <li>Identify & Review Recurring Charges</li>
                       
                    </div>
                </div>
            </Mydiv>
        </Mydiv>
    );
};

export default BudgetTips;