'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from './common/logo'; // Update the path to your logo component
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="center md:pt-8 pt-4 w-full text-white relative">
      <div className="between w-[90%]">
        <LogoImage />
        <div className="gap-8 md:flex items-center justify-center sm:hidden text-[.9rem]">
          <Link href="/vendorsListings">Categories</Link>
          <Link href="/service">Services</Link>
          <Link href="">
            <button className="bg-yellow text-black text-normal font-bold px-8 py-2 rounded cursor-pointer w-72 h-[66px]">
              Register
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleOpenMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={27} height={27} />
        </div>
      </div>
      {openMenu && (
        <div className="w-screen bg-white text-black absolute top-0 right-0 left-0 center py-6">
          <div className="w-[90%] flex-col flex">
            <div className="flex items-end justify-end" onClick={handleCloseMenu}>
              <FaTimes className="text-[1.5rem]" />
            </div>
            <div className="gap-8 mt-8 flex flex-col text-[1rem]">
              <Link href="/vendorsListings">Categories</Link>
              <Link href="/service">Services</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
