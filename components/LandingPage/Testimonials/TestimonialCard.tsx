"use client";

import { formattedDate } from "@/utils/blog";
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
  createdAt,
}: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="flex flex-col gap-3 md:gap-5"
    >
      <div className="mt-4 bg-gray/20 rounded-md flex flex-col p-4">
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex flex-row w-full items-center">
            <Image
              alt={name}
              src={imageSrc}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-full w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover"
            />
            <p className="my-auto flex flex-col gap-1 ml-6 justify-start items-start text-blue-smooth text-left text-mobileSubjudul sm:text-base">
              {company} | {name}
              <span className="text-orange-500 text-left text-mobileSubjudul sm:text-base">
                Jabatan : {position}
              </span>{" "}
              <span className="text-gray-2">{formattedDate(createdAt)}</span>
            </p>
          </div>
          <p className="ml-auto flex flex-row items-center gap-2 pb-2 md:pb-0 text-mobileSubjudul sm:text-base">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> 5,0
          </p>
        </div>
        <p className="mt-4 text-justify text-mobileSubjudul sm:text-base">{quote}</p>
      </div>
    </div>
  );
}
