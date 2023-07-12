'use client';

import Image from 'next/image';
import CustomButton from "./customButton";

const Search = () => {
    return (
        <form action="/" className='p-1 center border border-black w-full rounded-[48px]'>
            <input type="text" className='w-full bg-primary pl-4 outline-none border-none text-black' placeholder='Search' />
            <div>
                <CustomButton
                    onClick={() => {}}
                    padding="10px 10px"
                    background="white"
                    border="1px solid black"
                >
                    <Image
                        src="/svg/search.svg"
                        width={18}
                        height={18}
                        alt='search'
                        priority
                    />
                </CustomButton>
            </div>
        </form>
    );
}
 
export default Search;