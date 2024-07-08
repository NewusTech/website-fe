"use client"

import React, { useState } from 'react';
import Box from './Box';

const Medias = ({ medias }: any) => {
  const [backgroundUrl, setBackgroundUrl] = useState('/assets/images/bg-team.png');

  const handleBoxClick = (newUrl: string) => {
    setBackgroundUrl(newUrl);
  };

  const repeatedMedias = Array(8).fill(medias).flat();

  return (
    <div>
      <div className={`px-4 md:px-[100px] pb-10 min-h-[200px] md:min-h-[600px] lg:min-h-[892px]] bg-contain bg-center flex justify-center items-end`} style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className="text-center md:text-left md:w-[892px]">
          <h1 className="text-white text-start text-[24px] md:text-[64px] font-bold font-asap">Strength in Numbers <span className="text-[#480DEC]">:</span></h1>
          <h2 className="text-[#480DEC] font-bold md:leading-[70px] md:text-[64px]">“Together We Stand, United We Achieve! “</h2>
        </div>
      </div>

      <div className={`hidden md:flex w-full ${medias.length > 4 ? 'overflow-x-scroll' : ''} md:h-full`}>
        {repeatedMedias.map((box, index) => (
          <div
            key={index}
            className="w-[20%] md:w-1/4 h-1/2 md:h-full flex-shrink-0"
            onClick={() => handleBoxClick(box.image)}
          >
            <Box {...box} />
          </div>
        ))}
      </div>
    </div >
  );
};

const repeatArray = (arr: any[], times: number) => {
  return [].concat(...Array(times).fill(arr));
};

export default Medias;
