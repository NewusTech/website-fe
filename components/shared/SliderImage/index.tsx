"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full">
      {/* Gambar pertama */}
      <div className="mb-4">
        <Image height={367} width={570} src={images[0]} alt="slider" className="w-full" />
      </div>
      {/* Slider dengan tiga gambar */}
      <div className="flex justify-between items-center gap-[5px]">
        <button onClick={prevSlide} className="block w-[5%]">
          <Image height={367} width={570} src={'/assets/icons/circle-chevron-left.svg'} alt="slider" className="w-full" />
        </button>

        <div className="flex justify-between w-[90%] gap-2">
          {images.slice(1, 4).map((image, index) => (
            <Image height={137} width={176} key={index} src={image} alt="slider" className="w-[160px] object-cover flex flex-wrap h-[137px]" />
          ))}
        </div>

        <button onClick={nextSlide} className="block w-[5%]">
          <Image height={367} width={570} src={'/assets/icons/circle-chevron-right.svg'} alt="slider" className="w-full" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
