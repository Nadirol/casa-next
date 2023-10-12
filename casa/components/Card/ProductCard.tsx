import { i18n } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = ({ title, image, category }: { title: string, image: StaticImageData, category: string }) => {

    return (
        <Link href={`/${i18n?.language}/products/tu-dau-giuong-thong-minh`} className="w-[300px] h-full md:min-h-[420px] relative z-10 overflow-hidden hover:border-opacity-100 
        border-b border-opacity-0 border-neutral-900 pb-4 transition-[--tw-border-opacity] duration-500
        [&:hover>.relative>img]:scale-[1.05] [&:hover>.relative>img]:opacity-[0.5]">
            <div className="relative overflow-hidden">
                <Image src={image} alt="product preview" 
                className="transition-all duration-300 object-cover w-full aspect-square max-w-[420px]"/>
                <div className="absolute z-[1] left-0 bottom-0 bg-gradient-to-t from-filter-dark to-transparent w-full h-[100px]"></div>
                <div className="absolute z-[1] left-0 top-0 bg-gradient-to-b from-filter-dark to-transparent w-full h-[100px]"></div>            
            </div>

            <div className="text-neutral-900 flex gap-2 flex-col px-2 py-2 text-center">
                <h3 className="font-medium text-xl tracking-[0.1rem]">
                    {title.toUpperCase()}
                </h3>

                <h4 className="text-sm font-light">
                    {category}
                </h4>
            </div>
        </Link>
    )
};

export default ProductCard;
