"use client";

import Link from 'next/link'
import CustomButton from "@/components/common/customButton";
import React from "react";

const Hero = () => {
    return (
        <div className="custom-hero-height w-full center"
            style={{
                backgroundImage: `url("./images/heroImg.png")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="w-[90%] h-full flex items-center justify-start">
                    <div className="flex-col flex items-start justify-start w-[60%] gap-6">
                        <h1 className="text-secondary hero-text">
                            Are you having issues Hiring Vendors for your events at the right time and with the right Cost?
                        </h1>
                        <p className="text-md mb-6">
                            Register now to Hire qualified vendors who will deliver quality Jobs and put a smile on your Face
                        </p>
                        <div>
                            <Link href="/about-us">
                                <CustomButton 
                                    onClick={() => {}}
                                    padding="15px 50px"
                                    borderRadius="60px">
                                    About Us
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Hero;
