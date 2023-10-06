import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Fira_Sans } from 'next/font/google'

import { NextSeo } from "next-seo";
import AltHeader from "../../../components/AltHeader";
import Footer from "../../../components/Footer";
import { aboutBackground, productsBackground } from "../../../public/assets";
import Image from "next/image";
import ProductsHeader from "../../../components/Products/ProductsHeader";
import Products from "../../../components/Main/Products";
import Widgets from "../../../components/Widgets";

const fira = Fira_Sans({ subsets: ['latin','vietnamese'], weight: ["300","400","500","600","700"] });

export default function AboutPage() {
  const { t } = useTranslation('common');
    
  return (
    <>
      <NextSeo
        title="Sản Phẩm - CASA"
        canonical="casa-vietnam.vn/vi/products"
      />
      
      <div className={`${fira.className} flex flex-col overflow-hidden`}>
        <ProductsHeader
          t={t}
        />

        <main className="relative">
            <Products t={t}/>

            <Widgets t={t}/>
        </main>

        <Footer
          t={t}
        />
      </div>
    </>

  )
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
}