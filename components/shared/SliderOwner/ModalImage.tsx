import React from "react";
import Image from "next/image";

const Modal = ({ showModal, setShowModal, imageSrc }: any) => {
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
            className="relative w-auto max-w-7xl mx-auto my-6 bg-white rounded-lg shadow-lg "
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Image Preview</h3>
              <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}
            <div className="p-2 flex-auto relative md:max-w-[65vw]">
              <Image
                className="object-cover object-top w-full h-auto max-h-[95vh] " // Ensures the image fits within the modal
                // className="object-cover object-top w-30 h-auto max-h-[95vh]" // Ensures the image fits within the modal
                src={imageSrc}
                alt="Full Image"
                width={2050}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
