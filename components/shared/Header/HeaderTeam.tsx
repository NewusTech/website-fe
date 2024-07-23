"use client"

import { removeHTMLTags } from "@/lib/utils";
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
      <div className="relative">
        <div className="absolute top-[-135px] left-[270px] md:top-[-406px] md:left-[650px] xl:left-[950px] opacity-[1] max-w-[153px] md:max-w-[400px] xl:max-w-[515px] text-white">
          <h1 className="text-mobileJudul md:text-[32px] text-[#480DEC] font-bold">{teams?.name || 'Name Team'}</h1>
          <h2 className="text-mobileJudul md:text-webJudul text-black pb-2 md:pb-4">{teams?.title || 'POSITION'}</h2>
          <p className="md:hidden text-mobileSubjudul md:text-webSubjudul capitalize leading-3 line-clamp-4 md:line-clamp-none">
            {removeHTMLTags(teams?.description) || 'Lorem ipsum dolor sit dui est. Habitasse eget cum sed pulvinar morbi. Lorem ipsum dolor sit amet consectetur.'}
          </p>
          <p className="hidden md:block text-[6px] md:text-[16px] capitalize" dangerouslySetInnerHTML={{ __html: teams?.description }} />
          {/* {removeHTMLTags(teams?.description) || 'Lorem ipsum dolor si'}
          </p> */}
        </div>
      </div>
    </header >
  );
};

export default Header;
