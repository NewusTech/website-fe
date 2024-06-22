import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardServices from "@/components/Service/CardService";

const WhatWeDo = () => {
  return (
    <section className="container md:my-[20px] my-8">
      <div className="flex items-center justify-center flex-col gap-1 md:gap-4 relative">
        <h1 className="font-bold text-dark text-[8px] md:text-[32px] z-20">
          What We Do
        </h1>
        <p className="w-[225px] md:w-[558px] text-center text-[6px] md:text-[16px] leading-[2]">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
          Kronde est
        </p>
        <div className="md:w-[110px] md:h-[27px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-9 -ml-16 md:-mt-[90px] md:-ml-[163px]"></div>
      </div>
      <section className="grid grid-cols-2 gap-x-3 md:gap-x-10 mb-5 md:mb-52">
        <CardServices
          illustration="/assets/illustration/3d-web.svg"
          title="Website-Based Applications"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-mobile.svg"
          title="Mobile Apps Development"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-uiux.svg"
          title="UI / UX Design"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-dm.svg"
          title="Digital Marketing"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
      </section>
      <section className="flex flex-col items-center md:mb-64">
        <h1 className="uppercase text-tangerine text-center font-semibold md:text-3xl text-sm">
          work <span className="text-blue">flow</span>
        </h1>
        <div className="mt-[75px] mr-40 flex justify-around">
          <div className="flex flex-col items-center gap-y-3">
            <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-[40px]">1</p>
            </div>
            <h3 className="text-tangerine text-[32px] font-bold">
              Kick-off Meeting
            </h3>
            <p className="text-xs w-[353px] text-center leading-loose">
              Kami akan menjadwalkan pertemuan awal dengan tim Anda untuk
              memulai kolaborasi. Tujuan pertemuan ini adalah untuk memahami
              lebih dalam tentang masalah yang perlu dipecahkan, menetapkan
              ekspektasi, dan merencanakan langkah-langkah selanjutnya.
            </p>
          </div>
          <Image
            src="/assets/illustration/line1.svg"
            width={725}
            height={367}
            alt="line"
            className="mt-[75px] -ml-16"
          />
        </div>
        <div className="flex">
          <div className="flex flex-col items-center gap-y-3">
            <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-[40px]">3</p>
            </div>
            <h3 className="text-tangerine text-[32px] font-bold">Solution</h3>
            <p className="text-xs w-[353px] text-center leading-loose">
              Berdasarkan analisis, kami akan merancang rencana implementasi
              untuk membuat, memperbaiki atau meningkatkan sistem.
            </p>
          </div>
          <Image
            src="/assets/illustration/line2.svg"
            width={690}
            height={0}
            alt="line"
            className="-mt-28 -mx-24"
          />
          <div className="flex flex-col items-center gap-y-3">
            <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-[40px]">2</p>
            </div>
            <h3 className="text-tangerine text-[32px] font-bold">Analysis</h3>
            <p className="text-xs w-[353px] text-center">
              Melakukan analisis yang mendalam terhadap berbagai aspek.
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col items-center ml-[90px]">
            <Image
              src="/assets/illustration/line3.svg"
              alt="line"
              width={8}
              height={214}
            />
            <div className="flex flex-col items-center gap-y-3">
              <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
                <p className="text-white font-bold text-[40px]">4</p>
              </div>
              <h3 className="text-tangerine text-[32px] font-bold">
                Development
              </h3>
            </div>
          </div>
          <Image
            src="/assets/illustration/line4.svg"
            alt="line"
            width={799}
            height={348}
            className="w-[859px] h-[400px] mt-[373px] mr-[150px] -ml-14"
          />
        </div>
        <div className="flex items-start mt-2">
          <div className="flex flex-col items-center gap-y-3 ml-10 -mr-28">
            <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-[40px]">6</p>
            </div>
            <h3 className="text-tangerine text-[32px] w-[380px] font-bold text-center">
              Training and Knowledge Transfer
            </h3>
            <p className="text-xs w-[353px] text-center leading-loose">
              Kami akan mengajari tim Anda cara menggunakan sistem baru atau
              proses yang telah diubah sehingga semua orang merasa nyaman dengan
              perubahan tersebut.
            </p>
          </div>
          <Image
            src="/assets/illustration/line5.svg"
            alt="line"
            width={650}
            height={8}
            className="w-[108vh] h-2 mt-[75px]"
          />
          <div className="flex flex-col items-center gap-y-3 mr-40 -ml-20">
            <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-[40px]">5</p>
            </div>
            <h3 className="text-tangerine text-[32px] font-bold">
              Trial and Evaluation
            </h3>
            <p className="text-xs w-[353px] text-center leading-loose">
              Setelah implementasi selesai, kami akan melakukan uji coba
              menyeluruh untuk memastikan bahwa solusi berfungsi dengan baik dan
              memenuhi kebutuhan Anda. Evaluasi juga akan dilakukan untuk
              mengukur kinerja solusi terhadap tujuan yang telah ditetapkan.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
