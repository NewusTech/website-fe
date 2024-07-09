"use client"

import Image from "next/image";
import Link from "next/link";

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
      <div className="md:max-w-full md:h-[305px] xl:h-[600px] md:min-h-[75px]">
        <Image
          src={image}
          alt="blog header"
          loading="lazy"
          width={1350}
          height={75}
          className={`w-full object-cover md:h-[305px] xl:h-[600px] h-[200px]`}
        />
      </div>
      <div className="flex justify-center">
        <div className="z-30 px-[10px] md:px-10 py-[10px] md:py-5 inline-flex w-full -mt-[50px] md:-mt-[140px] bg-[#EEF0EB80]">
          <div className="flex w-full justify-center items-center gap-[10px] md:gap-[21px]">
            <h1 className="text-white font-bold text-[14px] md:text-[64px]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
