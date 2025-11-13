import React, { use, useEffect, useState } from 'react';
import Mydiv from '../component/Mydiv';
import { AuthContext } from '../component/Context/AuthContext';
import useAxiosSecure from '../hook/useAxiosSecure';
import { Bar, BarChart,Tooltip, XAxis, YAxis } from 'recharts';
import { Link, useLocation } from 'react-router';

const Reports = () => {
     const axiosSecure = useAxiosSecure()
     const [transactions, setTransactions] = useState([])
     const { user } = use(AuthContext)
     const location=useLocation()
     useEffect(() => {
            axiosSecure.get(`/my-transactions?email=${user.email}`)
                .then(data => {
                  setTransactions(data.data)  
                })
        }, [user, axiosSecure])
        
        const dataObj = {}
        transactions.forEach(transaction=>{
            const category = transaction.category
            dataObj[category]= (dataObj[category] ||0)+transaction.amount
        })
        const data = Object.keys(dataObj).map(category=>({category,total:dataObj[category]}))
    return (
        <div>
            {
                data.length===0?<div className='flex flex-col items-center justify-center min-h-96'>
                    <h1 className="text-2xl md:text-5xl momo-font linear-text my-5 font-bold text-center"> Summary Not Available </h1>
                     <Link state={location.pathname} className='btn primary-btn w-40 mx-3' to={"/add-transaction"}>Add A Transaction </Link>
                </div>
                :<Mydiv className='my-10 px-3 flex flex-col justify-center'>
                <h1 className="text-3xl md:text-5xl momo-font linear-text my-5 font-bold text-center"> Financial Summary </h1>
                <div className='flex justify-center mt-5'>
                    <BarChart width={800} height={500} data={data}>
                    <Bar barSize={50} fill='#28D99D' dataKey={"total"}/>
                    <XAxis dataKey={'category'} />
                    <YAxis/>
                    <Tooltip contentStyle={{backgroundColor:'black',border:'black'}} />
                </BarChart>
                </div>
            </Mydiv> 
            }  
        </div>
    );
};

export default Reports;