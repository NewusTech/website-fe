'use client'

import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const TabTwo = () => {
  const [values, setValues] = useState([10000000, 30000000]);

  return (
    <section className='pt-4 md:pt-5'>
      <form
        action="mailto:newustechnology@gmail.com"
        method="post"
        encType="text/plain"
        className='flex flex-col gap-6'
      >
        <div className='md:flex w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="firstName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Full Name</label>
            <input type="text" name="firstName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="lastName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Company</label>
            <input type="text" name="lastName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Input here' />
          </div>
        </div>

        <div className='md:flex w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="email" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Email Address</label>
            <input type="email" name="email" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="phoneNumber" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Phone Number</label>
            <input type="tel" name="phoneNumber" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Input here' />
          </div>
        </div>

        <div className='md:flex w-full gap-4'>
          <div className='flex flex-col gap-2 pb-4 md:pb-0 md:w-1/2'>
            <label htmlFor="location" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Location</label>
            <input type="text" name="location" className='border bg-[#F4F4F4] border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px]' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="SelectOurService" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Select Our Service</label>
            <select name="service" id="service" className='text-mobileSubjudul md:text-webSubjudul border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]'>
              <option value="">Select Service</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="budget" className='text-mobileSubjudul md:text-webSubjudul font-[500] pb-4'>Your Budget Estimation</label>
          <div className="flex items-center w-full">
            <div className="flex w-[20%] text-mobileSubjudul md:text-webSubjudul items-center justify-center px-10 md:px-0 h-8 md:h-10 bg-[#480DEC] text-white rounded-full">
              <input
                type="hidden"
                name="budgetMin"
                value={values[0]}
              />
              {values[0].toLocaleString('id-ID')}
            </div>
            <ReactSlider
              className="w-[60%] mx-2 h-2 bg-gray-300 rounded-full text-mobileSubjudul md:text-webSubjudul"
              thumbClassName="w-2 -mt-4 h-10 bg-[#480DEC] cursor-pointer"
              trackClassName="bg-[#480DEC] h-2"
              thumbActiveClassName='bg-[#480DEC]'
              value={values}
              onChange={(newValues) => setValues(newValues)}
              min={0}
              max={100000000}
              step={1000000}
            />
            <div className="px-10 md:px-0 flex items-center justify-center w-[20%] text-mobileSubjudul md:text-webSubjudul bg-[#480DEC] h-8 md:h-10 text-white rounded-full">
              <input
                type="hidden"
                name="budgetMax"
                value={values[1]}
              />
              {values[1].toLocaleString('id-ID')}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="project-desc" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Project Description</label>
          <textarea name="projectDesc" placeholder='Input here' className='border bg-[#F4F4F4] text-mobileSubjudul md:text-webSubjudul border-[#DDE5E9] rounded-lg px-4 py-[11px]'></textarea>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="projectDeadline" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Project Deadline</label>
          <select name="projectDeadline" id="projectDeadline" className='border text-mobileSubjudul md:text-webSubjudul bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]'>
            <option value="">Project Deadline</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='text-mobileSubjudul md:text-webSubjudul font-[500] bg-[#480DEC] text-white md:py-4 md:rounded-xl rounded-2xl inline-flex w-[140px] md:w-full justify-center px-8 py-[10px]'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default TabTwo;
