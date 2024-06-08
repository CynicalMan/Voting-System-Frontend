import React from "react";
import {Outlet, Navigate} from "react-router-dom";
import {getAuthUser} from '../../localStorage';
const AdminAuth = () => {
    const auth = getAuthUser();
    return (
        <div>
            {
                auth && (auth.role === 'Candidate' || auth.role === 'Voter')? <Outlet /> : <Navigate to={"/login"} />
            }
        </div>
    )
};

export default AdminAuth;