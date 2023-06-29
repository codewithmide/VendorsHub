'use client';

import Navbar from "@/components/navbar";
import Hero from "./hero";
import Categories from "@/components/common/categories";
import Listings from "./listings";
import WhyUs from "./whyus";
import Testimonial from "./testimonial";
import Footer from "@/components/footer";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Listings />
            <WhyUs />
            <Testimonial />
            <Footer />
        </>
    );
}
 
export default Homepage;