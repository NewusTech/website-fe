"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageSlider = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      {/* Gambar pertama */}
      <div className="mb-4 w-full">
        <Image
          height={500}
          width={1070}
          src={images[0]?.image || "/assets/images/blog.jpg"}
          alt="slider"
          className="w-full h-[300px] lg:h-[350px] rounded-md 2xl:h-[400px] object-contain shadow-md"
        />
      </div>
      {/* Slider dengan tiga gambar */}
      <div className="flex justify-between items-center gap-[5px]">
        <button onClick={prevSlide} className="block w-[5%]">
          <Image
            height={300}
            width={500}
            src={"/assets/icons/circle-chevron-left.svg"}
            alt="slider"
            className="w-full"
          />
        </button>

        <div className="flex justify-between w-[90%] gap-2">
          {images.slice(-4).map((data: any, index: any) => (
            <Image
              height={137}
              width={176}
              key={index}
              src={data.image || "/assets/images/blog.jpg"}
              alt="slider"
              className="w-[160px] object-cover flex flex-wrap h-[137px]"
            />
          ))}
        </div>

        <button onClick={nextSlide} className="block w-[5%]">
          <Image
            height={300}
            width={500}
            src={"/assets/icons/circle-chevron-right.svg"}
            alt="slider"
            className="w-full"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
