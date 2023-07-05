"use client";

import Image from "next/image";
import { highestRatedVendor } from "./highestRatedVendors";
import Link from 'next/link';
import CustomButton from '@/components/common/customButton';
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

const HighestVendors = () => {
    return (
        <div className="center flex-col my-10">
            <div className="flex items-start w-[90%]">
                <h1 className="text-secondary font-bold text-lg">HIGHEST RATED VENDORS</h1>
            </div>
            <div className="w-[90%] gap-6 flex-wrap center mt-10">
                {highestRatedVendor.map((vendors, index) => (
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
                    <p className="text-sm mb-2">{vendors.reviews} reviews</p>
                    <Link href={{ pathname: `/profile/${vendors.name.replace(/\s/g, '-')}`}} passHref>
                    <CustomButton onClick={() => {}} background="#FFF" textColor="#1E1E1E" padding="8px" borderRadius="10px">
                        Book
                    </CustomButton>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default HighestVendors;