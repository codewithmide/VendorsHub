"use client";

import Logo from "@/components/common/logo";
import Link from "next/link";
import React from "react";
import Inbox from "./inbox";


interface SidebarProps {
    setShowModal: (state: boolean) => void;
};

// interface MyComponentProps {
//     myState: string;
//     setShowModal: (state: string) => void;
//   }
  
//   const MyComponent: React.FC<MyComponentProps> = ({ myState, setMyState }) => {

//   };

export const Sidebar: React.FC<SidebarProps> = ({setShowModal}) => {
    return (
        <div className='relative bg-black  w-[310px] hidden md:block'>
            <div className=" text-center pt-6">
                <Logo />
            </div>

            <div className="text-center mt-60">
                <ul>
                    <li className='p-4 text-[20px] cursor-pointer bg-secondary text-white'>Dashboard</li>
                    <li className='p-4 text-[20px] cursor-pointer hover:bg-secondary hover:text-white text-secondary'>Contracts</li>
                    <li className='p-4 text-[20px] cursor-pointer hover:bg-secondary hover:text-white text-secondary' onClick={() => setShowModal(true)}>Wallet</li>
                    <li className='p-4 text-[20px] cursor-pointer hover:bg-secondary hover:text-white text-secondary'>Receipts</li>
                </ul>
            </div>

        
            
            <div className="mb-40 mt-20">
                <div className="py-4 px-6 mb-6 bg-white w-full between text-black">
                    <p className='cursor-default'>inbox - 7</p>
                    <small className='text-secondary underline'><Link href={'/'}>view all</Link></small>
                </div>
                <Inbox />
            </div>

            <p className="absolute bottom-2 right-[50%] text-center font-bold cursor-pointer">log out</p>

        </div>
    );
};

