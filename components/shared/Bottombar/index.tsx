"use client";

import { usePathname } from "next/navigation";
import HomeIcon from "@/public/assets/icons/HomeIcon";
import ServiceIcon from "@/public/assets/icons/ServiceIcon";
import PortfolioIcon from "@/public/assets/icons/PortfolioIcon";
import BlogIcon from "@/public/assets/icons/BlogIcon";
import AboutUsIcon from "@/public/assets/icons/AboutUsIcon";
import WhatsappIcon from "@/public/assets/icons/WhatsappIcon";
import TeamIcon from "@/public/assets/icons/TeamIcon";
import Link from "next/link";

const Bottombar = () => {
  const pathname = usePathname();

  const getLinkClass = (path: any) => {
    return pathname === path
      ? "text-tangerine"
      : "text-white group-hover:text-tangerine transition-color duration-300";
  };

  const getIconColor = (path: any) => {
    return pathname === path
      ? "text-tangerine"
      : "text-gray-3 group-hover:text-tangerine transition-color duration-300";
  };

  return (
    <section className="md:hidden container mx-auto bg-dark fixed bottom-0 left-0 right-0 z-40">
      <div className="flex py-2 justify-between items-center gap-5">
        <Link
          href="/"
          className="flex flex-col gap-1 items-center justify-center"
        >
          <HomeIcon color={getIconColor("/")} />
          <p className={`text-[6px] ${getLinkClass("/")}`}>Home</p>
        </Link>
        <Link
          href="/service"
          className="flex flex-col gap-1 items-center justify-center group"
        >
          <ServiceIcon color={getIconColor("/service")} />
          <p className={`text-[6px] ${getLinkClass("/service")}`}>Service</p>
        </Link>
        <Link
          href="/portofolio"
          className="flex flex-col gap-1 items-center justify-center group"
        >
          <PortfolioIcon color={getIconColor("/portofolio")} />
          <p className={`text-[6px] ${getLinkClass("/portofolio")}`}>
            Portofolio
          </p>
        </Link>
        <Link
          href="/team"
          className="flex flex-col gap-1 items-center justify-center"
        >
          <TeamIcon color={getIconColor("/team")} />
          <p className={`text-[6px] ${getLinkClass("/team")}`}>Team</p>
        </Link>
        <Link
          href="/blog"
          className="flex flex-col gap-1 items-center justify-center group"
        >
          <BlogIcon color={getIconColor("/blog")} />
          <p className={`text-[6px] ${getLinkClass("/blog")}`}>Blog</p>
        </Link>
        <Link
          href="/about"
          className="flex flex-col gap-1 items-center justify-center group"
        >
          <AboutUsIcon color={getIconColor("/about")} />
          <p className={`text-[6px] ${getLinkClass("/about")}`}>About Us</p>
        </Link>
      </div>
    </section>
  );
};

export default Bottombar;
