import React, { use } from 'react';
import { AuthContext } from '../component/Context/AuthContext';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location = useLocation()
    if(loading) return <Loading/>
    return (
        <div>
            {user?children:<Navigate state={location.pathname} to={"/login"} />}
        </div>
    );
};

export default PrivateRoute;