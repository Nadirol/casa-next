import { TFunction, i18n } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import NavLinks from "./Header/NavLinks";
import NavButtons from "./Header/NavButtons";
import { logoLight } from "../public/assets";

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

const lngs = new Map([
    ['en', { nativeLanguage: 'English' }],
    ['vi', { nativeLanguage: 'Tiếng Việt' }],
]);

const Header = ({ t }: { t: TFunction }) => {
    return (
    <nav className="sticky z-20 bg-white top-0 w-full">
        <div className="w-container flex justify-between items-end mx-auto py-2 xl:py-4 -xl:px-4">
            <Link href={`/${i18n?.language}`}>
                <Image src={logoLight} alt="" className="w-12 md:w-16"/>
            </Link>

            <NavLinks t={t}/>

            <NavButtons t={t}/>
        </div>
    </nav>
    )
};

export default Header;