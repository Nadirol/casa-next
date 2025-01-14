import { TFunction } from "i18next";
import Link from "next/link";
import { IdealImage } from "../SanityImage";
import { IPost } from "../../interface/interface";
import { useEffect, useRef, useState } from "react";

const News = ({ t, data }: { t: TFunction, data: IPost[] }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
      sliderRef.current?.scrollBy({
          top: 0,
          left: -100,
          behavior: "smooth",
      });

  }

  const nextSlide = () => {
      sliderRef.current?.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
      });

  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setScrollPosition(scrollLeft);

      const isEnd = scrollLeft + clientWidth > scrollWidth - 50;

      setIsScrollEnd(isEnd);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', handleScroll);
    }

    const pos = sliderRef.current

    return () => {
      if (pos) {
        pos.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
    return (
        <div className="bg-black text-white relative [&:hover>button]:opacity-100">
          <div className="w-container mx-auto">
            <div className="pt-6 pb-8 ">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {t('news')}
              </h1>
            </div>
      
            <div className="flex gap-16 items-start overflow-x-scroll snap-x scrollbar-hide
            snap-mandatory overscroll-x-contain overflow-y-visible pr-[3rem] pt-4" ref={sliderRef}> 
              {data.filter(p => p.published).map((post) => (
                <div key={post._id} className="w-post min-w-[300px] snap-start">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
                    <Link
                      href={`/news/${post.slug?.current}` || `/`}
                      className="space-y-3 xl:col-span-4"
                    >
                      <IdealImage image={post.image}/>
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-100">
                          {post.title}
                        </h3>
                      </div>

                      <p className="text-base font-medium leading-6 text-primary-medium">
                        {new Date(post._createdAt).toISOString().split("T")[0]}
                      </p>

                      <p className="prose max-w-none text-gray-400 line-clamp-4">
                        {post.overview}
                      </p>
                    </Link>
                  </article>
                </div>
              ))}
            </div>

            <button className={`p-3 absolute left-0 transition-opacity duration-500
            bottom-1/2 translate-x-[-30%] xl:translate-x-[100%] translate-y-1/2 z-50 ${scrollPosition === 0 && "hidden"}`} 
            onClick={prevSlide}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
              className="fill-white"/>
              </svg>          
            </button>

            <button className={`p-3 absolute right-0 transition-opacity z-30
            duration-500 bottom-1/2 translate-x-[30%] xl:translate-x-[-100%] translate-y-1/2 ${isScrollEnd && "hidden"}`} 
            onClick={nextSlide}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
              <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
              className="fill-white"/>
              </svg>           
            </button>
          </div>

        </div>
      );
};

export default News;