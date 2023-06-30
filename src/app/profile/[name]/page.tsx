"use client"

import { FC } from "react";
import { vendorsListings } from "@/utils/vendorslistings";

interface VendorsProfileProps {
  params: { name: string };
}

const VendorsProfile: FC<VendorsProfileProps> = ({ params }) => {
  const vendor = vendorsListings.find((vendor) => vendor.name === params.name);
  console.log(vendor)

  if (!vendor) {
    // Handle the case where the vendor is not found
    return <div>Vendor not found</div>;
  }

  const { name, address, description } = vendor;

  return (
    <div>
      <h1>Hello: {name}</h1>
      <p>Address: {address}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default VendorsProfile;
