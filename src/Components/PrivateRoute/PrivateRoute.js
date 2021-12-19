import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location=useLocation();

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
    if(user.email){
        return children;
    }
    return <Navigate to="/login"  state={{from:location}}/>
    
};

export default PrivateRoute;