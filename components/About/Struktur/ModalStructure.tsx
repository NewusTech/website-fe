import React from "react";
import Image from "next/image";

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
            className="relative max-w-[1480px] my-6 rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-auto relative xl:max-w-[85vw] 2xl:max-w-[75vw]">
              <Image
                className="object-cover object-top w-full h-auto rounded-xl max-h-screen"
                src={teams.image}
                alt="Full Image"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <div className="absolute top-[-135px] md:top-[-235px] left-[250px] xl:top-[-246px] 2xl:top-[-406px] md:left-[460px] xl:left-[450px] 2xl:left-[700px] opacity-[1] max-w-[150px] md:max-w-[300px] xl:max-w-[400px] text-white">
                <h1 className="text-mobileJudul 2xl:text-[32px] text-[#480DEC] font-bold">{teams?.name ? teams.name : 'Name Team'}</h1>

                <h2 className="text-mobileSubjudul 2xl:text-[24px] text-black pb-2 md:pb-4">{teams?.title ? teams.title : 'POSITION'}</h2>

                <p className="md:hidden text-mobileDesk 2xl:text-[14px] capitalize leading-3 ">
                  {teams?.description ? teams.description : 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ipsum dolor sit amet consectetur.'}

                </p>
                <p className="hidden md:block text-mobileDesk 2xl:text-[16px] capitalize">
                  {teams?.description ? teams.description : 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ut ullamcorper est tincidunt venenatis venenatis dignissim magna. Eget adipiscing purus duis vel etiam.'}
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
