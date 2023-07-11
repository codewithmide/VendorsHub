'use client';

import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/'>
            <div className="text-white font-bold text-[1.5rem]">
                VendorsHub
            </div>
        </Link>
    );
}
 
export default Logo;