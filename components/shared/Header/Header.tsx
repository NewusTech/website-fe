import Image from "next/image";
import { Input } from "@/components/ui/input";
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
      <div className="md:min-w-screen md:h-[305px] md:min-h-[75px] brightness-50">
        <Link href='/'>
          <Image
            src={image}
            alt="blog header"
            width={1350}
            loading="lazy"
            height={75}
            className={`w-full h-full object-cover ${type === "service" ? "" : "md:rounded-b-[30px]"} `}
          />
        </Link>
      </div>
      <div className="absolute z-30 w-full -mt-[60px] md:-mt-[160px]">
        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-10">
          <h1 className={type === "service" ? "text-white uppercase font-bold  text-mobileJudul md:text-[32px]" : "text-white uppercase font-bold text-mobileJudul md:text-[32px]"}>
            {title}
          </h1>
          <Input
            type="text"
            placeholder="Search here"
            className={type === "service" || type === "Blog" ? "hidden" : "bg-white shadow-xl py-5 md:py-6 px-5 w-[300px] md:w-[700px]"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
