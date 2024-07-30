"use client"

import Image from "next/image";

const Header = ({
  teams
}: {
  teams?: any
}) => {
  return (
    <header className="w-full z-10 relative">
      <div className="xl:min-w-[1350px] md:min-h-[75px]">
        <Image
          src={teams?.image ? teams.image : "/assets/images/team.svg"}
          alt="blog header"
          width={1000}
          height={1000}
          className={`w-full object-cover md:h-[500px] xl:h-[650px] h-[200px]`}
          loading="lazy"
        />
      </div>
      <div className="relative flex justify-center items-center h-full">
        <div className="absolute top-[-155px] md:top-[-356px] lg:top-[-380px] xl:top-[-500px] 2xl:top-[-500px] right-2 sm:right-4 lg:right-5 2xl:right-20 opacity-[1] w-[140px] md:max-w-[300px] xl:max-w-[415px] text-white text-left md:text-left">
          <h1 className="text-mobileJudul md:text-[32px] text-[#480DEC] font-bold">{teams?.name || 'Name Team'}</h1>
          <h2 className="text-mobileSubjudul md:text-webJudul text-black pb-2 md:pb-4 text-nowrap xl:font-semibold">{teams?.title || 'POSITION'}</h2>
          <div className="md:hidden text-[10px] md:text-webSubjudul capitalize leading-3 line-clamp-5 md:line-clamp-none" dangerouslySetInnerHTML={{ __html: teams?.description }} />
          <div className="hidden md:block text-[6px] md:text-[16px] capitalize" dangerouslySetInnerHTML={{ __html: teams?.description }} />
        </div>
      </div>

    </header >
  );
};

export default Header;
