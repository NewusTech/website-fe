import React from 'react';
import Image from 'next/image';

const Testimonial = ({ imageSrc, quote, name, position, company }: any) => {
  return (
    <div className="bg-white rounded-lg p-2 md:p-6 shadow-lg max-w-md mx-auto text-center relative mt-8">
      <div className="left-5 top-0 -mt-5 absolute w-12 h-12 bg-[#F60] rounded-md flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
          <path d="M5.50496 0.94043C2.92896 0.94043 0.839355 3.08923 0.839355 5.74043C0.839355 8.39003 2.92896 10.5404 5.50496 10.5404C10.169 10.5404 7.06015 19.8188 0.839355 19.8188V22.0588C11.9418 22.0604 16.2922 0.94043 5.50496 0.94043ZM18.945 0.94043C16.3706 0.94043 14.281 3.08923 14.281 5.74043C14.281 8.39003 16.3706 10.5404 18.945 10.5404C23.6106 10.5404 20.5018 19.8188 14.281 19.8188V22.0588C25.3818 22.0604 29.7322 0.94043 18.945 0.94043Z" fill="white" />
        </svg>
      </div>
      <Image
        alt={name}
        src={imageSrc}
        width={500}
        height={500}
        loading='lazy'
        className="rounded-full w-[100px] h-[100px] object-contain mx-auto mb-4"
      />
      <blockquote className="text-[#707A88] text-mobileDesk md:text-webDesk mb-4">
        {quote}
      </blockquote>
      <h1 className="font-bold text-lg text-mobileJudul md:text-webJudul">{name}</h1>
      <h2 className="text-gray-500 text-mobileSubjudul md:text-webSubjudul">
        {position}, <span className="text-orange-500">{company}</span>
      </h2>
    </div>
  );
};

export default Testimonial;
