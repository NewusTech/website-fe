import Image from "next/image";

const FlowResponsive = () => {
  return (
    <section className="my-10 md:hidden">
      <h1 className="uppercase text-tangerine text-center font-semibold md:text-3xl text-sm">
        work <span className="text-blue">flow</span>
      </h1>
      <div className="mt-5 ml-4 flex justify-center">
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
            <p className="text-white font-bold text-xs">1</p>
          </div>
          <h3 className="text-tangerine text-[10px] font-bold">
            Kick-off Meeting
          </h3>
          <p className="text-[6px] w-[162px] text-center">
            Kami akan menjadwalkan pertemuan awal dengan tim Anda untuk memulai
            kolaborasi. Tujuan pertemuan ini adalah untuk memahami lebih dalam
            tentang masalah yang perlu dipecahkan, menetapkan ekspektasi, dan
            merencanakan langkah-langkah selanjutnya.
          </p>
        </div>
        <Image
          src="/assets/illustration/line1-responsive.svg"
          width={65}
          height={60}
          alt="line"
          className="mt-7 -ml-12"
        />
      </div>
      <div className="ml-7 mt-1 flex justify-center">
        <div className="flex items-start gap-y-2 mr-10">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-xs">3</p>
            </div>
            <h3 className="text-tangerine text-[10px] font-bold">Solution</h3>
            <p className="text-[6px] w-[75px] text-center">
              Berdasarkan analisis, kami akan merancang rencana implementasi
              untuk membuat, memperbaiki atau meningkatkan sistem.
            </p>
          </div>
          <Image
            src="/assets/illustration/line2-responsive.svg"
            width={139}
            height={10}
            alt="line"
            className="mt-7 -ml-2"
          />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-xs">2</p>
            </div>
            <h3 className="text-tangerine text-[10px] font-bold">Analysis</h3>
            <p className="text-[6px] w-[75px] text-center">
              Melakukan analisis yang mendalam terhadap berbagai aspek.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-7 mt-1 flex justify-start">
        <div className="flex flex-col items-start justify-center gap-y-2">
          <Image
            src="/assets/illustration/line3-responsive.svg"
            width={2.3}
            height={48}
            alt="line"
            className="ml-9"
          />
          <div className="flex flex-col items-center justify-center gap-y-2 -mt-2 ml-1">
            <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-xs">4</p>
            </div>
            <h3 className="text-tangerine text-[10px] font-bold">
              Development
            </h3>
          </div>
          <Image
            src="/assets/illustration/line4-responsive.svg"
            width={178}
            height={89}
            alt="line"
            className="ml-[65px] -mt-14"
          />
        </div>
      </div>
      <div className=" mt-1 flex justify-center">
        <div className="flex items-start gap-y-2 mr-10">
          <div className="flex flex-col items-center justify-center gap-y-2 -ml-2">
            <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-xs">6</p>
            </div>
            <h3 className="text-tangerine text-[10px] text-center w-[100px] font-bold">
              Training and Knowledge Transfer
            </h3>
            <p className="text-[6px] w-[75px] text-center">
              Kami akan mengajari tim Anda cara menggunakan sistem baru atau
              proses yang telah diubah sehingga semua orang merasa nyaman dengan
              perubahan tersebut.
            </p>
          </div>
          <Image
            src="/assets/illustration/line2-responsive.svg"
            width={159}
            height={10}
            alt="line"
            className="mt-7 -ml-7 -mr-5"
          />
          <div className="flex flex-col items-center justify-center gap-y-2 -mr-8">
            <div className="rounded-full w-[50px] h-[50px] bg-blue flex items-center justify-center">
              <p className="text-white font-bold text-xs">5</p>
            </div>
            <h3 className="text-tangerine text-[10px] w-[100px] text-center font-bold">
              Trial and Evaluation
            </h3>
            <p className="text-[6px] w-[75px] text-center">
              Setelah implementasi selesai, kami akan melakukan uji coba
              menyeluruh untuk memastikan bahwa solusi berfungsi dengan baik dan
              memenuhi kebutuhan Anda. Evaluasi juga akan dilakukan untuk
              mengukur kinerja solusi terhadap tujuan yang telah ditetapkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowResponsive;
