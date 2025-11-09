import React from 'react';
import heroImg from "../../assets/heroImage.png"
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full lg:pl-8 bg-linear-to-t from-[#28d99e9f] via-[#0000] to-black'>
            <div className="left flex flex-col justify-center p-4 flex-1">
                <h1 className='momo-font text-3xl mt-5 lg:mt-0 md:text-5xl space-y-2'>
                   <p> The Clarity You Need,</p>
                    <p>The Control You Deserve.</p>
                    <p>Save Smarter, Live Better.</p>
                   <p> Finance, Simplified.</p>
                </h1>
                <p className='opacity-60 my-5'>Take control of your Finance with confidence and clearity our tools and insights help you plan smarter and build the future you deserve</p>
                <div>
                    <Link to={"/login"} className='primary-btn cursor-pointer hover:opacity-60  transition ease-in-out'>Get Started</Link>
                    <button className='ml-3 glass-btn'>Learn More</button>
                </div>
            </div>
            <div className="right flex mt-5 lg:mt-0 lg:justify-end flex-1">
                <img className='w-full md:h-96 object-cover' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;