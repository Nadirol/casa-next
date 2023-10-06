import { TFunction } from "next-i18next"
import { magnifyingGlassIcon } from "../../public/assets";
import Image from "next/image";

type Props = {
    t: TFunction
}

const SearchBar = ({ t }: Props) => {

    return (
        <div className="w-full -md:hidden">
            <form method="GET" 
            className="flex gap-3 items-center max:w-[500px] border border-neutral-400 rounded-lg px-4 py-3 relative
            focus-within:border-neutral-100 bg-filter-dark focus-within:bg-filter-extra-dark transition-[background-color]">
                <input type="text" placeholder={`${t('search')}`} className="w-full outline-none bg-transparent text-white"/>
                <Image src={magnifyingGlassIcon} alt="magnifying glass icon" />
                <div className="absolute w-full h-[200px] bg-white left-0 bottom-0 translate-y-[110%] border rounded-lg p-4 hidden">
                    <h1>asdasd</h1>
                </div>
            </form>
        </div>
    )
};

export default SearchBar;