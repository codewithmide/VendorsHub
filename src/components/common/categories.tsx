'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { categories } from '@/utils/categories';
import Search from '@/components/common/search';
import { vendorsListings } from '@/utils/vendorslistings';
import CustomButton from '@/components/common/customButton';

const Categories = () => {
  const [visibleCategories, setVisibleCategories] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [filteredVendorsListings, setFilteredVendorsListings] = useState(vendorsListings);

  const updateVisibleCategories = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCategories = 6; // Default number of visible categories

    if (screenWidth < 480) {
      newVisibleCategories = 1;
    } else if (screenWidth < 768) {
      newVisibleCategories = 2;
    } else if (screenWidth < 1024) {
      newVisibleCategories = 3;
    }

    setVisibleCategories(newVisibleCategories);
  };

  useEffect(() => {
    updateVisibleCategories();

    window.addEventListener('resize', updateVisibleCategories);

    return () => {
      window.removeEventListener('resize', updateVisibleCategories);
    };
  }, []);

  const showNextCategories = () => {
    const nextIndex = startIndex + 1;
    const maxVisibleCategories = nextIndex + visibleCategories;
    if (maxVisibleCategories <= categories.length) {
      setStartIndex(nextIndex);
    } else {
      setStartIndex(categories.length - visibleCategories);
    }
  };

  const showPreviousCategories = () => {
    const previousIndex = startIndex - 1;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
  };

  const handleSearch = (searchText: string) => {
    if (searchText.trim() === '') {
      // Empty search text, show all categories
      setFilteredVendorsListings(vendorsListings);
    } else {
      // Non-empty search text, filter the listings
      const filteredListings = vendorsListings.filter(
        (listing) =>
          listing.name.toLowerCase().includes(searchText.toLowerCase()) ||
          listing.job.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredVendorsListings(filteredListings);
    }
  };

  return (
    <div className="w-full mt-8 mb-6">
      <h2 className="md:text-lg text-[1.3rem] w-[90%] mx-auto">Categories</h2>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <div onClick={showPreviousCategories}>
            <Image
              src="/svg/leftArrow.svg"
              alt="icon"
              width={20}
              height={20}
              className={`cursor-pointer ${startIndex === 0 ? 'hidden' : ''}`}
            />
          </div>
          <div className="center gap-6 overflow-hidden w-[84%]">
            {categories.slice(startIndex, startIndex + visibleCategories).map((category, index) => (
              <div
                key={index}
                className="w-[160px] h-[90px] flex items-center justify-center category my-6 hover:bg-blue hover:text-white"
              >
                {category.job}
              </div>
            ))}
          </div>
          <div onClick={showNextCategories}>
            <Image
              src="/svg/rightArrow.svg"
              alt="icon"
              width={20}
              height={20}
              className={`cursor-pointer ${
                startIndex + visibleCategories >= categories.length ? 'hidden' : ''
              }`}
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-10">
        <div className="md:w-[40%]">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="center w-full">
        <div className="w-[90%] gap-6 flex-wrap flex mt-10">
        {filteredVendorsListings.length > 0 ? (
            filteredVendorsListings.map((listing, index) => (
              // Vendor card JSX
              <div key={index} className="lg:w-[31.5%] md:w-[48%] w-full mb-4 card-shadow">
                <div className="w-full h-[285px]">
                  <Image src={listing.image} alt="image" width={393} height={282} />
                </div>
                <div className="flex flex-col my-3 p-3">
                  <h3 className="text-[1.3rem] text-blue font-bold">{listing.name}</h3>
                  <p className="text-[.85rem] my-4 text-black h-[80px]">{listing.description}</p>
                </div>
                <CustomButton
                  onClick={() => {}}
                  background="#00CC83"
                  textColor="#FFF"
                  padding="10px"
                  borderRadius="5px"
                >
                  Hire
                </CustomButton>
              </div>
            ))
          ) : (
            <h2 className="text-center text-black text-lg mb-10">Vendor does not exist.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;