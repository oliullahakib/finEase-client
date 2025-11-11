
import Mydiv from '../Mydiv';
import { Link } from 'react-router';
import useAxios from '../../hook/useAxios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const TransactionCard = ({ transaction, setTransactions }) => {
    const axiosInstance = useAxios()
    const {user} = use(AuthContext)
    const axiosSecure=useAxiosSecure()
    const { _id, type, category, amount, date } = transaction;
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
                axiosInstance.delete(`/transaction/delete/${_id}`)
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


    return (
        <Mydiv className='flex flex-col sm:flex-row justify-around my-5 border border-secondary py-3 sm:rounded-full pl-5 sm:pl-0 shadow-2xl'>
            <img className='w-12 h-12 rounded-full' src={type === "expense" ? `https://static.thenounproject.com/png/2376642-200.png` : "https://w7.pngwing.com/pngs/536/353/png-transparent-computer-icons-money-income-miscellaneous-text-service.png"} alt="" />
            <div className='left'>
                <h3 className='text-xl font-bold'>{type}</h3>
                <p>{category}</p>
            </div>
            <h2 className='text-2xl text-primary flex items-center momo-font'>${amount}</h2>
            <div className="middle flex items-center">
                <p>{date?.split("T")[0] || "yy/mm/dd"}</p>
            </div>
            <div className='right flex  items-center gap-3'>
                <button className='btn btn-warning rounded-full'>Update</button>
                <button onClick={handleDelete} className='btn btn-error rounded-full'>Delete</button>
                <Link to={`/transaction/${_id}`} className='primary-btn' >View Details</Link>
            </div>
        </Mydiv>
    );
};

export default TransactionCard;