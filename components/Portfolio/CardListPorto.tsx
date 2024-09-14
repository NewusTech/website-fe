import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeHTMLTags } from "@/lib/utils";

const CardListPorto = ({ projects }: any) => {
  const {
    id = "",
    title = "",
    slug = "",
    keyword = "",
    logo = "",
    excerpt = "",
    body = "",
    image = "",
    portfolioYear = "",
    webLink = "",
    appsLink = "",
    KategoriportofolioId = "",
    TagportofolioId = "",
    createdAt = "",
    updatedAt = "",
    Kategoriportofolio = {},
    altImage = "",
    tags = [],
  } = projects || {};

  return (
    <div
      data-aos="flip-left"
      className="bg-white rounded-[10px] w-full mb-[10px] shadow-lg"
    >
      <div className="flex md:gap-[12px] lg:gap-[32px] md:w-full h-[130px] md:h-[243px] relative">
        <div className="w-[45%] md:w-[45%] lg:w-[30%] h-full flex items-center relative">
          <Image
            src={image || `/assets/images/placeholder-image (2).jpg`}
            alt={altImage || "placeholder"}
            width={1000}
            height={1000}
            loading="lazy"
            className="rounded-l-[10px] h-full w-full object-contain md:object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-1 right-1 z-10">
            <Image
              src={logo || `/assets/images/placeholder-logo.jpg`}
              alt="Logo"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-contain"
            />
          </div>
        </div>

        <div className="w-[70%] md:w-[70%] flex flex-col justify-center pr-4 md:pr-[42px] bg-white pl-2 md:py-5 rounded-r-[10px] h-full">
          <h2 className="md:text-webJudul text-mobileSubjudul font-semibold  line-clamp-2 md:line-clamp-none">
            {title || "Name Project"}
          </h2>
          <p className="md:text-webSubjudul text-mobileDesk text-gray my-1 md:mt-3 md:mb-4 w-full md:w-full line-clamp-2 md:line-clamp-3">
            {removeHTMLTags(body) || "lorem1"}
          </p>
          <div className="overflow-y-auto scrollbar-thin">
            <div className="flex flex-row gap-1 pt-2 md:items-end w-full justify-start min-w-0">
              {tags?.map((data: { id: number; title: string }) => (
                <Link
                  key={data.id}
                  href={`/portofolio?tag=${data.title}`}
                  className="bg-white rounded-full px-[10px] py-[2px] md:py-1 flex-none text-blue md:text-webDesk text-mobileDesk border-blue border"
                >
                  {data.title}
                </Link>
              ))}
            </div>
          </div>
          <Link target="_blank" href={`/${slug}`} className="mt-2">
            <Button
              size="sm"
              className="bg-blue py-[14px] md:py-6 px-20 rounded-[10px] w-[116px] md:w-[188px] hover:bg-blue-2 text-[11px] md:text-webDesk text-white transition-transform duration-300 ease-in-out transform hover:scale-105 "
            >
              See Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardListPorto;
