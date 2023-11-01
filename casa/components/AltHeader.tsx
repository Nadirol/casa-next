import { TFunction, i18n } from "next-i18next";
import Image from "next/image";

import Link from "next/link";
import NavLinks from "./Header/NavLinks";
import NavButtons from "./Header/NavButtons";
import { aboutBackground, logoDark } from "../public/assets";
import StickyHeader from "./Header/StickyHeader";
import SideNav from "./Header/SideNav";
import { useEffect, useRef, useState } from "react";

const useClickDetector = (refs: React.MutableRefObject<HTMLDivElement | null>[], func: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!refs.some(ref => ref.current?.contains(event.target))) {
                func()
            }
        }
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    },[refs[0]])
};

const AltHeader = ({ t, heading }: { t: TFunction, heading: string | null }) => {

    const [sidenavOpened, setSidenavOpened] = useState(false);
    const sideNavRef = useRef(null);

    const hideSideNav = () => {
        setSidenavOpened(false)
    };

    useClickDetector([sideNavRef], hideSideNav);

    return (
        <header className="relative z-20 w-full py-4 md:py-[60px] overflow-hidden h-[200px] md:h-[400px]">
            <Image src={aboutBackground} alt="background image" 
            className="absolute z-0 inset-0 h-full object-cover 
            pointer-events-none opacity-25"/>

            <div className="bg-filter-medium-dark absolute z-[1] inset-0 w-full h-full"></div>

            {heading && (
                <h1 className="absolute z-20 right-1/2 bottom-[15%] translate-x-1/2 
                text-2xl md:text-4xl font-bold tracking-[0.02rem] text-white text-center">
                    {t(heading).toUpperCase()}
                </h1>
            )}

            <div className="w-container flex justify-between items-center mx-auto py-2 xl:py-4 relative z-10">
                <Link href={`/${i18n?.language}`}>
                    <Image src={logoDark} alt="" className="w-[8rem] xl:w-[11rem]"/>
                </Link>

                <div className="flex gap-6 items-end flex-col">
                    <NavLinks t={t}/>

                    <NavButtons 
                        t={t}
                        setSidenavOpened={setSidenavOpened}
                    />
                </div>
            </div>

            <StickyHeader t={t} setSidenavOpened={setSidenavOpened}/>

            <SideNav
                t={t}
                sidenavOpened={sidenavOpened}
                setSidenavOpened={setSidenavOpened}
                sideNavRef={sideNavRef}
            />
        </header>
    )
};

export default AltHeader;