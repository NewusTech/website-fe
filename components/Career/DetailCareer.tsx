import Image from "next/image";
import Link from "next/link";

const DetailCareer = ({ title, description, requirements, prefered, benefits }: any) => {
  const classFirstHeading: string = 'font-bold text-[14px] md:text-[32px] pt-4 md:pt-8'
  const classSecondHeading: string = 'text-[12px] md:text-[20px] font-bold pb-3 pt-3 md:pt-6'
  const classList: string = 'list-disc px-5 text-[12px] md:text-sm'
  return (
    <section>
      <h1 className={classFirstHeading}>{title}</h1>
      <div>
        <h2 className={classSecondHeading}>Description :</h2>
        <ul className={classList}>
          {description?.map((desc: any, index: any) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={classSecondHeading}>Requirements :</h2>
        <ul className={classList}>
          {requirements?.map((req: any, index: any) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={classSecondHeading}>Preferred :</h2>
        <ul className={classList}>
          {prefered?.map((pref: any, index: any) => (
            <li key={index}>{pref}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={classSecondHeading}>Benefits :</h2>
        <ul className={classList}>
          {benefits?.map((benefit: any, index: any) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className='flex items-center gap-2 py-4 md:pt-10'>
        <Image src={`/assets/icons/cover-later.svg`} alt='Icon cover later' width={18} height={18} className="" />
        <Link href="#" className='text-[#FF6600] text-[12px] md:text-sm'>
          Download Cover Letter
        </Link>
      </div>
      <form className='flex flex-col gap-6'>
        <h1 className={classFirstHeading}>Easy apply and be part of us!</h1>
        <div className='flex-col flex md:flex-row w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="fullName" className='text-sm font-[500]'>Full Name</label>
            <input type="text" name="fullName" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' placeholder='Input here' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0'>
            <label htmlFor="email" className='text-sm font-[500]'>Email</label>
            <input type="email" name="email" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px] bg-[#F4F4F4]' placeholder='Input here' />
          </div>
        </div>
        <div className='flex-col flex md:flex-row w-full gap-4'>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="coverLetter" className='text-sm font-[500]'>Cover Letter</label>
            <input type="file" name="coverLetter" className='border bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <label htmlFor="cvPortfolio" className='text-sm font-[500]'>CV and Portfolio</label>
            <input type="file" multiple name="cvPortfolio" className='border text-center bg-[#F4F4F4] border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
        </div>
        <div className="">
          <Link href="#" className='bg-[#480DEC] text-white rounded-[10px] px-6 py-3 inline-flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]'>
            Apply
            <Image src="/assets/icons/arrow-up-right.svg" alt="Icon arrow up right" width={19} height={19} className="" />
          </Link>
        </div>
      </form>
    </section>
  );
}

export default DetailCareer;
