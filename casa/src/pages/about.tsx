import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Fira_Sans } from 'next/font/google'

import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import AltHeader from "../../components/AltHeader";
import Widgets from "../../components/Widgets";

const fira = Fira_Sans({ subsets: ['latin','vietnamese'], weight: ["300","400","500","600","700"] });

export default function AboutPage() {
  const { t } = useTranslation('common');
    
  return (
    <>
      <NextSeo
        title="Về chúng tôi - CASA"
        canonical="casa-vietnam.vn/vi/about"
      />
      
      <div className={`${fira.className} flex flex-col overflow-hidden bg-neutral-900`}>
        <AltHeader
          t={t}
          heading="aboutUs"
        />

        <main className="bg-values relative py-4 md:py-8 xl:py-16">
          <div className="flex gap-12 flex-col relative z-10">
            <div className="relative flex-1 flex gap-4 flex-col items-center 
            justify-center text-center text-white -md:p-12">
                <h2 className="font-light md:text-xl tracking-[0.2rem]">
                    {t('ourStory').toUpperCase()}
                </h2>

                <p className="max-w-[400px] xl:max-w-[500px] leading-loose -xl:text-xs text-sm">
                    {t('ourStoryParagraph')}
                </p>
            </div>

            <div className="relative flex-1 flex gap-4 flex-col items-center 
            justify-center text-center text-white -md:p-12">
                <h2 className="font-light md:text-xl tracking-[0.2rem]">
                    {t('ourCraftmanship').toUpperCase()}
                </h2>

                <p className="max-w-[400px] xl:max-w-[500px] leading-loose -xl:text-xs text-sm">
                    {t('ourCraftmanshipParagraph')}
                </p>
            </div>

            <div className="relative flex-1 flex gap-4 flex-col items-center 
            justify-center text-center text-white -md:p-12">
                <h2 className="font-light md:text-xl tracking-[0.2rem]">
                    {t('ourCollections').toUpperCase()}
                </h2>

                <p className="max-w-[400px] xl:max-w-[500px] leading-loose -xl:text-xs text-sm">
                    {t('ourCollectionsParagraph')}
                </p>
            </div>
          </div>

          <div className="bg-gradient-to-t from-black to-transparent absolute z-0 left-0 bottom-0 w-full  h-[300px] md:h-full"></div>

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