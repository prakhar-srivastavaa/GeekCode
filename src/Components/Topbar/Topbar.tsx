import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import Image from 'next/image';
import { problems } from '../../mockProblems/problems';
import { FaChevronLeft, FaChevronRight, FaCoffee } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import { useRouter } from 'next/router';
import BuyCoffeeModal from '../Modals/BuyCoffeeModal';
import ProfileModal from '../Modals/ProfileModal';

type TopbarProps = {
    problemPage?: boolean;
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
    const [user] = useAuthState(auth);
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();
    const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState('/avatar.png');

    // Load profile picture from localStorage
    useEffect(() => {
        if (user) {
            const savedProfile = localStorage.getItem(`profile_${user.uid}`);
            if (savedProfile) {
                const profile = JSON.parse(savedProfile);
                if (profile.profilePicture) {
                    setProfilePicture(profile.profilePicture);
                }
            }
        }
    }, [user, isProfileModalOpen]);

    const handleProblemChange = (isForward: boolean) => {
        const { order } = problems.find((problem) => problem.id === router.query.pid)!;
        const direction = isForward ? 1 : -1;
        const nextProblemOrder = order + direction;
        const nextProblem = problems.find((problem) => problem.order === nextProblemOrder);

        if (nextProblem) {
            router.push(`/problems/${nextProblem.id}`);
        }
    };
    
    return <div>
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto":""}`}>
                
                    <Link href="/" className='flex items-center justify-center h-10'>
                        <img src="/logo-full.png" alt="Logo" className="h-10" />
                    </Link>
                

                {problemPage && (
                    <div className='flex items-center gap-4 justify-center flex-1'>
                        <div 
                            className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(false)}
                        >
                            <FaChevronLeft />
                        </div>
                        <Link href="/" className='flex items-center justify-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
                            <div>
                                <BsList />
                            </div>
                            <p>Problem List</p>
                        </Link>
                        <div 
                            className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(true)}
                        >
                            <FaChevronRight />
                        </div>
                    </div>  
                )}

                <div className='flex items-center space-x-3 justify-end'>
                    <button
                        onClick={() => setIsCoffeeModalOpen(true)}
                        className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-green-400 hover:bg-dark-fill-2 flex items-center gap-1.5 transition-colors text-sm whitespace-nowrap'
                    >
                        <FaCoffee className='text-sm' />
                        <span className='hidden sm:inline'>Buy Coffee</span>
                    </button>
                        {!user &&(
                            <Link href="/auth" onClick={()=> setAuthModalState((prev) => ({...prev, isOpen: true,type: "login"}))}>
                                <button className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white transition duration-300 ease-in-out">
                                    Sign in
                                </button>
                            </Link>
                        )}
                        {problemPage && <Timer/>}
                        {user &&(
                            <div 
                                className='cursor-pointer group relative'
                                onClick={() => setIsProfileModalOpen(true)}
                            >
                                <img 
                                    src={profilePicture} 
                                    alt="user profile img" 
                                    className="w-7 h-7 rounded-full object-cover border-2 border-green-500 hover:border-green-400 transition-colors"
                                />
                                <div className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-green-400 py-1 px-2 rounded shadow-lg 
                                z-40 group-hover:scale-100 scale-0
                                transition-all duration-300 ease-in-out whitespace-nowrap'>
                                    <p className='text-sm'>Edit Profile</p>
                                    <p className='text-xs text-gray-400'>{user.email}</p>
                                </div>
                            </div>
                        )}

                        {user &&<Logout />}
                </div>
            </div>
        </nav>

        {/* Buy Coffee Modal */}
        <BuyCoffeeModal 
            isOpen={isCoffeeModalOpen} 
            onClose={() => setIsCoffeeModalOpen(false)} 
        />

        {/* Profile Modal */}
        <ProfileModal 
            isOpen={isProfileModalOpen} 
            onClose={() => setIsProfileModalOpen(false)} 
        />
    </div>
}
export default Topbar;