"use client";

import Link from 'next/link'
import CustomButton from "@/components/common/customButton";
import React from "react";
import Navbar from '@/components/navbar';

const Hero = () => {
    return (
        <div className="flex-col w-full flex items-center h-[33rem]"
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url("./images/heroImg.png") center center no-repeat
          `,
        }}>
                <Navbar />
                <div className="w-[90%] text-white flex items-center md:justify-start justify-center my-auto">
                    <div className="flex-col flex md:items-start sm:items-center md:justify-start sm:justify-center lg:w-[60%] gap-6">
                        <h1 className="hero-text md:text-[2.5rem] text-[1.3rem] sm:text-center md:text-left">
                            Are you having issues Hiring Vendors for your events at the right time and with the right Cost?
                        </h1>
                        <p className="md:text-md text-sm mb-6 lg:w-4/5 sm:text-center md:text-left">
                            Register now to Hire qualified vendors who will deliver quality Jobs and put a smile on your Face
                        </p>
                        <div>
                            <Link href="/about-us">
                                <CustomButton 
                                    onClick={() => {}}
                                    padding="15px 50px"
                                    borderRadius="5px"
                                    background='#00CC83'
                                    textColor="#FFF"
                                    >
                                    Start Hiring
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Hero;
