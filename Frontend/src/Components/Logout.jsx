import { useNavigate } from "react-router-dom";
// import axios from "axios";
import toast from "react-hot-toast";
import {  useContext, useEffect, useRef } from "react";
import { AuthContext} from "../Context/AuthContext";

function Logout() {
  const navigate = useNavigate();
  const focusElementRef = useRef();
  const {logout} = useContext(AuthContext);


  useEffect(()=>{
    if (focusElementRef.current){
      focusElementRef.current.focus();
    }
  },[]);

  async function handleLogout() {
    // try {
    //   await axios.post(
    //     "http://localhost:4100/logout",
    //     {},
    //     { withCredentials: true }
    //   );
      await logout();
      toast.success("Logged out successfully");
      navigate("/login");
      // } catch (error) {
      //   console.error(error);
      // }
  }

  return (
    <div className="navbar-end pr-3">
      <button
        className="p-2 rounded-lg bg-red-500 font-semibold btn-ghost text-white hover:bg-red-600 hover:scale-110"
        onClick={handleLogout} 
      >
        Logout
      </button>
    {/* a hidden input tag to receive focus */}
    <input ref={focusElementRef}
    style={{position:'absolute',left:'-9999px'}}
    aria-hidden='true'
    />
    </div>
  );
}

export default Logout;
