"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/assets/images/ASPILUKI.jpg",
  "/assets/images/cvnewus.jpg",
  "/assets/images/ICTPM.jpg",
  "/assets/images/KADIN.jpg"
];

const CarouselImage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }),
  );

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
            <div className="h-48 md:min-h-[500px] lg:min-h-screen">
              <Image
                className="object-contain h-48 md:min-h-[500px] lg:min-h-[600px]"
                src={src}
                alt={`banner-${index}`}
                width={1450}
                height={1000}
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselImage;
