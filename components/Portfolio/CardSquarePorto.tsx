import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardSquarePorto = ({ projects }: any) => {
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
    <div data-aos="fade-down" className="rounded-[10px] bg-white md:bg-transparent border-2 border-gray-1 md:w-[31%] w-[47%] shadow-lg relative">
      <div className="relative">
        <Image
          src={image ? image : `/assets/images/placeholder-image (2).jpg`}
          alt="placeholder"
          width={1000}
          height={1000}
          className="w-full h-[120px] md:h-[273px] object-cover"
        />
        <div className="absolute top-2 right-2 z-10">
          <Image
            src={logo ? logo : `/assets/images/placeholder-logo.jpg`}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
          />
        </div>
      </div>
      <div className="md:mt-4 my-4 md:mb-3 flex flex-col gap-1 md:gap-2 px-4">
        <h2 className="md:text-webJudul text-mobileJudul font-semibold truncate">
          {title ? title : 'Name Project'}
        </h2>
        <p className="text-gray text-mobileSubjudul md:text-webSubjudul md:text-base line-clamp-3">
          {body ? body : 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Löremipsum astrobel sar direlig. Kronde est konfoni med kelig.'}
        </p>
        <Link target="_blank" href={`/portfolio/${slug}`}>
          <Button size="sm" className="bg-blue md:py-6 md:mt-0 h-7 mt-2 rounded-[10px] w-full hover:bg-blue-2 text-[11px] md:text-webDesk text-white">
            See Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardSquarePorto;
