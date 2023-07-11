'use client';

import Hero from "./hero";
import Listings from "./listings";
import WhyUs from "./whyus";
import Testimonial from "./testimonial";
import Footer from "@/components/footer";
import Register from "@/components/common/register";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Listings />
            <WhyUs />
            <Testimonial />
            <Register />
            <Footer />
        </>
    );
}
 
export default Homepage;