import Link from 'next/link';
import React from 'react';
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    return <>
    <div className="navbar shadow- display-none m-auto h-[50px] w-full items-center justify-center px-6 md:flex bg-base-200">


    {/* <div className="navbar bg-base-200 shadow-"> */}
  <div className="navbar-start">
    {/* add Z:\Backend Java\GeekCode\geekcode\public\logo-full.png this logo and make is small as per navbar  * also add "/home" when user clicks it takes to homw page*/}
    <Link href="/home"><img src="/logo-full.png" alt="Logo" className="h-16 w-32"/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm btn-ghost bg-green-800 hover:bg-green-700 text-white">Sign in</a>
  </div>
</div>
    </>
}

export default Navbar;