import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';
import { AuthContext } from '../component/Context/AuthContext';

const  MyTransactions = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=use(AuthContext)
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
      axiosSecure.get(`/my-transactions?email=${user.email}`)
      .then(data=>{
        console.log(data.data)
      })
    }, [user,axiosSecure])
    
    return (
        <div>
            my transactions
        </div>
    );
};

export default  MyTransactions;