import NotFound from '@/components/shared/NotFound'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Intern = ({ dataIntern }: any) => {
  const data = dataIntern?.[0]

  const classList: string = 'list-disc text-[12px] md:text-mobileSubjudul md:text-webSubjudul'
  return (
    <section>
      {data.length === 0 ? <div className='md:pt-10'>
        <NotFound />
      </div> :
        <div>
          <div className='pb-10'>
            <h2 className="font-bold text-mobileJudul md:text-webJudul pb-3 md:py-10">Description :</h2>
            <ul className={classList}>
              {data.description}
              <br /> <br />
              {data.description}
            </ul>
            <div className='flex items-center gap-2 py-4 md:pt-10'>
              <Image src={`/assets/icons/cover-later.svg`} alt='Icon cover later' width={18} height={18} className="" />
              <Link href={data.coverLetter} target='_blank' className='text-[#FF6600] text-[12px] md:text-mobileSubjudul'>
                Internsip application letter
              </Link>
            </div>
            <form className='flex flex-col gap-6'>
              <h1 className="font-bold text-mobileJudul md:text-webJudul pt-4">Easy apply and be part of us!</h1>
              <div className='flex-col flex md:flex-row w-full gap-4'>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="fullName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Full Name</label>
                  <input type="text" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Your university or school' />
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="fullName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Provide about your current major</label>
                  <input type="text" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Your current major' />
                </div>
              </div>
              <div className='flex-col flex md:flex-row w-full gap-4'>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="fullName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>When do you plan to start your internship activities?</label>
                  <input type="date" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' />
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="fullName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>When do you plan to complete your internship activities?</label>
                  <input type="date" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul' placeholder='Drag & Drop to Upload File' />
                </div>
              </div>
              <div className='flex-col flex w-full'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="coverLetter" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Upload an internship application letter</label>
                  <input type="file" name="coverLetter" className='border flex  w-full bg-[#F4F4F4] border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px]' />
                </div>
              </div>
              <div>
                <Link href="#" className='bg-[#480DEC] text-white rounded-[10px] px-6 py-3 inline-flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]'>
                  Apply
                  <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      }
    </section>
  )
}

export default Intern