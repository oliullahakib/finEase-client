import React from 'react';
import Banner from '../component/HomePage/Banner';
import OverView from '../component/HomePage/OverView';
import BudgetTips from '../component/HomePage/BudgetTips';
import WhyFinance from '../component/HomePage/WhyFinance';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OverView/>
            <BudgetTips/>
            <WhyFinance/>
        </div>
    );
};

export default Home;