"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DropdownMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-6 w-full">
        <Image
          src="/assets/icons/logo.svg"
          alt="NEWUS"
          width={206}
          height={56}
        />
        <Image
          className="cursor-pointer flex items-center justify-center"
          src={`${openDropdown ? "/assets/icons/close.svg" : "/assets/icons/hamburger.svg"}`}
          alt="hamburger menu"
          width={30}
          height={30}
          onClick={handleDropdown}
        />
      </div>
      {openDropdown && (
        <nav
          className={`w-full flex justify-end mt-5 transition ease-in-out duration-300 ${openDropdown ? "h-auto" : "h-0"}`}
        >
          <ul className="text-white text-right pr-1 flex flex-col gap-5 uppercase font-semibold text-[16px]">
            <li><Link href='/service' >
              service
            </Link></li>
            <li><Link href='/portfolio' >
              portfolio
            </Link></li>
            <li><Link href='/blog' >
              blog
            </Link></li>
            <li><Link href='/about' >
              about
            </Link></li>
            <li><Link href='/about/team' >
              team
            </Link></li>
            <li><Link href='/contact' >
              contact
            </Link></li>
            <li><Link href='/career' >
              career
            </Link></li>
            <li><Link href='/#' >
              download
            </Link></li>
          </ul>
        </nav>
      )}
      <div
        className={`flex flex-col items-start ${openDropdown ? "pt-[10px]" : "pt-[158px]"}`}
      >
        <h1 className="text-3xl font-extrabold text-white w-64">
          <span className="text-tangerine">What you need,</span> we can make it
          happen.
        </h1>
        <p
          className={`text-xs text-white leading-7 mt-5 ${openDropdown ? "mb-[40px]" : "mb-[60px]"} w-[277px]`}
        >
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.{" "}
        </p>
        <Button className="py-7 px-8 bg-tangerine hover:bg-tangerine-2 transition-colors duration-300">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2"
          >
            <p className="text-lg">Contact Us</p>
            <Image
              src="/assets/icons/arrow-up-right.svg"
              alt="arrow up right"
              width={24}
              height={24}
            />
          </Link>
        </Button>
      </div>
    </>
  );
};
export default DropdownMenu;
