import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
function Signin() {
    // change the state of password 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // handle password visibilty
    function handlePassword(){
        setIsPasswordVisible((prevState) =>!prevState);
    }

    return (
        <>
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                    alt="Your Company"
                    src="../../public/Images/Logo.jpg"
                    className="mx-auto h-10 w-auto"/>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up </h2>
                </div>

                {/* for getting user name from user */}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm  leading-6 text-gray-900 font-bold" >Full name
                            </label>
                            <div className="mt-2">
                                <input
                                id="text"
                                name="text"
                                type="text"
                                required
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                </div>
                {/* for getting email from user as input */}
                         <div>
                            <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
            
          
            {/* for getting password from user */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                                Password
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                id="password"
                                name="password"
                                type={isPasswordVisible?'text':'password'
                                }
                                required
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12"
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer mr-1"
                                onClick={handlePassword}>
                                {isPasswordVisible?<FaRegEyeSlash />:<FaRegEye/>}
                                </div>
                            </div>
                        </div>
        {/* submit button */}
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign up
                    </button>
                </div>
            </form>
            <p className="mt-10 text-center text-sm text-blue-500">Already a member ? Login
            </p>
        </div>
      </div>
    </div>   
    </>
    )
}

export default Signin
