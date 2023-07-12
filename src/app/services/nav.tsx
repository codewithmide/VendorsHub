"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/common/logo";



export const Nav = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className="flex items-center justify-between mx-auto ">
            <Logo />

            {/* DESKTOP NAV */}
                    <div className="md:flex justify-between gap-16 text-sm font-semibold hidden text-white">
                        {/* <Link className={`hover:text-secondary text-[1.1rem] transition duration-100 ${router.pathname === 'vendorsListings' ? 'text-secondary' : ''}`} href='/vendorsListings'>Categories</Link>
                        <Link className={`hover:text-secondary text-[1.1rem] transition duration-100 ${router.pathname === 'service' ? 'text-secondary' : ''}`} href='/service'>Services</Link>
                        <Link className={`hover:text-secondary text-[1.1rem] transition duration-100 ${router.pathname === 'about-us' ? 'text-secondary' : ''}`} href='/about-us'>About Us</Link>
                        <Link className={`hover:text-secondary text-[1.1rem] transition duration-100 ${router.pathname === 'profile' ? 'text-secondary' : ''}`} href='/profile'>Why</Link> */}
                        <Link className="hover:text-secondary text-[1.1rem] transition duration-100" href='/service'>Categories</Link>
                        <Link className="hover:text-secondary text-[1.1rem] transition duration-100" href='/service'>Services</Link>
                        <Link className="hover:text-secondary text-[1.1rem] transition duration-100" href='/about-us'>About Us</Link>
                        <Link className="hover:text-secondary text-[1.1rem] transition duration-100" href='/profile'>Why</Link>
                    </div>
                    <div className="md:hidden cursor-pointer" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Image
                            src='/svg/hamburgerMenu.svg'
                            alt="hamburgermenu"
                            width={25}
                            height={25}
                        />
                    </div>                        

            {/* MOBILE MENU POPUP */}
            {isMenuToggled && (
                <div className={` md:hidden fixed top-0 left-0 py-8  bg-secondary w-full z-50`}>
                    {/* CLOSE ICON */}
                    <div className="flex justify-end  cursor-pointer mr-3 " onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <AiOutlineClose className="text-white text-[2.4rem]" />
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 pl-4 text-deep-blue text-white z-40">
                        <Link className="hover:opacity-80 text-[1.1rem] transition duration-100" href='/vendorsListings'>Categories</Link>
                        <Link className="hover:opacity-80 text-[1.1rem] transition duration-100" href='/service'>Services</Link>
                        <Link className="hover:opacity-80 text-[1.1rem] transition duration-100" href='/about-us'>About Us</Link>
                        <Link className="hover:opacity-80 text-[1.1rem]transition duration-100" href='/profile'>Why</Link>
                    </div>
                </div>
            )}        
        </nav>
    );
};