"use client";

import TestimonialCard from "./TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Pages from "@/components/shared/Pages";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { testimonyRating } from "@/constants";

type TestiomoniStarsProps = {
  dataTestimony: any[];
};
export default function TestiomoniStars({
  dataTestimony,
}: TestiomoniStarsProps) {
  const itemsPerPage: number = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(dataTestimony.length / itemsPerPage);
  const paginatedtestimony = dataTestimony.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="text-center md:p-8 2xl:container mx-auto bg-gray-100 pb-6 pt-5">
      <div className="flex justify-start items-start gap-3 md:gap-5 px-5 md:px-0">
        <h2 className="font-bold capitalize text-mobileJudul md:text-[20px] text-nowrap text-left mb-4">
          Ulasan dari Pelanggan ({dataTestimony?.length})
        </h2>
      </div>
      <div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 md:gap-0 px-4 md:px-0">
          <div className="rounded-full w-[9rem] h-[9rem] flex flex-col justify-center items-center bg-[#E3EDFD] mr-4">
            <p className="text-3xl font-semibold">5,0</p>
            <p className="text-lg">Dari 5</p>
          </div>
          <div className="flex flex-col w-full md:w-[85%] ml-auto gap-4">
            {testimonyRating.map((data) => (
              <div
                key={data.title}
                className="flex flex-row font-semibold gap-2 justify-between w-full"
              >
                <p className="text-left w-full">{data.title}</p>
                <div className="text-base text-yellow-500 w-fit flex flex-row gap-1 ml-auto">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 mt-4 md:px-0">
          {dataTestimony?.length > 0 ? (
            paginatedtestimony?.map((testimonial: any, index: number) => (
              <TestimonialCard
                key={index}
                imageSrc={testimonial.image}
                quote={testimonial.testimony}
                name={testimonial.name}
                position={testimonial.title || "Head"}
                company={testimonial.companyName}
                createdAt={testimonial.createdAt}
              />
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
        <div className="mt-4">
          <Pages
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className="flex items-center justify-center md:pb-5 mt-5">
          <Link href="/testimony">
            <Button className="md:h-[51px] h-[31px] rounded-xl bg-tangerine hover:bg-tangerine-2 py-1 text-[11px] md:text-webDesk  text-white">
              See More Testimony
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
