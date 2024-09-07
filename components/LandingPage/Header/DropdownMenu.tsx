"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavItem from "./NavItem";
import { bannerType } from "./RightSide";

const DropdownMenu = ({ data ,itemBanner}: { data: any,itemBanner:bannerType }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  // const whiteLogo = data.siteLogo || '/assets/icons/newus-light.svg'
  const whiteLogo = "/assets/icons/newus-light.svg";

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  // Data untuk menu navigasi
  const navItems = [
    { path: "/service", label: "Service" },
    { path: "/portofolio", label: "Portofolio" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
    { path: "/career", label: "Career" },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-6 w-full">
        <Image
          src={whiteLogo}
          alt="NEWUS"
          width={1000}
          height={1000}
          className="object-cover w-[200px] h-[50px] 2xl:w-[206px] 2xl:h-[56px]"
        />
        <Image
          className="cursor-pointer flex items-center justify-center"
          src={
            openDropdown
              ? "/assets/icons/close.svg"
              : "/assets/icons/hamburger.svg"
          }
          alt="hamburger menu"
          width={30}
          height={30}
          onClick={handleDropdown}
        />
      </div>
      {openDropdown && (
        <nav
          className="w-full flex justify-end mt-5 transition ease-in-out duration-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
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
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className={`flex flex-col items-start ${openDropdown ? "hidden pt-[10px]" : "block pt-10 md:pt-28 lg:pt-[80px] xl:pt-[150px]"}`}
      >
        <h1 className="text-[24px] xl:text-3xl font-extrabold text-white w-72 xl:w-[277px] 2xl:w-72">
          <span className="text-tangerine text-[24px] xl:text-3xl ">
           {itemBanner?.metaTitle}
          </span>
          <br />
          {itemBanner?.metaSubTitle}
        </h1>
        <p
          className={`text-mobileDesk md:text-webDesk  text-white leading-7 mt-3 ${openDropdown ? "mb-[40px]" : "mb-[60px]"} w-[277px]`}
        >
          {itemBanner?.metaDesc}
        </p>
        <Button className="xl:py-7 py-5 px-5 xl:px-8 bg-tangerine hover:bg-tangerine-2 transition-colors duration-300">
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
