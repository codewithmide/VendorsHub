"use client";

import Footer from "@/components/footer";
import NavHero from "./navHero";
import { coverageData, serviceInfo } from "./utils";


interface CoverageProps {
    item: {
      id: number;
      title: string;
      body: string;
      backgroundImg: string;
    };
};


const Service = () => {

    return (
        <>
            <NavHero backgroundImg="url(./images/heroImg.png)" title='Services' body='We create a seamless expereince for both clients and vendors' />
            <section className="text-center bg-white px-8 md:px-12 py-12">
                <h3 className="md:text-[2rem] text-[1.6rem] text-black">Partenering with you on your business Journey</h3>
                <p className="text-black opacity-90">From registration to getting clients we are here to help you get your business desired result</p>

                <p className="mt-6 text-black opacity-90">{serviceInfo}</p>

                <h3 className="md:text-[2rem] mt-10 text-[1.6rem] text-black">Our goal is simple</h3>
                <p className="text-black opacity-90">to create  a seamless connection between vendors and clients</p>

                <h3 className="md:text-[2rem] mt-10 mb-3 text-[1.6rem] text-black">Our coverage </h3>

                <div className="md:w-[80%] mx-auto">
                    {
                        coverageData?.map((item, index) => (
                            <Coverage item={item} key={`item-${index}`} />
                        ))
                    }
                </div>
            </section>

            <div className="px-8 md:px-12 bg-[#FFF4CF]">
                <div className="between md:space-x-8 space-y-6 md:space-y-0 py-16 flex-col md:flex-row">
                    <p className=" text-[1.2rem] md:text-[1.5rem] text-black text-center">Are you looking to push your business out there for the world to see?</p>
                    <button className="bg-green px-16 md:px-20 py-2 font-bold">Register Now</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Service;


const Coverage: React.FC<CoverageProps> = ({item}) => {
    const { id, title, body, backgroundImg  } = item;
    
    return (
        <section className={`flex text-white justify-center items-center gap-x-16 mb-12 cursor-default bg-center bg-cover  md:px-12 p-6 md:py-20 flex-col ${id % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), ${backgroundImg}`}}>
            <p className="w-[100%] md:w-[30%] md:text-[2.6rem] text-[1.6rem]">
                {title}
            </p>
            <p className="w-[100%] md:w-[60%] mt-6 md:mt-0 text-justify">{body}</p>
        </section>
    );
};