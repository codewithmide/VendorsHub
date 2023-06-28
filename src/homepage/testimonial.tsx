'use client';

import { Testimonials } from "./utils/testimonial";
const Testimonial = () => {
    return (
        <div className="w-full center">
            <div className="w-[90%] flex-col flex text-white gap-6">
                <h2>Testimonials</h2>
                <div className="center gap-3">
                    {Testimonials.map((testimonial, index) => (
                        <div key={index} className="border border-white rounded-lg">
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Testimonial;