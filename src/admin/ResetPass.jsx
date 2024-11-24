import { Link } from "react-router-dom";

function ResetPass() {
    return (
        <div className="flex min-h-full flex-col justify-center sm:mt-0 mt-[10vh] py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
                <h2 className="pt-8 text-center text-3xl font-bold">Forgot Password?</h2>
                <p className="text-sm text-center mt-5 text-gray-400">That's okay, don't worry, Dude! <br /> Just click on the button below to reset your password!</p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm mb-3 font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="your email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-gray-50 text-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-[#950101] py-3 px-4 font-medium transition-all duration-300 text-white shadow-sm hover:bg-[#141414] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <div className="mt-5 text-gray-500 text-sm text-center">Return <Link to={'/login'} className="underline hover:text-[#950101]">Sign in</Link></div>
                </div>
            </div>
        </div>
    )
}

export default ResetPass