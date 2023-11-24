import React from "react";
import { coverageData } from "../app/service/utils";

const Services = () => {
  const servicesData = coverageData.slice(0, 3);

  return (
    <div className="my-24">
      <div className="text-white ml-1 mb-4">
        <h3 className="font-bold mb-6 text-lg">Services We Offer</h3>
        <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
          We are a brand hoping to deliver and become one of the largest <br/>
          networks for clients to find world-class vendors
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {servicesData.map((data, index) => (
          <div
            key={index}
            className="relative box-border"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${data.backgroundImg}) center/cover no-repeat`,
              width: "340px",
              height: "500px",
            }}
          >
            <div className="text-white m-4 absolute bottom-12 -left-7">
              <h3 className="font-bold text-[24px] leading-normal ml-6 mb-3">{data.title}</h3>
              <p className="textLayout font-normal text-[14px] m-6">{data.body}</p>
            </div>
          </div>
        ))}
      </div>
      {/* add nextBtn here */}
    </div>
  );
};

export default Services;
