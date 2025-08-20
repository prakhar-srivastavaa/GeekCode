import Link from 'next/link';
import React from 'react';
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-8 h-24'>
        <Link href="/" className='flex items-center h-full'>
            <img src="/logo-full.png" alt="GeekCode" className='h-16 mr-2 sm:mr-4'   />
        </Link>
        <div className="flex items-center">
            {/* green Sign In button and need black grey effect in button from all corner and side of rectangle of the button when mouse is over the button and when clicked a modern happy effect in bakcground with glittering effect */}
            <button className='bg-black bg-brand-orange-fallback text-white px-2 py-1 sm:px-4 rounded-md text-sm font-24
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange '>
                <Link href="/login">Sign In</Link>
            </button>
        </div>
    </div>
}


export default Navbar;