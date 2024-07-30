import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-l-lg p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">{title}</h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">{description}</p>
    </div>
  );
};

const ServiceCard2 = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-r-lg p-3 sm:p-5 xl:p-6 text-center shadow-lg border-[0.5px] border-gray-300 w-full h-full flex flex-col justify-start lg:justify-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">{title}</h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex bg-gray-100 rounded-lg h-[160px] lg:h-full">
      <ServiceCard
        icon={<Image alt='Certified Engineers' src='/assets/icons/about-landing/Certified.svg' width={50} height={50} className='w-[30px] lg:w-[50px]' />}
        title="Certified Engineers"
        description="Deep expertise and experience for optimal and reliable results."
      />
      <ServiceCard2
        icon={<Image alt='Delivery on time' src='/assets/icons/about-landing/Delivery.svg' width={50} height={50} className='w-[30px] lg:w-[50px]' />}
        title="Delivery on time"
        description="Ensure every IT solution is completed on schedule to support your business success."
      />
    </div>
  );
};

export default Services;
