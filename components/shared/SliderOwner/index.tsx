import Image from 'next/image'
import React from 'react'
import CarouselImage from './CarouselImage'

const SliderOwner = () => {
  return (
    <section className='lg:pb-20 lg:px-10 '>
      <div className='flex flex-col lg:flex-row w-full rounded-xl p-4 md:shadow'>
        <div className="lg:w-5/12 hidden lg:block">
          <Image src="/assets/images/statis2.jpg" height={1000} width={1000} alt='Image statis' className='w-full shadow-sm object-cover px-10' />
          <div className='flex flex-col text-center pt-5 px-10'>
            <h1 className='text-3xl font-bold'>Antoni</h1>
            <h2 className='font-semibold pb-4'>CEO</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis voluptatibus vel repellat, nobis magni iure optio illum voluptatum accusamus!</p>
          </div>
        </div>
        <div className="w-full lg:w-8/12 relative flex items-center justify-center">
          <CarouselImage />
        </div>
      </div>
    </section>
  )
}

export default SliderOwner