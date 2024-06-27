import Image from 'next/image'
import React from 'react'

const CardDummy = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-[267px] h-[205px] rounded-[10px]">
          <Image
            src="/assets/images/blog.jpg"
            alt="blog"
            width={257}
            height={205}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-gray-2">
            <h5 className="md:text-[14px] text-[6px]">Lorenka </h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
            <h5 className="md:text-[14px] text-[6px]"> January 13, 2024</h5>
          </div>
          <h3 className="my-4 font-medium text-dark md:text-2xl text-[8px] md:w-[246px]">
            Lorem Ipsum Dolor
          </h3>
          <p className="md:text-sm text-[8px] text-gray w-[249px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel ?
          </p>
          <div className="flex gap-1 mt-3 md:mt-4">
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">Coding</p>
            </div>
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">UI / UX</p>
            </div>
          </div>
        </div>
      </div><div className="flex gap-4">
        <div className="w-[267px] h-[205px] rounded-[10px]">
          <Image
            src="/assets/images/blog.jpg"
            alt="blog"
            width={257}
            height={205}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-gray-2">
            <h5 className="md:text-[14px] text-[6px]">Lorenka </h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
            <h5 className="md:text-[14px] text-[6px]"> January 13, 2024</h5>
          </div>
          <h3 className="my-4 font-medium text-dark md:text-2xl text-[8px] md:w-[246px]">
            Lorem Ipsum Dolor
          </h3>
          <p className="md:text-sm text-[8px] text-gray w-[249px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel ?
          </p>
          <div className="flex gap-1 mt-3 md:mt-4">
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">Coding</p>
            </div>
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">UI / UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDummy