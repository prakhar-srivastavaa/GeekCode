import Link from 'next/link';
import React from 'react';

type TopbarProps = {
    
};

const Topbar:React.FC<TopbarProps> = () => {
    
    return <div>
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <div className='flex w-full items-center justify-between max-w-[1200px] mx-auto'>
                <Link href="/" className='flex items-center justify-center h-20'>
                    <img src="/logo-full.png" alt="Logo" className="h-10" />
                </Link>

                <div className='flex items-center space-x-4 flex-1 justify-end'>
                    <div>
                        <a
                            href="https://github.com/prakhar-srivastavaa"
                            target='_blank'
                            rel="noreferrer"
                            className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                        >
                            Premium
                        </a>
                    </div>
                    <Link href="/auth">
                        <button className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white transition duration-300 ease-in-out">
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
}
export default Topbar;