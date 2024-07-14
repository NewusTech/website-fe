import Image from 'next/image'
import React from 'react'

const LifeCycle = () => {
  return (
    <div className="relative pt-40 pb-10">
      <div className="relative z-10 flex justify-center xl:gap-20 px-5">
        <div className='absolute py-14 -mt-5 rounded-xl bg-tangerine -z-20 w-full'></div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/development.svg' width={100} height={100} alt='Planning Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute -top-20 left-5  xl:left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 25%, 75% 100%, 100% 50%, 100% 50%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-gray-2' />
            <h2 className="text-webJudul font-semibold mt-4 text-blue py-2 shadow shadow-tangerine rounded-sm px-3">Planning</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 -mt-[141px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-webJudul font-semibold mt-4 text-blue py-2 shadow shadow-tangerine rounded-sm px-3 text-center">Feasibility Study</h2>
            <hr className='w-0.5 h-10 bg-green-500' />
          </div>
          <div className='relative'>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 top-0 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 20%, 75% 100%, 70% 50%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/1.svg' width={100} height={100} alt='Feasibility Study Icon' className="h-20 w-20 hover:animate-spin" />
          </div>

        </div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/3.svg' width={100} height={100} alt='Design Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(0% 0%, 75% 50%, 100% 50%, 70% 0%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-orange-300' />
            <h2 className="text-webJudul text-blue font-semibold mt-4 text-center py-2 shadow shadow-tangerine rounded-sm px-3">Designing the<br /> Product Architecture</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col justify-center items-center -mt-[141px]">
            <h2 className="text-webJudul font-semibold mt-4 text-blue py-2 shadow shadow-tangerine rounded-sm px-3 text-center">Developing The Product</h2>
            <hr className='w-0.5 h-10 bg-red-500' />
          </div>
          <div className='relative'>
            <div className='absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 50%, 100% 0%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/developing.svg' width={100} height={100} alt='Testing Icon' className="h-20 w-20 hover:animate-spin" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/evaluation.svg' width={100} height={100} alt='Deployment Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 0%, 50% 50%, 50% 100%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-yellow-300' />
            <h2 className="text-webJudul text-blue font-semibold mt-4 py-2 shadow shadow-tangerine rounded-sm px-3 text-center">Testing the Product</h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col justify-center items-center -mt-[141px]">
            <h2 className="text-webJudul font-semibold mt-4 text-blue py-2 shadow shadow-tangerine rounded-sm px-3 text-center">Deployment & Maintenance</h2>
            <hr className='w-0.5 h-10 bg-red-500' />
          </div>
          <div className='relative'>
            <div className='absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 50%, 100% 0%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/5.svg' width={100} height={100} alt='Testing Icon' className="h-20 w-20 hover:animate-spin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeCycle