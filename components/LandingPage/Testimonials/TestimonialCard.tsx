"use client"

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function TestimonialCard({
  imageSrc,
  quote,
  name,
  position,
  company,
}: any) {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="mt-4 bg-gray/20 rounded-md flex flex-col p-4">
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex flex-row w-full items-center">
            <Image
              alt={name}
              src={imageSrc}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-full w-[80px] h-[80px] object-cover"
            />
            <p className="my-auto flex flex-col gap-1 ml-6 justify-start items-start text-blue-smooth text-left">
              {company}{" "} | {" "} {name}
              <span className="text-orange-500 text-left">Jabatan : {position}</span>{" "}
              <span className="text-gray-2">03/09/2024</span>
            </p>
          </div>
          <p className="ml-auto flex flex-row items-center gap-2 pb-4 md:pb-0">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> 5,0
          </p>
        </div>
        <p className="mt-4 text-justify">{quote}</p>
      </div>
    </div>
  );
}
