import { TFunction, i18n } from "next-i18next"
import Link from "next/link";
import { logoDark } from "../../public/assets";
import Image from "next/image";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { SetStateAction, useEffect, useState } from "react";

const StickyHeader = ({ t, setSidenavOpened } : { t: TFunction, setSidenavOpened: (value: SetStateAction<boolean>) => void }) => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    return (
        <div className={`${scrollPosition > 100 ? "top-0" : "top-[-240px]"} transition-[top] 
        backdrop-blur-sm py-2 bg-filter-dark fixed inset-0 w-full z-30 h-fit`}>
            <div className="w-container flex justify-between items-center mx-auto py-2 relative z-10">
                <Link href={`/${i18n?.language}`}>
                    <Image src={logoDark} alt="" className="w-[8rem] xl:w-[11rem]"/>
                </Link>

                <div className="flex gap-6 items-end flex-col">
                    <NavLinks t={t}/>

                    <NavButtons t={t} setSidenavOpened={setSidenavOpened}/>
                </div>
            </div>
        </div>
    )
};

export default StickyHeader;