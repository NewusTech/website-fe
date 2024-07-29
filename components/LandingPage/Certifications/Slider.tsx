"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Modal from "@/components/shared/SliderOwner/ModalImage";
// import Modal from "./ModalImage"; // Adjust the import path as needed

const images = [
  {
    image: "/assets/images/KADIN.jpg",
    logo: "/assets/icons/logokadin.webp"
  },
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
                className="flex flex-col items-center md:rounded-lg"
                onClick={() => handleImageClick(src.image)}
              >
                <div className="h-60 md:min-h-[500px] xl:min-h-[550px] flex items-center">
                  <Image
                    className="object-contain h-full rounded shadow-md shadow-white"
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
