'use client';

import Image from 'next/image'
import { Testimonials } from "./utils/testimonial";
const Testimonial = () => {
    return (
        <div className="w-full center">
            <div className="w-[90%] flex-col flex text-white gap-10">
                <h2 className='text-lg font-bold'>Testimonials</h2>
                <div className="center gap-3">
                    {Testimonials.map((testimonial, index) => (
                        <div key={index} className="border border-white rounded-lg p-5 flex flex-col justify-center">
                            <div className='flex items-center gap-3'>
                                <Image src={testimonial.image} alt='image' width={50} height={50} />
                                <div className='flex flex-col text-secondary text-sm'>
                                    <p>{testimonial.name}</p>
                                    <p>{testimonial.user}</p>
                                </div>
                            </div>
                            <p className='my-3'>{testimonial.testimony}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Testimonial;