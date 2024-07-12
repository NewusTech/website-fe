import Image from 'next/image'
import React from 'react'
import LifeCycle from './LifeCycle/WebCycle'
import MobileCycle from './LifeCycle/MobileCycle'

const WorkFlow = () => {
  return (
    <div className='overflow-hidden'>
      <div className="md:mt-10 mt-[10px] flex justify-between items-center gap-5 md:gap-5 px-5 relative">
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
        <div className="md:mt-10 mt-[10px] flex justify-between items-center gap-5 md:gap-5 px-5 relative">
          <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute -z-10 mt-2 right-0 md:-ml-16 md:mt-[15px] md:right-0"></div>
          <div className="w-full h-[1px] bg-gray-4"></div>
          <h1 className="relative z-20 uppercase text-center font-bold md:text-webJudul text-nowrap text-mobileJudul text-tangerine">
            Design <span className="text-blue">Process</span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex items-center md:justify-center xl:justify-between gap-10 py-5 xl:py-20">
          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center shadow bg-orange-100 border-[#350553] w-32 h-32 rounded-xl">
                <Image src='/assets/icons/sdlc/target.svg' width={50} height={50} alt='Target Audience Icon' />
              </div>
              <div className="bg-tangerine p-4 rounded-r-lg shadow-md">
                <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Research target audience</h2>
              </div>
              <div className="hidden xl:block left-[470px] w-[500px] h-[2px] absolute border-t-2 border-dashed bg-gray-4 overflow-hidden"></div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-xl">
                <Image src='/assets/icons/sdlc/search.svg' width={50} height={50} alt='Competitors Icon' />
              </div>
              <div className="bg-tangerine p-4 rounded-r-lg shadow-md">
                <h2 className="md:text-webSubjudul text-nowrap text-mobileSubjudul text-white font-semibold">Research your competitors</h2>
              </div>
              <div className="hidden xl:block left-[480px] w-[500px] h-[2px] absolute border-t-2 border-dashed bg-gray-4 overflow-hidden"></div>
            </div>
          </div>
          <div className='hidden md:block relative'>
            <div className="w-52 h-52 md:w-[400px] md:h-[300px] xl:w-[600px] xl:h-[400px]">
              <Image src='/assets/icons/sdlc/design-process.svg' width={600} height={400} alt='Design Process Illustration' className=' object-contain w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
