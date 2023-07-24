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
  const [selectedListing, setSelectedListing] = useState<any>(null);

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

  const handleHireClick = (listing: any) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
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
      <div className="flex w-full flex-col items-center">
        <h1 className="font-bold text-lg text-left w-[90%]">All</h1>
        <div className="w-[90%] gap-6 flex-wrap flex mt-10">
          {filteredVendorsListings.length > 0 ? (
            filteredVendorsListings.map((listing, index) => (
              <div key={index} className="lg:w-[31.5%] md:w-[48%] w-full mb-4 card-shadow">
                <div className="w-full">
                  <img src={listing.image} alt="image" />
                </div>
                <div className="flex flex-col px-3 my-6">
                  <h3 className="text-[1.3rem] text-blue font-bold">{listing.name}</h3>
                  <p className="text-sm my-4 text-black h-[100px]">{listing.description}</p>
                </div>
                <CustomButton 
                  onClick={() => handleHireClick(listing)}
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
      {selectedListing && (
        <div className="modal fixed py-[50px] top-0 left-0 h-[100%] w-[100%]">
          <div className="bg-white py-8 flex-col m-auto w-[90vw] md:w-[50vw] h-[80vh] md:h-[80vh] px-4 md:px-6 rounded-md overflow-y-auto">
              <div className="flex items-end justify-end w-full">
                <img src="/svg/cancel.svg" alt="cancel button" width="30px" className="cursor-pointer" onClick={closeModal} />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="md:text-[2rem] text-[1.3rem] text-blue font-bold">{selectedListing?.name}</h3>
                <p className="font-bold">{selectedListing?.location}</p>
                <img src={selectedListing?.image} alt="vendors image" className="my-10 h-[200px]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Business Owner: {selectedListing?.fullname}</p>
                <p className="font-bold">Year of experience: {selectedListing?.experience}</p>
                <p className="font-bold">Services offered: {selectedListing?.service}</p>
                <div className="text-md mt-4 gap-2">
                  <p className="font-bold">Biography</p>
                  <p className="text-black text-sm md:text-[1rem]">{selectedListing?.description}</p>
                </div>
                <p className="font-bold text-sm">Contact details: {selectedListing?.phone}</p>
                <p className="font-bold text-sm">Social media: {selectedListing?.social}</p>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
