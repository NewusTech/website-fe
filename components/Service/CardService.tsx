import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardServiceProps {
  illustration: string;
  title: string;
  desc: string;
}

const CardServices = ({ illustration, title, desc }: CardServiceProps) => {
  return (
    <div className="md:mt-16 mt-6">
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:h-[250px] h-[41px] bg-gray-3"></div>
        <div className="w-[67.8px] h-[75px] md:w-[350px] md:h-[350px] -mt-8 md:-mt-56">
          <Image
            src={illustration}
            alt="illustration"
            width={350}
            height={350}
            className="w-full h-full"
          />
        </div>
      </div>
      <h3 className="text-mobileJudul md:text-webJudul font-bold md:my-6 my-[6px]">
        {title}
      </h3>
      <p className="md:w-full w-[146px] text-mobileSubjudul md:text-webSubjudul line-clamp-3">{desc}</p>
      <div className="md:mt-6 mt-2 flex md:gap-x-6 gap-x-2">
        <Link target="_blank" href='/contact'>
          <Button className="bg-blue hover:bg-blue-2 md:h-[51px] md:w-[161px] w-[80px] h-[22px] text-[11px] md:text-webDesk text-white">
            Start Project
          </Button>
        </Link>
        <Link target="_blank" href='/portfolio'>
          <Button className="md:h-[51px] bg-gray-2 md:w-[161px] w-[80px] h-[22px] text-[11px] md:text-webDesk text-white">
            View Portfolio
          </Button>
        </Link>
      </div>
    </div >
  );
};

export default CardServices;
