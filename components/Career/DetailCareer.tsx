'use client'

import DOMPurify from 'dompurify';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const DetailCareer = ({ title, description, requirements, prefered, benefits, coverLetter }: any) => {
  const classFirstHeading: string = 'font-bold text-mobilejudul md:text-webjudul pt-4 md:pt-8';
  const classSecondHeading: string = 'text-mobileSubjudul md:text-webSubjudul font-bold pb-3 pt-3 md:pt-6';
  const classList: string = 'list-disc px-5 text-mobileSubjudul md:text-webSubjudul';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (cv) {
      formData.append('cv', cv);
    }
    if (coverLetterFile) {
      formData.append('coverLetter', coverLetterFile);
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/jobrecruitmenthistory/create`, {
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
  };

  return (
    <section>
      <h1 className={classFirstHeading}>{title}</h1>
      <div>
        <h2 className={classSecondHeading}>Description :</h2>
        <p className="text-mobileDesk md:text-webSubjudul">{description}</p>
        <ul className={classList}>
          {/* Additional list items */}
        </ul>
      </div>

      <div className='flex items-center gap-2 py-4 md:pt-10'>
        <Image src={`/assets/icons/cover-later.svg`} alt='Icon cover later' width={18} height={18} className="" />
        <Link href={coverLetter} className='text-[#FF6600] text-mobileSubjudul md:text-webSubjudul'>
          Download Cover Letter
        </Link>
      </div>
      <form className='flex flex-col md:gap-6' onSubmit={handleSubmit}>
        <h1 className={classSecondHeading}>Easy apply and be part of us!</h1>
        <div className='flex-col flex md:flex-row w-full md:gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="fullName" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Full Name</label>
            <input
              type="text"
              name="fullName"
              className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]'
              placeholder='Input here'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2 pb-3 md:pb-0'>
            <label htmlFor="email" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Email</label>
            <input
              type="email"
              name="email"
              className='border border-[#DDE5E9] rounded-lg px-4 py-[11px] bg-[#F4F4F4]'
              placeholder='Input here'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex-col flex md:flex-row w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="coverLetter" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>Cover Letter</label>
            <input
              type="file"
              name="coverLetter"
              className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]'
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setCoverLetterFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="cvPortfolio" className='text-mobileSubjudul md:text-webSubjudul font-[500]'>CV and Portfolio</label>
            <input
              type="file"
              multiple
              name="cvPortfolio"
              className='border text-center bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]'
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setCv(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <button type="submit" className='bg-[#480DEC] text-white rounded-[10px] px-6 py-3 inline-flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]'>
            Apply
            <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default DetailCareer;
