import { useTranslation } from "next-i18next"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Roboto } from 'next/font/google'

import { NextSeo } from "next-seo";
import AltHeader from "../../../components/AltHeader";
import Footer from "../../../components/Footer";
import Widgets from "../../../components/Widgets";
import Image from "next/image";
import { bluetoothIcon, chargingIcon, electricityIcon, ledLightIcon, tabImage, tabImage2, tabImage3, tabImage4 } from "../../../public/assets";
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
            <div className="w-container mx-auto grid gap-5 xl:gap-8 md:grid-cols-2 xl:grid-cols-details">
                <div className="flex gap-4 md:gap-8 xl:gap-12 flex-col">
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

                <div className="flex gap-8 flex-col">
                    <h1 className="font-bold text-xl tracking-[0.1rem]">
                        {t('tab').toUpperCase()}
                    </h1>

                    <div className="flex gap-6 justify-between w-full">
                      <div className="flex gap-3 flex-col items-center">
                        <div className="p-2.5 rounded-[100%] bg-white">
                          <div className="w-16 aspect-square">
                            <Image src={chargingIcon} alt="icon" className="w-16"/>
                          </div>
                        </div>

                        <h3 className="text-center max-w-[6rem]">
                          {t('feature1')}
                        </h3>
                      </div>

                      <div className="flex gap-3 flex-col items-center">
                        <div className="p-2.5 rounded-[100%] bg-white">
                          <div className="w-16 aspect-square flex items-center justify-center">
                            <Image src={electricityIcon} alt="icon" className="w-12"/>
                          </div>
                        </div>

                        <h3 className="text-center max-w-[6rem]">
                          {t('feature2')}
                        </h3>
                      </div>

                      <div className="flex gap-3 flex-col items-center">
                        <div className="p-2.5 rounded-[100%] bg-white">
                          <div className="w-16 aspect-square">
                            <Image src={bluetoothIcon} alt="icon" className="w-16"/>
                          </div>
                        </div>

                        <h3 className="text-center max-w-[6rem]">
                          {t('feature3')}
                        </h3>
                      </div>

                      <div className="flex gap-3 flex-col items-center">
                        <div className="p-2.5 rounded-[100%] bg-white">
                          <div className="w-16 aspect-square">
                            <Image src={ledLightIcon} alt="icon" className="w-16"/>
                          </div>
                        </div>

                        <h3 className="text-center max-w-[6rem]">
                          {t('feature4')}
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-4 flex-col">
                      <h2 className="font-bold tracking-[0.1rem]">
                        {t('specifications').toUpperCase()}
                      </h2>

                      <div className="flex flex-col">
                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('model')}
                          </h3>
                          <h3 className="text-neutral-400">
                            TAB-01 OAK
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('size')}
                          </h3>
                          <h3 className="text-neutral-400">
                            410 x 420 x 500 mm
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('materials')}
                          </h3>
                          <h3 className="text-neutral-400">
                            {t('oak') + ", " + t('temperedGlass')}
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            Bluetooth
                          </h3>
                          <h3 className="text-neutral-400">
                            Bluetooth 5.0
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('speakers')}
                          </h3>
                          <h3 className="text-neutral-400">
                            10W x 2 //THD=1%
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('powerSource')}
                          </h3>
                          <h3 className="text-neutral-400">
                            AC100-240V // DC 12V/1-2A
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('wirelessCharge')}
                          </h3>
                          <h3 className="text-neutral-400">
                            15W
                          </h3>
                        </div>

                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('wiredCharge')}
                          </h3>
                          <h3 className="text-neutral-400">
                            USC + Type-C // 5V/1-2A
                          </h3>
                        </div>
                        
                        <div className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                          <h3 className="text-white">
                            {t('LEDlight')}
                          </h3>
                          <h3 className="text-neutral-400">
                            {`${t('white')} - ${t('gold')} - ${t('neutral')}`}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 flex-col">
                      <h2 className="font-bold tracking-[0.1rem]">
                        {t('description').toUpperCase()}
                      </h2>

                      <ul className="list-disc flex gap-3 flex-col">
                        <li>
                          <p className="font-light">
                            {t('tabDescription1')}
                          </p>
                        </li>

                        <li>
                          <p className="font-light">
                            {t('tabDescription2')}
                          </p>
                        </li>
                      </ul>




                    </div>
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