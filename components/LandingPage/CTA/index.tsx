import Image from "next/image";
import Link from "next/link";

export default async function CTA() {
  return (
    <section className="md:min-h-[300px] lg:min-h-[300px] bg-white text-black relative shadow">
      <div className="min-h-[200px] md:min-h-[350px] xl:min-h-[430px] 2xl:max-w-none 2xl:pl-0 h-full w-full flex flex-col md:flex-row justify-center md:gap-4 relative">
        <div className="w-full md:w-7/12 relative">
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={"/assets/images/bgcta.jpeg"}
              alt="Background"
              width={1000}
              height={1000}
              loading="lazy"
              className="h-[200px] md:h-[350px] xl:h-[430px] object-cover"
            />
          </div>
          <div className="relative block md:hidden">
            <Image
              src={"/assets/images/bgcta.jpeg"}
              alt="Background"
              width={1000}
              height={1000}
              className="w-full h-[150px] sm:h-[300px] md:h-[350px] xl:h-[430px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 flex flex-col justify-center gap-2 px-5 py-6 md:pb-10">
          <h1 className="hidden xl:block text-mobileJudul md:text-2xl font-bold md:pb-3">
            Wujudkan{" "}
            <span className="text-tangerine">
              Aplikasi Berkualitas <br />
              Anda{" "}
            </span>
            Sekarang Juga
          </h1>
          <h1 className="xl:hidden pb-2 text-mobileJudul md:text-2xl font-bold md:pb-3">
            Wujudkan{" "}
            <span className="text-tangerine">Aplikasi Berkualitas Anda </span>
            Sekarang Juga
          </h1>
          <p className="text-mobileDesk md:text-webDesk">
            Kami tahu bahwa merancang aplikasi berkualitas memerlukan
            pertimbangan matang. Membangun aplikasi adalah sebuah investasi, dan
            harga yang murah seringkali berdampak pada kualitas aplikasi.
            Hubungi kami untuk mendapatkan solusi terbaik yang sesuai dengan
            kebutuhan dan anggaran Anda.
          </p>
          <div className="pt-2 md:pt-5">
            <Link
              href="https://api.whatsapp.com/message/VAQVUDT6TDXVG1?autoload=1&app_absent=0"
              target="_blank"
              className="cursor-pointer inline-flex text-white gap-2 items-center bg-green-950 rounded-[20px] text-mobileDesk md:text-webDesk py-2 px-4"
            >
              <p>Konsultasikan Sekarang</p>
              <Image
                src={"/assets/icons/chat.svg"}
                alt="Logo"
                width={20}
                height={20}
                className="text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
