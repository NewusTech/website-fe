import { ourClientAbout } from '@/constants'
import Image from 'next/image'
import React from 'react'

interface OurClientProps {
  id: number;
  image: string;
}

const OurClient = ({ clients }: any) => {
  const ourClient = clients.length > 7 ? clients : ourClientAbout

  const firstRow = ourClient.slice(0, 7);
  const secondRow = ourClient.slice(7, 14);
  const thirdRow = ourClient.slice(14, 21);
  const mobile = ourClient.slice(0, 21);

  const renderRow = (clients: OurClientProps[], justify: string) => (
    <div className={`flex w-full gap-3 md:gap-9 flex-wrap pb-5 justify-${justify}`}>
      {clients.map(({ id, image }: OurClientProps) => (
        <div key={id} className="flex items-center">
          <Image src={image} alt="logo" height={60} width={100} className="w-full h-[60px] object-contain" />
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <div className='flex items-center gap-[22px] pb-3 md:pb-7'>
        <h1 className='text-mobileJudul md:text-webJudul font-bold'>Our Happy Client</h1>
        <div className='flex-grow h-px bg-[#BDBDBD]' style={{ width: '149px' }}></div>
      </div>
      <div>
        <p className='text-mobileSubjudul md:text-webSubJudul pb-4 md:pb-[50px]'>Explore the success stories of Our Happy Client partners to see how our dedicated services have helped them achieve their goals and thrive in their respective industries.
        </p>
      </div>
      <div className="hidden md:flex flex-col items-center w-full">
        <div className="flex flex-row md:flex-col items-center w-1/2 md:w-full">
          {renderRow(firstRow, 'between')}
        </div>
        <div className="flex flex-col md:flex-col md:items-center w-1/2 md:w-full">
          {renderRow(secondRow, 'between')}
        </div>
        <div className="flex flex-row md:flex-col md:items-center w-1/2 md:w-full">
          {renderRow(thirdRow, 'center')}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-wrap justify-center md:hidden items-center w-full">
        {mobile.map(({ id, image }: OurClientProps) => (
          <div key={id} className="w-[20%] flex justify-center mb-5">
            <Image src={image} alt="logo" height={60} width={100} className="w-full h-[60px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurClient
