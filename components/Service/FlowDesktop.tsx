import Image from "next/image";

const FlowDesktop = () => {
  return (
    <section className="md:flex flex-col items-center md:mb-64 hidden">
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
            Kami akan menjadwalkan pertemuan awal dengan tim Anda untuk memulai
            kolaborasi. Tujuan pertemuan ini adalah untuk memahami lebih dalam
            tentang masalah yang perlu dipecahkan, menetapkan ekspektasi, dan
            merencanakan langkah-langkah selanjutnya.
          </p>
        </div>
        <Image
          src="/assets/illustration/line1.svg"
          width={725}
          height={367}
          alt="line"
          className="mt-[75px] -z-10 -ml-36 xl:-ml-16"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col items-center gap-y-3">
          <div className="rounded-full w-[155px] h-[155px] bg-blue flex items-center justify-center">
            <p className="text-white font-bold text-[40px]">3</p>
          </div>
          <h3 className="text-tangerine text-[32px] font-bold">Solution</h3>
          <p className="text-xs w-[353px] text-center leading-loose">
            Berdasarkan analisis, kami akan merancang rencana implementasi untuk
            membuat, memperbaiki atau meningkatkan sistem.
          </p>
        </div>
        <Image
          src="/assets/illustration/line2.svg"
          width={690}
          height={0}
          alt="line"
          className="-z-10 -mt-28 -mx-36 xl:-mx-24"
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
        <div className="flex flex-col items-center ml-[0px] xl:ml-[90px]">
          <Image
            src="/assets/illustration/line3.svg"
            alt="line"
            width={8}
            height={214}
            className="z-10"
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
          className="-z-10 w-[600px] xl:w-[859px] h-[400px] mt-[373px] mr-[15px] -ml-14"
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
          className="w-[400px] xl:w-[108vh] h-2 mt-[75px]"
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
            memenuhi kebutuhan Anda. Evaluasi juga akan dilakukan untuk mengukur
            kinerja solusi terhadap tujuan yang telah ditetapkan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowDesktop;
