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
    <div className="text-white">
      <h1 className="pb-4">{year}</h1>
      <Image src={'/assets/icons/lineabout.svg'} width={220} height={2} alt="vector" className="pb-8" />
      {logos.map((logo: any, index: any) => (
        <Image key={index} src={logo} width={111} height={40} alt="logo" className="pb-4" />
      ))}
    </div>
  );

  return (
    <section>
      <div className='flex items-center gap-[52px] pb-10 text-white'>
        <h1 className='text-[28px] font-bold'>Our History</h1>
        <div className='flex-grow h-px bg-[#BDBDBD]' style={{ width: '849px' }}></div>
      </div>
      <p className='pb-[50px] text-white'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig Terabel.</p>
      <div className="pb-20 flex gap-8 w-full h-auto">
        {data.map(({ year, logos }, index) => (
          <YearlyLogos key={index} year={year} logos={logos} />
        ))}
      </div>
    </section>
  )
}

export default OurHistory