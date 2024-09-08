"use client";
import Image from "next/image";

const Header = ({
  image,
  type,
  title,
}: {
  title: string;
  image: string;
  type?: string;
}) => {
  return (
    <header className="w-full z-10 relative">
      <div className="md:min-w-screen md:h-[305px] md:min-h-[75px] bg-white">
        <Image
          src={image}
          alt="blog header"
          loading="lazy"
          width={1350}
          height={75}
          className={`w-full h-full object-cover ${type === "service" ? "" : "md:rounded-b-[30px]"} opacity-65`}
        />
      </div>
      <div className="flex justify-center md:w-full ">
        <div className="z-30 px-[10px] md:px-24 py-[10px] md:py-5 rounded-[6px] md:rounded-[20px] inline-flex -mt-[50px] md:-mt-[80px] bg-white shadow-sm">
          <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[21px] w-[251px] md:w-[540px]">
            <h1 className="text-black uppercase font-bold text-mobileJudul md:text-[32px]">
              {title}
            </h1>
            <h1 className="text-center text-mobileDesk md:text-webDesk">
              Discover Our Expertise: Newus Technology Portfolio
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
