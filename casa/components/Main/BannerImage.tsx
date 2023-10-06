import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props {
    image: StaticImageData,
    index: number,
    activeSlide: number
}

const BannerImage = ({ image, index, activeSlide }: Props) => {
    return (
        <Image src={image} alt="banner" 
        className={`rounded-lg aspect-[14/5] z-0 object-cover absolute inset-0
        transition-all duration-[1.2s] pointer-event-none ${activeSlide === index ? "opacity-100" : "opacity-0"}`}/>
    )
};

export default BannerImage;