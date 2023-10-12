import { i18n, useTranslation } from "next-i18next"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Roboto } from 'next/font/google'

import { NextSeo } from "next-seo";
import AltHeader from "../../../components/AltHeader";
import Footer from "../../../components/Footer";
import Widgets from "../../../components/Widgets";
import Image from "next/image";
import { bluetoothIcon, chargingIcon, electricityIcon, ledLightIcon, tabImage, tabImage2, tabImage3, tabImage4 } from "../../../public/assets";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProduct } from "../../../interface/interface";

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ["300","400","500","700"] });

const images = [tabImage, tabImage2, tabImage3, tabImage4]

export default function AboutPage() {
  const { t } = useTranslation('common');

  const [activeImage, setActiveImage] = useState(0);

  const handleMouseEnterImage = (index: number) => {
    setActiveImage(index)
  };

  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setIsLoading(true)
    // Make the API request with the slug as part of the URL path
    const fetchData = async () => {
      const response = await fetch(`/api/product/${slug}`);
      const data = await response.json();

      console.log(data)
      setProduct(data);
      setIsLoading(false)
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <NextSeo
        title={`${product.slug} - CASA`}
        canonical={`/vi/products/${product.slug}`}
      />
      
      <div className={`${roboto.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading={i18n?.language === 'vi' ? product.title_vi : product.title_en}
        />

        <main className="relative py-16 text-white">
            <div className="w-container mx-auto grid gap-5 xl:gap-8 md:grid-cols-2 xl:grid-cols-details">
                <div className="flex gap-4 md:gap-8 xl:gap-12 flex-col">
                    <div className="flex justify-center items-center w-full">
                        <Image src={images[activeImage]} alt="product image" width={400} height={400} 
                        className="object-cover aspect-square rounded-lg"/>
                    </div>

                    <div className="flex gap-4 justify-between w-full overflow-x-scroll scrollbar-hide">
                    {product.image_url && product.image_url.map((image, index) => (
                        <Image key={index} src={image} alt="preview image" width={200} height={200}
                        className={`flex-[30%] aspect-square object-cover w-[8rem] rounded-lg
                        ${activeImage === index ? 'border-4' : ''} border-neutral-100`}
                        onMouseEnter={() => handleMouseEnterImage(index)}/>
                    ))}
                    </div>
                </div>

                <div className="flex gap-8 flex-col">
                    <h1 className="font-bold text-xl tracking-[0.1rem]">
                        {i18n?.language === 'vi' ? product.title_vi.toUpperCase() : product.title_en.toUpperCase()}
                    </h1>
                    
                    {(product.features_vi && product.features_en) && (
                      <div className="flex gap-6 justify-between w-full">
                        {(i18n?.language === 'vi' ? product.features_vi : product.features_en)?.map((f, index) => (
                          <div key={index} className="flex gap-3 flex-col items-center">
                            <div className="p-2.5 rounded-[100%] bg-white">
                              <div className="w-16 aspect-square">
                                <Image src={f.icon} alt="icon" className="w-16" width={64} height={64}/>
                              </div>
                            </div>
  
                            <h3 className="text-center max-w-[6rem]">
                              {f.feature}
                            </h3>
                          </div>
                        ))}
                      </div>
                    )}

                    {(product.specs_vi && product.specs_en) && (
                    <div className="flex gap-4 flex-col">
                      <h2 className="font-bold tracking-[0.1rem]">
                        {t('specifications').toUpperCase()}
                      </h2>

                      <div className="flex flex-col">
                        {(i18n?.language === 'vi' ? product.specs_vi : product.specs_en)?.map((obj, index) => (
                          <div key={index} className="flex gap-4 items-center border-b border-neutral-400 py-2.5">
                            <h3 className="text-white">
                              {t(obj.key)}
                            </h3>
                            <h3 className="text-neutral-400">
                              {obj.value}
                            </h3>
                          </div>
                        ))}

                      </div>
                    </div>
                    )}

                    {(product.description_vi && product.description_en) && (
                      <div className="flex gap-4 flex-col">
                        <h2 className="font-bold tracking-[0.1rem]">
                          {t('description').toUpperCase()}
                        </h2>

                        <ul className="list-disc flex gap-3 flex-col">
                          {(i18n?.language === 'vi' ? product.description_vi : product.description_en).map((desc, index) => (
                            <li key={index}>
                              <p className="font-light">
                                {desc}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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