import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // Auto-fill email from login page
    useEffect(() => {
        if (authModal.email) {
            setEmail(authModal.email);
        }
    }, [authModal.email]);

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = await sendPasswordResetEmail(email);
        if (success) {
            setEmailSent(true);
            toast.success('Password reset email sent! Check your inbox.', { position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            });
        }
    };

    const handleBackToLogin = () => {
        setAuthModalState((prev) => ({ ...prev, type: "login", email: "" }));
        setEmailSent(false);
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
            <p className='text-gray-300'>
                Forgotten your password ? Enter your email to reset it.
            </p>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Email
                </label>
                <input type="email"
                    name="email"
                    id="email"
                    value={email}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type='submit' className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                {sending ? "Sending..." : "Reset Password"}
            </button>

            {emailSent && (
                <div className='text-center'>
                    <p className='text-green-400 text-sm mb-3'>✓ Password reset email sent successfully!</p>
                    <button 
                        type='button'
                        onClick={handleBackToLogin}
                        className='w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    >
                        ← Go Back to Login
                    </button>
                </div>
            )}

            {!emailSent && (
                <button 
                    type='button'
                    onClick={handleBackToLogin}
                    className='w-full text-gray-300 hover:text-white text-sm'
                >
                    ← Back to Login
                </button>
            )}
        </form>
    )
}
export default ResetPassword;