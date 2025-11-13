import React, { use, useState } from 'react';
import { AuthContext } from '../component/Context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hook/useAxiosSecure';

const AddTransaction = () => {
    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [radio, setRadio] = useState('expense')
    const handleAddTransaction = (e) => {
        e.preventDefault()
        const type = radio;
        const amount = Number(e.target.amount.value);
        if (!amount) return toast.error("Amount should be a Number")
        const category = e.target.category.value;
        const date = new Date(e.target.date.value);
        const description = e.target.description.value;
        const email = user.email;
        const name = user.displayName;
        const newTransaction = { type, category, date, description, amount, name, email }
        

        axiosSecure.post("/add-transaction", newTransaction)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Added!",
                        text: "Your Transaction has been Added.",
                        icon: "success"
                    })
                    e.target.reset()
                }
            })
    }

    return (
        <div>

            <h1 className="text-5xl momo-font linear-text my-5 font-bold text-center">Add Transactions</h1>
            <div className="hero-content mx-auto flex-col lg:flex-row-reverse">

                <div className="card  w-full max-w-xl shrink-0 shadow-2xl">

                    <div className="card-body ">
                        <form onSubmit={handleAddTransaction} className="fieldset">

                            <div className='left flex flex-col md:flex-row justify-between'>
                                <div>
                                    <label className="label mb-1">Type</label>
                                    <div className='radioo my-2 md:my-2 flex items-center gap-3'>
                                        <input onClick={() => setRadio("expense")} required type="radio" defaultChecked name="radio-1" className="radio" />
                                        <label>Expense</label>
                                        <input onClick={() => setRadio("income")} required type="radio" name="radio-1" className="radio" />
                                        <label>Income</label>
                                    </div>
                                </div>
                                <div>
                                    {/* Category  */}
                                    <label className="label pr-2">Category</label>
                                    {
                                        radio === "expense" ? <select name='category' defaultValue="Pick a color" className="select my-3 md:my-0">
                                            <option >Food</option>
                                            <option>Home</option>
                                            <option>Transportation</option>
                                            <option>Health</option>
                                            <option>Education</option>
                                            <option>Technology</option>
                                            <option>Family</option>
                                            <option>Others</option>
                                        </select>
                                            : <select name='category' defaultValue="Pick a color" className="select">
                                                <option >Salary</option>
                                                <option>Pocket Money</option>
                                                <option>Business</option>

                                            </select>

                                    }
                                </div>
                            </div>
                            <div className='right flex justify-between pb-5'>
                                <div>
                                    {/* Amount  */}
                                    <label className="label">Amount</label>
                                    <input required name='amount' type="text" className="input" placeholder="Amount" />
                                </div>
                                <div>
                                    <label className="label">Date</label>
                                    <input required name='date' type="date" className="input" placeholder="Date" />
                                </div>
                            </div>

                            {/* user info */}

                            <div className='userInfo flex flex-col md:flex-row justify-between border-t  pt-5'>
                                <div>
                                    {/* UserName  */}
                                    <label className="label">User Name</label>
                                    <input defaultValue={user.displayName} type="text" className="input bg-base-200 text-white opacity-55" disabled />
                                </div>
                                <div>
                                    {/* UserEmail  */}
                                    <label className="label">User Email</label>
                                    <input defaultValue={user.email} type="text" className="input bg-base-200 text-white opacity-55" disabled />
                                </div>

                            </div>

                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Description</legend>
                                <textarea required name='description' className="textarea w-full h-24" placeholder="Description"></textarea>
                            </fieldset>
                            <button className="btn btn-primary text-black mt-4">Add Transaction </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTransaction;