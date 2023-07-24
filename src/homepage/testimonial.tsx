'use client';

import Image from 'next/image'
import { Testimonials } from "./utils/testimonial";
const Testimonial = () => {
    return (
        <div className="w-full bg-[#CDCDCD] center pb-10 mt-20">
            <div className="w-[90%] flex-col center">
                <h2 className='md:text-lg text-[1.3rem] w-[80%] text-center my-16'>Hear From Our Clients</h2>
                <div className="between flex-wrap gap-3 w-full">
                    {Testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white lg:w-[32%] md:w-[49%] h-[470px] w-full rounded-sm p-8 flex flex-col justify-center">
                            <div>
                                <h2 className='font-bold text-xxl text-blue'>“</h2>
                                <p className='mb-8 md:text-[1rem] text-sm -mt-10 h-[150px]'>{testimonial.testimony}</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <Image src={testimonial.image} alt='image' width={60} height={60} className="rounded-full" />
                                <div className='flex flex-col text-sm'>
                                    <p className='font-bold text-[1rem]'>{testimonial.name}</p>
                                    <p>{testimonial.user}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Testimonial;