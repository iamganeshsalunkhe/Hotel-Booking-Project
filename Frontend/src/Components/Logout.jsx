import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Logout() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post(
        "http://localhost:4100/logout",
        {},
        { withCredentials: true }
      );
      console.log("logged out");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="navbar-end pr-3">
      <button
        className="p-2 rounded-lg bg-red-500 font-semibold btn-ghost text-white hover:bg-red-600 hover:scale-110"
        onClick={handleLogout} 
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
