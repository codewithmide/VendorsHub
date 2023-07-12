'use client';

import Image from 'next/image';
import CustomButton from "./customButton";

const Search = () => {
    return (
        <form action="/" className='p-1 center border border-black w-[25rem] rounded-[48px]'>
            <input type="text" className='w-full bg-primary pl-4 outline-none border-none text-sm text-black' placeholder='Search' />
            <div>
                <CustomButton
                    onClick={() => {}}
                    padding="8px 8px"
                    background="white"
                    border="1px solid black"
                >
                    <Image
                        src="/svg/search.svg"
                        width={15}
                        height={15}
                        alt='search'
                        priority
                    />
                </CustomButton>
            </div>
        </form>
    );
}
 
export default Search;