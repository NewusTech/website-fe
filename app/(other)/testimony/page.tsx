"use client";

import { getTestimony } from "@/components/Fetching/About/about";
import TestimonialCard from "@/components/LandingPage/Testimonials/TestimonialCard";
import Pages from "@/components/shared/Pages";
import { Progress } from "@/components/ui/progress";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [dataTestimony, setDataTestimony] = useState<any[]>([]);
  const [progress1, setProgress1] = React.useState(0);
  const [progress2, setProgress2] = React.useState(5);
  const [progress3, setProgress3] = React.useState(10);
  const [progress4, setProgress4] = React.useState(15);
  const getDataTestimony = async () => {
    const response = await getTestimony();
    setDataTestimony(response);
  };
  const itemsPerPage: number = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(dataTestimony.length / itemsPerPage);
  const paginatedtestimony = dataTestimony.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    getDataTestimony();
  }, []);

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
  
    timers.push(setTimeout(() => setProgress1(100), 500));
    timers.push(setTimeout(() => setProgress2(100), 600));
    timers.push(setTimeout(() => setProgress3(100), 700));
    timers.push(setTimeout(() => setProgress4(100), 800));
  
    // Clear timeouts on component unmount
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);
  

  return (
    <section className="my-10 sm:my-24 min-h-svh sm:container">
      <h1 className="text-center text-gray-2">Newus Makes You Happier</h1>
      <div className="mt-5 bg-white border rounded-md shadow-sm p-10 flex flex-col gap-y-2 mx-2">
        <span>Ringkasan Ulasan</span>
        <div className="flex flex-row items-center gap-x-3">
          <span className="text-4xl font-semibold">5,0</span>
          <div className="flex flex-col gap-y-2">
            <div className="text-base text-yellow-500 w-fit flex flex-row">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <span>(9)</span>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between mt-2">
          <span className="hidden md:block">Kecepatan respons</span>
          <Progress value={progress1} className="w-full md:w-[60%] xl:w-[70%]" />
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between mt-2">
          <span className="hidden md:block">Layanan</span>
          <Progress value={progress2} className="w-full md:w-[60%] xl:w-[70%]" />
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between mt-2">
          <span className="hidden md:block">Keterampilan dan Keahlian</span>
          <Progress value={progress3} className="w-full md:w-[60%] xl:w-[70%]" />
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between mt-2">
          <span className="hidden md:block">Sepadan dengan harga</span>
          <Progress value={progress3} className="w-full md:w-[60%] xl:w-[70%]" />
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between mt-2">
          <span className="hidden md:block">
            Kualitas Aplikasi / Mobile / Website
          </span>
          <Progress value={progress4} className="w-full md:w-[60%] xl:w-[70%]" />
        </div>
      </div>
      <div className="mt-4">
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
      </div>
      <div className="mt-4">
        <Pages
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
