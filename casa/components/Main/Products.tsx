import { TFunction, i18n } from "next-i18next";
import Link from "next/link";
import ProductCard from "../Card/ProductCard";
import { blisterImage, chairImage, newTabImage, tabImage } from "../../public/assets";
import FadeInOnScroll from "../animated/FadeInOnScroll";
import { useEffect, useRef, useState } from "react";

const productData = [
    {
        keyword: 'newTab',
        image: newTabImage,
        slug: 'tu-dau-giuong-thong-minh-phien-ban-moi'
    },
    {
        keyword: 'tarno',
        image: chairImage,
        slug: 'ban-ghe-tarno'
    },
    {
        keyword: 'tab',
        image: tabImage,
        slug: 'tu-dau-giuong-thong-minh'
    },
    {
        keyword: 'woodenBlister',
        image: blisterImage,
        slug: 'van-vi-go-12-nan'
    },
]

const Products = ({ t }: { t: TFunction }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const prevSlide = () => {
        sliderRef.current?.scrollBy({
            top: 0,
            left: -250,
            behavior: "smooth",
        });
  
    }
  
    const nextSlide = () => {
        sliderRef.current?.scrollBy({
        top: 0,
        left: 250,
        behavior: "smooth",
        });
  
    };
  
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollEnd, setIsScrollEnd] = useState(false);
  
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setScrollPosition(scrollLeft);
  
        const isEnd = scrollLeft + clientWidth > scrollWidth - 50;
  
        setIsScrollEnd(isEnd);
      }
    };
  
    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.addEventListener('scroll', handleScroll);
      }
  
      const pos = sliderRef.current
  
      return () => {
        if (pos) {
          pos.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);
    
    return (
        <div className="relative py-16 pb-8 flex gap-6 flex-col bg-neutral-100">
            <span className="absolute z-[5] h-[1px] bg-black w-full"></span>

            <div className="relative z-10 w-container mx-auto">
                <h2 className="font-light text-neutral-900 text-xl md:text-3xl tracking-[0.2rem] -md:text-center
                absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 bg-neutral-100 px-16">
                    {t('productsHeading').toUpperCase()}
                </h2>
            </div>

            <div className="w-container mx-auto relative z-10 flex gap-6 flex-col mt-4">
                <Link href={`/${i18n?.language}/products`} className="flex gap-3 items-center text-neutral-400 font-light
                hover:text-neutral-900 [&:hover>svg>path]:fill-neutral-900 mx-auto">
                    {t('viewAllProducts')}
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.17095 6.49947L0.220947 1.54947L1.63595 0.136475L7.99995 6.49947L1.63595 12.8635L0.221948 11.4485L5.17195 6.49847L5.17095 6.49947Z" 
                        className="fill-neutral-400"/>
                    </svg>                
                </Link>

                <div className="flex gap-12 items-start overflow-x-scroll snap-x scrollbar-hide
                snap-mandatory overscroll-x-contain overflow-y-visible pr-[3rem] pt-4" ref={sliderRef}>
                    {productData.map((p, index) => (
                        <ProductCard 
                            key={index}
                            title={t(`${p.keyword}`)} 
                            image={p.image} 
                            category={t(`${p.keyword}Category`)}
                            slug={p.slug}
                        />
                    ))}
                </div>

                <button className={`p-3 absolute left-0 transition-opacity duration-500
                bottom-1/2 translate-x-[-100%] translate-y-1/2 z-50 ${scrollPosition === 0 && "hidden"}`} 
                onClick={prevSlide}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                className="fill-neutral-800"/>
                </svg>          
                </button>

                <button className={`p-3 absolute right-0 transition-opacity z-30
                duration-500 bottom-1/2 translate-x-[100%] translate-y-1/2 ${isScrollEnd && "hidden"}`} 
                onClick={nextSlide}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                className="fill-neutral-800"/>
                </svg>           
                </button>
            </div>
        </div>
    )
};

export default Products;