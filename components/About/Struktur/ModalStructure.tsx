import React from "react";
import Image from "next/image";
import { removeHTMLTags } from "@/lib/utils";

const ModalStructure = ({ showModal, setShowModal, teams }: any) => {
  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closePopup}
        >
          <div
            className="relative max-w-[800px] xl:max-w-[1480px] my-6 rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-auto relative xl:max-w-[85vw] 2xl:max-w-[75vw]">
              <Image
                className="object-cover w-full h-auto rounded-xl max-h-screen"
                src={teams?.image || "/assets/images/dummyceo.png"}
                alt="Full Image"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <div className="absolute top-[-155px] md:top-[-235px] left-[250px] xl:top-[-246px] 2xl:top-[-406px] md:left-[760px] lg:left-[495px] xl:left-[650px] 2xl:left-[650px] opacity-[1] max-w-[130px] md:max-w-[300px] xl:max-w-[400px] text-white">
                <h1 className="text-mobileJudul 2xl:text-[32px] text-[#480DEC] font-bold">{teams?.name ? teams.name : 'Name Team'}</h1>

                <h2 className="text-mobileSubjudul 2xl:text-[24px] text-black pb-2 md:pb-4">{teams?.title ? teams.title : 'POSITION'}</h2>

                <p className="md:hidden text-[11px] capitalize leading-3 line-clamp-5 font-light">
                  {removeHTMLTags(teams?.description) || ''}
                </p>
                <p className="hidden md:block text-mobileDesk 2xl:text-[16px] capitalize">
                  {removeHTMLTags(teams?.description) || 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ut ullamcorper est tincidunt venenatis venenatis dignissim magna. Eget adipiscing purus duis vel etiam.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalStructure;
