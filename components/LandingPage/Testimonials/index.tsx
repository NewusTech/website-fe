"use client";

import { getTestimony } from "@/components/Fetching/About/about";
import TestimonialCard from "./TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

export default function TestiomoniStars() {
  const [dataTestimony, setDataTestimony] = useState<any[]>([]);

  const getTestimonyData = async () => {
    const response = await getTestimony();
    setDataTestimony(response);
  };

  const dummyImage = "/assets/images/antoni.svg";

  const data = [
    {
      title: "Kecepatan respons",
      rating: 5,
    },
    {
      title: "Layanan",
      rating: 5,
    },
    {
      title: "Keterampilan dan Keahlian",
      rating: 5,
    },
    {
      title: "Sepadan dengan harga",
      rating: 5,
    },
    {
      title: "Kualitas Aplikasi / Mobile / Website",
      rating: 5,
    },
  ];

  useEffect(() => {
    getTestimonyData();
  }, []);

  return (
    <div className="text-center md:p-8 2xl:container mx-auto bg-gray-100 pb-6 pt-5">
      <div className="flex justify-start items-start gap-3 md:gap-5 px-5 md:px-0">
        <h2 className="font-bold capitalize text-mobileJudul md:text-[20px] text-nowrap text-left mb-4">
          Ulasan dari Pelanggan ({dataTestimony?.length})
        </h2>
      </div>
      <div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 md:gap-0 px-4 md:px-0">
          <div className="rounded-full w-[9rem] h-[9rem] flex flex-col justify-center items-center bg-[#E3EDFD]">
            <p className="text-3xl font-semibold">5,0</p>
            <p className="text-lg">Dari 5</p>
          </div>
          <div className="flex flex-col w-full md:w-[85%] ml-auto gap-4">
            {data.map((data) => (
              <div
                key={data.title}
                className="flex flex-row font-semibold gap-2 justify-between w-full"
              >
                <p className="text-left w-full">{data.title}</p>
                <div className="text-base text-yellow-500 w-fit flex flex-row gap-2 ml-auto">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 md:px-0">
          {dataTestimony?.length > 0 ? (
            dataTestimony?.map((testimonial: any, index: number) => (
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
    </div>
  );
}
