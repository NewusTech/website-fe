import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeHTMLTags } from "@/lib/utils";

const CardListPorto = ({ projects }: any) => {
  const { id = "", title = '', slug = "", keyword = "", logo = "",
    excerpt = "", body = "", image = '',
    portfolioYear = '',
    webLink = '',
    appsLink = '',
    KategoriportofolioId = '',
    TagportofolioId = '',
    createdAt = '',
    updatedAt = '',
    Kategoriportofolio = {},
    altImage = '' } = projects || {};

  return (
    <div data-aos="flip-left" className="bg-white rounded-[10px] w-full mb-[10px] shadow-lg">
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
            {title || 'Name Project'}
          </h2>
          <p className="md:text-webSubjudul text-mobileDesk text-gray my-1 md:mt-3 md:mb-4 w-full md:w-full line-clamp-2 md:line-clamp-3">
            {removeHTMLTags(body) || 'lorem1'}
          </p>
          <Link target="_blank" href={`/portfolio/${slug}`}>
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
