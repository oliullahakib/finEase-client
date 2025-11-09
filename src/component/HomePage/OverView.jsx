import React from 'react';
import Mydiv from '../Mydiv';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FaBuildingColumns } from 'react-icons/fa6';
import { IoCashOutline } from 'react-icons/io5';

const OverView = () => {
    return (
        <Mydiv className='bg-linear-to-bl from-black  to-[#28d99e9f] mt-40 rounded-2xl shadow-2xl mb-10 pb-5'>
            <h2 className='text-3xl text-white font-semibold momo-font ml-5 lg:ml-50 pt-10 mb-5'>Over View</h2>
            <div className='grid md:grid-cols-2 gap-5 px-5 lg:w-1/2 mx-auto'>
                <div className="balance md:col-span-2 border glass-card min-h-40">
                    <h2 className='text-2xl flex items-center gap-2 p-5 text-secondary'> <MdOutlineAccountBalanceWallet size={50} /> Total Balance</h2>
                    <p className='text-center text-5xl font-semibold momo-font text-primary'>$5000.25</p>
                </div>
                <div className="income rounded-2xl bg-base-200 min-h-40 bg-">
                    <h2 className='text-2xl items-center gap-2 flex p-5 text-green-600'> <FaBuildingColumns size={20} /> Income</h2>
                    <p className='text-center text-3xl font-semibold momo-font text-primary'>$5000.25</p>
                </div>
                <div className="expenses rounded-2xl min-h-40 bg-base-200">
                      <h2 className='text-2xl flex items-center gap-2 p-5 text-red-300'> <IoCashOutline size={20} /> Expense</h2>
                    <p className='text-center text-3xl font-semibold momo-font text-primary'>$5000.25</p>
                </div>
            </div>
        </Mydiv>
    );
};

export default OverView;