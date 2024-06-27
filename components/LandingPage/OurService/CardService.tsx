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
    <>
      <div className="hidden md:flex md:mt-[29px] mt-[10px] pb-10">
        {service.map(({ id, title, image, type }: OurServiceProps) => (
          <div className="w-3/12 relative" key={id} data-aos="flip-right">
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
      <div className="md:hidden flex flex-wrap gap-3 mt-[10px]">
        {service.map(({ id, title, image, type }: OurServiceProps) => (
          <div
            className="bg-blue w-[48%] rounded-[6px] flex items-center relative"
            key={id}
          >
            <div className="w-12 h-[60px] rounded-l-[6px] bg-black">
              <Image
                src={image}
                alt="web"
                width={100}
                height={100}
                className="object-cover w-full h-full rounded-l-[6px]"
              />
            </div>
            <h1 className="text-white font-bold text-[8px] w-[88px] ml-2 z-20">
              {title}
            </h1>
            {type === "web" && (
              <div className="bg-tangerine w-[37px] h-[12px] absolute z-10 mt-[3px] ml-[53px]"></div>
            )}
            {type === "mobile" && (
              <div className="bg-tangerine w-[37px] h-[13px] absolute z-10 -mt-[9px] ml-[53px]"></div>
            )}
            {type === "ui/ux" && (
              <div className="bg-tangerine w-[37px] h-[13px] absolute z-10 mt-[7px] ml-[95px]"></div>
            )}
            {type === "digital" && (
              <div className="bg-tangerine w-[37px] h-[13px] absolute z-10 -mt-[10px] ml-[53px]"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardService;
