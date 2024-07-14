import Image from 'next/image'
import React from 'react'

const MobileCycle = () => {
  return (
    <div className="max-w-7xl mx-auto relative py-16">
      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/development.svg' width={100} height={100} alt='Planning Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 25%, 75% 100%, 100% 50%, 100% 50%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-gray-2' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Planning</h2>
            <hr className='w-0.5 h-10 bg-gray-2' />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 relative">
          <div className='relative'>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -top-10 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 20%, 75% 100%, 70% 50%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/1.svg' width={100} height={100} alt='Feasibility Study Icon' className="h-20 w-20 hover:animate-spin" />
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <hr className='w-0.5 h-10 bg-green-500' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Feasibility Study</h2>
            <hr className='w-0.5 h-10 bg-green-500' />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/3.svg' width={100} height={100} alt='Design Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(0% 0%, 75% 50%, 100% 50%, 70% 0%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-orange-300' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Designing the<br /> Product Architecture</h2>
            <hr className='w-0.5 h-10 bg-orange-300' />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <div className='absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 50%, 100% 0%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/developing.svg' width={100} height={100} alt='Testing Icon' className="h-20 w-20 hover:animate-spin" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-red-500' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Developing The Product</h2>
            <hr className='w-0.5 h-10 bg-red-500' />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className='relative'>
            <Image src='/assets/icons/sdlc/evaluation.svg' width={100} height={100} alt='Deployment Icon' className="h-20 w-20 hover:animate-spin" />
            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 0%, 50% 50%, 50% 100%)', backgroundColor: 'blue' }}></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-yellow-300' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Testing the Product</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <hr className='w-0.5 h-10 bg-red-500' />
          <div className='relative'>
            <div className='absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-40 h-40' style={{ clipPath: 'polygon(25% 0%, 75% 50%, 100% 0%, 0% 50%)', backgroundColor: 'blue' }}></div>
            <Image src='/assets/icons/sdlc/5.svg' width={100} height={100} alt='Testing Icon' className="h-20 w-20 hover:animate-spin" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className='w-0.5 h-10 bg-red-500' />
            <h2 className="text-mobileSubjudul text-blue font-semibold py-2 shadow shadow-tangerine rounded-sm px-3">Deployment & Maintenance</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileCycle