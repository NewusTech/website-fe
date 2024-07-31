import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Team");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function DetailTeamPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const columns = [
    {
      imageSrc: '/assets/images/antoni.svg',
      altText: 'ICT Project Manager',
      title: 'MANAJER PROYEK TIK',
      subtitle: 'ICT Project Manager'
    },
    {
      imageSrc: '/assets/images/antoni.svg',
      altText: 'Second Image Description',
      title: 'Title for Second Image',
      subtitle: 'Subtitle for Second Image'
    },
    {
      imageSrc: '/assets/images/antoni.svg',
      altText: 'Third Image Description',
      title: 'Title for Third Image',
      subtitle: 'Subtitle for Third Image'
    }
  ];
  const certifications = [
    {
      logoSrc: '/assets/images/antoni.svg',
      title: 'ICT PROJECT MANAGER (ICT-PM)',
      organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      issueDate: 'Oct 2023',
      expireDate: 'Oct 2025',
      credentialId: 'BNSP-ISP-317-ID',
    },
    {
      logoSrc: '/assets/images/antoni.svg',
      title: 'PROGRAMER SENIOR',
      organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      issueDate: 'Oct 2023',
      expireDate: 'Oct 2025',
      credentialId: 'BNSP-ISP-317-ID',
    },
  ];

  return (
    <section className="overflow-hidden min-h-screen">
      <header className="w-full z-10 relative" style={{ background: 'linear-gradient(90deg, #4F4F4F 0%, #959595 100%)' }}>
        <div className="flex justify-end max-w-6xl 2xl:max-w-7xl py-10">
          <Image
            src='/assets/icons/logo.svg'
            alt="blog header"
            loading="lazy"
            width={1350}
            height={75}
            className={`w-[400px] object-contain md:h-[305px] xl:h-[200px] h-[200px]`}
          />
        </div>
      </header>

      {/* Foto */}
      <div className="max-w-6xl mx-auto -mt-[130px] z-10 relative">
        <Image
          src='/assets/images/antoni.svg'
          alt="blog header"
          loading="lazy"
          width={550}
          height={75}
          className={`w-[200px] object-contain rounded-full`}
        />
      </div>

      <div className="max-w-6xl mx-auto bg-[#F4F4F4] pb-10">
        <div className="bg-gradient-to-r from-gray-700 to-gray-300 pt-10 pb-5 flex justify-between gap-10">
          <div className="w-9/12 flex flex-col gap-3">
            <h1 className="text-webJudul font-bold">Muhammad Muttaqin</h1>
            <p className="text-webSubjudul font-semibold">Fullstack Developer</p>
            <p className="text-webDesk items-stretch flex">Lebih baik jadi yang terbaik dari yang terbaik, daripada jadi yang terburuk dari yang terbaik. Tapi ingat satu hal, jangan pernah menjadi yang terbaik dari yang terburuk.</p>
            <div className="font-bold text-webDesk flex flex-col gap-1">
              <p>Institut Teknologi Sumatera</p>
              <p>Teknik Informatika, Aug 2008-Aug 2021</p>
            </div>
          </div>

          <div className="w-3/12 flex flex-col text-webDesk gap-2">
            <h1>Join Date  : 18 Agustus 2022</h1>
            <p className="font-bold">Language</p>
            <div>
              <div className="bg-red-500 h-2 w-5"></div>
              <div className="bg-white h-2 w-5"></div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg px-10 py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul">Contact Info</h2>
          <div className="flex flex-wrap gap-6 mt-4 w-full">
            <div className="w-[45%] flex flex-col gap-3">
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/linkedin.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Profile</h3>
                  <p className="text-webDesk text-[#480DEC]">linkedin.com/in/muhammad-muttaqin</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/email.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-webDesk text-[#480DEC]">Muttaqin@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col gap-3">
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/addres.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-webDesk text-[#480DEC]">Jl. Salim Batubara No.118</p>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-start">
                  <div>
                    <Image src='/assets/icons/teams/bday.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Birthday</h3>
                    <p className="text-webDesk">August 09</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certi */}
        <div className="bg-white shadow-lg rounded-lg px-10 my-8 py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Certificate</h2>

          <div className="grid grid-cols-3 gap-x-5">
            {columns.map((column, index) => (
              <div key={index} className="border rounded-md shadow-sm">
                <Image
                  src={column.imageSrc}
                  alt={column.altText}
                  loading="lazy"
                  width={550}
                  height={75}
                  className={`w-full h-[270px] object-contain rounded-t-md bg-gray`}
                />
                <div className="px-10 py-5">
                  <h1 className="text-webSubjudul font-semibold">{column.title}</h1>
                  <h2 className="text-webSubjudul">{column.subtitle}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licenses & certifications */}
        <div className="bg-white shadow-lg rounded-lg px-10 my-8 py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Licenses & certifications</h2>

          <div className="space-y-4">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-lg rounded-lg px-10 my-8 py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Skills</h2>
          <div className="space-y-4">
            {certifications.map((certification, index) => (
              <CardSkill key={index} certification={certification} />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white shadow-lg rounded-lg px-10 my-8 py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Projects</h2>
          <div className="space-y-4">
            {certifications.map((certification, index) => (
              <ProjectCard key={index} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

const CardSkill = ({ certification }: any) => {
  return (
    <div className="flex items-center gap-1">
      <div>
        <Image
          src={certification.logoSrc}
          alt="Certification logo"
          width={100}
          height={100}
          className="mr-4 w-10 h-10"
        />
      </div>
      <div>
        <h1 className="text-webJudul font-semibold">{certification.title}</h1>
      </div>
    </div>
  )
}

const CertificationCard = ({ certification }: any) => {
  return (
    <div className="border rounded-md shadow-sm p-4 flex items-start gap-5">
      <div className="w-2/12">
        <Image
          src={certification.logoSrc}
          alt="Certification logo"
          width={1000}
          height={1000}
          className="mr-4 w-full h-full"
        />
      </div>
      <div className="w-10/12 flex flex-col gap-1">
        <h1 className="text-webJudul font-semibold">{certification.title}</h1>
        <h2 className="text-webSubjudul font-semibold">{certification.organization}</h2>
        <p className="text-webDesk">Issued {certification.issueDate}. Expires {certification.expireDate}</p>
        <p className="text-webDesk">Credential ID {certification.credentialId}</p>
        <div>
          <button className="mt-2 px-4 py-2 border rounded-md text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white flex items-center gap-3">
            <p className="text-webDesk">Show credential</p>
            <Image
              src='/assets/icons/teams/Vector (19).svg'
              alt="Certification logo"
              width={13}
              height={13}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ certification }: any) => {
  return (
    <div className="border rounded-md shadow-sm p-4 flex items-start gap-5">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-webJudul font-semibold">{certification.title}</h1>
        <p className="text-webDesk">{certification.issueDate} - {certification.expireDate}</p>
        <p className="text-webDesk">Lorem ipsum dolor sit amet consectetur. Arcu vel tincidunt arcu tellus purus massa.</p>
        <div>
          <button className="mt-2 px-4 py-2 border rounded-[20px] text-blue-500 border-black hover:bg-blue-500 hover:text-white flex items-center gap-3">
            <p className="text-webDesk">Show Project</p>
            <Image
              src='/assets/icons/teams/Vector (19).svg'
              alt="Certification logo"
              width={13}
              height={13}
            />
          </button>
        </div>
      </div>
    </div>
  );
};