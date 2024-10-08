import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function Signup() {

    const navigate = useNavigate();

    // state for full name
    const [username, setUsername]= useState('');
    // state for email address
    const [email, setEmail] = useState('');
    // state for password
    const[password,setPassword]= useState('');
    // state for confirm password
    const [confirmPassword, setConfirmPassword]= useState("");
    
    // state for role
    const [role, setRole]= useState('customer');
    
    // change the state of password (visibility)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // change the state of confirm password (visibility)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // check user filled all fields
    const [isFormValid,setIsFormValid] = useState(false);


    useEffect(()=>{
      setIsFormValid(
        username !== "" && 
        email !== "" && 
        password !== "" && 
        confirmPassword !== "" && 
        password === confirmPassword
      );
    },[username,email,password,confirmPassword]);

    // handle password visibility
    function handlePassword(){
        setIsPasswordVisible((prevState) =>!prevState);
    }
    function handleConfirmPassword(){
      setIsConfirmPasswordVisible((prevState)=>!prevState)
    }

    async function onSubmit(event){
        event.preventDefault();
        const userInfo ={
            username,
            email,
            password,
            role
        }
        await axios.post('http://localhost:4100/signup',userInfo).then(
            (res)=>{
                if (res.data){
                    toast.success("Account created successfully")
                    navigate('/login');
                }
            }).catch((err)=>{
                if (err.response){
                    toast.error("Error while creating account!!Please try later")
                }
            })
    }

    return (
      <>
        <div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="text-center text-3xl font-bold text-indigo-600 font-sans">
                HBP
              </h1>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up{" "}
              </h2>
            </div>

            {/* for getting user name from user */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm  leading-6 text-gray-900 font-bold"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* for getting email from user as input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* for getting password from user */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12"
                    />
                    <div
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer mr-1"
                      onClick={handlePassword}
                    >
                      {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>

                  {/* check for same password */}
                  <div>

                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold leading-6 text-gray-900"
                    >
                     Confirm Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12"
                    />
                    <div
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer mr-1"
                      onClick={handleConfirmPassword}
                      >
                      {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                </div>
                </div>

                {/* For getting role for user */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm  leading-6 text-gray-900 font-bold"
                  >
                    Role
                  </label>
                  <div className="mt-2  p-1">
                    <select
                      name="role"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="admin">Admin(Property Owner)</option>
                      <option value="customer">Customer</option>
                    </select>
                  </div>
                </div>
                {/* submit button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                    disabled:bg-gray-600"
                    disabled={!isFormValid}
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-blue-500">
                Already a member ?
                <Link to="/login" className="m-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Signup
