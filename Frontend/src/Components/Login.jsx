import { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext} from "../Context/AuthContext";

axios.defaults.withCredentials = true;

function Login() {
  useEffect(()=>{
    window.scrollTo(0,0)
  });
  
  const navigate = useNavigate();
  const {login}= useContext(AuthContext);

  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");

  // state change for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // check user filled all required fields
  const [isFormValid,setIsFormValid]= useState(false);


  useEffect(()=>{
    setIsFormValid(
      email !== '' && 
      password !== ''
    );
  },[email,password])
  function handlePassword() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  async function onSubmit(event) {
    event.preventDefault();
    const userInfo = {
      email,
      password,
    };
    // try {
    //   const res= await axios.post("http://localhost:4100/login", userInfo, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredential: true,
    //   });
    //     if (res.data) {
    //       setUser(res.data);
    //       toast.success("Loggedin Successfully");
    //       navigate("/");
    //     }
    //   } catch(err) {
    //     if (err.response) {
    //       toast.error("Error :" + err.response.data.message);
    //     }
    //   }
    const success = await login(userInfo);
    if (success){
      toast.success("Logged in Successfully");
      navigate('/')
    }else{
      toast.error("Error while logging in")
    }
  }
  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
            <h1 className="text-center text-3xl font-bold text-indigo-600 font-sans">HBP</h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to='/forgot-password'
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={isPasswordVisible ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12"
                  />
                  <div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-grey-300"
                    onClick={handlePassword}
                  >
                    {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-m font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-600"
                  disabled={!isFormValid}
                >
                  Log in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-blue-500">
              Not a member?
              <Link to="/signup" className="m-1">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
