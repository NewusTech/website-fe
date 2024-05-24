import Image from "next/image";
import HomeIcon from "@/public/assets/icons/HomeIcon";
import ServiceIcon from "@/public/assets/icons/ServiceIcon";
import PortfolioIcon from "@/public/assets/icons/PortfolioIcon";
import BlogIcon from "@/public/assets/icons/BlogIcon";
import AboutUsIcon from "@/public/assets/icons/AboutUsIcon";

const Bottombar = () => {
  return (
    <section className="md:hidden container mx-auto bg-dark fixed bottom-0 left-0 right-0 z-40">
      <div className="flex py-2 justify-between items-center gap-5">
        <div className="flex flex-col gap-1 items-center justify-center">
          <HomeIcon color="text-tangerine" />
          <p className="text-[6px] text-tangerine">Home</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center group ">
          <ServiceIcon color="text-gray-3 group-hover:text-tangerine transition-color duration-300" />
          <p className="text-[6px] text-white group-hover:text-tangerine transition-color duration-300">
            Service
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center group">
          <PortfolioIcon color="text-gray-3 group-hover:text-tangerine transition-color duration-300" />
          <p className="text-[6px] text-white group-hover:text-tangerine transition-color duration-300">
            Portfolio
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="contact"
            width={15}
            height={15}
          />
          <p className="text-[6px] text-white">Contact</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center group">
          <BlogIcon color="text-gray-3 group-hover:text-tangerine transition-color duration-300" />
          <p className="text-[6px] text-white group-hover:text-tangerine transition-color duration-300">
            Blog
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center group">
          <AboutUsIcon color="text-gray-3 group-hover:text-tangerine transition-color duration-300" />
          <p className="text-[6px] text-white group-hover:text-tangerine transition-color duration-300">
            About Us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bottombar;
