import { useTranslation } from "next-i18next"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Roboto } from 'next/font/google'

import { NextSeo } from "next-seo";
import AltHeader from "../../../components/AltHeader";
import Footer from "../../../components/Footer";
import Widgets from "../../../components/Widgets";
import Image from "next/image";
import { tabImage, tabImage2, tabImage3, tabImage4 } from "../../../public/assets";
import { useState } from "react";

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ["300","400","500","700"] });

const images = [tabImage, tabImage2, tabImage3, tabImage4]

export default function AboutPage() {
  const { t } = useTranslation('common');

  const [activeImage, setActiveImage] = useState(0);

  const handleMouseEnterImage = (index: number) => {
    setActiveImage(index)
  };

  return (
    <>
      <NextSeo
        title="Sản Phẩm - CASA"
        canonical="/vi/products"
      />
      
      <div className={`${roboto.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading="products"
        />

        <main className="relative py-16 text-white">
            <div className="w-container mx-auto grid gap-8 grid-cols-details">
                <div className="flex gap-12 flex-col">
                    <div className="flex justify-center items-center w-full">
                        <Image src={images[activeImage]} alt="product image" 
                        className="object-cover aspect-square rounded-lg"/>
                    </div>

                    {images && (
                        <div className="flex gap-4 justify-between w-full overflow-x-scroll scrollbar-hide">
                        {images.map((image, index) => (
                            <Image key={index} src={image} alt="preview image" 
                            className={`flex-[30%] aspect-square object-cover w-[8rem] rounded-lg
                            ${activeImage === index ? 'border-4' : ''} border-neutral-100`}
                            onMouseEnter={() => handleMouseEnterImage(index)}/>
                        ))}
                        </div>
                    )}
                </div>

                <div className="">
                    <h1 className="font-bold text-xl tracking-[0.1rem]">
                        {t('tab').toUpperCase()}
                    </h1>
                </div>
            </div>

            <Widgets t={t}/>
        </main>

        <Footer
          t={t}
        />
      </div>
    </>

  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {


    const paths: any = [];

    return {
        paths: paths, //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },    
  }
};