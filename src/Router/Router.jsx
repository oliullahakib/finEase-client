import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import Reports from "../Pages/Reports";
import AddTransaction from "../Pages/AddTransaction";
import MyTransactions from "../Pages/ MyTransactions";
import TransactionDetails from "../Pages/TransactionDetails";
import Error404 from "../Pages/Error404";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
            },
            {
                path:'/profile',
                element:<PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path:'/reports',
                element:<PrivateRoute><Reports/></PrivateRoute>
            },
            {
                path:'/add-transaction',
                element:<PrivateRoute><AddTransaction/></PrivateRoute>
            },
            {
                path:'/my-transactions',
                element:<PrivateRoute><MyTransactions/></PrivateRoute>
            },
            {
                path:'/transaction/:id',
                element:<PrivateRoute><TransactionDetails/></PrivateRoute>
            }
        ]
    },
    {
        path:'/*',
        Component:Error404
    }
])