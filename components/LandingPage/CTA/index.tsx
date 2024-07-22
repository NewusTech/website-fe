import Image from 'next/image';
import Link from 'next/link';

export default async function CTA() {
  return (
    <section className="md:min-h-[300px] lg:min-h-[300px] bg-white text-black relative shadow">
      <div className="min-h-[200px] md:min-h-[400px] xl:min-h-[500px] 2xl:max-w-none 2xl:pl-0 h-full w-full flex flex-col md:flex-row justify-center md:gap-4 relative">
        <div className="w-full md:w-4/12 flex flex-col justify-center gap-2 md:pl-[2rem] 2xl:pl-[6rem] px-5 py-6 md:pb-10">
          <h1 className="hidden xl:block text-mobileJudul md:text-2xl font-bold md:pb-3">Wujudkan <span className="text-tangerine">Website Impian <br />Anda </span>Sekarang Juga</h1>
          <h1 className="xl:hidden pb-2 text-mobileJudul md:text-2xl font-bold md:pb-3">Wujudkan <span className="text-tangerine">Website Impian Anda </span>Sekarang Juga</h1>
          <p className="text-mobileDesk md:text-webDesk">Kami paham bahwa membuat website bukanlah keputusan mudah. <br className='hidden 2xl:block' /> Silahkan berkonsultasi untuk mendapatkan penawaran terbaik <br className='hidden 2xl:block' />yang sesuai dengan budget Anda.</p>
          <div className="pt-2 md:pt-5">
            <Link href='https://api.whatsapp.com/message/VAQVUDT6TDXVG1?autoload=1&app_absent=0' target='_blank' className="cursor-pointer inline-flex text-white gap-2 items-center bg-green-950 rounded-[20px] text-mobileDesk md:text-webDesk py-2 px-4">
              <p>
                Konsultasikan Sekarang
              </p>
              <Image src={'/assets/icons/chat.svg'} alt="Logo" width={20} height={20} className="text-white" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-8/12 relative">
          <div className="absolute inset-0 hidden md:block">
            <Image src={'/assets/images/bg-cta.svg'} alt="Background" layout="fill" objectFit="cover" className="z-20" loading="lazy" />
          </div>
          <div className="relative block md:hidden">
            <Image src={'/assets/images/bg-cta.svg'} alt="Background" width={1000} height={1000} className="w-full h-[180px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
