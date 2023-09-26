import { TFunction } from "next-i18next"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
    t: TFunction
}

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

const SearchBar = ({ t }: Props) => {

    return (
        <div className="">
            <form method="GET" className="flex gap-3 flex-col w-search-bar">
                <input type="text" placeholder={`${t('search')}`} className="w-full border"/>
            </form>
        </div>
    )
};

export default SearchBar;