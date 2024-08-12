import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import conditionImg from "@/public/assets/images/condition-img.webp";
import { BASE_URL } from "@/constants/constants";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const tncMeta = seoPages?.find((page) => page.pages === "Portfolio") || {
    id: 0,
    metaDesc: "Pelajari Terms and Conditions Newus Technology",
    metaImage: "",
    metaTitle: "Software Host Lampung | Newus Terms and Conditions",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: tncMeta.metaTitle,
    description: tncMeta.metaDesc,
    openGraph: {
      type: "website",
      title: tncMeta.metaTitle,
      description: tncMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: tncMeta.metaImage,
          width: 800,
          height: 600,
          alt: tncMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tncMeta.metaTitle,
      description: tncMeta.metaDesc,
      images: [tncMeta.metaImage],
    },
  };
}

export default function page() {
  return (
    <section className="my-16">
      <div className="bg-[url('/assets/images/condition-img.webp')] bg-cover">
        <div className="h-[30rem] md:mt-24 bg-opacity-80 lg:bg-opacity-100 bg-blue flex flex-row justify-center items-center gap-0 lg:gap-24 p-2 lg:p-10">
          <span className="text-white font-semibold text-2xl">
            Terms and Conditions
          </span>
          <div className="overflow-hidden w-[25rem] h-[20rem] rounded-tl-[5rem] hidden lg:block shadow-xl">
            <Image
              src={conditionImg}
              alt="terms-and-conditions"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <main className="container p-2 xl:p-4">
        <h1 className="text-2xl font-semibold">Newus Terms and Conditions</h1>
        <ul className="list-disc flex flex-col gap-4 p-4">
          <li>
            Anda memahami dan mengakui bahwa informasi yang terdapat dalam
            materi apa pun (termasuk tetapi tidak terbatas pada artikel dan
            video) yang tersedia di situs web ini dimaksudkan untuk memberikan
            informasi umum saja dan tidak dimaksudkan untuk memberikan nasihat
            hukum atau untuk diandalkan sebagai mengikat dalam perselisihan,
            klaim, tindakan, permintaan, atau proses hukum apa pun. Newus
            Technology tidak menjamin bahwa penggunaan panduan atau informasi
            dari situs web ini atau materi apa pun yang tersedia di situs web
            ini akan menghasilkan hasil tertentu. Newus Technology tidak
            bertanggung jawab atas kecukupan atau keakuratan informasi yang
            terdapat dalam materi apa pun di situs web ini, atau atas tanggung
            jawab untuk memperbarui siapa pun terkait ketidakakuratan,
            kelalaian, atau perubahan informasi tersebut. Newus Technology tidak
            memberikan jaminan, tersurat atau tersirat, atas informasi yang
            tersedia melalui situs web ini.
          </li>
          <li>
            Anda tidak boleh menggunakan materi apa pun yang tersedia di situs
            web ini, termasuk informasi yang terkandung di dalamnya, untuk
            mendapatkan manfaat komersial kecuali dengan persetujuan tertulis
            dari Newus Technology. Semua hak kekayaan intelektual dalam materi
            yang tersedia di situs web ini dalam bentuk apa pun (termasuk tetapi
            tidak terbatas pada artikel, gambar, logo, dan video) dimiliki oleh
            Newus Technology dan/atau pihak ketiga lainnya. Tidak ada dalam
            situs web ini atau materi yang dapat ditafsirkan sebagai memberikan
            atau memberi Anda lisensi atau hak apa pun di bawah paten, merek
            dagang, atau hak kekayaan intelektual lainnya yang dimiliki oleh
            Newus Technology atau pihak ketiga mana pun, secara tersirat,
            estoppel, atau sebaliknya.
          </li>
          <li>
            Materi apa pun yang diunduh dari situs web ini tetap menjadi hak
            milik Newus Technology. Penggunaan materi tersebut di luar
            penggunaan pribadi atau internal oleh pihak Newus Technology
            memerlukan persetujuan tertulis dari Newus Technology. Selain itu,
            setiap penggunaan publik dari materi yang diunduh, termasuk gambar
            blog dan isi blog, harus mencantumkan kutipan atau referensi yang
            sesuai kepada Newus Technology. Untuk kepentingan akademik atau
            non-komersial seperti penelitian atau tugas kuliah, harap sertakan
            kutipan berikut dalam publikasi atau presentasi Anda:
          </li>
          <li>
            Anda bertanggung jawab untuk memastikan bahwa kutipan atau referensi
            tersebut disertakan sesuai dengan ketentuan ini. Anda bertanggung
            jawab atas setiap dan semua tindakan Anda dan konsekuensi yang
            timbul dari tindakan Anda (termasuk tetapi tidak terbatas pada
            tindakan mengunduh materi apa pun) dari penggunaan dan akses situs
            web ini dan materi apa pun yang terdapat di dalamnya atau diunduh
            dari situs web ini. Dalam keadaan apa pun Newus Technology tidak
            bertanggung jawab atas kerusakan apa pun, termasuk namun tidak
            terbatas pada kerusakan khusus, langsung atau tidak langsung,
            insidental, atau konsekuensial apa pun.
          </li>
        </ul>
      </main>
    </section>
  );
}
