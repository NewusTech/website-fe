import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardSquareProject = ({ projects }: any) => {
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
    <div data-aos="fade-down" className="rounded-[10px] bg-white md:bg-transparent border-2 border-gray-1 md:w-[31%] w-[47%] shadow-lg">
      <div className="absolute top-0 left-[128px] md:left-[360px] z-10">
        <Image
          src={image ? image : `/assets/images/placeholder-image (2).jpg`}
          alt="Logo"
          width={50}
          height={50}
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
        />
      </div>
      <Image
        src={image ? image : `/assets/images/placeholder-image (2).jpg`}
        alt="placeholder"
        width={367}
        height={273}
        className="w-full  h-[120px] md:h-[273px] object-cover"
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

export default CardSquareProject;
