import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { IdealImage } from "../SanityImage";
import { IPost } from "../../interface/interface";

const News = ({ t, data }: { t: TFunction, data: IPost[] }) => {

    return (
        <div className="bg-black text-white">
          <div className="w-container mx-auto">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {t('news')}
              </h1>
            </div>
      
            <ul className="flex gap-12 items-start">
              {data.filter(p => p.published).map((post) => (
                <li key={post._id} className="py-4 max-w-[500px]">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <Link
                      href={`/news/${post.slug.current}`}
                      prefetch
                      className="space-y-3 xl:col-span-3"
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

                      <p className="prose max-w-none text-gray-400 line-clamp-3">
                        {post.overview}
                      </p>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>

        </div>
      );
};

export default News;