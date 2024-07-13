"use client";

import Image from "next/image";
import { ourClient } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Aos from "aos";

interface OurClientProps {
  id: number;
  logo: string;
}

const OurClient = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section data-aos="fade-up">
      <h2 className="mt-3 md:mt-6 md:mb-9 mb-6 text-center text-mobileJudul md:text-webJudul text-tangerine">
        Our Happy Client
      </h2>
      <div className="flex items-center">
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {ourClient.map(({ id, logo }: OurClientProps) => (
              <CarouselItem
                key={id}
                className="md:basis-[10%] basis-[17%] w-[125px] h-[60px] gap-9"
              >
                <Image
                  src={logo}
                  alt="logo"
                  height={60}
                  width={100}
                  loading="lazy"
                  className="aspect-video object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default OurClient;
