import { Roboto } from 'next/font/google'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Banner from '../../components/Main/Banner';
import Products from '../../components/Main/Products';
import Footer from '../../components/Footer';
import About from '../../components/Main/About';
import Widgets from '../../components/Widgets';
import Values from '../../components/Main/Values';
import { NextSeo } from 'next-seo';
import { IPost } from '../../interface/interface';
import { client } from '../../lib/sanity';
import News from '../../components/Main/News';

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ['300','400','500','700'] });

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default function Home({ data }: { data: IPost[]}) {
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo
        title="CASA - Cuộc Sống Tiện Nghi"
        canonical="/vi"
      />
      <div className={`${roboto.className} flex flex-col overflow-hidden`}>
        <Header
          t={t}
        />
        <main className='flex flex-col relative'>
          <Products t={t}/>

          <About t={t}/>

          <Values t={t}/>

          {data.filter(p => p.title.length > 0 && p.content).length > 0 && (
            <News t={t} data={data}/>
          )}

          <Widgets t={t}/>

          <Banner/>
        </main>
        <Footer t={t}/>
      </div>
    </>
  )
};

export async function getServerSideProps({ locale }: { locale: string }) {
  const data = await getData() as IPost[];

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, [
          'common',
      ]))
    }, // will be passed to the page component as props
  };
}
