/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

function ProtectedRoute({role,children}) {
    const {user}= useContext(AuthContext);
    // console.log(user);

    if (!user){
        return <Navigate to='/login'/>
    }

    if (role && user.role !== role){
        return <Navigate to='/'/>
    }
    return children;
}

export default ProtectedRoute
