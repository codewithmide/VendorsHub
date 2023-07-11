"use client";

import Navbar from "@/components/navbar";
import Image from 'next/image';
import Footer from "@/components/footer";
import { FC } from "react";

interface AboutUsProps {}
 
const AboutUs: FC<AboutUsProps> = () => {
    return (
        <div className="w-full center flex-col">
            <Navbar />
            <div className="flex items-center flex-col my-10">
                <h1 className="text-secondary font-bold text-lg text-center">About VendorsHub</h1>
                <p className="w-[50%] text-center text-sm my-8">
                    VendorsHub is a mission driven project that provides data and advocacy about Event Vendors impact on Nigerian ceremonies. We work towards a vision where data and information empower users to understand, decide and control the role of rating Event vendorsin our platform.
                </p>
                <div className="w-[90%] center mt-10">
                    <div className="w-[40%] center bg-secondary rounded-lg p-10 flex-col">
                        <h2 className="text-black font-bold text-md">Our Mission</h2>
                        <p className="text-sm text-black w-[80%] pb-6 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus soluta vero cupiditate sunt excepturi, numquam illum, praesentium error corporis rem veniam reiciendis commodi, id esse. Voluptate necessitatibus perferendis ullam iste, excepturi error amet tempora quae praesentium fuga facere blanditiis.
                        </p>
                    </div>
                    <div className="w-[40%] center">
                        <Image src="/images/mission.png" alt="mission image" width={400} height={300} />
                    </div>
                </div>
                <div className="w-[90%] center gap-10 mt-10">
                    <div className="w-[40%] center">
                        <Image src="/images/vision.png" alt="mission image" width={500} height={300} />
                    </div>
                    <div className="w-[40%] center bg-secondary rounded-lg p-10 flex-col">
                        <h2 className="text-black font-bold text-md">Our Vision</h2>
                        <p className="text-sm text-black w-[80%] pb-6 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus soluta vero cupiditate sunt excepturi, numquam illum, praesentium error corporis rem veniam reiciendis commodi, id esse. Voluptate necessitatibus perferendis ullam iste, excepturi error amet tempora quae praesentium fuga facere blanditiis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-secondary mt-16 w-[80%] center flex-col">
                <h2 className="font-bold text-lg">How to be part of our community</h2>
                <div className="w-[80%] mt-10 between">
                    <div className="center flex-col gap-3 text-white">
                        <Image src="/images/register.png" alt="register" width={125} height={125} loading="lazy" />
                        <p>Register for free</p>
                    </div>
                    <div className="center flex-col gap-3 text-white">
                        <Image src="/images/fill.png" alt="register" width={125} height={125} loading="lazy" />
                        <p>Fill and upload neccessary information</p>
                    </div>
                    <div className="center flex-col gap-3 text-white">
                        <Image src="/images/hiring.png" alt="register" width={100} height={100} loading="lazy" />
                        <p>Start hiring</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-[80%] mt-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold">Cookies</h2>
                    <p className="text-sm">
                        A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Relief for Human Suffering Foundation uses cookies to help Relief for Human Suffering Foundation identify and track visitors, their usage of the website and their website access preferences. Relief for Human Suffering Foundation visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Relief for Human Suffering Foundation’s website, with the drawback that certain features of Relief for Human Suffering Foundation’s website may not function properly without the aid of cookies.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold">Privacy Policy</h2>
                    <p className="text-sm w-5/6">
                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default AboutUs;