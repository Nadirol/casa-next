import Image from "next/image";
import { arrowRightIcon, banner1, banner2 } from '../../public/assets';
import { useState } from "react";
import BannerImage from "./BannerImage";

const Banner = () => {
    const banners = [banner1, banner2];

    const [activeBanner, setActiveBanner] = useState(0);

    return (
        <div className="relative py-12 bg-black">
            <div className="w-container mx-auto relative aspect-[14/5] [&:hover>button]:opacity-95">
                {banners.map((b, index) => (
                    <BannerImage image={b} key={index} index={index} activeSlide={activeBanner}/>
                ))}

                <button className={`p-2 md:p-4 absolute bg-neutral-100 rounded-[100%] left-0 
                bottom-1/2 translate-y-1/2 z-10 translate-x-[-50%] opacity-50 transition-opacity duration-500`} 
                onClick={() => setActiveBanner(prevIndex => prevIndex === 0 ? 1 : 0)}>
                    <div className="w-3 aspect-square flex justify-center items-center">
                        <Image src={arrowRightIcon} alt="arrow icon" className="rotate-180 "/>
                    </div>
                </button>
                <button className={`p-2 md:p-4 absolute bg-neutral-100 rounded-[100%] right-0 bottom-1/2
                translate-y-1/2 z-10 translate-x-1/2  opacity-50 transition-opacity duration-500`} 
                onClick={() => setActiveBanner(prevIndex => prevIndex === 0 ? 1 : 0)}>
                    <div className="w-3 aspect-square flex justify-center items-center">
                        <Image src={arrowRightIcon} alt="arrow icon" className=""/>
                    </div>
                </button>
            </div>

        </div>
    )
};

export default Banner;