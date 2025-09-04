import { authModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
        const handleClick = () => {
            setAuthModalState((prev) => ({ ...prev, type: "login" }))
        };

    return (
        <form className='space-y-6 px-6 pb-4 '>
            <h3 className='text-xl font-medium text-white'>
                Register to GeekCode {"</>"}
            </h3>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                    Email
                </label>
                <input type="email"
                    name="email"
                    id="email"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-500 placeholder-gray-500 text-black'
                    placeholder='name@company.com'
                />
            </div>
            <div>
                <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>
                    Display Name
                </label>
                <input type="displayName"
                    name="displayName"
                    id="displayName"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='john Doe'
                />
            </div>
            <div>
                <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
                    Password
                </label>
                <input type="password"
                    name="password"
                    id="password"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-500 placeholder-gray-500 text-black'
                    placeholder='*********'
                />
            </div>

            <button type='submit' className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                Register
            </button>
        
            <div className='text-sm font-medium text-gray-300'>
                Already have an account?{" "}
                <a></a>
                <a href='#' className=' text-green-700 hover:underline w-full' onClick={handleClick}>
                    Log In
                </a>
            </div>
        </form>
    )
}
export default Signup;