import React from 'react';
import Mydiv from '../Mydiv';
import { Link } from 'react-router';


const WhyFinance = () => {
    return (
        <div>
            <Mydiv className='bg-black mt-10 rounded-2xl shadow-2xl mb-10 pb-5 px-5'>
                <h2 className='text-3xl text-secondary text-center font-semibold momo-font   pt-10 mb-5'>Why Financial Planning Matters?</h2>
                <p className='opacity-70 text-white text-center my-5'>Financial planning matters because it provides a clear, actionable roadmap for your entire financial life, transforming vague hopes into achievable goals. Instead of reacting to expenses and hoping for the best, planning puts you in proactive control. It begins by defining your future goals—like buying a home, paying for education, or retiring comfortably—and calculates precisely what you need to do and when you need to do it. Crucially, it helps you build a strong financial safety net, specifically an emergency fund, which shields your long-term savings from life’s inevitable shocks like job loss or medical emergencies. Furthermore, through disciplined tracking and strategic budgeting, planning helps you stop wasting money, effectively manage and pay down high-interest debt, and ensure that your money is growing faster than inflation through smart investments. Ultimately, financial planning is the tool that replaces financial stress with confidence, giving you the control and peace of mind needed to secure a stable and prosperous future.</p>

               <div className='flex justify-center'>
                <Link to={"/login"} className='primary-btn cursor-pointer hover:opacity-60  transition ease-in-out'>Get Started</Link>
               </div>
            </Mydiv>
        </div>
    );
};

export default WhyFinance;