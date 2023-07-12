'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { homeListings } from './utils/homepageListings';
  
const Listings = () => {
    return (
      <div className='w-full my-6 flex-col flex items-center md:justify-start justify-center'>
        <h2 className='font-bold text-black my-8 text-md md:text-left w-[90%] text-center'>A Trusted Vendors Listing Platform </h2>
        <div className='w-[90%] gap-3 flex-wrap flex'>
            {homeListings.map((listing, index) => (
            <div key={index} className='lg:w-[32%] md:w-[48%] w-full mb-4 card-shadow'>
                <div className='w-full'>
                    <Image src={listing.image} alt='image' width={393} height={282}/>
                </div>
                <div className='flex flex-col my-3 p-3'>
                    <h3 className='text-[1.3rem] text-blue font-bold'>{listing.name}</h3>
                    <p className='text-sm my-4 text-black h-[80px]'>{listing.description}</p>
                </div>
                <Link href={{ pathname: `/profile/${listing.name.replace(/\s/g, '-')}`}} passHref>
                  <CustomButton onClick={() => {}} background="#00CC83" textColor="#FFF" padding="10px" borderRadius="5px">
                    Hire
                  </CustomButton>
                </Link>
            </div>
            ))}
            <div className='w-full flex items-end justify-end'>
                <div>
                  <Link href='/vendorsListings'>
                    <CustomButton border='1px solid #00CC83' textColor='#00CC83' padding='8px 40px' background='#FFF' borderRadius='5px' onClick={() => {}}>See more</CustomButton>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    );
};
  
export default Listings;
