const About = ({ abouts }: any) => {
  const missionItems = abouts[0]?.mission.split('\r\n');

  return (
    <section className='-mt-[8px] md:mt-4 md:px-[67px] px-5 pt-2 md:pt-14 pb-8 md:py-[64px] md:border bg-white md:border-[#FF6600] mx-1'>
      <div className='py-5 md:pb-10'>
        <h1 className='text-[#FF6600] font-bold text-mobileJudul md:text-webJudul pb-3 md:pb-5 text-center md:text-start'>NEWUS <span className='text-[#480DEC] text-center md:text-start'>TECHNOLOGY</span></h1>
        <p className='text-mobileDesk md:text-webDesk leading-6 md:leading-8 text-center md:text-start'>{abouts[0]?.body || 'Newus technology adalah sebuah perusahaan software yang bergerak dibidang jasa pembuatan website, aplikasi / sistem dan aplikasi berbasis android serta IOS. Selain sebagai perusahaan software newus technology merupakan sebuah perusahaan konsultan IT yang berdomisili di Kota Bandar Lampung.'}</p>
      </div>
      <div className='flex justify-between gap-[5px] md:gap-10'>
        <div className='w-1/2 p-1 md:p-0'>
          <h1 className='text-[#480DEC] font-bold text-mobileJudul md:text-webJudul text-center md:text-start pb-3 md:pb-5 '>VISION</h1>
          <p className='text-mobileDesk md:text-webDesk leading-6 md:leading-7 text-center md:text-start'>{abouts[0]?.vision || 'Newus Technology berkomitmen untuk membangun solusi teknologi inovatif yang dapat membantu pelanggan mencapai tujuan bisnis secara lebih efektif dan efisien.'}</p>
        </div>
        <div className='w-1/2 p-1 md:p-0'>
          <h1 className='text-[#FF6600] font-bold text-mobileJudul md:text-webJudul text-center md:text-start pb-3 md:pb-5'>MISION</h1>
          <p className='text-mobileDesk md:text-webDesk leading-6 md:leading-7 text-center md:text-start'>{missionItems?.map((item: any, index: any) => (
            <li className="list-none" key={index}>{item}</li>
          ))}</p>
        </div>
      </div>
    </section>
  )
}

export default About