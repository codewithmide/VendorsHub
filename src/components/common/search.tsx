'use client';

import Image from 'next/image';
import CustomButton from "./customButton";

const Search = () => {
    return (
        <form action="/" className='p-1 center border border-[#FDFEF9] w-[25rem] rounded-[48px]'>
            <input type="text" className='w-full bg-primary pl-4 outline-none border-none text-sm text-[#FDFEF9]' placeholder='Search' />
            <CustomButton
                onClick={() => {}}
                padding="8px 8px"
            >
                <Image
                    src="/icons/search.png"
                    width={15}
                    height={15}
                    alt='search'
                    priority
                />
            </CustomButton>
        </form>
    );
}
 
export default Search;