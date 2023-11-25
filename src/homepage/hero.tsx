"use client";

import Link from 'next/link'
import CustomButton from "@/components/common/customButton";
import React from "react";
import Navbar from '@/components/navbar';

const Hero = () => {
    return (
        <div className="flex-col w-full flex items-center relative h-screen"
            style={{
                background: `
                    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                    url("./images/Enovalab.png") center center no-repeat
                `,
                backgroundSize: 'cover',
                overflow: 'hidden', // Add overflow: hidden to prevent child overflow
            }}
        >
            <Navbar />
            <div className="w-[60%] h-30 flex items-center justify-center absolute px-4 py-10 top-44 left-18"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Use rgba for both color and opacity
                }}
            >
                <div className="flex-col flex items-center gap-6 rounded-md">
                    <p className="text-white text-lg text-center mb-6 w-4/5">
                        Simplify Your Vendor Search – Discover, Compare, and Choose with Ease
                    </p>
                    <div>
                        <Link href="@/vendorsListings">
                            <CustomButton
                                onClick={() => {}}
                                padding="15px 50px"
                                borderRadius="5px"
                                textColor="#000"
                                width="280px"
                                height="70px"
                            >
                                Hire Now
                            </CustomButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Hero;
