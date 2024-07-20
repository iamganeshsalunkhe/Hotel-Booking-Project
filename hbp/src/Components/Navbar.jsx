import { FaUserPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


function Navbar() {
    return (
        <>
          <div className='bg-slate-400 '>
            <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>My Profile</a></li>
        <li><a>My   </a></li>
        <li><a>About EasyStay</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl tracking-tight hover:tracking-wide ">EasyStay</a>
  </div>
  <div className="navbar-end ">
    <div>
    <button className="btn btn-ghost btn-circle bg-white hover:scale-110" >
        <FaUserPlus  />
    </button>
    </div>
    <button className="btn btn-ghost btn-circle bg-white mx-2">
      <div className="indicator">
        <FaUserAlt/>
      </div>
    </button>
  </div>
            </div>
          </div>  
        </>
    )
}

export default Navbar
