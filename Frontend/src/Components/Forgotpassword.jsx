import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Forgotpassword() {
  const navigate = useNavigate();
  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");
  // state for confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  // state for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // state for confirm password visibility
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // state for form valid
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      email !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword
    );
  }, [email, password, confirmPassword]);

  // handle password visibility
  function handlePassword() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  
  // handle confirmPassword visibility
  function handleConfirmPassword() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  }



  async function onSubmit (e){
    e.preventDefault();
    await axios.post('http://localhost:4100/forgot-password',{email,password})
    .then((res)=>{
        if (res.data){
            toast.success("Password changed Successfully.")
            navigate('/login')
        }
    })
    .catch((err)=>{
        if (err.res){
            toast.error("Error while updating password")
        }
    })
  }

  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
            <h1 className="text-center text-3xl font-bold text-indigo-600 font-sans">
              HBP
            </h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
              {/* handle email field */}
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address :
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


            {/* for handling password field */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password :
                  </label>
                </div>

                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={isPasswordVisible ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
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



              {/* for confirm password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm new password :
                  </label>
                </div>

                <div className="mt-2 relative">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12"
                  />
                  <div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-grey-300"
                    onClick={handleConfirmPassword}
                  >
                    {isConfirmPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-m font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-600"
                  disabled={!isFormValid}
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword
