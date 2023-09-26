import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header';

const roboto = Roboto({ subsets: ['latin','vietnamese'], weight: ['300','400','500','700'] })

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={`${roboto.className} flex flex-col overflow-hidden`}>
        <Header
          t={t}
        />
      </div>
    </>
  )
}
