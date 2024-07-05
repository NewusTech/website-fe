"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    image: "/assets/images/ASPILUKI.jpg",
    logo: "/assets/icons/logoaspekti.png"
  },
  {
    image: "/assets/images/cvnewus.jpg",
    logo: "/assets/icons/logoaspiluki2.png"
  },
  {
    image: "/assets/images/ICTPM.jpg",
    logo: "/assets/icons/logoBNSP.webp"
  },
  {
    image: "/assets/images/KADIN.jpg",
    logo: "/assets/icons/logokadin.webp"
  }
];

const CarouselImage = () => {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col items-center bg-gray-700 md:rounded-lg">
              <div className="hidden h-20 rounded-t-md w-full text-start lg:flex justify-start px-3">
                <Image
                  className="w-1/4 h-20 object-contain"
                  src={src.logo}
                  alt={`logo-${index}`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </div>
              <div className="h-72 md:min-h-[500px] lg:min-h-[500px] px-5 md:px-0 md:shadow-sm">
                <Image
                  className="object-cover object-top h-72 md:min-h-[500px] lg:min-h-[600px] md:shadow-sm"
                  src={src.image}
                  alt={`banner-${index}`}
                  width={1450}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselImage;
