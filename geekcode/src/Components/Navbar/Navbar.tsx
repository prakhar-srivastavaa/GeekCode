import Link from 'next/link';
import React from 'react';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <div className="navbar shadow- display-none m-auto h-[50px] w-full items-center justify-center px-6 md:flex bg-base-200">
        <div className="navbar-start">
          <Link href="/home"><img src="/logo-full.png" alt="Logo" className="h-16 w-32" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
        </div>
        {/* add herif link/auth-login when clicked button signin*/}
        <div className="navbar-end">
          <Link href="/auth-login">
          <button className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white">Sign in</button>
</Link>
          {/* <a className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white">Sign in</a> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;