"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Modal from "./ModalImage"; // Adjust the import path as needed

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
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const handleImageClick = (imageSrc: any) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="flex flex-col items-center bg-gray-700 md:rounded-lg"
                onClick={() => handleImageClick(src.image)}
              >
                <div className="h-72 md:min-h-[500px] lg:min-h-[600px] flex items-center">
                  <Image
                    className="object-cover object-top h-72 md:min-h-[500px] lg:h-full rounded-xl"
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
      <Modal showModal={showModal} setShowModal={setShowModal} imageSrc={currentImage} />
    </>
  );
};

export default CarouselImage;
