import { TFunction, i18n } from "next-i18next"
import Link from "next/link"

const NavLinks = ({ t }: { t: TFunction}) => {
    return (
        <ul className="hidden xl:flex gap-6 text-white text-base tracking-[0.1rem]">
            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/products`} 
                className="">
                    {t('products').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}/about`} 
                className="">
                    {t('aboutUs').toUpperCase()}
                </Link>
            </li>

            <li className="navlink-underline inline-block relative">
                <Link href={`/${i18n?.language}`} 
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