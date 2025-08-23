import Navbar from '@/Components/Navbar/Navbar';
import Coding from '@/Components/Coding/Coding';

import React from 'react';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className="mx-auto">
            <Navbar />
            <div className='flex justify-center'>

            </div>
        </div>
    </div>;
};
export default AuthPage;