import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import privacyImg from "@/public/assets/images/privacy-img.webp";
import { BASE_URL } from "@/constants/constants";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const privacyMeta = seoPages?.find(
    (page: any) => page.pages === "Terms-and-Conditions"
  );
  const title =
    privacyMeta?.metaTitle || "Software Host Lampung | Newus Pricy Policy";
  const description =
    privacyMeta?.metaDesc || "Pelajari Kebijakan Privasi Newus Technology";

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      url: `${BASE_URL}`,
      images: [
        {
          url: `${BASE_URL}/assets/images/header-about.jpg`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`${BASE_URL}/assets/images/header-about.jpg`],
    },
  };
}

export default function page() {
  return (
    <section className="my-16">
      <div className="bg-[url('/assets/images/privacy-img.webp')] bg-cover">
        <div className="h-[30rem] md:mt-24 bg-opacity-80 lg:bg-opacity-100 bg-blue flex flex-row justify-center items-center gap-0 lg:gap-24 p-2 lg:p-10">
          <span className="text-white font-semibold text-2xl">
            Privacy Policy
          </span>
          <div className="overflow-hidden w-[25rem] h-[20rem] rounded-tl-[5rem] hidden lg:block shadow-xl">
            <Image
              src={privacyImg}
              alt="terms-and-conditions"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <main className="container p-2 xl:p-4">
        <h1 className="text-2xl font-semibold">
          Kebijakan Privasi Newus Technology
        </h1>
        <ul className="list-disc flex flex-col gap-4 p-4">
          <li>
            Newus Technology hanya mengumpulkan informasi yang dapat
            diidentifikasi secara pribadi yang secara khusus dan sukarela
            diberikan oleh pengunjung situs kami. Seorang pengunjung situs kami
            dapat memilih untuk memberikan informasi ini untuk mendaftar di area
            tertentu dari situs, melamar pekerjaan, atau melihat publikasi.
            Ketika seorang pengunjung memberikan jenis informasi yang dapat
            diidentifikasi ini kepada kami, kami menggunakannya semata-mata
            untuk tujuan yang dimaksudkan saat informasi tersebut diberikan.
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
            Kebijakan kami adalah tidak membagikan informasi yang dapat
            diidentifikasi secara pribadi dengan pihak ketiga, kecuali jika
            diwajibkan oleh hukum. Kami mengakui bahwa informasi Anda berharga
            dan kami mengambil semua langkah yang wajar untuk melindungi
            informasi Anda selama berada dalam perawatan kami. Namun, data yang
            dikumpulkan melalui halaman &rdquo;Karir&rdquo; dan
            &rdquo;Magang,&rdquo; termasuk nama, alamat rumah, email, dan nomor
            telepon, bersifat umum dan dapat digunakan untuk tujuan rekrutmen
            dan administrasi. Dengan memberikan informasi ini, Anda menyetujui
            bahwa Newus Technology tidak bertanggung jawab atas kebocoran data
            tersebut jika terjadi melalui situs web kami atau dalam pengelolaan
            data kami. Anda bertanggung jawab untuk memastikan bahwa kutipan
            atau referensi tersebut disertakan sesuai dengan ketentuan ini. Anda
            bertanggung jawab atas setiap dan semua tindakan Anda dan
            konsekuensi yang timbul dari tindakan Anda (termasuk tetapi tidak
            terbatas pada tindakan mengunduh materi apa pun) dari penggunaan dan
            akses situs web ini dan materi apa pun yang terdapat di dalamnya
            atau diunduh dari situs web ini. Dalam keadaan apa pun Newus
            Technology tidak bertanggung jawab atas kerusakan apa pun, termasuk
            namun tidak terbatas pada kerusakan khusus, langsung atau tidak
            langsung, insidental, atau konsekuensial apa pun.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Kebijakan Cookie</h2>
        <ul className="list-disc flex flex-col gap-4 p-4">
          <li>
            Seperti banyak perusahaan lainnya, kami menggunakan cookie di situs
            web kami untuk meningkatkan fungsionalitas dan meningkatkan
            pengalaman pengguna Anda. Kami juga dapat menggunakan informasi ini
            untuk analisis data.
          </li>
          <li>
            Melanjutkan menjelajah situs web ini menandakan bahwa Anda setuju
            dengan penempatan cookie di perangkat Anda. Anda dapat mengubah
            pengaturan cookie Anda kapan saja.
          </li>
        </ul>
      </main>
    </section>
  );
}
