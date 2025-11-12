import React, { use, useEffect, useState } from 'react';
import Mydiv from '../component/Mydiv';
import { AuthContext } from '../component/Context/AuthContext';
import useAxiosSecure from '../hook/useAxiosSecure';
import { Bar, BarChart,Tooltip, XAxis, YAxis } from 'recharts';

const Reports = () => {
     const axiosSecure = useAxiosSecure()
     const [transactions, setTransactions] = useState([])
     const { user } = use(AuthContext)
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
            <Mydiv className='my-10 flex flex-col justify-center'>
                <h1 className="text-3xl md:text-5xl momo-font linear-text my-5 font-bold text-center"> Financial Summary </h1>
                <div className='flex justify-center mt-5'>
                    <BarChart width={800} height={500} data={data}>
                    <Bar width={100} fill='#28D99D' dataKey={"total"}/>
                    <XAxis dataKey={'category'} />
                    <YAxis/>
                    <Tooltip contentStyle={{backgroundColor:'black',border:'black'}} />
                </BarChart>
                </div>
            </Mydiv>   
        </div>
    );
};

export default Reports;