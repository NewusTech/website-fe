'use client'

import React, { useEffect, useState } from 'react';
import Box from './Box';
import Image from 'next/image';
import ModalStructure from './ModalStructure';

const StrukturMobile = ({ teams }: any) => {
  const boxes = [
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy1.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy2.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy3.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy4.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy5.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy6.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy7.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy8.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy8.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy8.png" }
  ];

  const [developerTeam, setDeveloperTeam] = useState([]);
  const [digitalMarketingTeam, setDigitalMarketingTeam] = useState([]);
  const [backOfficeTeam, setBackOfficeTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [direktur, setDirektur] = useState(() => {
    const teamObj = teams.find((team: any) => team.title === 'Direktur');
    return teamObj;
  });

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
    <div className="p-5 bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
      <div className="flex justify-start leading-8 text-white pb-5 text-mobileJudul md:text-webJudul font-bold">
        Organizational Structure
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center' onClick={() => handleImageClick(direktur)}>
          <Image width={1000} height={1000} src={direktur.image || "/assets/images/dummy8.png"} alt="Antoni, ST" className="h-[200px] w-[200px] rounded-sm shadow object-cover" />
          <div className="w-[300px] text-center text-white text-[12px] mt-2">Antoni, ST<br />Direktur</div>
        </div>
        <div className='flex flex-col w-full pt-5'>
          <div>
            <div className="my-[10px] flex justify-between items-center gap-3">
              <h2 className="text-mobileJudul md:text-webJudul font-semibold  lg:mb-4 capitalize text-nowrap text-white">
                Developer Team
              </h2>
              <div className="w-full h-[1px] bg-gray-4"></div>
            </div>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap mx-auto gap-2 pb-2 w-full'>
                {developerTeam?.map((box: any, index: number) => (
                  <div key={index} className="w-[31%] sm:[32%] cursor-pointer" onClick={() => handleImageClick(box)}>
                    <Box {...box} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="my-[10px] flex justify-between items-center gap-3">
              <h2 className="text-mobileJudul md:text-webJudul font-semibold lg:mb-4 capitalize text-nowrap text-white">
                Digital Marketing
              </h2>
              <div className="w-full h-[1px] bg-gray-4"></div>
            </div>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap mx-auto gap-2 pb-2 w-full'>
                {digitalMarketingTeam?.map((box: any, index: number) => (
                  <div key={index} className="w-[31%] sm:[32%] cursor-pointer" onClick={() => handleImageClick(box)}>
                    <Box {...box} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="my-[10px] flex justify-between items-center gap-3">
              <h2 className="text-mobileJudul md:text-webSubjudul font-semibold lg:mb-4 capitalize text-nowrap text-white">
                Back Office
              </h2>
              <div className="w-full h-[1px] bg-gray-4"></div>
            </div>
            <div className="flex flex-col items-end w-full pb-6">
              <div className='flex flex-wrap mx-auto gap-2 pb-2 w-full'>
                {backOfficeTeam?.map((box: any, index: number) => (
                  <div key={index} className="w-[31%] sm:[32%] cursor-pointer" onClick={() => handleImageClick(box)}>
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
  )
}

export default StrukturMobile;
