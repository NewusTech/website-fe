import Image from 'next/image'
import React from 'react'

const SliderOne = () => {
  return (
    <div className="px-[100px] pb-52 min-h-screen bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
      <div className="flex justify-end text-white pt-[120px] text-[40px] font-bold">Meet the team behind the apps</div>
      <div className="flex justify-between gap-10">
        <div className="relative">
          <Image loading="lazy" src={'/assets/images/dummyceo.svg'} width={579} height={517} alt="Dummy Profile" />
          <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
            <div className="text-white text-center">
              <h1 className="font-bold text-[16px] md:text-[32px]">ANTONI, S.T</h1>
              <h2 className="text-[12px] md:text-[16px]">Chief Executive Officer</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="relative">
            <Image
              src={'/assets/images/dummyceo.svg'}
              width={359}
              height={343}
              alt="Dummy Profile"
            />
            <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
              <div className="text-white text-center">
                <h1 className="font-bold text-[16px] md:text-[20px]">DEVI ADELIANTY</h1>
                <h2 className="text-[12px] md:text-[16px]">Chief Marketing Officer</h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/images/dummyceo.svg'}
              width={359}
              height={343}
              alt="Dummy Profile"
            />
            <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
              <div className="text-white text-center">
                <h1 className="font-bold text-[16px] md:text-[20px]">ADAM KALAMONDO</h1>
                <h2 className="text-[12px] md:text-[16px]">Chief Technology  Officer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderOne