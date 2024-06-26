"use client"

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
      <div className="md:min-w-[1350px] md:min-h-[75px]">
        <Image
          src={image}
          alt="blog header"
          width={1350}
          height={75}
          className={`w-full h-full object-cover`}
        />
      </div>
      {title === 'team' ? (
        <div className="relative">
          <div className="absolute top-[-105px] left-[210px] md:top-[-556px] md:left-[1055px] opacity-[1] max-w-[103px] md:max-w-[415px] text-white">
            <h1 className="text-[10px] md:text-[40px] text-[#480DEC] font-bold tracking-[.1em]">NAME</h1>
            <h2 className="text-[8px] md:text-[36px] text-black pb-2 md:pb-10 tracking-[.25em]">POSITION</h2>
            <p className="md:hidden text-[6px] md:text-[16px] leading-3">
              Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="hidden md:block text-[6px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ut ullamcorper est tincidunt venenatis venenatis dignissim magna. Eget adipiscing purus duis vel etiam.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="z-30 px-[10px] md:px-10 py-[10px] md:py-5 inline-flex w-full -mt-[50px] md:-mt-[140px] bg-[#EEF0EB80]">
            <div className="flex w-full justify-center items-center gap-[10px] md:gap-[21px]">
              <h1 className="text-white font-bold md:text-[64px]">
                {title}
              </h1>
            </div>
          </div>
        </div>
      )
      }
    </header >
  );
};

export default Header;
