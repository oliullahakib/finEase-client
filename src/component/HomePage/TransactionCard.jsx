
import Mydiv from '../Mydiv';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { use, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const TransactionCard = ({ transaction, setTransactions }) => {
    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure()
    const modalRef = useRef()
    const { _id, type, category, amount, date, description } = transaction;
    const [radio, setRadio] = useState(type)
    const [thisCategory, setThisCategory] = useState('')
    const [thisAmount, setThisAmount] = useState()
    const [thisDate, setThisDate] = useState()
    const [thisDescription, setThisDescription] = useState('')
    const [id, setId] = useState('')
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/transaction/delete/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your transaction has been deleted.",
                                icon: "success"
                            });
                            axiosSecure.get(`/my-transactions?email=${user.email}`)
                                .then(data => {
                                    setTransactions(data.data)
                                })
                        }
                    })
            }
        });


    }
    const handleUpdate = () => {
        setRadio(type)
        setThisCategory(category)
        setThisAmount(amount)
        const dateObj = new Date(date);
        //  const formattedDate= date.toDateString('en-GB',{year:"numeric",month:"2-digit",day:"2-digit"})
        const formattedDate = dateObj.toISOString().slice(0, 10)
        setThisDate(formattedDate)
        setThisDescription(description)
        setId(_id)
        modalRef.current.showModal()
    }
    const handleUpdateTransaction = (e) => {
        e.preventDefault()
        const type = radio;
        const amount = Number(e.target.amount.value);
        if (!amount) return toast.error("Amount should be a Number")
        const category = e.target.category.value;
        const date = new Date(e.target.date.value);
        const description = e.target.description.value;
        const email = user.email;
        const name = user.displayName;
        const updateTransaction = { type, category, date, description, amount, name, email }
       

        axiosSecure.put(`/transaction/update/${id} `, updateTransaction)
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Transaction has been Updated.",
                        icon: "success"
                    })
                    modalRef.current.close()
                    axiosSecure.get(`/my-transactions?email=${user.email}`)
                        .then(data => {
                            setTransactions(data.data)
                        })
                }
            })
    }
    return (
        <Mydiv className='flex flex-col sm:flex-row justify-around my-5 border border-secondary py-3 sm:rounded-full pl-5 sm:pl-0 shadow-2xl'>
            <img className='w-12 h-12 rounded-full' src={type === "expense" ? `https://static.thenounproject.com/png/2376642-200.png` : "https://e7.pngegg.com/pngimages/688/266/png-clipart-computer-icons-profit-finance-earnings-money-others-miscellaneous-investment.png"} alt="" />
            <div className='left'>
                <h3 className='text-xl font-bold'>{type}</h3>
                <p>{category}</p>
            </div>
            <h2 className='text-2xl text-primary flex items-center momo-font'>${amount}</h2>
            <div className="middle flex items-center">
                <p>{date?.split("T")[0] || "yy/mm/dd"}</p>
            </div>
            <div className='right flex  items-center gap-3'>
                <button onClick={handleUpdate} className='btn inert:font-light btn-warning rounded-full'>Update</button>
                <button onClick={handleDelete} className='btn inert:font-light btn-error rounded-full'>Delete</button>
                <Link to={`/transaction/${_id}`} className='primary-btn' >View Details</Link>
            </div>

            {/* modal  */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleUpdateTransaction} className="fieldset">

                        <div className='left flex flex-col md:flex-row justify-between'>
                            <div>
                                <label className="label mb-1">Type</label>
                                <div className='radioo my-2 md:my-2 flex items-center gap-3'>
                                    <input onClick={() => setRadio("expense")} required type="radio" defaultChecked={radio === "expense" ? true : false} name="radio-1" className="radio" />
                                    <label>Expense</label>
                                    <input onClick={() => setRadio("income")} required
                                        defaultChecked={radio === "income" ? true : false}
                                        type="radio" name="radio-1" className="radio" />
                                    <label>Income</label>
                                </div>
                            </div>
                            <div>
                                {/* Category  */}
                                <label className="label pr-2">Category</label>
                                {
                                    radio === "expense" ? <select name='category' defaultChecked={thisCategory} className="select my-3 md:my-0">
                                        <option >{thisCategory}</option>
                                        <option >Food</option>
                                        <option>Home</option>
                                        <option>Transportation</option>
                                        <option>Health</option>
                                        <option>Education</option>
                                        <option>Technology</option>
                                        <option>Family</option>
                                        <option>Others</option>
                                    </select>
                                        : <select name='category' className="select">
                                            <option >{thisCategory}</option>
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
                                <input required name='amount' type="text" defaultValue={thisAmount} className="input" placeholder="Amount" />
                            </div>
                            <div>
                                <label className="label">Date</label>
                                <input required name='date' type="date" defaultValue={thisDate} className="input" placeholder="Date" />
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
                            <textarea required defaultValue={thisDescription} name='description' className="textarea w-full h-24" placeholder="Description"></textarea>
                        </fieldset>
                        <button className="btn inert:font-light btn-primary text-black mt-4">Update Transaction </button>
                    </form>
                    <div className="modal-action">

                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => modalRef.current.close()} className="btn inert:font-light btn-error">Close</button>

                    </div>
                </div>
            </dialog>
        </Mydiv>
    );
};

export default TransactionCard;