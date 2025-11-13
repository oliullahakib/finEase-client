import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';
import { AuthContext } from '../component/Context/AuthContext';
import TransactionCard from '../component/HomePage/TransactionCard';
import { Link } from 'react-router';
import Loading from './Loading';
import Mydiv from '../component/Mydiv';

const MyTransactions = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading, setLoading } = use(AuthContext)
    const [transactions, setTransactions] = useState([])
    const [sort, setSort] = useState('')
    useEffect(() => {
        axiosSecure.get(`/my-transactions?email=${user.email}&sort=${sort}`)
            .then(data => {
                setTransactions(data.data)
                setLoading(false)
            })
    }, [user, axiosSecure, setLoading,sort])
    if (loading) return <Loading />
    return (
        <div>
            <Mydiv>
                {
                    transactions.length>1&&<div className='flex justify-end mt-5 mr-2'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Sort by:</legend>
                        <select defaultValue="none" className="select">
                            <option disabled={true}>none</option>
                            <option onClick={()=>setSort('date')}>Date</option>
                            <option onClick={()=>setSort('amount')}>Amount</option>
                        </select>
                    </fieldset>
                </div>
                }
            </Mydiv>
           <p className={`text-2xl container mx-auto mt-2`}>All Transactions (<span className='linear-text font-bold momo-font'>{transactions.length}</span>)</p>
            {
                transactions.length === 0 ? <div className='flex flex-col justify-center items-center min-h-70'>
                    <h2 className='text-3xl opacity-55' >No Transaction Available</h2>
                    <Link to={"/add-transaction"} className='primary-btn mt-3'>Add Transaction</Link>
                </div> :
                    transactions.map(transaction => <TransactionCard key={transaction._id} transaction={transaction} setTransactions={setTransactions} />)
            }
        </div>
    );
};

export default MyTransactions;