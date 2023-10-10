import Image from "next/image";
import { aboutBackground, logoDark } from "../../public/assets";
import { TFunction } from "next-i18next";
import Link from "next/link";
import FadeInOnScroll from "../animated/FadeInOnScroll";

const About = ({ t }: { t: TFunction }) => {

    return (
        <div className="relative bg-neutral-900">
            <div className="md:h-[500px] xl:h-[600px] relative flex text-white -md:flex-col -md:text-center">
                <div className="relative h-full flex-1 py-6">
                    <Image src={aboutBackground} alt="background image" 
                    className="absolute z-0 inset-0 h-full object-cover 
                    pointer-events-none opacity-25"/>

                    <div className="bg-filter-medium-dark absolute z-[1] inset-0 w-full h-full"></div>
                    <div className="flex gap-8 flex-col justify-center items-center relative z-10 h-full">
                        <h2 className="font-light md:text-xl tracking-[0.2rem]">
                            {t('aboutUs').toUpperCase()}
                        </h2>
                        <span className="w-[6rem] h-[2px] bg-white"></span>
                        <div className="flex gap-4 md:gap-8 flex-col items-start">
                            <Image src={logoDark} alt="brand logo" className="w-[6rem] md:w-[12rem] xl:w-[20rem]"/>
                        </div>
                        <h4 className="-md:w-3/4">
                            {t('headerSlogan')}
                        </h4>
                    </div>
                </div>

                <div className="relative flex-1 flex gap-4 flex-col items-center 
                justify-center text-center text-white -md:p-12">
                    <FadeInOnScroll>
                        <h2 className="font-light md:text-xl tracking-[0.2rem]">
                            {t('ourStory').toUpperCase()}
                        </h2>
                    </FadeInOnScroll>

                    <FadeInOnScroll>
                        <p className="max-w-[400px] xl:max-w-[500px] leading-loose -xl:text-xs text-sm">
                            {t('ourStoryParagraph')}
                        </p>
                    </FadeInOnScroll>

                    <FadeInOnScroll>
                        <Link href="/" 
                        className="text-white font-medium md:text-xl hover:underline">
                            {t('readMore')} &gt;&gt;&gt;
                        </Link>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    )
};

export default About;