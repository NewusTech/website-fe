import { getAboutCompany } from "@/components/Fetching/About/about"
import { removeHTMLTags } from "@/lib/utils";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default async function AboutLanding() {
  const data = await getAboutCompany()
  console.log(data);

  return (
    <section className="min-h-[300px] bg-[rgb(20,20,31)] text-white my-0 md:mt-10 py-5 md:py-8">
      <div className="px-5 md:container">
        <div className="pb-5">
          <div className="pb-2">
            <h1 className="text-mobileJudul md:text-webJudul font-bold relative z-10 uppercase">Overview</h1>
            <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-0 -mt-6 left-[60px] lg:left-20">
            </div>
          </div>
          <p className="text-mobileDesk md:text-webDesk">{removeHTMLTags(data?.[0].body || 'Null')}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 md:gap-10 w-full">
          <div className="lg:w-1/2">
            <div className="pb-5">
              <Image src={'/assets/images/newuslanding.svg'} alt="Logo" width={500} height={500} className="w-full md:min-h-[300px] object-contain" />
            </div>
            <div>
              <div className="flex gap-2 md:gap-5 items-center pb-2">
                <h1 className="uppercase text-mobileJudul md:text-webJudul font-[500]">Value</h1>
                <div className="w-full h-[1px] bg-red-500"></div>
              </div>
              <div>
                <ul className="flex gap-3 items-center text-mobileDesk md:text-webSubjudul font-semibold flex-wrap">
                  <li>Profesional</li>
                  <li>Experience</li>
                  <li>Responsibility</li>
                  <li>Integrity</li>
                  <li>Statisfaction</li>
                  <li>Innovation</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="lg:w-1/2">
            <div>
              <div className="pb-2">
                <h1 className="text-mobileJudul md:text-webJudul font-bold relative z-10 uppercase">VISION</h1>
                <div className="md:w-[60px] md:h-[20px] w-[51px] h-[13px] bg-tangerine absolute z-0 -mt-[22px] ml-6">
                </div>
              </div>
              <p className="text-mobileDesk md:text-webDesk">{removeHTMLTags(data?.[0].vision || 'Null')}</p>
            </div>
            <div className="pt-5">
              <div className="pb-2">
                <h1 className="text-mobileJudul md:text-webJudul font-bold relative z-10 uppercase">MISSION</h1>
                <div className="md:w-[60px] md:h-[20px] w-[51px] h-[13px] bg-tangerine absolute z-0 -mt-[22px] ml-6">
                </div>
              </div>
              <div className='text-mobileSubjudul md:text-webSubjudul leading-6 md:leading-7 text-start'>
                <ul>
                  {removeHTMLTags(data?.[0].mission).split(/[0-9]+\.\s/).filter((item: any) => item.trim() !== '').map((item: any, index: number) => (
                    <li key={index}>{`${index + 1}. ${item.trim()}`}</li>
                  ))}
                </ul>
                {/* {missionItems?.map((item: any, index: any) => (
            <li className="list-none" key={index}>{item}</li>
          ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}