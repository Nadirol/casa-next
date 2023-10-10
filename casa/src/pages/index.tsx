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

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ['300','400','500','700'] });

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo
        title="CASA - Cuộc Sống Tiện Nghi"
        canonical="/vi"
        description="Tại CASA, chúng tôi tự hào về việc biến không gian sống thành các tác phẩm nghệ thuật với các sản phẩm nội thất tinh xảo và thời thượng của chúng tôi. Nằm chặt trong trái tim của Việt Nam, chúng tôi đã dành nhiều năm để hoàn thiện nghệ thuật chế tác các tác phẩm vượt thời gian kết hợp hoàn hảo giữa tính thực dụng và vẻ đẹp."
      />
      <div className={`${roboto.className} flex flex-col overflow-hidden`}>
        <Header
          t={t}
        />
        <main className='flex flex-col relative'>
          <Products t={t}/>

          <About t={t}/>

          <Values t={t}/>

          <Widgets t={t}/>

          <Banner/>
        </main>
        <Footer t={t}/>
      </div>
    </>
  )
};

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },    
  }
}
