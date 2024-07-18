import { formatRupiah, removeHTMLTags } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardJob = ({ id, title, description, salary, status }: any) => {
  return (
    <div className='flex  p-[30px] border border-[#4F4F4F] rounded-[10px]' style={{ boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.06)' }}>
      <div className='flex-1 flex flex-col gap-6'>
        <h1 className='font-bold md:text-[24px] hidden md:block'>{title}</h1>
        <div className='flex md:hidden justify-between items-center'>
          <h1 className='font-bold md:text-[24px] w-[70%]'>{title}</h1>
          <div className='w-[50%]'>
            <Link href={`/career/${id}`} className='bg-[#480DEC] text-white rounded-2xl md:rounded-[10px] px-4 py-2 md:px-6 md:py-3 flex items-center justify-center md:gap-3 text-[12px] md:text-[16px] hover:bg-[#7b4bff]'>
              Apply Now
              <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
            </Link>
          </div>
        </div>
        <h2 className='text-[12px] md:text-sm'>{removeHTMLTags(description)}</h2>
        <p className='text-[12px] md:text-sm'>{formatRupiah(salary)} / Month</p>
        {/* <p className='text-[12px] md:text-sm'>Rp. {minSalary.toLocaleString()} - Rp. {maxSalary.toLocaleString()} / Month</p> */}
        <div className='flex justify-start items-center gap-4'>
          {/* {status.map((e: any) => (
            <div key={e} className='flex items-center justify-center py-3 px-5 bg-[#D9D9D9] rounded-[10px] gap-[10px] text-[12px] md:text-sm'>
              <Image src={`/assets/icons/${e}.svg`} alt={`Icon ${e}`} width={18} height={18} className="" />
              {e}
              </div>   
              ))} */}
          <div className='capitalize flex items-center justify-center py-3 px-5 bg-[#D9D9D9] rounded-[10px] gap-[10px] text-[12px] md:text-sm'>
            {status}
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <Link href={`/career/${id}`} className='bg-[#480DEC] text-white rounded-[10px] px-6 py-3 flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]'>
          Apply Now
          <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
        </Link>
      </div>
    </div>
  )
}

export default CardJob