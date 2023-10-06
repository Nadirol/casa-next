import { TFunction } from "next-i18next"
import { blisterImage, chairImage, tabImage } from "../../public/assets";
import { useState } from "react";
import ProductsSlide from "./ProductsSlide";

const productData = [
    {
        keyword: 'tarno',
        image: chairImage
    },
    {
        keyword: 'woodenBlister',
        image: blisterImage
    },
    {
        keyword: 'tab',
        image: tabImage
    }
]

const ProductsSlider = ({ t }: { t: TFunction}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    
    
    return (
        <div className="w-container mx-auto h-[600px] md:h-[450px] text-white relative">
            {productData.map((p, index) => (
                <ProductsSlide 
                    key={index}
                    t={t}
                    keyword={p.keyword}
                    image={p.image}
                    index={index}
                    activeSlide={activeSlide}
                />
            ))}
                <button className={`absolute left-0 bottom-1/2 translate-y-1/2 z-10 translate-x-[-50%]`} 
                onClick={() => setActiveSlide(prevIndex => prevIndex === 0 ? 2 : prevIndex - 1)}>
                    <svg width="24" height="32" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path d="M5.17095 6.49947L0.220947 1.54947L1.63595 0.136475L7.99995 6.49947L1.63595 12.8635L0.221948 11.4485L5.17195 6.49847L5.17095 6.49947Z"
                        className="fill-white"/>
                    </svg>                
                </button>
                <button className={`p-2 md:p-4 absolute right-0 bottom-1/2 translate-y-1/2 z-10 translate-x-1/2`} 
                onClick={() => setActiveSlide(prevIndex =>  prevIndex === 2 ? 0 : prevIndex + 1)}>
                    <svg width="24" height="32" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.17095 6.49947L0.220947 1.54947L1.63595 0.136475L7.99995 6.49947L1.63595 12.8635L0.221948 11.4485L5.17195 6.49847L5.17095 6.49947Z"
                        className="fill-white"/>
                    </svg>  
                </button>
        </div>
    )
};

export default ProductsSlider;