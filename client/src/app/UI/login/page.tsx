
const login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-no-repeat bg-center " style={{ backgroundImage: "url('/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg')"}}>
      <div className="max-w-sm  p-10 rounded-lg shadow-md bg-white/13 backdrop-blur-2xl border border-white/10 ">
            <div className="flex justify-center  mx-auto text-white font-bold capitalize text-2xl font- ">
                <h1>Login</h1>
            </div>

            <form className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-white font-sans">Username</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus: focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-white font-sans">Password</label>
                        <a href="#" className="text-xs text-white hover:underline">Forget Password?</a>
                    </div>

                    <input type="password" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out  bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none  focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-xs text-center text-white ">
                    or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button type="button"  className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-800  focus:outline-none foucs:ring focus:ring-gray-opacity focus:ring-gray-300">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-900"> Don't have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Register</a></p>
        </div>
    </div>
  )
}

export default login;
