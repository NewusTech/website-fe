'use client'
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
          loading="lazy"
          width={1350}
          height={75}
          className={`w-full h-full object-cover ${type === "service" ? "" : "md:rounded-b-[30px]"} `}
        />
      </div>
      <div className="flex justify-center">
        <div className="z-30 px-[10px] md:px-10 py-[10px] md:py-5 rounded-[6px] md:rounded-[20px] inline-flex w-[251px] md:w-[690px] -mt-[50px] md:-mt-[100px] bg-white">
          <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[21px]">
            <h1 className="text-black uppercase font-bold text-[14px] md:text-[32px]">
              {title}
            </h1>
            <p className="text-center text-[6px] md:text-[16px]">Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
