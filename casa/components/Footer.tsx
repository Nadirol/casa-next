import { TFunction } from "next-i18next";
import Image from "next/image";

import Link from "next/link";
import { facebookIcon, footerBackground, logoDark } from "../public/assets";

const Footer = ({ t }: { t: TFunction }) => {

    return (
        <footer className="xl:min-h-[360px] relative z-10 py-12 text-white -xl:text-center bg-neutral-800">
            <Image src={footerBackground} alt="background image" 
            className="absolute z-0 inset-0 w-full h-full object-cover 
            pointer-events-none opacity-25"/>
            <div className="bg-filter-medium-dark absolute z-[1] inset-0 w-full h-full"></div>

            <div className="w-container mx-auto flex -xl:gap-10 xl:justify-between relative z-10 -xl:flex-col -xl:items-center">
                <div className="flex gap-3 flex-col items-center xl:items-start">
                    <Link href="/">
                        <Image src={logoDark} alt="brand logo" className="w-[11rem]"/>
                    </Link>
                    <h3 className="font-bold">
                        {t('companyTitle')}
                    </h3>
                    <h2 className="font-light">
                    {t('footerSlogan')}
                    </h2>
                </div>
                
                <div className="flex gap-6 flex-col relative z-10 -xl:items-center">
                    <h2 className="font-bold">
                        {t('customerSupport')}
                    </h2>

                    <div className="flex gap-3 flex-col font-light -xl:items-center">
                        <Link href="/">
                            {t('storesAndOpeningHours')}
                        </Link>
                        <Link href="/">
                            {t('termsAndPolicy')}
                        </Link>
                        <Link href="/">
                            {t('FAQs')}
                        </Link>
                    </div>
                </div>

                <div className="flex gap-6 flex-col relative z-10 -xl:items-center">
                    <h2 className="font-bold">
                        {t('contactUs')}
                    </h2>

                    <div className="flex gap-3 flex-col font-light -xl:items-center">
                        <h3>
                            {t('address') + ": "} <span className="font-normal">{t('addressDetails')}</span>
                        </h3>
                        <h3>
                            {t('phoneNumber') + ": "} <span className="font-normal">0987 654 321</span>
                        </h3>
                        <h3>
                            {t('email') + ": "} <span className="font-normal">sales@xhhome.vn</span>
                        </h3>
                        <h3>
                            {t('followUs') + ": "} 
                            <a href="https://www.facebook.com/vncasa" target="_blank" className="font-normal flex gap-2 -md:justify-center">
                                <Image src={facebookIcon} alt="facebook icon" />
                                CASA
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;