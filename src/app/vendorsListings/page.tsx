"use client";

import { FC } from "react";
import Categories from "@/components/common/categories";
import Footer from '@/components/footer';
import VendorsHero from './hero';
import Register from "@/components/common/register";

const VendorsListings: FC = () => {

  // code to show more vendors

  // const [vendorsToShow, setVendorsToShow] = useState(24);

  // const handleClick = () => {
  //   setVendorsToShow(vendorsToShow + 4);
  // };

  // const vendorsToDisplay = vendorsListings.slice(0, vendorsToShow);

  return (
    <div className="center flex-col w-full">
      <VendorsHero />
      <Categories />
      <Register />
      <Footer />
    </div>
  );
}

export default VendorsListings;
