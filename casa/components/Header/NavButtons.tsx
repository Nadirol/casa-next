import { TFunction, i18n } from "next-i18next"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import DarkFilter from "./DarkFilter";
import NavLinks from "./NavLinks";

const useClickDetector = (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void, secondRef: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && !secondRef.current?.contains(event.target)) {
                func()
            }
        }
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    },[ref])    
};
  
const lngs = new Map([
['en', { nativeLanguage: 'English' }],
['vi', { nativeLanguage: 'Tiếng Việt' }],
]);

const NavButtons = ({ t }: { t: TFunction}) => {
    const [lngDropdownOpened, setLngDropdownOpened] = useState(false);
    const dropdownRef = useRef(null);
    const languageButtonRef = useRef(null);
    const hideDropdown = () => {
      setLngDropdownOpened(false)
    }

    useClickDetector(languageButtonRef, hideDropdown, dropdownRef);

    const [sidenavOpened, setSidenavOpened] = useState(false);

    const router = useRouter();
    
    const changeLanguage = (lng: string) => {
      i18n?.changeLanguage(lng); 
      setLngDropdownOpened(false);
      router.replace(`${router.pathname === '/' ? `/${lng}` : `/${lng}${router.asPath}`}`,undefined, { locale: lng })
    }

    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const showSearchBar = () => {
        setSearchBarVisible(true);
    };

    return (
        <div className="flex gap-4 items-end flex-col -xl:ml-auto">
            <div className="flex gap-8 items-center">
                <button>
                    {t('callNow')} 0987 654 321
                </button>

                <div className="flex">
                    <button onClick={() => changeLanguage('vi')} disabled={i18n?.resolvedLanguage === 'vi'}
                        className={`w-[8rem] font-medium ${i18n?.language === 'vi' ? 'text-neutral-700' : 'text-neutral-600'} hover:text-neutral-700`}>
                        VI
                    </button>
                    <span className="pointer-events-none">/</span>
                    <button onClick={() => changeLanguage('en')} disabled={i18n?.resolvedLanguage === 'en'}
                        className={`w-[8rem] font-medium ${i18n?.language === 'en' ? 'text-neutral-700' : 'text-neutral-600'} hover:text-neutral-700`}>
                        EN
                    </button>
                </div>
            </div>

            <SearchBar t={t}/>
        </div>
    )
};

export default NavButtons;