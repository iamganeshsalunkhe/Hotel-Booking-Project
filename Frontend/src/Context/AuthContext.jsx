/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user,setUser]= useState(null);
    // useCallback memoize the output until its dependencies value changes 
        const fetchUserData = useCallback(async ()=>{
            try {
                const res = await axios.get('http://localhost:4100/profile',{withCredentials:true});
                setUser(res.data)
                console.log(res.data)
            } catch (error) {
                console.error("Error fetching user data",error);
            }
        },[]);

        // runs when user data changes
        useEffect(()=>{
            fetchUserData();
        },[fetchUserData]);

        // logging functionality to fetch user details when user loggedin
        // to persist the data all round app until user logged out
        const login = async (userInfo)=>{
            try {
                const res = await axios.post('http://localhost:4100/login',userInfo,{headers:{
                    'Content-Type':'application/json'
                }});
                if (res.data){
                    setUser(res.data);
                    await fetchUserData();
                    return true;
                }
            } catch (error) {
                console.error('Login error :',error)
                return false
            }
        };



        const logout = async()=>{
            try {
                await axios.post('http://localhost:4100/logout',{},{withCredentials:true});
                setUser(null);
            } catch (error) {
                console.error(error)
            }
        }


    return <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
}