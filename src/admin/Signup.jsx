import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/mahnyLogo.png';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

function Signup() {
    const [type, setType] = useState('password');

    return (
        <div className="flex min-h-full flex-col justify-center sm:mt-0 mt-[10vh] py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
                <img src={logo} alt="MahnyLogo" className="w-[250px] mx-auto absolute -z-10 left-1/2 top-0 transform -translate-x-1/2" />
                <h2 className="pt-8 text-center text-3xl font-bold text-white">Sign up</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium pb-1 text-gray-700">Password</label>
                            <div className='relative'>
                                <input
                                    // onChange={(e) => setPass(e.target.value)}
                                    id="password"
                                    name="password"
                                    type={type}
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                                <span
                                    className="flex justify-around absolute top-3 right-3 items-center"
                                    onClick={() => setType(type == 'password' ? 'text' : 'password')}>
                                    {type === 'password' ? <IoEyeOffOutline size={21} /> : <IoEyeOutline size={21} />}
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium pb-1 text-gray-700">Confirm Password</label>
                            <div className='relative'>
                                <input
                                    // onChange={(e) => setPass(e.target.value)}
                                    id="password"
                                    name="password"
                                    type={type}
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                                <span
                                    className="flex justify-around absolute top-3 right-3 items-center"
                                    onClick={() => setType(type == 'password' ? 'text' : 'password')}>
                                    {type === 'password' ? <IoEyeOffOutline size={21} /> : <IoEyeOutline size={21} />}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-[#950101] py-3 px-4 font-medium transition-all duration-300 text-white shadow-sm hover:bg-[#141414] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                    <div className="mt-5 text-gray-500 text-sm text-center">By signing up, you agree to the <Link className="underline">Terms of Service</Link> and <Link className="underline">Privacy Policy</Link></div>
                    <div className="mt-5 text-gray-500 text-sm text-center">Already have an account? <Link to={'/login'} className="underline hover:text-[#950101]">Sign in</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup