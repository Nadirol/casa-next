import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Roboto } from 'next/font/google'

import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import AltHeader from "../../components/AltHeader";
import Contact from "../../components/contact/Contact";
import ContactForm from "../../components/contact/ContactForm";
import Widgets from "../../components/Widgets";

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ["300","400","500","700"] });

export default function AboutPage() {
  const { t } = useTranslation('common');
    
  return (
    <>
      <NextSeo
        title="Liên hệ - CASA"
        canonical="/vi/contact"
      />
      
      <div className={`${roboto.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading="contact"
        />

        <main className="relative">
            <Contact t={t}/>
            <ContactForm t={t}/>

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