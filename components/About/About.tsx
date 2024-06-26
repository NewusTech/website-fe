import React from 'react'

const About = () => {
  return (
    <section className='mt-[22px] px-[67px] py-[64px] border bg-white border-[#FF6600]'>
      <div className='pb-10'>
        <h1 className='text-[#FF6600] font-bold text-sm md:text-[30px] pb-5'>NEWUS <span className='text-[#480DEC]'>TECHNOLOGY</span></h1>
        <p className='text-[18px] leading-7'>Newus technology adalah sebuah perusahaan software yang bergerak dibidang jasa pembuatan website, aplikasi / sistem dan aplikasi berbasis android serta IOS. Selain sebagai perusahaan software newus technology merupakan sebuah perusahaan konsultan IT yang berdomisili di Kota Bandar Lampung.</p>
      </div>
      <div className='flex justify-between gap-10'>
        <div className='w-1/2'>
          <h1 className='text-[#480DEC] font-bold text-sm md:text-[30px] pb-5'>VISION</h1>
          <p className='text-[18px] leading-7'>Newus Technology berkomitmen untuk membangun solusi teknologi inovatif yang dapat membantu pelanggan mencapai tujuan bisnis secara lebih efektif dan efisien.</p>
        </div>
        <div className='w-1/2'>
          <h1 className='text-[#FF6600] font-bold text-sm md:text-[30px] pb-5'>MISION</h1>
          <p className='text-[18px] leading-7'>Membantu perusahaan dan para pebisnis untuk mengembangkan bisnis digital dalam hal teknologi yang efisien, berkualitas, dan berbeda. Sehingga perusahaan dan para pebisnis dapat mencapai keunggulan bersaing.</p>
        </div>
      </div>
    </section>
  )
}

export default About