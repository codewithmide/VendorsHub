'use client';

import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/'>
            <div className="text-yellow font-bold text-lg leading-normal">
                VendorsHub
            </div>
        </Link>
    );
}
 
export default Logo;