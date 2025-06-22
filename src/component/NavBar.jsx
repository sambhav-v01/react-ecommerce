import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from "../Context/cartContext";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

export const NavBar = () => {
  const { cartitem } = useCart(); // corrected from `cartItem`
  const [openNav, setOpenNav]=useState(false);

  return (
    <div className="bg-white py-4 shadow-2xl px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/"><h1 className="font-bold text-4xl"><span className="text-red-500 font-serif">N</span>exte</h1></Link>
        </div>

        {/* Menu Section */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex gap-7 items-center text-xl font-semibold hidden ">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? 'border-b-[3px] border-red-500 transition-all' : 'text-black'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Products" className={({ isActive }) =>
                isActive ? 'border-b-[3px] border-red-500 transition-all' : 'text-black'}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({ isActive }) =>
                isActive ? 'border-b-[3px] border-red-500 transition-all' : 'text-black'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) =>
                isActive ? 'border-b-[3px] border-red-500 transition-all' : 'text-black'}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
              {cartitem?.length || 0}
            </span>
          </Link>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-7 w-7 md:hidden'/>
                    }
        </nav>
      </div>
       <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  );
};
