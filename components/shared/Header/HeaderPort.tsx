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
          className={`w-full h-full object-cover ${type === "service" ? "" : "md:rounded-b-[30px]"} `}
        />
      </div>
      <div className="flex justify-center">
        <div className="z-30 px-10 py-5 rounded-[20px] inline-flex w-[690px] -mt-[50px] md:-mt-[100px] bg-white">
          <div className="flex flex-col justify-center items-center gap-[10px] md:gap-10">
            <h1 className="text-black uppercase font-bold text-[10px] md:text-[32px]">
              {title}
            </h1>
            <p className="text-center">Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
