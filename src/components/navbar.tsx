'use client'

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./common/customButton";
import Logo from "./common/logo";
import Search from "./common/search";


const Navbar = () => {
    return (
        <nav className="between w-[90%] my-5">
            <Logo />
            <Search />
            <div className="gap-8 center text-[.9rem]">
                <Link href='/about-us'>About Us</Link>
                <Link href='/'>Sign Up</Link>
                <Link href='/'>Sign In</Link>
                <div>
                    <Link href="/vendorsListings">
                        <CustomButton onClick={() => {}} background="#FFF" textColor="#1E1E1E" textSize=".8rem">Book Vendor</CustomButton>
                    </Link>
                </div>
            </div>
            <div className="border-[#FDFEF9] border center gap-1 p-1 cursor-pointer w-[4.5rem] rounded-[60px]">
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
        </nav>
    );
}
 
export default Navbar;
