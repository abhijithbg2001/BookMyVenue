
const register = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-no-repeat bg-center " style={{ backgroundImage: "url('/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg')"}}>
          <div className="max-w-sm  p-10 rounded-lg shadow-md bg-white/13 backdrop-blur-2xl border border-white/10 ">
                <div className="flex justify-center  mx-auto text-white font-bold capitalize text-2xl font- ">
                    <h1>Register</h1>
                </div>

                <form className="mt-5">
                    <div>
                        <label htmlFor="username" className="block text-sm  text-gray-800 dark:text-white font-sans">Full Name</label>
                        <input type="text" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus: focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-white font-sans">Email</label>
                        <input type="email" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus: focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-white font-sans">Password</label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus: focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="phone" className="block text-sm text-gray-800 dark:text-white font-sans">Phone</label>
                        <input type="tel" className="block w-full px-4 py-2 mt-2 transition duration-500 ease-in-out bg-white/10 border rounded-lg  dark:text-gray-300 dark:border-white focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus: focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-900"> Already have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign in</a></p>
            </div>
       </div>
    </div>
  )
}

export default register
