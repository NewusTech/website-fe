import Image from 'next/image'
import React from 'react'

const WorkFlow = () => {
  return (
    <div className='overflow-hidden max-w-7xl'>
      <div className="md:mt-10 mt-[10px] flex justify-between items-center gap-5 md:gap-5 px-5 relative">
        <h1 className="relative z-20 uppercase text-black text-center font-bold md:text-[24px] text-nowrap text-mobileJudul">
          Software Development <span className="text-blue">Life Cycle</span>
        </h1>
        <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute -z-10 -mt-24 -ml-16 md:mt-[15px] md:-ml-[33px]"></div>
        <div className="w-full h-[2px] bg-gray-4"></div>
      </div>
      <div className="max-w-7xl mx-auto relative py-36 pb-20">
        <div className="relative z-10 flex justify-center gap-20">
          <div className='absolute py-14 -mt-5 rounded-xl bg-tangerine -z-20 w-screen max-w-7xl'></div>
          <div className="flex flex-col items-center gap-3">
            <div className='relative'>
              <Image src='/assets/icons/sdlc/development.svg' width={100} height={100} alt='Planning Icon' className="h-20 w-20" />
              <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 25%, 75% 100%, 100% 50%, 100% 50%)', backgroundColor: 'blue' }}></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className='w-0.5 h-10 bg-gray-2' />
              <h2 className="text-webJudul font-semibold mt-4 text-blue">Planning</h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 -mt-24">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-webJudul font-semibold mt-4 text-blue">Feasibility Study</h2>
              <hr className='w-0.5 h-10 bg-green-500' />
            </div>
            <div className='relative'>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 top-0 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 20%, 75% 100%, 70% 50%, 0% 50%)', backgroundColor: 'blue' }}></div>
              <Image src='/assets/icons/sdlc/1.svg' width={100} height={100} alt='Feasibility Study Icon' className="h-20 w-20" />
            </div>

          </div>
          <div className="flex flex-col items-center gap-3">
            <div className='relative'>
              <Image src='/assets/icons/sdlc/3.svg' width={100} height={100} alt='Design Icon' className="h-20 w-20" />
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(0% 0%, 75% 50%, 100% 50%, 70% 0%)', backgroundColor: 'blue' }}></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className='w-0.5 h-10 bg-orange-300' />
              <h2 className="text-webJudul text-blue font-semibold mt-4 text-center">Designing the<br /> Product Architecture</h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col justify-center items-center -mt-24">
              <h2 className="text-webJudul font-semibold mt-4 text-blue">Testing the Product</h2>
              <hr className='w-0.5 h-10 bg-red-500' />
            </div>
            <div className='relative'>
              <div className='absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 50%, 100% 0%, 0% 50%)', backgroundColor: 'blue' }}></div>
              <Image src='/assets/icons/sdlc/evaluation.svg' width={100} height={100} alt='Testing Icon' className="h-20 w-20" />
            </div>

          </div>
          <div className="flex flex-col items-center gap-3">
            <div className='relative'>
              <Image src='/assets/icons/sdlc/5.svg' width={100} height={100} alt='Deployment Icon' className="h-20 w-20" />
              <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 0%, 50% 50%, 50% 100%)', backgroundColor: 'blue' }}></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className='w-0.5 h-10 bg-yellow-300' />
              <h2 className="text-webJudul text-blue font-semibold mt-4">Deployment & Maintenance</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="md:mt-10 mt-[10px] flex justify-between items-center gap-5 md:gap-5 px-5 relative">
          <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute -z-10 -mt-24 -ml-16 md:mt-[15px] md:right-0"></div>
          <div className="w-full h-[2px] bg-gray-4"></div>
          <h1 className="relative z-20 uppercase text-center font-bold md:text-[24px] text-tangerine text-nowrap text-mobileJudul">
            Design <span className="text-blue">Process</span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-20">
          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center shadow bg-orange-100 border-[#350553] w-32 h-32 rounded-xl">
                <Image src='/assets/icons/sdlc/target.svg' width={50} height={50} alt='Target Audience Icon' />
              </div>
              <div className="bg-tangerine p-4 rounded-r-lg shadow-md">
                <h2 className="text-webJudul text-white font-semibold">Research target audience</h2>
              </div>
              <div className="left-[470px] w-[500px] h-[2px] absolute border-t-2 border-dashed bg-gray-4 overflow-hidden"></div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center shadow bg-orange-100  w-32 h-32 rounded-xl">
                <Image src='/assets/icons/sdlc/search.svg' width={50} height={50} alt='Competitors Icon' />
              </div>
              <div className="bg-tangerine p-4 rounded-r-lg shadow-md">
                <h2 className="text-webJudul text-white font-semibold">Research your competitors</h2>
              </div>
              <div className="hiddem md:block left-[480px] w-[500px] h-[2px] absolute border-t-2 border-dashed bg-gray-4 overflow-hidden"></div>
            </div>
          </div>
          <div className="relative">
            <Image src='/assets/icons/sdlc/design-process.svg' width={600} height={400} alt='Design Process Illustration' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
