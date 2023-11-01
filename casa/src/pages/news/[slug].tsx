import { i18n, useTranslation } from "next-i18next"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextSeo } from "next-seo";

import Image from "next/image";
import { getImageDimensions } from '@sanity/asset-utils';
import AltHeader from "../../../components/AltHeader";
import { client, urlFor } from "../../../lib/sanity";
import { IPost } from "../../../interface/interface";
import { PortableText } from "@portabletext/react";
import Widgets from "../../../components/Widgets";
import Footer from "../../../components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ["300","400","500","700"] });

async function getData(slug: string) {
    const query = `*[_type == "postCasa" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default function PostPage({ data }: { data: IPost }) {
  const { t } = useTranslation('common');


  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };
  
  if (!data) {
    return (
      <>
        <NextSeo
          title={`CASA`}
          nofollow
          noindex
        />
      </>
    )
  }
  
  return (
    <>
      <NextSeo
        title={`${data.title} | CASA`}
        description={data.overview}
        canonical={`https://www.casa-vietnam.vn/vi/news/${data.slug}`}    
      />

      <div className={`${roboto.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading={'news'}
        />
      </div>

        <main className="flex flex-col relative">
          <div className="w-container mx-auto py-2 md:py-4 min-h-[60vh]">
            {data && (
              <div className="flex gap-8 flex-col">
              <div className="flex justify-end items-start">
                <h4 className="text-neutral-600 text-xs">{`${t('createdAt')}: `} 
                  <span className="text-neutral-800 font-medium">
                    {new Date(data._createdAt).toISOString().split("T")[0]}
                  </span>
                </h4>              
              </div>
              
                <h1 className="text-neutral-900 font-semibold text-2xl md:text-[3rem] leading-tight text-center">
                  {data.title}
                </h1>

                <div className="flex items-center justify-center">
                  {data.image && (
                    <Image
                      src={urlFor(data.image).url()}
                      alt={`image`}
                      width={getImageDimensions(data.image).width}
                      height={getImageDimensions(data.image).height}
                      placeholder="blur"
                      blurDataURL={urlFor(data.image).width(24).height(24).blur(10).url()}

                      className='h-[600px] object-cover mx-auto'
                    />
                  )}

                </div>

                <div className="w-[80%] mx-auto">
                  <PortableText
                    value={data.content}
                    components={PortableTextComponent}
                  />
                </div>


              </div>
            )}

          </div>
          <Widgets t={t}/>
        </main>
        
        <Footer 
          t={t}
        />
    </>
  )
}

export async function getServerSideProps({ locale, params }: { locale: string, params : {slug: string} }) {
  const data = await getData(params.slug) as IPost;

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, [
          'common',
      ]))
    }, // will be passed to the page component as props
  };
}


