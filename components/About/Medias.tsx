"use client";

import React, { useState } from 'react';
import Box from './Box';

const Medias = ({ medias }: { medias: any[] }) => {
  const [backgroundUrl, setBackgroundUrl] = useState('/assets/images/bg-team.png');

  const handleBoxClick = (newUrl: string) => {
    setBackgroundUrl(newUrl);
  };

  return (
    <div>
      {medias.length > 0 ? (
        <div>
          <div
            className={`px-4 md:px-[50px] pb-10 min-h-[250px] md:min-h-[500px] 2xl:min-h-[892px] bg-contain bg-center flex justify-center items-end`}
            style={{ backgroundImage: `url('${backgroundUrl}')` }}
          >
            <div className="text-center md:text-left md:w-[892px]">
              <h1 className="text-white text-start text-mobileJudul md:text-[32px] font-bold font-asap">
                Strength in Numbers <span className="text-[#480DEC]">:</span>
              </h1>
              <h2 className="text-[#480DEC] font-bold md:leading-[70px] text-mobileJudul md:text-[32px]">
                “Together We Stand, United We Achieve!”
              </h2>
            </div>
          </div>

          <div
            className={`flex w-full h-[160px] md:h-[300px] ${medias.length > 4 ? 'overflow-auto' : ''} md:h-full`}
            style={{
              overflowX: 'scroll',
              scrollbarWidth: 'thin',
              msOverflowStyle: 'scrollbar',
              overflowY: 'hidden',
            }}
          >
            {medias.map((box: any, index: number) => (
              <div
                key={index}
                className="w-4/12 md:w-[25%] xl:w-[20%] h-1/2 xl:h-full flex-shrink-0"
                onClick={() => handleBoxClick(box.image)}
              >
                <Box {...box} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Medias;
