import Image from "next/image"

const OurHistory = () => {
  const data = [
    {
      year: '2018 - 2019',
      logos: ['/assets/images/pln.svg']
    },
    {
      year: '2020',
      logos: [
        '/assets/images/OJK_Logo.svg',
        '/assets/images/dinas-pendidikan.png'
      ]
    },
    {
      year: '2021',
      logos: ['/assets/images/bgp.svg']
    },
    {
      year: '2022',
      logos: ['/assets/images/pln.svg']
    },
    {
      year: '2023',
      logos: [
        '/assets/images/pln.svg',
        '/assets/images/ggf.png',
        '/assets/images/pariwisata.png'
      ]
    }
  ];

  const YearlyLogos = ({ year, logos }: any) => (
    <div className="text-white w-full flex md:flex-col md:w-[20%]">
      <h1 className="text-mobileSubjudul md:text-webSubJudul pb-4 w-[40%] md:w-full border-r-2 md:border-none mr-10">{year}</h1>
      <Image src={'/assets/icons/lineabout.svg'} width={220} height={2} alt="vector" className="hidden md:block pb-8" />
      <div className="w-[60%] md:w-full">
        {logos.map((logo: any, index: any) => (
          <Image key={index} src={logo} width={111} height={40} alt="logo" className="pb-4" />
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <div className='flex items-center gap-4 md:gap-5 pb-3 lg:pb-8 text-white'>
        <h1 className='text-mobileJudul md:text-webJudul font-bold'>Our History</h1>
        <div className='flex-grow h-[1px] bg-[#BDBDBD]'></div>
      </div>
      <p className='text-mobileSubjudul md:text-webSubJudul pb-8 md:pb-10 text-white'>A Software House based in Lampung has been trusted by various local and national companies for more than 3 years to fulfill their technology needs.</p>
      <div className="md:pb-10 flex flex-wrap gap-10 md:gap-0 w-full h-auto">
        {data.map(({ year, logos }, index) => (
          <YearlyLogos key={index} year={year} logos={logos} />
        ))}
      </div>
    </section>
  )
}

export default OurHistory