import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-tl-lg lg:rounded-none p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
        {title}
      </h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">
        {description}
      </p>
    </div>
  );
};

const ServiceCard2 = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-tr-lg lg:rounded-none p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
        {title}
      </h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    // <div className="flex bg-gray-100 rounded-lg h-[160px] lg:h-full">
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-4 bg-gray-100 gap-0">
      <ServiceCard
        icon={
          <Image
            alt="Certified Engineers"
            src="/assets/icons/about-landing/Certified.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        }
        title="Certified Engineers"
        description="Deep expertise and experience for optimal and reliable results."
      />
      <ServiceCard2
        icon={
          <Image
            alt="Delivery on time"
            src="/assets/icons/about-landing/Delivery.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        }
        title="Delivery on time"
        description="Ensure every IT solution is completed on schedule to support your business success."
      />
      <div className="bg-white p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
        <div className="mb-4 flex justify-center">
          <Image
            alt="Warranty"
            src="/assets/icons/about-landing/Service.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        </div>
        <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
          Warranty
        </h3>
        <p className="text-mobileDesk md:text-webDesk text-gray-600">
          1 year service warranty
        </p>
      </div>
      <div className="bg-white p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
        <div className="mb-4 flex justify-center">
          <Image
            alt="Money back guarantee"
            src="/assets/icons/about-landing/money-bag.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        </div>
        <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
          Money Back Guarantee
        </h3>
        <p className="text-mobileDesk md:text-webDesk text-gray-600">
          100% money back guarantee if our work does not meet your needs
        </p>
      </div>
      <div className="bg-white rounded-bl-lg p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
        <div className="mb-4 flex justify-center">
          <Image
            alt="Delivery on time"
            src="/assets/icons/about-landing/certificate-bold.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        </div>
        <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
          Experienced Technician
        </h3>
        <p className="text-mobileDesk md:text-webDesk text-gray-600">
          Experienced technicians more than 12 years
        </p>
      </div>
      <div className="bg-white rounded-br-lg p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center lg:py-10">
        <div className="mb-4 flex justify-center">
          <Image
            alt="Delivery on time"
            src="/assets/icons/about-landing/collaborate.svg"
            width={50}
            height={50}
            className="w-[30px] lg:w-[50px]"
          />
        </div>
        <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">
          Customer Satisfaction
        </h3>
        <p className="text-mobileDesk md:text-webDesk text-gray-600">
          Quality and client satisfaction are our priorities
        </p>
      </div>
    </div>
  );
};

export default Services;
