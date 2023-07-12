"use client"

import { Nav } from "./nav";


interface NavHeroProps {
    backgroundImg: string;
    title: string;
    body: string;
    buttonText?: string;
};

const NavHero: React.FC<NavHeroProps> = ({backgroundImg, title, body, buttonText}) => {    

    return (
        <div className={` w-[100vw]  bg-center bg-cover px-8 md:px-12 py-8`} style={{backgroundImage: `            linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),        ${backgroundImg}`,opacity: '0.8'}}>
            <Nav />

            <div className="text-center md:text-left md:my-16 text-white my-32  md:w-[50%]">
                {title && <h2 className="text-[1.6rem] md:text-[2.7rem] leadin-[3rem]">{title}</h2>}
                {body && <p className='my-8 text-[1rem] md:text-[1.1rem]'>{body}</p>}
                {buttonText && <button className="bg-green px-16 md:px-28 py-2 ">{buttonText}</button>}
            </div>
        </div>
    );
};

export default NavHero;