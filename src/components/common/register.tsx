'use client'

const Register = () => {
    return (
        <div className="w-full bg-[#FFF4CF] center py-16">
            <div className="w-[90%] center flex-col md:flex-row md:gap-32 gap-10">
                <div className="flex flex-col w-full ">
                    <p className="text-[1.2rem] text-center md:text-left">
                        Do you want to push your <span className="text-blue font-bold">business</span> for the world to see? 
                    </p>
                    <p className="text-[1.2rem] text-center md:text-left">
                        At VendorsHub we will help you achieve that business height you desire
                    </p>
                </div>
                <a href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc" target="_blank" className="py-2 px-16 bg-secondary text-white hover:scale-95 transition duration-300">Register</a>
            </div>
        </div>
    );
}
 
export default Register;