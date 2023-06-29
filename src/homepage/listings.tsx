'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { homeListings } from './utils/homepageListings';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#F5BD02" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#F5BD02" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#FFFFFF" />);
    }
  
    return (
      <div className='flex'>
        {stars}
      </div>
    );
};
  
const Listings = () => {
    return (
      <div className='center w-full my-6'>
        <div className='w-[90%] gap-6 flex-wrap center'>
            {homeListings.map((listing, index) => (
            <div key={index} className='w-[23.5%] mb-4'>
                <div className='w-full'>
                    <Image src={listing.image} alt='image' width={280} height={170}/>
                </div>
                <div className='flex my-3 between'>
                    <h3 className='text-sm text-secondary tracking-wider font-bold'>{listing.name}</h3>
                    <StarRating rating={listing.rating} />
                </div>
                <div className='flex gap-2'>
                    <Image src="/svg/location.svg" alt='location' width={10} height={10}/>
                    <p className='text-sm'>{listing.address}</p>
                </div>
                <p className='text-sm my-4'>{listing.description}</p>
                <div className='flex gap-1 mb-3'>
                    <Image src="/svg/nairaIcon.svg" alt='price' width={20} height={20}/>
                    <p className='text-[.9rem] font-bold text-secondary'>{listing.price}</p>
                </div>
                <CustomButton onClick={() => {}} background='#FFF' textColor='#1E1E1E' padding='8px' borderRadius='10px'>Book</CustomButton>
            </div>
            ))}
            <div className='w-full flex items-end justify-end'>
                <div>
                  <Link href='/vendorsListings'>
                    <CustomButton border='1px solid #F5BD02' textColor='#F5BD02' padding='8px 40px' background='#383838' onClick={() => {}}>See more</CustomButton>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    );
};
  
export default Listings;
