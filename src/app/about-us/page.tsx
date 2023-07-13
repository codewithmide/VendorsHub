"use client";

import Image from 'next/image';
import Footer from "@/components/footer";
import { FC } from "react";
import TeamMembers from './components/team';
import AboutNavHero from "./navHero";
import Offer from './components/offer';
import StakeHolders from './components/stakeholders';
import Register from '@/components/common/register';

interface AboutUsProps {}
 
const AboutUs: FC<AboutUsProps> = () => {
    return (
        <div className="w-full center flex-col">
            <AboutNavHero />
            <div className="flex items-center flex-col my-10">
                <div className="lg:w-[80%] w-[90%] mx-auto md:text-left mt-6 text-black md:text-[1.3rem] text-[.9rem]">
                        VendorsHub is a platform for vendors to showcase their products and connect with a wide customer base. we understand the challenges that vendors face in today&apos;s competitive marketplace. That&apos;s why we have developed a user-friendly and innovative platform specifically designed to meet your needs. We are dedicated to empowering vendors like you to maximize your reach, boost sales, and build lasting relationships with customers, we also believe that clients deserve a wide range of options and exceptional service. Whether you&apos;re an individual seeking a specific product or a business in need of reliable services, our platform is designed with you in mind. We bring together a diverse community of vendors, ensuring you can find the right match for your requirements
                </div>
                <div className="md:w-[80%] w-[90%] md:flex-row flex-col center mt-10">
                    <div className="md:w-[50%] center bg-blue rounded-lg p-10 flex-col">
                        <h2 className="text-secondary font-bold md:text-lg text-[1.3rem]">Our Mission</h2>
                        <p className="text-sm md:text-[1rem] text-white md:w-[80%] pb-6 mt-3">
                            To enable a fast,easy, safe and secure platform for event vendors to showcase their product and services that will enable clients to easily navigate and choose the best and affordable vendors for their events as fast as they need them
                        </p>
                    </div>
                    <div className="md:w-[50%] center">
                        <Image src="/images/mission.png" alt="mission image" width={400} height={300} />
                    </div>
                </div>
                <div className="md:w-[80%] w-[90%] center md:flex-row flex-col-reverse gap-10 mt-10">
                    <div className="md:w-[50%] center">
                        <Image src="/images/vision.png" alt="mission image" width={500} height={300} />
                    </div>
                    <div className="md:w-[50%] center bg-blue rounded-lg p-10 flex-col">
                        <h2 className="text-secondary font-bold md:text-lg text-[1.3rem]">Our Vision</h2>
                        <p className="text-sm md:text-[1rem] text-white md:w-[80%] pb-6 mt-3">
                            To be the global go-to event vendors platform for event management
                        </p>
                    </div>
                </div>
            </div>
            <Offer />
            <TeamMembers />
            <StakeHolders />
            <div className="flex flex-col gap-10 lg:w-[80%] w-[90%] my-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold">Cookies</h2>
                    <p className="text-sm md:text-[1rem]">
                        A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Relief for Human Suffering Foundation uses cookies to help Relief for Human Suffering Foundation identify and track visitors, their usage of the website and their website access preferences. Relief for Human Suffering Foundation visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Relief for Human Suffering Foundation’s website, with the drawback that certain features of Relief for Human Suffering Foundation’s website may not function properly without the aid of cookies.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold">Privacy Policy</h2>
                    <p className="text-sm md:text-[1rem]">
                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>
                </div>
            </div>
            <Register />
            <Footer />
        </div>
    );
}
 
export default AboutUs;