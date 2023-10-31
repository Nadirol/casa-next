import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Roboto } from 'next/font/google'

import { NextSeo } from "next-seo";
import Footer from "../../../components/Footer";
import AltHeader from "../../../components/AltHeader";
import Widgets from "../../../components/Widgets";
import { client } from "../../../lib/sanity";
import { IPost } from "../../../interface/interface";

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ["300","400","500","700"] });

async function getData() {
    const query = `*[_type == "post"]`;

    const data = await client.fetch(query);

    return data;
}

export default function PostPage({ data }: { data: IPost[]}) {
  const { t } = useTranslation('common');
    
  return (
    <>
      <NextSeo
        title="Bài viết - CASA"
        canonical="/vi/post"
      />
      
      <div className={`${roboto.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading="news"
        />

        <main className="relative py-4 md:py-8 xl:py-16">
          <div className="w-container mx-auto grid">
            {data.map(p => (
              <div key={p._id} className="">
                <h2>
                  {p.title}
                </h2>
                <h4>
                  {p._createdAt}
                </h4>
              </div>
            ))}
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

export async function getServerSideProps({ locale }: { locale: string}) {
    const data = await getData() as IPost;
  
    return {
      props: {
        data: data,
        ...(await serverSideTranslations(locale, [
            'common',
        ]))
      }, // will be passed to the page component as props
    };
  }
