import React from 'react';

const TabOne = () => {

  return (
    <section className='pt-4 md:pt-5'>
      <form action="mailto:newustechnology@gmail.com"
        method="post"
        encType="text/plain" className='flex flex-col gap-6'>
        <div className='md:flex w-full gap-4 '>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="firstName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>First Name</label>
            <input type="text" name="firstName" className='border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2  '>
            <label htmlFor="lastName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Last Name</label>
            <input type="text" name="lastName" className='border border-[#DDE5E9] rounded-lg text-mobileSubjudul md:text-webSubjudul px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
          </div>
        </div>

        <div className='md:flex w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="email" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Email</label>
            <input type="email" name="email" className='border border-[#DDE5E9] rounded-lg text-mobileSubjudul md:text-webSubjudul px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2 md:pb-0'>
            <label htmlFor="phoneNumber" className='text-mobileSubjudul md:text-webSubjudul font-[500] '>Phone Number</label>
            <input type="tel" name="phoneNumber" className='border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="subjectMessage" className='text-mobileSubjudul md:text-webSubjudul  font-[500]'>Subject Message</label>
          <input type="text" name="subjectMessage" className='border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="message" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Message</label>
          <textarea name="message" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px] bg-[#F4F4F4] text-mobileSubjudul md:text-webSubjudul' placeholder='Input here'></textarea>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='text-mobileSubjudul md:text-webSubjudul font-[500] bg-[#480DEC] text-white md:py-4 md:rounded-xl rounded-2xl inline-flex w-[180px] md:w-full justify-center px-8 py-[10px] '>Send Message</button>
        </div>
      </form >
    </section >
  );
};

export default TabOne;
