import React, { use, useEffect, useState } from 'react';
import Mydiv from '../component/Mydiv';
import useAxiosSecure from '../hook/useAxiosSecure';
import { useParams } from 'react-router';
import { AuthContext } from '../component/Context/AuthContext';

const TransactionDetails = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = use(AuthContext)
    const [transactions, setTransactions] = useState([])
    const [categoryTransactions, setCategoryTransactions] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axiosSecure.get(`/transaction/${id}`)
            .then(data => {
                setTransactions(data.data)
                //   getting category transactions 
                axiosSecure.get(`/my-transactions?email=${user.email}&category=${data.data.category}`)
                    .then(data => {
                        setCategoryTransactions(data.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })


            })
    }, [axiosSecure, id, user])
    let categoryAmount = 0
    categoryTransactions.forEach(transaction => {
        categoryAmount = categoryAmount + transaction.amount
    })

    const { amount, category, date, description, type } = (transactions)
    return (
        <Mydiv className='md:w-2xl mx-auto border rounded-2xl overflow-hidden my-20'>
            <h1 className="text-2xl momo-font linear-text my-5 font-bold text-center">Transaction Details
            </h1>
            <div className="flex justify-between bg-base-100  shadow-sm">
                <div className="left  w-1/2 border">
                    <div className='border-b pl-3 py-2'>
                        <h2 className='text-xl '>Type</h2>
                        <p className='font-bold'>{type}</p>
                    </div>
                    <div className='pl-3 py-2'>
                        <h2 className='text-xl'>Category</h2>
                        <p className='font-bold'>{category}</p>
                    </div>
                </div>
                <div className="right w-1/2 border">
                    <div className='border-b pl-3 py-2'>
                        <p>Amount</p>
                        <h2 className='text-2xl text-primary flex items-center momo-font'>${amount}</h2>
                    </div>
                    <div className='pl-3 py-2'>
                        <h2 className='text-xl'>Date</h2>
                       <p>{date.split("T")[0] ||"yy/mm/dd"}</p>
                    </div>
                </div>
            </div>
            <div className='pl-3 py-2 flex flex-col items-center'>
                <h2 className='text-xl'>Total Amount of this category</h2>
                <h2 className='text-2xl text-primary flex items-center momo-font'>${categoryAmount}</h2>
            </div>
            <div className='border pl-3 py-2'>
                <h2 className='text-xl'>Description</h2>
                <p className=' text-center opacity-55 px-3'>{description}</p>
            </div>
        </Mydiv>
    );
};

export default TransactionDetails;