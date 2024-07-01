import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardListPorto = ({ projects }: any) => {
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
    <div data-aos="flip-left" className="bg-white rounded-[10px] md:w-full mb-[10px] relative">
      {/* Logo in top right corner */}
      <div className="absolute top-0 left-24 md:left-72 z-10 md:p-4">
        <Image
          src={image ? image : `/assets/images/placeholder-image (2).jpg`}
          alt="Logo"
          width={50}
          height={50}
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
        />
      </div>

      <div className="flex md:gap-[42px] w-full">
        <div className="w-full md:w-[28%] h-[130px] md:h-[273px] rounded-l-[10px]">
          <Image
            src={image ? image : `/assets/images/placeholder-image (2).jpg`}
            alt="image card list"
            width={367}
            height={273}
            className="rounded-l-[10px] w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[72%] flex flex-col justify-center pr-4 md:pr-[42px] bg-white pl-2 md:py-5 rounded-r-[10px]">
          <h2 className="md:text-2xl text-[10px] font-semibold truncate">
            {title ? title : 'Name Project'}
          </h2>
          <p className="md:text-[16px] text-[8px] text-gray mt-[10px] mb-2 md:mb-5 w-[200px] md:w-full line-clamp-3">
            {body ? body : 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Löremipsum astrobel sar direlig. Kronde est konfoni med kelig.'}
          </p>
          <Link target="_blank" href={`/portfolio/${slug}`}>
            <Button
              size="xs"
              className="bg-blue py-[14px] md:py-6 px-20 rounded-[10px] w-[116px] md:w-[188px] hover:bg-blue-2 md:text-[16px] text-[8px]"
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
