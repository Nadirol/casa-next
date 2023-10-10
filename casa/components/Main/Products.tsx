import { TFunction, i18n } from "next-i18next";
import Link from "next/link";
import ProductCard from "../Card/ProductCard";
import { blisterImage, chairImage, tabImage } from "../../public/assets";
import FadeInOnScroll from "../animated/FadeInOnScroll";

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

const Products = ({ t }: { t: TFunction }) => {

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

                <div className="flex gap-4 md:gap-12 -md:flex-col justify-center items-center md:items-start">
                    {productData.map((p, index) => (
                        <FadeInOnScroll key={index}>
                            <ProductCard title={t(`${p.keyword}`)} image={p.image} category={t(`${p.keyword}Category`)}/>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Products;