"use client";

import React, { useState, useEffect } from 'react';
import Box from './Box';
import Image from 'next/image';
import ModalStructure from './ModalStructure';

const Struktur = ({ teams }: any) => {
  // State untuk setiap kategori
  const [developerTeam, setDeveloperTeam] = useState([]);
  const [digitalMarketingTeam, setDigitalMarketingTeam] = useState([]);
  const [backOfficeTeam, setBackOfficeTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  // Filter data dari props teams berdasarkan DivitionCategory.title
  useEffect(() => {
    const devTeam = teams.filter((member: any) => member.DivitionCategory.title === 'Developer Team');
    const digiTeam = teams.filter((member: any) => member.DivitionCategory.title === 'Digital Marketing Team');
    const backOffice = teams.filter((member: any) => member.DivitionCategory.title === 'Back Office Team');

    setDeveloperTeam(devTeam);
    setDigitalMarketingTeam(digiTeam);
    setBackOfficeTeam(backOffice);
  }, [teams]);

  const handleImageClick = (teams: any) => {
    setCurrentItem(teams);
    setShowModal(true);
  };

  return (
    <div className="px-10 py-5 xl:pt-10 bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
      <div className='flex items-center justify-center md:max-w-5xl xl:max-w-7xl mx-auto'>
        <div className='w-3/12 flex items-center pt-40 relative'>
          <div className="absolute -top-28 xl:text-nowrap text-white pt-20 pb-3 text-[28px] font-semibold">
            Organizational Structure
          </div>
          <div className='flex flex-col items-center'>
            <Image width={1000} height={1000} src="/assets/images/dummy8.png" alt="Antoni, ST" className="lg:h-[200px] w-[150px] h-[150px] lg:w-[200px] xl:h-[300px] xl:w-[300px] object-cover" />
            <div className="h-[150px] w-[150px] xl:w-[300px] text-center text-white text-xl mt-2">Antoni, ST<br />Direktur</div>
          </div>
        </div>

        <div className='w-2/12 relative'>
          <div className="text-white xl:text-lg mb-2 absolute -top-[170px] xl:-top-[220px] lg:-top-[185px] border-b-2 md:w-[132px] xl:w-[178px] text-nowrap text-sm">Developer Team</div>
          <div className='border-l-2 border-y-2 h-[108px] lg:h-[112px] xl:h-[160px] xl:w-10 w-7 absolute lg:-top-[220px] xl:-top-[270px] -top-[200px] -right-1'></div>
          <div className="text-white text-nowrap text-sm xl:text-lg mb-2 absolute top-[20px] lg:top-[30px] xl:top-[35px] border-b-2 md:w-[132px] xl:w-[178px]">Digital Marketing</div>
          <div className='border-l-2 border-y-2 h-[50px] xl:w-10 w-7 absolute top-[15px] lg:top-[27px] xl:top-[40px] -right-1'></div>
          <div className="text-white text-nowrap text-sm xl:text-lg mb-2 absolute top-[150px] lg:top-[185px] xl:top-[216px] border-b-2 md:w-[132px] xl:w-[178px]">Back Office</div>
          <div className='border-l-2 border-y-2 h-[50px] w-7 xl:w-10 absolute top-[150px] lg:top-[180px] xl:top-[220px] -right-1'></div>
        </div>

        <div className='w-7/12 pt-5'>
          <div className='flex flex-col w-full'>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap gap-2 pb-2 w-full'>
                {developerTeam.map((box: any, index: number) => (
                  <div key={index} className="w-[18%] xl:w-[19%] cursor-pointer" onClick={() => handleImageClick(box)}>
                    <Box {...box} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap gap-2 pb-2 w-full'>
                {digitalMarketingTeam.map((box: any, index: number) => (
                  <div key={index} className="w-[18%] xl:w-[19%] cursor-pointer" onClick={() => handleImageClick(box)}>
                    <Box {...box} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap gap-2 pb-2 w-full'>
                {backOfficeTeam.map((box: any, index: number) => (
                  <div key={index} className="w-[18%] xl:w-[19%] cursor-pointer" onClick={() => handleImageClick(box)}>
                    <Box {...box} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ModalStructure showModal={showModal} setShowModal={setShowModal} teams={currentItem} />
        </div>
      </div>
    </div>
  );
};

export default Struktur;
