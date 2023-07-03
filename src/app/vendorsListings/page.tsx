"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FC } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { vendorsListings } from "@/utils/vendorslistings";
import Navbar from "@/components/navbar";
import Categories from "@/components/common/categories";
import CustomButton from "@/components/common/customButton";
import Footer from '@/components/footer';

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
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

const VendorsListings: FC = () => {
  return (
    <div className="center flex-col w-full">
      <Navbar />
      <Categories />
      <div className="w-[90%] gap-6 flex-wrap center mt-10">
        {vendorsListings.map((vendors, index) => (
          <div key={index} className='w-[23.5%] mb-4'>
            <div className='w-full'>
              <Image src={vendors.image} alt='image' width={280} height={170} />
            </div>
            <div className='flex my-3 between'>
              <h3 className='text-sm text-secondary tracking-wider font-bold'>{vendors.name}</h3>
              <StarRating rating={vendors.rating} />
            </div>
            <div className='flex gap-2'>
              <Image src="/svg/location.svg" alt='location' width={10} height={10} />
              <p className='text-sm'>{vendors.address}</p>
            </div>
            <p className='text-sm my-4'>{vendors.description}</p>
            <div className='flex gap-1 mb-3'>
              <Image src="/svg/nairaIcon.svg" alt='price' width={20} height={20} />
              <p className='text-[.9rem] font-bold text-secondary'>{vendors.price}</p>
            </div>
            <Link href={{ pathname: `/profile/${vendors.name.replace(/\s/g, '-')}`}} passHref>
              <CustomButton onClick={() => {}} background="#FFF" textColor="#1E1E1E" padding="8px" borderRadius="10px">
                Book
              </CustomButton>
            </Link>
          </div>
        ))}
      </div>
      <div className='center mt-10 mb-28'>
        <div className='rounded-full w-[50px] h-[50px] center border border-secondary'>
          <AiOutlineDown color='#FFF' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VendorsListings;
