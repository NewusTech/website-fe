'use client'

import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Division from "./Division";

interface Team {
  DivitionCategory: {
    title: string;
  };
  // Add other properties of team here
}
type GroupedTeams = {
  [key: string]: Team[];
};

const Carousels = ({ teams }: any) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  const [groupedTeams, setGroupedTeams] = useState<GroupedTeams>({});

  const groupByDivision = (teams: any) => {
    return teams.reduce((result: any, team: any) => {
      const { DivitionCategory } = team;
      if (!result[DivitionCategory.title]) {
        result[DivitionCategory.title] = [];
      }
      result[DivitionCategory.title].push(team);
      return result;
    }, {});
  };

  useEffect(() => {
    setGroupedTeams(groupByDivision(teams));
  }, [teams])

  return (
    <div className="px-20 pb-20 min-h-screen bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
      <div className="flex justify-end text-white pt-20 pb-3 text-[28px] font-bold">
        Meet the team behind the apps
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Object.keys(groupedTeams).map((division, index) => (
            <CarouselItem key={index}>
              <Division division={division} teams={groupedTeams[division]} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carousels;

