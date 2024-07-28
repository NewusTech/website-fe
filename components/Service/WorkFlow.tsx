import Image from 'next/image'
import React from 'react'
import LifeCycle from './LifeCycle/WebCycle'
import MobileCycle from './LifeCycle/MobileCycle'

const WorkFlow = () => {
  return (
    <div className='overflow-hidden'>
      <div className="md:mt-10 flex justify-between items-center gap-2 md:gap-5 md:px-5 relative">
        <h1 className="relative z-20 uppercase text-black text-center font-bold md:text-webJudul text-nowrap text-mobileJudul">
          Software Development <span className="text-blue">Life Cycle</span>
        </h1>
        <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute -z-10 mt-3 md:-ml-[33px]"></div>
        <div className="w-full h-[1px] bg-gray-4"></div>
      </div>
      <div className='lg:hidden'>
        <MobileCycle />
      </div>
      <div className='hidden lg:block'>
        <LifeCycle />
      </div>

      <div className='lg:py-10'>
        <div className="2xl:mt-10 -mt-[20px] md:-mt-[20px] flex justify-between items-center gap-2 md:gap-5 md:px-5 relative">
          <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute -z-10 mt-2 right-0 md:-ml-16 md:mt-[15px] md:right-0"></div>
          <div className="w-full h-[1px] bg-gray-4"></div>
          <h1 className="relative z-20 uppercase text-center font-bold md:text-webJudul text-nowrap text-mobileJudul text-tangerine">
            Design <span className="text-blue">Process</span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex items-center md:justify-center xl:justify-between gap-10 md:py-10 2xl:py-20 relative">
          <div className='hidden absolute inset-0 lg:flex items-center justify-center'>
            <div className="w-52 h-52 md:w-[400px] md:h-[300px] xl:w-[400px] xl:h-[600px] z-40">
              <Image
                src='/assets/icons/sdlc/design-process.svg'
                width={600}
                height={600}
                alt='Design Process Illustration'
                className='object-contain w-full h-full'
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-10 2xl:gap-8 w-full">
            <div className='w-full md:w-[45%] xl:w-1/2  gap-2 flex flex-col items-center md:items-start'>
              <div className="flex items-center">
                <div className="flex items-center justify-center shadow bg-orange-100 border-[#350553] w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/target.svg' width={60} height={60} alt='Target Audience Icon' />
                </div>
                <div className="bg-tangerine p-4 w-[205px] rounded-r-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Concept</h2>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/design.svg' width={60} height={60} alt='Competitors Icon' />
                </div>
                <div className="bg-tangerine w-[205px] p-4 rounded-r-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Design</h2>
                </div>
              </div>
            </div>

            <div className='w-full xl:w-1/2 gap-2 flex flex-col items-center md:items-end'>
              <div className="md:hidden flex items-center">
                <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/Prototype.svg' width={60} height={60} alt='Competitors Icon' />
                </div>
                <div className="bg-tangerine w-[205px] p-4 rounded-r-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Prototype</h2>
                </div>

              </div>
              <div className="md:hidden flex items-center">
                <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/Handover.svg' width={60} height={60} alt='Competitors Icon' />
                </div>
                <div className="bg-tangerine w-[205px] p-4 rounded-r-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Handover</h2>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <div className="bg-tangerine w-[205px] p-4 rounded-l-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Prototype</h2>
                </div>
                <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/Prototype.svg' width={60} height={60} alt='Competitors Icon' />
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <div className="bg-tangerine w-[205px] p-4 rounded-l-lg shadow-md">
                  <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Handover</h2>
                </div>
                <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-full">
                  <Image src='/assets/icons/sdlc/Handover.svg' width={60} height={60} alt='Competitors Icon' />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkFlow
