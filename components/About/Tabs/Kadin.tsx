"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Modal from "@/components/shared/SliderOwner/ModalImage";

const images = [
  // {
  //   image: "/assets/images/ASPILUKI.jpg",
  //   logo: "/assets/icons/logoaspekti.png"
  // },
  // {
  //   image: "/assets/images/cvnewus.jpg",
  //   logo: "/assets/icons/logoaspiluki2.png"
  // },
  // {
  //   image: "/assets/images/ICTPM.jpg",
  //   logo: "/assets/icons/logoBNSP.webp"
  // },
  {
    image: "/assets/images/KADIN.jpg",
    logo: "/assets/icons/logokadin.webp"
  }
];


const Kadin = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const handleImageClick = (imageSrc: any) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };
  return (
    <section className='-mt-[8px] md:px-[67px] px-5 pt-2 md:pt-14 pb-8 md:py-[64px] md:border bg-white md:border-[#FF6600]'>
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
    </section>
  )
}

export default Kadin