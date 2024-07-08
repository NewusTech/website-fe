import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

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
      <div className="flex md:gap-[32px] md:w-full h-[120px] md:h-[273px] relative">
        <div className="absolute top-0 left-[98px] md:left-[315px] z-10">
          <Image
            src={image ? image : `/assets/images/placeholder-image (2).jpg`}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain"
          />
        </div>
        <div className="w-full md:w-[28%] h-full flex items-center">
          <Image
            src={image ? image : `/assets/images/placeholder-image (2).jpg`}
            alt="image card list"
            width={1000}
            height={1000}
            className="rounded-l-[10px] h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-[70%] flex flex-col justify-center pr-4 md:pr-[42px] bg-white pl-2 md:py-5 rounded-r-[10px]">
          <h2 className="md:text-2xl text-[10px] font-semibold">
            {title ? title : 'Name Project'}
          </h2>
          <p className="md:text-[16px] text-[8px] text-gray mt-[10px] mb-2 md:mb-5 w-[200px] md:w-full line-clamp-3">
            {body ? body : 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Löremipsum astrobel sar direlig. Kronde est konfoni med kelig.'}
          </p>
          <Link target="_blank" href={`/portfolio/${slug}`}>
            <Button
              size="xs"
              className="bg-blue py-[14px] md:py-6 px-20 rounded-[10px] w-[116px] md:w-[188px] hover:bg-blue-2 md:text-[16px] text-[8px] transition-transform duration-300 ease-in-out transform hover:scale-105"
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
