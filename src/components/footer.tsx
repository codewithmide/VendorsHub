'use client';

import Link from 'next/link';
import Logo from "./common/logo";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="center flex-col w-full mt-28">
            <div className="w-[90%] flex justify-between">
                <div className="flex flex-col gap-3">
                    <Logo />
                    <p className="text-sm w-[13rem]">
                        We are an organization that brings together different event vendors for your beautiful events.
                    </p>
                    <div className="flex gap-3">
                        <BsFacebook />
                        <BsTwitter />
                        <BsInstagram />
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-secondary">Services</h4>
                    <ul className="text-sm flex-col flex gap-1 mt-4">
                        <Link href="/vendorsListings"><li>Event Planner</li></Link>
                        <Link href="/vendorsListings"><li>Catering</li></Link>
                        <Link href="/vendorsListings"><li>DJ&apos;s</li></Link>
                        <Link href="/vendorsListings"><li>Rentals</li></Link>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-secondary">Company</h4>
                    <ul className="text-sm flex-col flex gap-1 mt-4">
                        <Link href="/about-us"><li>About Us</li></Link>
                        <Link href="/about-us"><li>Join Us</li></Link>
                        <Link href="/about-us"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
            <hr className="text-secondary w-[90%] my-8"/>
            <div className="w-[90%] flex justify-between text-secondary text-sm mb-6">
                <p>&copy; {currentYear}</p>
                <div className="flex gap-4">
                    <p>Term of use</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;