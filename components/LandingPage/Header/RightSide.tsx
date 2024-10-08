"use client";

import React, { useState } from "react";
import Image from "next/image";
import CarouselHeader from "@/components/LandingPage/Header/CarouselHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DropdownMenu from "@/components/LandingPage/Header/DropdownMenu";
import NavItem from "./NavItem";
import { navItems } from "@/constants";

export type bannerType = {
  id: number;
  metaTitle: string;
  metaSubTitle: string;
  metaDesc: string;
  image: string;
};

type RightSideProps = {
  aboutCompany: any;
  bannerData: bannerType[];
};

const RightSide = ({ aboutCompany, bannerData }: RightSideProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  // State to hold the index of the currently active slide
  const [activeIndex, setActiveIndex] = useState(0);
  const data = aboutCompany?.[0];
  const BlackLogo = data?.siteLogo || "/assets/icons/logo-mobile.svg";

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <header>
      <div className="flex flex-col md:flex-row md:min-h-[500px] lg:min-h-screen">
        <div className="px-[14px] py-[23px] flex justify-between items-center md:hidden">
          <Link href="/">
            <Image
              src={BlackLogo}
              alt="Newus Technology : Software Development Indonesia"
              width={900}
              height={900}
              className="object-cover w-[144px] h-[40px]"
              loading="lazy"
            />
          </Link>
          <Image
            src={`${openDropdown ? "/assets/icons/close.svg" : "/assets/icons/hamburger-2.svg"}`}
            alt="Newus Technology : Software Development Indonesia"
            loading="lazy"
            width={24}
            height={40}
            className={`md:hidden ${openDropdown ? "bg-blue md:bg-none text-[#480DEC] -p-1 md:p-0" : "cursor-pointer md:hidden"}`}
            onClick={handleDropdown}
          />
        </div>
        <div className="hidden md:flex bg-blue w-5/12 lg:w-4/12 xl:w-3/12  flex-col items-start container mx-auto pt-[26px]">
          <DropdownMenu data={data} itemBanner={bannerData[activeIndex]} />
        </div>
        {openDropdown && (
          <nav
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="md:hidden absolute top-14 md:top-16 right-0 z-50 bg-[#F4F4F4] md:bg-[#F4F4F4]/80 md:backdrop-blur-3xl w-72 md:w-[300px] mt-5 md:mt-0 py-5 px-6 shadow-lg md:rounded-md md:right-6 text-black pb-5 rounded-xl"
          >
            <ul className="text-black text-right pr-1 flex flex-col gap-8 capitalize text-[16px] h-full justify-center">
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
        <div className="w-full md:w-9/12 relative flex items-center justify-center">
          <CarouselHeader banner={bannerData} setActiveIndex={setActiveIndex} />
          <div
            className="absolute gap-[10px] md:hidden flex flex-col items-center justify-center"
            key={activeIndex}
          >
            <h1 className="text-mobileJudul font-extrabold text-white w-60 xl:w-52 text-center">
              <span className="text-tangerine">
                {bannerData[activeIndex]?.metaTitle}
              </span>
              <br />
              {bannerData[activeIndex]?.metaSubTitle}
            </h1>
            <Link href="/contact">
              <Button
                className="bg-tangerine hover:bg-tangerine-2 text-mobileDesk text-white py-2"
                size="sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RightSide;
