"use client";

import React from "react";
import ListingNavbar from './common/ListingNav';

const VendorsHero = () => {
    return (
        <div className="flex-col w-screen flex items-center h-[25rem]"
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url("/images/vendorsHero.png") center center no-repeat
          `,
          backgroundSize: 'cover',
        }}>
                <ListingNavbar />
                <div className="w-[90%] text-white flex items-center md:justify-start justify-center my-auto">
                    <div className="flex-col flex md:items-start sm:items-center md:justify-start sm:justify-center lg:w-[60%] gap-6">
                        <h1 className="hero-text md:text-[2.5rem] text-[1.3rem] sm:text-center md:text-left">
                            Event Vendors Listing
                        </h1>
                        <p className="md:text-md text-sm mb-6 lg:w-4/5 sm:text-center md:text-left">
                            With various category option to choose from, you can also search for vendors
                        </p>
                    </div>
                </div>
        </div>
    );
}
 
export default VendorsHero;
