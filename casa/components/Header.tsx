import { TFunction, i18n } from "next-i18next";
import Image from "next/image";

import Link from "next/link";
import NavLinks from "./Header/NavLinks";
import NavButtons from "./Header/NavButtons";
import { headerBackground, logoDark, mobileHeaderBackground } from "../public/assets";
import HeaderContent from "./Header/Content";
import StickyHeader from "./Header/StickyHeader";
import SideNav from "./Header/SideNav";
import { useEffect, useRef, useState } from "react";
import FadeInOnScroll from "./animated/FadeInOnScroll";

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

const Header = ({ t }: { t: TFunction }) => {

    const [sidenavOpened, setSidenavOpened] = useState(false);
    const sideNavRef = useRef(null);

    const hideSideNav = () => {
        setSidenavOpened(false)
    };

    useClickDetector([sideNavRef], hideSideNav);

    return (
        <header className="relative z-20 w-full py-[60px] h-screen overflow-hidden flex gap-12 flex-col border-b border-neutral-500 bg-neutral-900">
            <Image src={headerBackground} alt="background image" 
            className="absolute z-0 inset-0 w-full h-full object-cover pointer-events-none -md:hidden"/>
            <Image src={mobileHeaderBackground} alt="background image" 
            className="absolute z-0 inset-0 w-full h-full object-cover pointer-events-none md:hidden"/>

            <div className="bg-gradient-to-b from-black md:via-transparent to-filter-dark md:to-transparent absolute z-0 inset-0 w-full h-full"></div>

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

            <div className="flex gap-10 w-container mx-auto justify-between relative min-h-[80%] pb-10">
                <FadeInOnScroll>
                    <HeaderContent t={t}/>
                </FadeInOnScroll>
            </div>
        </header>
    )
};

export default Header;