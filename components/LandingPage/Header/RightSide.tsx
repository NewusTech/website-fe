import React from "react";
import Image from "next/image";
import CarouselHeader from "@/components/LandingPage/Header/CarouselHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DropdownMenu from "@/components/LandingPage/Header/DropdownMenu";

const RightSide = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row md:min-h-screen">
        <div className="px-[14px] py-[23px] flex justify-between items-center md:hidden">
          <Image
            src="/assets/icons/logo-2.svg"
            alt="Newus Technology"
            width={144}
            height={34}
          />
          <Image
            src="/assets/icons/hamburger-2.svg"
            alt="hamburger menu"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-blue flex w-3/12 flex-col items-start container mx-auto pt-[26px] hidden md:block">
          <DropdownMenu />
        </div>
        <div className="w-full md:w-9/12 relative flex items-center justify-center">
          <CarouselHeader />
          <div className="absolute gap-[10px] md:hidden flex flex-col items-center justify-center">
            <h1 className="text-[16px] font-extrabold text-white w-60 text-center">
              <span className="text-tangerine">What you need,</span> we can make
              it happen.
            </h1>
            <Button
              className="bg-tangerine hover:bg-tangerine-2 text-[8px] py-2"
              size="sm"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RightSide;
