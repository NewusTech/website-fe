import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-l-lg p-6 text-center shadow-l-lg border-[0.5px] border-gray-3 w-full">
      <div className="mb-4 text-center flex justify-center w-full">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">{title}</h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">{description}</p>
    </div>
  );
};

const ServiceCard2 = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white rounded-r-lg p-6 text-center border-[0.5px] border-gray-3 shadow-r-lg w-full">
      <div className="mb-4 text-center flex justify-center w-full">{icon}</div>
      <h3 className="text-mobileSubjudul md:text-webSubjudul font-semibold mb-2">{title}</h3>
      <p className="text-mobileDesk md:text-webDesk text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex bg-gray-100 rounded-lg">
      <ServiceCard
        icon={<Image alt='Certified Enginners' src={'assets/icons/about-landing/Certified.svg'} width={50} height={50} className='w-[30px] lg:w-[50px]' />}
        title="Certified Enginners"
        description="Lorem ipsum dolor sit amet consectetur. Enim malesuada integer sit vitae."
      />
      <ServiceCard2
        icon={<Image alt='Certified Enginners' src={'assets/icons/about-landing/Delivery.svg'} width={50} height={50} className='w-[30px] lg:w-[50px]' />}
        title="Delivery on time"
        description="Lorem ipsum dolor sit amet consectetur. Enim malesuada integer sit vitae."
      />
    </div>
  );
};

export default Services;
