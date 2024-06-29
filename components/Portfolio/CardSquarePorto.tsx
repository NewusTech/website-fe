import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardSquarePorto = ({ projects }: any) => {
  const { id = "", title = '', slug = "", keyword = "",
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
    <div data-aos="fade-down" className="rounded-[10px] bg-white md:bg-transparent border-2 border-gray-1 md:w-[32%] w-[190px]">
      <Image
        src={image ? image : `/assets/images/placeholder-image (2).jpg`}
        alt="placeholder"
        width={367}
        height={273}
        className="w-full object-cover h-[130px] md:h-[273px]"
      />
      <div className="md:mt-4 my-4 md:mb-5 flex flex-col gap-1 md:gap-4 px-4">
        <h2 className="md:text-[24px] text-[10px] font-semibold truncate">
          {title ? title : 'Name Project'}
        </h2>
        <p className="text-gray text-[8px] md:text-base line-clamp-3">
          {body ? body : 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Löremipsum astrobel sar direlig. Kronde est konfoni med kelig.'}
        </p>
        <Link target="_blank" href={`/portfolio/${slug}`}>
          <Button className="bg-blue md:py-6 mt-5 md:mt-0 h-5 rounded-[10px] w-full hover:bg-blue-2 text-[8px] md:text-[16px]">
            See Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardSquarePorto;
