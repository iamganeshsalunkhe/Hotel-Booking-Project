/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user,setUser]= useState(null);


    useEffect(()=>{
        async function fetchUserData() {
            try {
                const res = await axios.get('http://localhost:4100/profile',{withCredentials:true});
                setUser(res.data)
                console.log(res.data)
            } catch (error) {
                console.error("Error fetching user data",error);
            }
        }
        fetchUserData();
    },[]);


    return <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
}