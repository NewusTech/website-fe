"use client";

import React, { useState, useEffect } from "react";
import Box from "./Box";
import Image from "next/image";
import ModalStructure from "./ModalStructure";

const Struktur = ({ teams }: any) => {
  // State untuk setiap kategori
  const [developerTeam, setDeveloperTeam] = useState([]);
  const [digitalMarketingTeam, setDigitalMarketingTeam] = useState([]);
  const [backOfficeTeam, setBackOfficeTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [direktur, setDirektur] = useState(() => {
    const teamObj = teams.find((team: any) => team.title === "Direktur");
    return teamObj;
  });

  function renderTeam(teamList: any[], label: string) {
    const cBorder = teamList.length > 4;

    if (teamList.length > 0)
      return (
        <div className="flex flex-row">
          <p
            className={`text-left h-fit ${cBorder ? "w-48" : "w-[272px]"} border-b-2 text-white text-mobileSubJudul md:text-webSubjudul text-nowrap self-center`}
          >
            {label}
          </p>
          {cBorder && (
            <div className="border-l-2 border-t-2 border-b-2 w-20 h-auto mt-10 mb-10" />
          )}
          <div className="grid grid-cols-4 gap-2">
            {teamList.map((box: any, index: any) => (
              <div
                key={index}
                className="w-[120px] xl:w-[150px] cursor-pointer"
                onClick={() => handleImageClick(box)}
              >
                <Box {...box} />
              </div>
            ))}
          </div>
        </div>
      );
    return null;
  }

  // Filter data dari props teams berdasarkan DivitionCategory.title
  useEffect(() => {
    const devTeam = teams.filter(
      (member: any) => member.DivitionCategory.title === "Developer"
    );
    const digiTeam = teams.filter(
      (member: any) => member.DivitionCategory.title === "Digital Marketing"
    );
    const backOffice = teams.filter(
      (member: any) => member.DivitionCategory.title === "Back Office"
    );

    setDeveloperTeam(devTeam);
    setDigitalMarketingTeam(digiTeam);
    setBackOfficeTeam(backOffice);
  }, [teams]);

  const handleImageClick = (teams: any) => {
    setCurrentItem(teams);
    setShowModal(true);
  };

  return (
    <div className="px-10 2xl:px-[67px] py-5 xl:pt-10 bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
      <div className="flex items-center justify-center 2xl:max-w-7xl mx-auto">
        <div className="flex flex-row gap-5">
          {/* left */}
          <div className="flex flex-col">
            <p className="xl:text-nowrap text-white pb-3 text-mobileJudul md:text-webJudul font-semibold">
              Organizational Structure
            </p>
            <div
              className="flex h-auto w-auto flex-col items-center mt-10 "
              onClick={() => handleImageClick(direktur)}
            >
              <div className="w-[200px] h-[200px] xl:w-[250px] xl:h-[250px]  overflow-hidden object-right rounded-sm">
                <Image
                  width={1000}
                  height={1000}
                  src={direktur?.image || "/assets/images/dummyceo.svg"}
                  alt={`img-${direktur.name}`}
                  className="lg:h-[200px] w-[150px] h-[150px] lg:w-[200px] xl:h-[300px] xl:w-[300px] object-cover"
                />
              </div>
              <p className="w-[150px] xl:w-[300px] text-center text-white text-mobileJudul md:text-webJudul mt-2 p-1">
                {direktur.name}
                <br />
                Direktur
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col p-4 gap-2">
            {renderTeam(developerTeam, "Developer Team")}
            {renderTeam(digitalMarketingTeam, "Digital Marketing")}
            {renderTeam(digitalMarketingTeam, "Back Office")}
          </div>
        </div>
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          teams={currentItem}
        />
      </div>
    </div>
  );
};

export default Struktur;
