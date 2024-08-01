'use client'

import React from 'react';
import { removeHTMLTags } from "@/lib/utils";
import DOMPurify from 'dompurify';
import Image from "next/image";
import PropTypes from 'prop-types';

const AboutLayout = ({ data }: any) => {
  const sanitizedBody = (data?.[0]?.body || '');
  const sanitizedMission = (data?.[0]?.mission || '');

  return (
    <section className="min-h-[300px] bg-[rgb(20,20,31)] text-white my-0 md:mt-10 py-5 md:py-8">
      <div className="px-5 md:container">
        <div className="pb-2 lg:pb-5">
          <div className="pb-2">
            <h1 className="text-mobileJudul md:text-webJudul font-semibold relative z-10 uppercase">Overview</h1>
            <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-0 -mt-6 ml-10 md:ml-[60px] lg:-ml-0"></div>
          </div>
          <div>
            {/* {removeHTMLTags(sanitizedBody)} */}
            <div className="text-mobileDesk md:text-webDesk 2xl:text-webSubjudul  leading-5 2xl:leading-6 text-justify" dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 xl:gap-10 w-full">
          <div className="lg:w-1/2">
            <div className="pb-2">
              <Image src={'/assets/images/newuslanding.svg'} alt="Logo" width={500} height={500} className="w-full md:min-h-[300px] xl:min-h-[280px] 2xl:min-h-[370px] 2xl:object-cover" loading="lazy" />
            </div>
            <div>
              <div className="flex gap-2 md:gap-5 items-center pb-2 pt-3">
                <h2 className="uppercase text-mobileJudul md:text-webJudul font-semibold">Value</h2>
                <div className="w-full h-[1px] bg-red-500"></div>
              </div>
              <div>
                <ul className="flex gap-3 items-center text-mobileDesk md:text-webDesk xl:text-webSubjudul font-semibold flex-wrap">
                  <li>Profesional</li>
                  <li>Experience</li>
                  <li>Responsibility</li>
                  <li>Integrity</li>
                  <li>Statisfaction</li>
                  <li>Innovation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div>
              <div className="pb-2">
                <h2 className="text-mobileJudul md:text-webJudul font-semibold relative z-10 uppercase">VISION</h2>
                <div className="md:w-[60px] md:h-[20px] w-[51px] h-[13px] bg-tangerine absolute z-0 -mt-[22px] ml-6"></div>
              </div>
              <p className="text-mobileDesk md:text-webDesk 2xl:text-webSubjudul leading-5 2xl:leading-6 text-justify">{removeHTMLTags(data?.[0]?.vision || '')}</p>
            </div>
            <div className="pt-5">
              <div className="pb-2">
                <h2 className="text-mobileJudul md:text-webJudul font-semibold relative z-10 uppercase">MISSION</h2>
                <div className="md:w-[60px] md:h-[20px] w-[51px] h-[13px] bg-tangerine absolute z-0 -mt-[22px] ml-6"></div>
              </div>
              <div className='text-mobileDesk md:text-webDesk 2xl:text-webSubjudul leading-6 2xl:leading-7' dangerouslySetInnerHTML={{ __html: sanitizedMission }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutLayout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    mission: PropTypes.string,
    body: PropTypes.string,
    vision: PropTypes.string,
  })).isRequired,
};

export default AboutLayout;
