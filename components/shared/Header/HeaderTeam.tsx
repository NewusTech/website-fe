"use client"

import Image from "next/image";

const Header = ({
  teams
}: {
  teams?: any
}) => {
  return (
    <header className="w-full z-10 relative">
      <div className="md:min-w-[1350px] md:min-h-[75px]">
        <Image
          src={teams?.image ? teams.image : "/assets/images/team.svg"}
          alt="blog header"
          width={1350}
          height={75}
          className={`w-full object-cover md:h-[600px] h-[200px]`}
          loading="lazy"
        />
      </div>
      <div className="relative">
        <div className="absolute top-[-135px] left-[230px] md:top-[-406px] md:left-[950px] opacity-[1] max-w-[153px] md:max-w-[515px] text-white">
          <h1 className="text-[12px] md:text-[40px] text-[#480DEC] font-bold">{teams?.name ? teams.name : 'Name Team'}</h1>

          <h2 className="text-[10px] md:text-[36px] text-black pb-2 md:pb-4">{teams?.title ? teams.title : 'POSITION'}</h2>

          <p className="md:hidden text-[10px] md:text-[16px] capitalize leading-3 ">
            {teams?.description ? teams.description : 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ipsum dolor sit amet consectetur.'}

          </p>
          <p className="hidden md:block text-[6px] md:text-[16px] capitalize">
            {teams?.description ? teams.description : 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ut ullamcorper est tincidunt venenatis venenatis dignissim magna. Eget adipiscing purus duis vel etiam.'}
          </p>
        </div>
      </div>

    </header >
  );
};

export default Header;
