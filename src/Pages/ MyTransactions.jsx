import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';
import { AuthContext } from '../component/Context/AuthContext';
import TransactionCard from '../component/HomePage/TransactionCard';

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
            transactions?transactions.map(transaction=><TransactionCard key={transaction._id} transaction={transaction} />):''
           }
        </div>
    );
};

export default  MyTransactions;