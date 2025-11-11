import React from 'react';
import Mydiv from '../Mydiv';
import { Link } from 'react-router';

const TransactionCard = ({ transaction }) => {
    const {_id, type, category, amount, date } = transaction;
    return (
        <Mydiv className='flex flex-col sm:flex-row justify-around my-5 border border-secondary py-3 sm:rounded-full pl-5 sm:pl-0 shadow-2xl'>
            <img className='w-12 h-12 rounded-full' src={type==="expense"?`https://static.thenounproject.com/png/2376642-200.png`:"https://w7.pngwing.com/pngs/536/353/png-transparent-computer-icons-money-income-miscellaneous-text-service.png"} alt="" />
            <div className='left'>
                <h3 className='text-xl font-bold'>{type}</h3>
                <p>{category}</p>
            </div>
                <h2 className='text-2xl text-primary flex items-center momo-font'>${amount}</h2>
            <div className="middle flex items-center">
                <p>{date.split("T")[0] ||"yy/mm/dd"}</p>
            </div>
            <div className='right flex  items-center gap-3'>
                <button className='btn btn-warning rounded-full'>Update</button>
                <button className='btn btn-error rounded-full'>Delete</button>
                <Link to={`/transaction/${_id}`} className='primary-btn' >View Details</Link>
            </div>
        </Mydiv>
    );
};

export default TransactionCard;