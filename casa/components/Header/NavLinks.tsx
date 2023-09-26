import { TFunction, i18n } from "next-i18next"
import Link from "next/link"

const NavLinks = ({ t }: { t: TFunction}) => {
    return (
        <ul className="hidden xl:flex gap-[4rem] text-neutral-900 text-base tracking-[0.05rem]">
            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}`} 
                className=" [&:last-child]:mr-0">
                    {t('products').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/tours`} 
                className="">
                    {t('collection').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/tours`} 
                className="">
                    {t('aboutUs').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/about`} 
                className="">
                    {t('news').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/contact`} 
                className="">
                    {t('contact').toUpperCase()}
                </Link>
            </li>
        </ul>
    )
};

export default NavLinks;