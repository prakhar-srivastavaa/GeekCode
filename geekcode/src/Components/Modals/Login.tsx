import React from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    return (
        <form className='space-y-6 px-6 pb-4'>
            <h3 className='text-xl font-medium text-white'>
                Sign in to GeekCode
            </h3>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Email
                </label>
                <input type="email"
                    name="email"
                    id="email"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                />
            </div>
            <div>
                <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Password
                </label>
                <input type="password"
                    name="password"
                    id="password"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='*********'
                />
            </div>

            <button type='submit' className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                Login
            </button>
            <button className='flex w-full justify-end'>
                <a href='#' className='text-sm text-green-700 hover:underline w-full text-right'>
                    Forgot password?
                </a>
            </button>
            <div className='text-sm font-medium text-gray-300'>
                Not registered?
                <a></a>
                <a href='#' className=' text-green-700 hover:underline w-full'>
                    Create account
                </a>
            </div>
        </form>
    )
}
export default Login;