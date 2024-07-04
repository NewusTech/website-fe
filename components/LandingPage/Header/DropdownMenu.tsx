"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavItem from "./NavItem";

const DropdownMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  // Data untuk menu navigasi
  const navItems = [
    { path: "/service", label: "Service" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
    { path: "/about/team", label: "Team" },
    { path: "/contact", label: "Contact" },
    { path: "/career", label: "Career" },
  ];

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
          src={openDropdown ? "/assets/icons/close.svg" : "/assets/icons/hamburger.svg"}
          alt="hamburger menu"
          width={30}
          height={30}
          onClick={handleDropdown}
        />
      </div>
      {openDropdown && (
        <nav className="w-full flex justify-end mt-5 transition ease-in-out duration-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500">
          <ul className="text-white text-right pr-1 flex flex-col gap-5 uppercase font-semibold text-[16px]">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-[#b8acdb]">
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
            <li>
              <NavItem
                onClick={handleDropdown}
                dropdownItems={[
                  { path: "/company-profile", label: "Company Profile" },
                  { path: "/certificate", label: "Sertifikat" },
                ]}
              >
                Download
              </NavItem>
            </li>
          </ul>
        </nav>
      )}
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500" className={`flex flex-col items-start ${openDropdown ? "pt-[10px]" : "pt-10 lg:pt-[158px]"}`}>
        <h1 className="text-3xl font-extrabold text-white w-64">
          <span className="text-tangerine">What you need,</span> we can make it
          happen.
        </h1>
        <p className={`text-xs text-white leading-7 mt-5 ${openDropdown ? "mb-[40px]" : "mb-[60px]"} w-[277px]`}>
          Software House Lampung
          <br />Innovate & Elevate: Your Custom Software Journey Starts Here (New Experience With Us)
        </p>
        <Button className="py-7 px-8 bg-tangerine hover:bg-tangerine-2 transition-colors duration-300">
          <Link href="/contact" className="flex items-center justify-center gap-2">
            <p className="text-lg">Contact Us</p>
            <Image src="/assets/icons/arrow-up-right.svg" alt="arrow up right" width={24} height={24} />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default DropdownMenu;
