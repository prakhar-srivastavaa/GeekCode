import Navbar from '@/Components/Navbar/Navbar';
import Coding from '@/Components/Coding/Coding';

import React from 'react';
import AuthModal from '@/Components/Modals/AuthModal';
import { useRecoilValue } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    // const authModal = useRecoilValue(authModalState);

    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className="mx-auto">
            <Navbar />
            <div className='flex item conter justify-center pointer-events-none select-none'>
                <img src={"/hero.png"} alt="Hero Image" className='w-1/2 h-1/2 mt-10'/>
            </div>
            <AuthModal />
        </div>
    </div>;
};
export default AuthPage;