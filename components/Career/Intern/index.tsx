import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const data = {
  description1: "Lörem ipsum astrobel sar direlig. Kronde est  direlig.Lörem ipsum astrobel sar direlig. Kronde est So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he haof Cicero inpports the theory that the filler text has been used for centuries. ",
  description2: "Lörem ipsum astrobel sar direlig.Kronde est  direlig. Lörem ipsum astrobel sar direlig.Kronde est So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples.So far he haof Cicero inpports the theory that the filler text has been used for centuries."
}

const Intern = () => {
  const classList: string = 'list-disc text-[12px] md:text-sm'
  return (
    <section>
      <div className='pb-10'>
        <h2 className="font-bold text-[14px] md:text-[20px] py-4">Description :</h2>
        <ul className={classList}>
          {data.description1}
          <br /> <br />
          {data.description2}
        </ul>
        <div className='flex items-center gap-2 py-4 md:pt-10'>
          <Image src={`/assets/icons/cover-later.svg`} alt='Icon cover later' width={18} height={18} className="" />
          <Link href="#" className='text-[#FF6600] text-[12px] md:text-sm'>
            Example internsip application letter
          </Link>
        </div>
        <form className='flex flex-col gap-6'>
          <h1 className="font-bold text-[14px] md:text-[20px] pt-4">Easy apply and be part of us!</h1>
          <div className='flex-col flex md:flex-row w-full gap-4'>
            <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
              <label htmlFor="fullName" className='text-sm font-[500]'>Full Name</label>
              <input type="text" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' placeholder='Your university or school' />
            </div>
            <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
              <label htmlFor="fullName" className='text-sm font-[500]'>provide about your current major</label>
              <input type="text" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' placeholder='Your current major' />
            </div>
          </div>
          <div className='flex-col flex md:flex-row w-full gap-4'>
            <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
              <label htmlFor="fullName" className='text-sm font-[500]'>When do you plan to start your internship activities?</label>
              <input type="date" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
            </div>
            <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
              <label htmlFor="fullName" className='text-sm font-[500]'>When do you plan to complete your internship activities?</label>
              <input type="date" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' placeholder='Drag & Drop to Upload File' />
            </div>
          </div>
          <div className='flex-col flex w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="coverLetter" className='text-sm font-[500]'>Upload an internship application letter</label>
              <input type="file" name="coverLetter" className='border flex  w-full bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
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
    </section>
  )
}

export default Intern