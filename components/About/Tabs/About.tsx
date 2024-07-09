import React from 'react'

const About = () => {
  return (
    <section className='md:mt-[22px] -mt-[8px] md:px-[67px] px-5 pt-2 md:pt-14 pb-8 md:py-[64px] md:border bg-white md:border-[#FF6600] mx-1'>
      <div className='py-5 md:pb-10'>
        <h1 className='text-[#FF6600] font-bold text-sm md:text-[30px] pb-3 md:pb-5 text-center md:text-start'>NEWUS <span className='text-[#480DEC] text-center md:text-start'>TECHNOLOGY</span></h1>
        <p className='text-[12px] md:text-[16px] leading-6 md:leading-8 text-center md:text-start'>Newus technology adalah sebuah perusahaan software yang bergerak dibidang jasa pembuatan website, aplikasi / sistem dan aplikasi berbasis android serta IOS. Selain sebagai perusahaan software newus technology merupakan sebuah perusahaan konsultan IT yang berdomisili di Kota Bandar Lampung.</p>
      </div>
      <div className='flex justify-between gap-[5px] md:gap-10'>
        <div className='w-1/2 p-1 md:p-0'>
          <h1 className='text-[#480DEC] font-bold text-sm md:text-[30px] text-center md:text-start pb-3 md:pb-5 '>VISION</h1>
          <p className='text-[12px] md:text-[16px] leading-6 md:leading-7 text-center md:text-start'>Newus Technology berkomitmen untuk membangun solusi teknologi inovatif yang dapat membantu pelanggan mencapai tujuan bisnis secara lebih efektif dan efisien.</p>
        </div>
        <div className='w-1/2 p-1 md:p-0'>
          <h1 className='text-[#FF6600] font-bold text-sm md:text-[30px] text-center md:text-start pb-3 md:pb-5 '>MISION</h1>
          <p className='text-[12px] md:text-[16px] leading-6 md:leading-7 text-center md:text-start'>Membantu perusahaan dan para pebisnis untuk mengembangkan bisnis digital dalam hal teknologi yang efisien, berkualitas, dan berbeda. Sehingga perusahaan dan para pebisnis dapat mencapai keunggulan bersaing.</p>
        </div>
      </div>
    </section>
  )
}

export default About