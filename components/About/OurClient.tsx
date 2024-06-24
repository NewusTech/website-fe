import { ourClient } from '@/constants'
import Image from 'next/image'
import React from 'react'

interface OurClientProps {
  id: number;
  logo: string;
}

const OurClient = () => {
  const firstRow = ourClient.slice(0, 9);
  const secondRow = ourClient.slice(0, 9);
  const thirdRow = ourClient.slice(0, 6);

  const renderRow = (clients: any) => (
    <div className="flex justify-between gap-9 flex-wrap pb-5">
      {clients.map(({ id, logo }: any) => (
        <div key={id} className="">
          <Image src={logo} alt="logo" height={60} width={100} className="aspect-video object-contain" />
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
      <div className="flex flex-wrap flex-col w-full h-auto">
        {renderRow(firstRow)}
        {renderRow(secondRow)}
        {renderRow(thirdRow)}
      </div>
    </section>
  )
}

export default OurClient