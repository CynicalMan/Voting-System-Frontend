import React from "react";
import {Outlet, Navigate} from "react-router-dom";
import { getAuthUser } from "../../localStorage";

const AdminAuth = () => {
    const auth = getAuthUser();
    // TODO i will make it null until the role is fixed for the admin
    return (
        <div>
            {
                auth && auth.role === "Admin"? <Outlet /> : <Navigate to={"/login"} />
            }
        </div>
    )
};

export default AdminAuth;