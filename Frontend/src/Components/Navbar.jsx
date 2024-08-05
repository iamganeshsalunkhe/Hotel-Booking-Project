import { AiFillHome } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import Logout from "./Logout";
import axios from "axios";
import { AuthContext} from "../Context/AuthContext";

function Navbar() {
  const location = useLocation();
  const {user} = useContext(AuthContext) ;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log(user.role)
  useEffect(() => {
    const checkLogInStatus = async () => {
      try {
        const response = await axios.get("http://localhost:4100/check-token", {
          withCredentials: true,
        });
        setIsLoggedIn(response.status === 200);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkLogInStatus();
  }, []);

  return (
    <div className={styles.main}>
      <div className="navbar bg-base-300 flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gray-900"
            >
              {/*  conditionally render when logged user is admin */}

              {user && user.role === "admin" && (
                <>
                  <li>
                    <Link to="/property">Manage  Property</Link>
                  </li>
                  <li>
                    <Link to="/amenity">Manage Amenities</Link>
                  </li>
                  <li>
                    <Link to="/booking">Manage Bookings</Link>
                  </li>
                  <li>
                    <Link to="/account">My Account </Link>
                  </li>
                </>
              )}

              {user && user.role === "customer" && (
                <>
                  <li>
                    <Link to="/My booking">My Bookings</Link>
                  </li>

                  <li>
                    <Link to="/account">My Account</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="text-xl p-2 font-semibold">
            <AiFillHome />
          </Link>
        </div>

        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl tracking-light  ">
            HBP
          </Link>
        </div>

        {/* if user is loggedin then show logout button else shows signup and login button */}

        {isLoggedIn ? (
          <Logout  />
        ) : (
          <div className="navbar-end  flex ">
            <div className="">
              {/* if user on other than signup page then show signup icon  when user is not loggedin */}
              {location.pathname !== "/signup" ? (
                <Link to="/signup">
                  <div className="">
                    <button className=" btn btn-ghost btn-square bg-white  hover:scale-110">
                      Sign Up
                    </button>
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
            {/* if user on other than login page then show login icon */}
            {location.pathname !== "/login" ? (
              <Link to="/login">
                <button className="btn btn-ghost btn-square bg-white mx-2">
                  Log In
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
