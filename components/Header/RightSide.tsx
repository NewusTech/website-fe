import React from "react";
import Image from "next/image";
import CarouselHeader from "@/components/Header/CarouselHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DropdownMenu from "@/components/Header/DropdownMenu";

const RightSide = () => {
  return (
    <header>
      <div className="flex min-h-screen">
        <div className="bg-blue flex w-3/12 flex-col items-start container mx-auto pt-[26px]">
          <DropdownMenu />
        </div>
        <div className="w-9/12">
          <CarouselHeader />
        </div>
      </div>
    </header>
  );
};

export default RightSide;
