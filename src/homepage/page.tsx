'use client';

import Hero from "./hero";
import Listings from "./listings";
import Services from "./services";
import GalleryPrev from "./galleryPrev";
import Footer from "@/components/footer";
import Register from "@/components/common/register";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Listings />
            <Services />
            <GalleryPrev />
            <Register />
            <Footer />
        </>
    );
}
 
export default Homepage;