import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      <h3 className="text-[8px] md:text-[32px] font-semibold md:my-6 my-[6px]">
        {title}
      </h3>
      <p className="md:w-[529px] w-[146px] text-[6px] md:text-[16px]">{desc}</p>
      <div className="md:mt-6 mt-2 flex md:gap-x-6 gap-x-2">
        <Button className="bg-blue hover:bg-blue-2 md:h-[51px] md:w-[161px] w-[49px] h-[16px] text-[6px] md:text-sm">
          Start Project
        </Button>
        <Button className="md:h-[51px] bg-gray-2 md:w-[161px] w-[49px] h-[16px] text-[6px] md:text-sm">
          View Portfolio
        </Button>
      </div>
    </div>
  );
};

export default CardServices;
