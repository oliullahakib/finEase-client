import React from 'react';
import Banner from '../component/HomePage/Banner';
import OverView from '../component/HomePage/OverView';
import BudgetTips from '../component/HomePage/BudgetTips';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OverView/>
            <BudgetTips/>
        </div>
    );
};

export default Home;