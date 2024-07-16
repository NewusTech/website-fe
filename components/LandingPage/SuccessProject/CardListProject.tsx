import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeHTMLTags } from "@/lib/utils";

const CardListProject = ({ projects }: any) => {
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
    Tagportofolio = {} } = projects || {};

  return (
    <div data-aos="flip-left" className="bg-white rounded-[10px] w-full mb-[10px] shadow-lg">
      <div className="flex md:gap-[32px] md:w-full h-[140px] md:h-[243px] relative">
        <div className="w-[40%] md:w-[30%] h-full flex items-center relative">
          <Image
            src={image || `/assets/images/placeholder-image (2).jpg`}
            alt="image card list"
            width={1000}
            height={1000}
            className="rounded-l-[10px] h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-2 right-2 z-10">
            <Image
              src={logo || `/assets/images/placeholder-logo.jpg`}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
            />
          </div>
        </div>

        <div className="w-[70%] md:w-[70%] flex flex-col justify-center pr-4 md:pr-[42px] bg-white pl-2 md:py-5 rounded-r-[10px]">
          <h2 className="md:text-webJudul text-mobileJudul font-semibold">
            {title || 'Name Project'}
          </h2>
          <p className="md:text-webSubjudul text-mobileSubjudul text-gray mt-[10px] mb-2 md:mb-5 w-full md:w-full line-clamp-3">
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

export default CardListProject;
