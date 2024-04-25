import Image from "next/image";
import { service } from "@/constants";

interface OurServiceProps {
  id: number;
  title: string;
  image: string;
  type: string;
}

const CardService = () => {
  return (
    <div className="flex mt-[29px] pb-10">
      {service.map(({ id, title, image, type }: OurServiceProps) => (
        <div className="w-3/12 relative" key={id}>
          <Image src={image} alt="web" width={300} height={400} />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex items-end justify-center pb-2">
            <p
              className={`text-white text-xl font-bold ${type === "web" ? "py-2" : "py-[34px]"} ${type === "digital" ? "w-[100px] -mb-2 mr-[147px]" : "w-[217px]"} z-20 leading-tight`}
            >
              {title}
            </p>
            {type === "web" && (
              <div className="bg-tangerine w-[123px] h-[30px] absolute z-10 mb-[17.5px] mr-[88px]"></div>
            )}
            {type === "mobile" && (
              <div className="bg-tangerine w-[105px] h-[22px] absolute z-10 mb-[45px] mr-[135px]"></div>
            )}
            {type === "ui/ux" && (
              <div className="bg-tangerine w-[84px] h-[24px] absolute z-10 mb-[44.5px]"></div>
            )}
            {type === "digital" && (
              <div className="bg-tangerine w-[104px] h-[29px] absolute z-10 mb-[25px] left-0"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardService;
