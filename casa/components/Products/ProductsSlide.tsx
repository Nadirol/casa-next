import { TFunction } from "next-i18next";
import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props { 
    keyword: string, 
    image: StaticImageData, 
    t: TFunction 
    index: number,
    activeSlide: number
}   

const ProductsSlide = ({ keyword, image, t, index, activeSlide }: Props) => {
    return (
        <div className={`absolute z-10 right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 h-[450px] w-full
        flex gap-4 xl:gap-24 -md:flex-col-reverse justify-center items-center transition-all duration-500 
        ${index === activeSlide ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <div className="flex-1 flex gap-8 md:gap-12 text-center items-center md:items-end flex-col md:text-end">
                <div className="flex gap-2 flex-col items-end max-w-[80%] md:max-w-[75%]">
                    <h2 className="text-2xl md:text-[3rem] md:leading-snug font-bold tracking-[0.05rem]">
                        {t(keyword).toUpperCase()}
                    </h2>

                    <span className="w-full h-[2px] bg-neutral-100"></span>
                </div>

                <p className="leading-loose w-3/4 -md:text-sm">
                    {t(`${keyword}Description`)}
                </p>
            </div>

            <div className="md:flex-1 flex items-start xl:items-center justify-center">
                <Image src={image} alt="product image" className="w-2/3 md:w-[85%] xl:w-2/3 brightness-90 rounded-lg"/>
            </div>
        </div>
    )
};

export default ProductsSlide;