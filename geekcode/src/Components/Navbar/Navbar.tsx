import Link from 'next/link';
import React from 'react';
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24 h-20'>
        <Link href="/" className='flex items-center h-full'>
            <img src="/logo-full.png" alt="GeekCode" className='h-full' />
        </Link>
        <div className="flex items-center">
            {/* Sign In button with brand-orange background and black hover effect */}
            <button 
                style={{backgroundColor: 'rgb(21, 194, 70)'}} 
                className='text-white px-3 py-2 sm:px-4 rounded-md text-sm font-medium
                hover:text-white hover:bg-black hover:border-2 hover:border-brand-orange'>
                Sign In
            </button>
        </div>
    </div>
}


export default Navbar;