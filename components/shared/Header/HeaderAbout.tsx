import Image from "next/image";
import { Input } from "@/components/ui/input";

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
      <div className="flex justify-center">
        <div className="z-30 px-[10px] md:px-10 py-[10px] md:py-5 inline-flex w-full -mt-[50px] md:-mt-[100px] bg-[#EEF0EB80]">
          <div className="flex w-full justify-center items-center gap-[10px] md:gap-[21px]">
            <h1 className="text-white uppercase font-bold text-[10px] md:text-[32px]">
              {title}
            </h1>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
