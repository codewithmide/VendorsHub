'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { categories } from '@/utils/categories';

const Categories = () => {
  const [filterModal , setFilterModal] = useState(false);

  const handleFilterModalClick = () => {
    setFilterModal(!filterModal);
  }

  return (
    <div className="w-full mt-8 mb-6 py-2 center border-t-secondary border border-l-0 border-r-0 border-b-secondary">
      <div className="w-[90%] flex gap-10 between relative">
        {categories.map((category, index) => (
          <div key={index} className="center flex-col gap-3">
            <div>
              <Image src={category.image} alt="image" width={40} height={40} />
            </div>
            <p className="text-sm">{category.job}</p>
          </div>
        ))}
        <div className="border border-secondary rounded-full h-[40px] w-[40px] center cursor-pointer">
            <Image 
                src='/images/next.png'
                alt='next'
                width={20}
                height={20} />
        </div>
        <div className='border border-secondary p-2 rounded-[40px] center gap-3 cursor-pointer' onClick={handleFilterModalClick}>
            <Image 
                src='/svg/filter.svg'
                alt='filter'
                width={25}
                height={25}
                />
            <p>Filter</p>
        </div>
        {filterModal && (
            <div className="bg-white absolute right-0 top-[4rem] rounded-lg transition duration-300">
                <ul className='font-bold'>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Lagos</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Abuja</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Oyo</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Ogun</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Port Harcourt</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Osun</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Nassarawa</li>
                  </Link>
                  <Link href="/vendorsListings">
                    <li className="py-3 px-8 border-b border-b-black text-black hover:text-secondary cursor-pointer">Borno</li>
                  </Link>
                </ul>
            </div>
          )}
      </div>
    </div>
  );
};

export default Categories;
