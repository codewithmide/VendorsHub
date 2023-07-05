'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/common/customButton";
import Logo from "@/components/common/logo";
import Search from "@/components/common/search";

const AuthNav = () => {
    const [profileModal, setprofileModal ] = useState(false);

    const handleProfileModal = () => {
        setprofileModal(!profileModal);
    }

    return (
        <nav className="between w-[90%] my-5 relative">
            <Logo />
            <Search />
            <div className="gap-8 center text-[.9rem]">
                <Link href='/about-us'>About Us</Link>
                <div>
                    <Link href="/vendorsListings">
                        <CustomButton onClick={() => {}} background="#FFF" textColor="#1E1E1E" textSize=".8rem">Book Vendor</CustomButton>
                    </Link>
                </div>
            </div>
            <div className="border-[#FDFEF9] border center gap-2 p-1 cursor-pointer w-[4.5rem] rounded-[70px]" onClick={handleProfileModal}>
                <div className="">
                    <Image
                        src='/svg/hamburgerMenu.svg'
                        alt="hamburgermenu"
                        width={15}
                        height={15}
                    />
                </div>
                <div>
                    <Image
                        src='/images/profilePicture.png'
                        alt="hamburgermenu"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            {profileModal && (<div className="bg-white absolute right-0 top-12 rounded-lg">
                <ul>
                    <li className="py-3 px-8 border-b border-b-black text-black font-bold hover:text-secondary">Profile</li>
                    <Link href="/about-us">
                        <li className="py-3 px-8 border-b border-b-black text-black font-bold hover:text-secondary">Help</li>
                    </Link>
                    <li className="py-3 px-8 text-black font-bold hover:text-secondary">Log Out</li>
                </ul>
            </div>)}
        </nav>
    );
}
 
export default AuthNav;
