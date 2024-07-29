'use client'

import NotFound from '@/components/shared/NotFound'
import { removeHTMLTags } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Intern = ({ dataIntern }: any) => {
  const data = dataIntern?.[0]
  console.log(data);

  const classList: string = 'list-disc text-[12px] md:text-mobileSubjudul md:text-webSubjudul'

  const [instituteName, setInstituteName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [coverLetter, setCoverLetter] = useState<File | null>(null);

  const handleSummit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('instituteName', instituteName);
    formData.append('email', email);
    formData.append('startDate', startDate);
    formData.append('finishDate', finishDate);
    formData.append('major', major);
    if (coverLetter) {
      formData.append('applicationLetter', coverLetter);
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/internhistory/new-history`, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        alert(result.message)
        location.reload()
        console.log('Success:', result);
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    <section>
      {data === undefined ? (
        <div className='md:pt-10'>
          <NotFound />
        </div>
      ) : (
        <div>
          <div className='pb-10'>
            <h2 className="font-bold text-mobileJudul md:text-webJudul pb-3 md:py-10">Description :</h2>
            <ul className={classList}>
              {/* <li>{data.description}</li> */}

              {removeHTMLTags(data?.description || '')}
            </ul>
            <div className='flex items-center gap-2 py-4 md:pt-10'>
              <Image src={`/assets/icons/cover-later.svg`} alt='Icon cover later' width={18} height={18} className="" />
              <Link href={data?.coverLetter || '/'} target='_blank' className='text-[#FF6600] text-[12px] md:text-mobileSubjudul'>
                Internship application letter
              </Link>
            </div>
            <form className='flex flex-col gap-6' onSubmit={handleSummit}>
              <h1 className="font-bold text-mobileJudul md:text-webJudul pt-4">Easy apply and be part of us!</h1>
              <div className='flex-col flex md:flex-row w-full gap-4'>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="instituteName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Institute Name</label>
                  <input
                    type="text"
                    name="instituteName"
                    className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul'
                    placeholder='Your university or school'
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    required
                  />
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="major" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Provide about your current major</label>
                  <input
                    type="text"
                    name="major"
                    className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul'
                    placeholder='Your current major'
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='flex-col flex md:flex-row w-full gap-4'>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="startDate" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>When do you plan to start your internship activities?</label>
                  <input
                    type="date"
                    name="startDate"
                    className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="finishDate" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>When do you plan to complete your internship activities?</label>
                  <input
                    type="date"
                    name="finishDate"
                    className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul'
                    value={finishDate}
                    onChange={(e) => setFinishDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='flex-col flex md:flex-row w-full gap-4'>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="coverLetter" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Upload an internship application letter</label>
                  <input
                    type="file"
                    name="coverLetter"
                    className='border flex w-full bg-[#F4F4F4] border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[9px]'
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        console.log(e.target.files[0]);
                        setCoverLetter(e.target.files[0]);
                      }
                    }}
                  />
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
                  <label htmlFor="email" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Email</label>
                  <input
                    type="email"
                    name="email"
                    className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px] text-mobileSubjudul md:text-webSubjudul'
                    placeholder='Your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit" className='bg-[#480DEC] text-white rounded-[10px] px-6 py-3 inline-flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]'>
                  Apply
                  <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Intern
