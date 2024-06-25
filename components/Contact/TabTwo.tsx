'use client'

import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const TabTwo = () => {
  const [values, setValues] = useState([10000000, 30000000]);

  return (
    <section className='pt-6'>
      <form className='flex flex-col gap-6'>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="firstName" className='text-sm font-[500]'>Full Name</label>
            <input type="text" name="firstName" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="lastName" className='text-sm font-[500]'>Company</label>
            <input type="text" name="lastName" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
        </div>

        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="email" className='text-sm font-[500]'>Email Address</label>
            <input type="email" name="email" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="phoneNumber" className='text-sm font-[500]'>Phone Number</label>
            <input type="tel" name="phoneNumber" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
        </div>

        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="location" className='text-sm font-[500]'>Location</label>
            <input type="text" name="location" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="SelectOurService" className='text-sm font-[500]'>Select Our Service</label>
            <select name="" id="" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]'>
              <option value="">Select Service</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="budget" className='text-sm font-[500] pb-4'>Your Budget Estimation</label>
          <div className="flex items-center  w-full">
            <div className="flex w-[20%] items-center justify-center h-10 bg-[#480DEC] text-white rounded-full">
              {values[0].toLocaleString('id-ID')}
            </div>
            <ReactSlider
              className="w-[60%] mx-2 h-2 bg-gray-300 rounded-full"
              thumbClassName="w-2 -mt-4 h-10 bg-[#480DEC] cursor-pointer"
              trackClassName="bg-[#480DEC] h-2"
              thumbActiveClassName='bg-[#480DEC] '
              value={values}
              onChange={(newValues) => setValues(newValues)}
              min={0}
              max={100000000}
              step={1000000}
            />
            <div className="flex items-center justify-center w-32 h-10 bg-[#480DEC] text-white rounded-full">
              {values[1].toLocaleString('id-ID')}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="project-desc" className='text-sm font-[500]'>Project Description</label>
          <textarea name="project-desc" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]'></textarea>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="SelectOurService" className='text-sm font-[500]'>Project Deadline</label>
          <select name="" id="" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]'>
            <option value="">Project Deadline</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <button type="submit" className='text-sm font-[500] bg-[#480DEC] text-white py-4 rounded-xl'>Send Message</button>
      </form >
    </section >
  )
}

export default TabTwo