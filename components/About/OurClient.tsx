import { ourClientAbout } from '@/constants'
import Image from 'next/image'
import React from 'react'

interface OurClientProps {
  id: number;
  logo: string;
}

const OurClient = () => {
  const firstRow = ourClientAbout.slice(0, 7);
  const secondRow = ourClientAbout.slice(7, 14);
  const thirdRow = ourClientAbout.slice(14, 21);

  const renderRow = (clients: OurClientProps[], justify: string) => (
    <div className={`flex w-full gap-9 flex-wrap pb-5 justify-${justify}`}>
      {clients.map(({ id, logo }: OurClientProps) => (
        <div key={id} className="flex items-center">
          <Image src={logo} alt="logo" height={60} width={100} className="w-full h-[60px] object-contain" />
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <div className='flex items-center gap-[52px] pb-7'>
        <h1 className='text-[28px] font-bold'>Our Happy Client</h1>
        <div className='flex-grow h-px bg-[#BDBDBD]' style={{ width: '849px' }}></div>
      </div>
      <p className='pb-[50px]'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig Terabel
        <br />pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.</p>
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full">
          {renderRow(firstRow, 'between')}
        </div>
        <div className="flex justify-between w-full">
          {renderRow(secondRow, 'between')}
        </div>
        <div className="flex justify-start w-full">
          {renderRow(thirdRow, 'start')}
        </div>
      </div>
    </section>
  )
}

export default OurClient
