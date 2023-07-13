'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from './customButton';

const Search = ({ onSearch }: any) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSearch} className="p-1 center border border-black w-full rounded-[48px]">
      <input
        type="text"
        className="w-full bg-primary pl-4 outline-none border-none text-black"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        <CustomButton
          type="submit"
          padding="10px 10px"
          background="white"
          border="1px solid black"
        >
          <Image src="/svg/search.svg" width={18} height={18} alt="search" priority />
        </CustomButton>
      </div>
    </form>
  );
};

export default Search;
