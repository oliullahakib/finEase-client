import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';
import { AuthContext } from '../component/Context/AuthContext';
import TransactionCard from '../component/HomePage/TransactionCard';
import { Link } from 'react-router';

const  MyTransactions = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=use(AuthContext)
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
      axiosSecure.get(`/my-transactions?email=${user.email}`)
      .then(data=>{
        setTransactions(data.data)
      })
    }, [user,axiosSecure])
    return (
        <div>
           {
            transactions.length===0? <div className='flex flex-col justify-center items-center min-h-70'>
                <h2 className='text-3xl opacity-55' >No Transaction Available</h2>
                <Link to={"/add-transaction"} className='primary-btn mt-3'>Add Transaction</Link>
            </div>:
           transactions.map(transaction=><TransactionCard key={transaction._id} transaction={transaction}  setTransactions={setTransactions} /> )
           }
        </div>
    );
};

export default  MyTransactions;