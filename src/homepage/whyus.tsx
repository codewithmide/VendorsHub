'use client'

const WhyUs = () => {
    return (
        <div className="w-full center my-10 flex-col gap-10">
            <div className="w-[70%] center flex-col">
                <h2 className="font-bold text-secondary text-lg">Why Clients turn to VendorsHub</h2>
                <div className="between w-full my-8">
                    <div className="w-[45%] h-[400px] items-end flex"
                        style={{
                            backgroundImage: `url("./images/why1.png")`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'contain',
                            backgroundSize: 'contain',
                        }}
                    >
                        <div className="flex flex-col ml-12 mb-8 text-secondary">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">50+</h3>
                                <p>Bussiness registered</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">90%</h3>
                                <p>Success rate</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">4.5 Star</h3>
                                <p>Lowest Business Rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 center flex-col gap-8">
                        <div>
                            <h3 className="font-bold text-[1.5rem]">Proof of Reliability</h3>
                            <p className="text-secondary">Check any Vendors work samples, client reviews and overall Ratings.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[1.5rem]">No Payment until you</h3>
                            <p className="text-secondary">Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[1.5rem]">Accountability</h3>
                            <p className="text-secondary">You get Quality results for every kobo spent, backed by our system that keeps track of every financial exchange.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-[70%] center flex-col">
                <h2 className="font-bold text-secondary text-lg">Why business Owners turn to VendorsHub</h2>
                <div className="between w-full my-8">
                    <div className="w-1/2 center flex-col gap-8">
                        <div>
                            <h3 className="font-bold text-[1.5rem]">Security of Payment</h3>
                            <p className="text-secondary">We ensure clients pay after every job. Our wallet system helps protect payments for business owners.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[1.5rem]">We connect all over Nigeria</h3>
                            <p className="text-secondary">Business owners now have the freedom of connecting with wide range of clients.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[1.5rem]">Safe and secure</h3>
                            <p className="text-secondary">Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
                        </div>
                    </div>
                    <div className="w-[45%] h-[400px] items-end flex"
                        style={{
                            backgroundImage: `url("./images/why2.png")`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'contain',
                            backgroundSize: 'contain',
                        }}
                    >
                        <div className="flex flex-col ml-12 mb-8 text-secondary">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">300+</h3>
                                <p>Active clients</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">100%</h3>
                                <p>Client payment rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WhyUs;