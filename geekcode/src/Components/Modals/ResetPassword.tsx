import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = await sendPasswordResetEmail(email);
        if (success) {
            toast.success('Password reset email sent! Check your inbox.', { position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            });
        }
    };
    // useEffect(() => {
    //     if (error) alert(error.message);
    // }, [error]);// firebase doent send 404 insted for security reason it send 200 for all email entered
    return (
        <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 '
            onSubmit={handleReset}>
            <h3 className='text-xl font-medium text-white'>
                Reset Password
            </h3>
            <p>
                Forgotten your password ? Enter your email to reset it.
            </p>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Email
                </label>
                <input type="email"
                    name="email"
                    id="email"
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type='submit' className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                Reset Password
            </button>
        </form>
    )
}
export default ResetPassword;