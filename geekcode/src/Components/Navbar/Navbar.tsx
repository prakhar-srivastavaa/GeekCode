import { authModalState } from '@/atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState =useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({...prev, isOpen: true, type: "login"}))
  }
  return (
    <>
      <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
          <Link href="/" className='flex items-center justify-center h-20'>
            <img src="/logo-full.png" alt="Geekcode" className="h-full" />
          </Link>
        <div className="flex items-center">
          <button className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white transition duration-300 ease-in-out
          " onClick={handleClick}>
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;