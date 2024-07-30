'use client'

import { removeHTMLTags } from "@/lib/utils";

const About = ({ abouts }: any) => {
  const missionItems = abouts[0]?.mission.split('\r\n');

  return (
    <section className='-mt-[8px] md:px-[67px] px-5 pt-2 md:pt-14 pb-4 md:py-[64px] md:border bg-white md:border-[#FF6600]'>
      <div className='pt-5 pb-3 md:pb-10'>
        <h1 className='text-[#FF6600] font-bold text-mobileJudul md:text-webJudul pb-3 md:pb-5 text-center md:text-start'>NEWUS <span className='text-[#480DEC] text-center md:text-start'>TECHNOLOGY</span></h1>
        <div className='text-mobileSubjudul md:text-webSubjudul leading-6 md:leading-8 text-justify md:text-start' dangerouslySetInnerHTML={{ __html: abouts[0]?.body }} />
        {/* {removeHTMLTags(abouts[0]?.body) || 'Newus technology adalah sebuah perusahaan software yang bergerak dibidang jasa pembuatan website, aplikasi / sistem dan aplikasi berbasis android serta IOS. Selain sebagai perusahaan software newus technology merupakan sebuah perusahaan konsultan IT yang berdomisili di Kota Bandar Lampung.'} */}
      </div>
      <div className='flex md:flex-row flex-col md:justify-between gap-5 md:gap-10'>
        <div className='w-full md:w-1/2 p-1 md:p-0'>
          <h1 className='text-[#480DEC] font-bold text-mobileJudul md:text-webJudul text-center md:text-start pb-3 md:pb-5 '>VISION</h1>
          <p className='text-mobileSubjudul md:text-webSubjudul leading-6 md:leading-7 text-justify md:text-start'>{removeHTMLTags(abouts[0]?.vision) || 'Newus Technology berkomitmen untuk membangun solusi teknologi inovatif yang dapat membantu pelanggan mencapai tujuan bisnis secara lebih efektif dan efisien.'}</p>
        </div>
        <div className='w-full md:w-1/2 p-1 md:p-0'>
          <h1 className='text-[#FF6600] font-bold text-mobileJudul md:text-webJudul text-center md:text-start pb-3 md:pb-5'>MISION</h1>
          <div className='text-mobileSubjudul md:text-webSubjudul leading-6 md:leading-7 text-start' dangerouslySetInnerHTML={{ __html: abouts[0]?.mission }}>
            {/* <ul>
              {removeHTMLTags(abouts[0]?.mission).split(/[0-9]+\.\s/).filter((item: any) => item.trim() !== '').map((item: any, index: number) => (
                <li key={index}>{`${index + 1}. ${item.trim()}`}</li>
              ))}
            </ul> */}
            {/* {missionItems?.map((item: any, index: any) => (
            <li className="list-none" key={index}>{item}</li>
          ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About