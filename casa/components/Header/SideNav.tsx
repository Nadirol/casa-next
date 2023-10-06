import Image from "next/image"
import { closeicon, logoDark } from "../../public/assets"
import { MutableRefObject, SetStateAction } from "react";
import Link from "next/link";
import { TFunction, i18n } from "next-i18next";

interface Props {
    sidenavOpened: boolean,
    setSidenavOpened: (value: SetStateAction<boolean>) => void,
    sideNavRef: MutableRefObject<null>,
    t: TFunction
}

const sideNav = ({ sidenavOpened, setSidenavOpened, sideNavRef, t }: Props ) => {
    return (
        <div className={`w-sidenav h-screen min-h-full fixed right-0 top-0 bg-filter-extra-dark z-40 
                ${sidenavOpened ? 'translate-x-0' : 'translate-x-[100%]'} transition-all duration-300
                flex flex-col items-center justify-between py-20 md:py-[5rem] mx-auto xl:hidden`} ref={sideNavRef}>
                    <button onClick={() => setSidenavOpened(false)} 
                        className="xl:hidden ml-auto mr-8">
                            <Image src={closeicon} alt="menu button icon" className="" loading="lazy"/>
                    </button>
                    <div className="flex gap-[1.875rem] flex-col items-center">

                        <Link href="/">
                            <Image src={logoDark} alt="" className="w-[10rem]" loading="lazy"/>
                        </Link>
                        
                        <nav className="flex gap-6 flex-col">
                            <Link href="/" className="text-neutral-100 font-medium text-base leading-5 flex gap-4" onClick={() => setSidenavOpened(false)}>
                            {t('home').toUpperCase()}
                            </Link>
                            <Link href={`/${i18n?.language}/products`} className="text-neutral-100 font-medium text-base leading-5 flex gap-4" onClick={() => setSidenavOpened(false)}>
                            {t('products').toUpperCase()}
                            </Link>
                            <Link href={`/${i18n?.language}/about`} className="text-neutral-100 font-medium text-base leading-5 flex gap-4" onClick={() => setSidenavOpened(false)}>
                            {t('about').toUpperCase()}
                            </Link>
                            <Link href={`/${i18n?.language}/contact`} className="text-neutral-100 font-medium text-base leading-5 flex gap-4 " onClick={() => setSidenavOpened(false)}>            
                            {t('contact').toUpperCase()}
                            </Link>
                        </nav>
                    </div>

                    <div className="flex gap-6 flex-col -xl:items-center">
                        <div className="flex gap-3 flex-col -xl:items-center">
                            <div className="flex gap-4 items-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6 24C23 24 23.3333 23.8667 23.6 23.6C23.8667 23.3333 24 23 24 22.6V17.2C24 16.8889 23.9 16.6164 23.7 16.3827C23.5 16.1489 23.2444 15.9991 22.9333 15.9333L18.3333 15C18.0222 14.9556 17.7053 14.9836 17.3827 15.084C17.06 15.1844 16.7991 15.3342 16.6 15.5333L13.4667 18.6667C11.7778 17.6444 10.2333 16.4333 8.83333 15.0333C7.43333 13.6333 6.26667 12.1333 5.33333 10.5333L8.53333 7.26667C8.73333 7.06667 8.86133 6.83867 8.91733 6.58267C8.97333 6.32667 8.97867 6.04356 8.93333 5.73333L8.06667 1.06667C8.02222 0.755556 7.87778 0.5 7.63333 0.3C7.38889 0.0999999 7.11111 0 6.8 0H1.4C0.999998 0 0.666664 0.133333 0.399998 0.4C0.133331 0.666667 0 1 0 1.4C0 4.26667 0.639111 7.06133 1.91733 9.784C3.19555 12.5067 4.88444 14.9178 6.984 17.0173C9.08356 19.1169 11.4947 20.8058 14.2173 22.084C16.94 23.3622 19.7342 24.0009 22.6 24Z"
                                className="fill-neutral-100"/>
                                </svg>                
                                <div className="flex flex-col text-neutral-100 font-regular text-xs xl:text-lg">
                                    <a target="_blank" href="https://zalo.me/0373522843">0373 522 843</a>
                                </div>
                            </div>

                            <div className="flex gap-4 -xl:justify-center items-center">
                                <svg width="15" height="17" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17C16.0312 17 16.9144 16.6668 17.6494 16.0004C18.3844 15.334 18.7512 14.5339 18.75 13.6C18.75 12.665 18.3825 11.8643 17.6475 11.1979C16.9125 10.5315 16.03 10.1989 15 10.2C13.9688 10.2 13.0856 10.5332 12.3506 11.1996C11.6156 11.866 11.2487 12.6661 11.25 13.6C11.25 14.535 11.6175 15.3357 12.3525 16.0021C13.0875 16.6685 13.97 17.0011 15 17ZM15 29.495C18.8125 26.3217 21.6406 23.4385 23.4844 20.8454C25.3281 18.2523 26.25 15.9505 26.25 13.94C26.25 10.8517 25.1637 8.3232 22.9912 6.3546C20.8187 4.386 18.155 3.40113 15 3.4C11.8438 3.4 9.17937 4.38487 7.00688 6.3546C4.83437 8.32433 3.74875 10.8528 3.75 13.94C3.75 15.9517 4.67188 18.254 6.51562 20.8471C8.35938 23.4402 11.1875 26.3228 15 29.495ZM15 34C9.96875 30.1183 6.21125 26.5132 3.7275 23.1846C1.24375 19.856 0.00125 16.7745 0 13.94C0 9.69 1.50813 6.30417 4.52437 3.7825C7.54063 1.26083 11.0325 0 15 0C18.9688 0 22.4612 1.26083 25.4775 3.7825C28.4937 6.30417 30.0012 9.69 30 13.94C30 16.7733 28.7575 19.8549 26.2725 23.1846C23.7875 26.5143 20.03 30.1195 15 34Z" 
                                className="fill-neutral-100"/>
                                </svg>
                                <h1 className="text-neutral-100 font-regular text-xs xl:text-lg -xl:w-1/2">
                                {t('addressDetails')}
                                </h1>
                            </div>
                        </div>
                    </div>
            </div>
    )
};

export default sideNav;