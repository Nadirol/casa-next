import { TFunction } from "next-i18next";
import FadeInOnScroll from "../animated/FadeInOnScroll";

const list = [1,2,3,4,5,6]

const Values = ({ t }: { t: TFunction }) => {

    return (
        <div className="relative bg-black">
            <div className="py-16 text-white w-container mx-auto flex gap-12 flex-col">
                <h2 className="font-bold text-3xl tracking-[0.2rem] relative z-10 -md:text-center">
                    {t('whyChooseCasa')}
                </h2>

                <div className="relative flex gap-8 flex-col bg-opacity-0">
                    {list.map((n) => (
                        <FadeInOnScroll key={n}>
                            <div className={` from-transparent to-neutral-900 rounded-lg  px-4 md:px-8 py-12 w-[60%]
                            flex gap-4 -md:flex-col items-center relative z-10 
                            ${n % 2 === 0 ? "ml-auto flex-row-reverse bg-gradient-to-l" : "bg-gradient-to-r"}`}>
                                <div className={`${n % 2 === 0 ? "text-end" : ""} flex gap-2.5 flex-col min-w-[170px]`}>
                                    <h2>
                                        {`0${n}`}
                                    </h2>

                                    <h3 className="font-bold text-xl md:text-3xl">
                                    {t(`valuesTitle${n}`)}
                                    </h3>
                                </div>

                                <p className="font-light -md:text-xs">
                                {t(`valuesParagraph${n}`)}
                                </p>
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </div>

    )
};

export default Values;