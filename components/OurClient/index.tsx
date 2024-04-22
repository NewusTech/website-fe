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
import React from "react";
import Autoplay from "embla-carousel-autoplay";

interface OurClientProps {
  id: number;
  logo: string;
}

const OurClient = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section>
      <h2 className="mt-6 mb-9 text-center text-[16px] text-tangerine">
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
                className="basis-[10%] w-[125px] h-[60px] gap-9"
              >
                <Image
                  src={logo}
                  alt="logo"
                  height={60}
                  width={100}
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
