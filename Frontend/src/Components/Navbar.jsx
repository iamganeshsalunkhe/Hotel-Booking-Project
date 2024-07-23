import { FaUserPlus ,FaUserAlt} from "react-icons/fa";
import styles from './Navbar.module.css'
import { Link,useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
    return (
        <div className={styles.main}>
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
        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow bg-red-400">
        <li><Link to=''>My Profile</Link></li>
        <li><Link to=''>My   </Link></li>
        <li><Link to=''>About EasyStay</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className="btn btn-ghost text-xl tracking-tight hover:tracking-wide ">EasyStay</Link>
  </div>
  <div className="navbar-end ">
    <div>
      {/* if user on other than signup page then show signup icon */}
      {location.pathname !=='/signup'?
      <Link to='/signup'>
    <button className="btn btn-ghost btn-circle bg-white hover:scale-110" >
        <FaUserPlus  />
    </button>
      </Link>:''}
    </div>
    {/* if user on other than signup page then show signup icon */}
    {location.pathname !== '/login'?
    <Link to='/login'>
    <button className="btn btn-ghost btn-circle bg-white mx-2">
        <FaUserAlt/>  
    </button>
    </Link>:''}
  </div>
            </div>
          </div>
    )
}

export default Navbar
