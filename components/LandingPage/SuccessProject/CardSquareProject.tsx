import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeHTMLTags } from "@/lib/utils";

const CardSquareProject = ({ projects }: any) => {
  const {
    id = "",
    title = "",
    slug = "",
    keyword = "",
    logo = "",
    excerpt = "",
    body = "",
    image = "",
    altImage = "",
    Tagportofolio = {},
  } = projects || {};

  return (
    <div
      data-aos="fade-down"
      className="rounded-[10px] bg-white md:bg-transparent border-2 border-gray-1 lg:w-[31%] md:w-[47%] w-[47%] shadow-lg relative"
    >
      <div className="relative">
        <Image
          src={image || `/assets/images/placeholder-image (2).jpg`}
          alt={altImage || "image card list"}
          width={854}
          height={480}
          loading="lazy"
          className="w-full h-[120px] md:h-[273px] object-cover"
        />
        <div className="absolute top-2 right-2 z-10">
          <Image
            src={logo || `/assets/images/placeholder-logo.jpg`}
            alt="Logo"
            width={854}
            height={480}
            loading="lazy"
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain"
          />
        </div>
      </div>
      <div className="md:mt-4 my-3 md:mb-3 flex flex-col justify-between gap-1 md:gap-2 px-3 md:px-4">
        <h2 className="md:text-webJudul text-mobileSubjudul font-semibold line-clamp-2 min-h-12 xl:min-h-12">
          {title || "Name Project"}
        </h2>
        <p className="text-gray text-mobileDesk md:text-webSubjudul md:text-base line-clamp-2 md:line-clamp-3 md:min-h-[72px]">
          {removeHTMLTags(body) ||
            "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Löremipsum astrobel sar direlig. Kronde est konfoni med kelig."}
        </p>
        <Link target="_blank" href={`/${slug}`}>
          <Button
            size="sm"
            className="bg-blue md:py-6 md:mt-0 h-7 mt-2 rounded-[10px] w-full hover:bg-blue-2 text-[11px] md:text-webDesk text-white"
          >
            See Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardSquareProject;
