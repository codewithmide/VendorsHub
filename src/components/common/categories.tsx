'use client';

import Image from 'next/image';
import { categories } from '@/utils/categories';
import { FcNext } from 'react-icons/fc';

const Categories = () => {
  return (
    <div className="w-full mt-16 mb-6 py-2 center border-t-secondary border border-l-0 border-r-0 border-b-secondary">
      <div className="w-[90%] flex gap-10 between">
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
        <div className='border border-secondary p-2 rounded-[40px] center gap-4 cursor-pointer'>
            <Image 
                src='/svg/filter.svg'
                alt='filter'
                width={25}
                height={25}
                />
            <p>Filter</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
