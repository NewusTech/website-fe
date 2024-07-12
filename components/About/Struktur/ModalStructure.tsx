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
            <div className="flex-auto relative md:max-w-[75vw]">
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
              <div className="absolute top-[-135px] left-[250px] md:top-[-406px] md:left-[730px] opacity-[1] max-w-[150px] md:max-w-[400px] text-white">
                <h1 className="text-[12px] md:text-[40px] text-[#480DEC] font-bold">{teams?.name ? teams.name : 'Name Team'}</h1>

                <h2 className="text-[10px] md:text-[36px] text-black pb-2 md:pb-4">{teams?.title ? teams.title : 'POSITION'}</h2>

                <p className="md:hidden text-[10px] md:text-[16px] capitalize leading-3 ">
                  {teams?.description ? teams.description : 'Lorem ipsum dolor sit amet consectetur. Volutpat velit nibh orci eu vel a phasellus dui est. Habitasse eget cum sed pulvinar morbi. Lorem ipsum dolor sit amet consectetur.'}

                </p>
                <p className="hidden md:block text-[6px] md:text-[16px] capitalize">
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
