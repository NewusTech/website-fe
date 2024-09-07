"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { bannerType } from "./RightSide";

type CarouselHeaderProps = {
  banner: bannerType[];
  setActiveIndex: (index: number) => void;
};

const CarouselHeader = (props: CarouselHeaderProps) => {
  const { banner, setActiveIndex } = props;

  // State untuk menyimpan referensi ke Embla API
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Ref untuk plugin autoplay
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Menggunakan efek untuk menangani saat API Embla sudah siap
  useEffect(() => {
    if (!api) return;

    // Callback untuk mengupdate index aktif saat slide berubah
    const onSelect = () => {
      if (api) {
        const selectedIndex = api.selectedScrollSnap();
        setActiveIndex(selectedIndex);
      }
    };

    // Menambahkan event listener untuk event 'select'
    api.on("select", onSelect);

    // Cleanup listener saat komponen unmount atau API berubah
    return () => {
      api.off("select", onSelect);
    };
  }, [api, setActiveIndex]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi} // Meneruskan fungsi untuk mengatur API Embla
    >
      <CarouselContent>
        {banner?.map((item) => (
          <CarouselItem key={item.id}>
            <div className="h-48 md:min-h-[600px] lg:min-h-screen">
              <Image
                className="object-cover h-48 md:min-h-[600px] lg:min-h-screen"
                src={item.image}
                alt="banner"
                width={1450}
                height={600}
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselHeader;
