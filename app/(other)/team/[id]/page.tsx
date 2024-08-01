import { getTeamDetail } from "@/components/Fetching/Division/division";
import { getSeoPages } from "@/components/Fetching/SEO";
import { removeHTMLTags } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function DetailTeamPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getTeamDetail(id);

  if (!data) {
		return notFound()
	}

  const certifications = data?.teamsertifikat
  const teamprojects = data?.teamproject
  const skills = data?.teamskill

  return (
    <section className="overflow-hidden min-h-screen">
      <header className="w-full z-10 relative" style={{ background: 'linear-gradient(90deg, #4F4F4F 0%, #959595 100%)' }}>
        <div className="flex justify-end max-w-6xl 2xl:max-w-7xl md:py-10">
          <Image
            src='/assets/icons/logo.svg'
            alt="blog header"
            loading="lazy"
            width={1350}
            height={75}
            className={`w-[150px] md:w-[400px] object-contain md:h-[305px] xl:h-[200px] h-[200px]`}
          />
        </div>
      </header>

      {/* Foto */}
      <div className="max-w-6xl px-5 mx-auto -mt-[120px] z-10 relative ">
        <div className="rounded-full">
          <Image
            src={data?.image || '/assets/images/antoni.svg'}
            alt="blog header"
            loading="lazy"
            width={600}
            height={600}
            className="w-60 h-60 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl px-5 mx-auto bg-[#F4F4F4] pb-10">
        <div className="bg-gradient-to-r from-gray-700 to-gray-300 pt-10 pb-5 flex justify-between gap-3 md:gap-10">
          <div className="w-9/12 flex flex-col gap-3">
            <h1 className="text-webJudul font-bold">{data?.name}</h1>
            <p className="text-webSubjudul font-semibold">{data?.title}</p>
            <p className="text-webDesk items-stretch flex">{removeHTMLTags(data?.description)}</p>
            <div className="font-bold text-webDesk flex flex-col gap-1">
              <p>{data?.institute}</p>
              <p>{data?.major}</p>
            </div>
          </div>

          <div className="w-3/12 flex flex-col text-webDesk gap-2">
            <h1>Join Date  : {convertJoinDate(data?.joinDate)}</h1>
            <p className="font-bold">Language</p>
            <div>
              <div className="bg-red-500 h-2 w-5"></div>
              <div className="bg-white h-2 w-5"></div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5 mb-8 md:px-10 md:py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Contact Info</h2>
          <div className="flex flex-wrap gap-6 mt-4 w-full">
            <div className="w-[45%] flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/linkedin.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div className="-mt-1">
                  <h3 className="font-semibold">Profile</h3>
                  <Link href={data?.linkedin || '/'} target="_blank" className="text-webDesk text-[#480DEC]">{data?.linkedin}</Link>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/email.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div className="-mt-1">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-webDesk text-[#480DEC]">{data?.email}</p>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div>
                  <Image src='/assets/icons/teams/addres.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                </div>
                <div className="-mt-1">
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-webDesk text-[#480DEC]">{data?.address}</p>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-start">
                  <div>
                    <Image src='/assets/icons/teams/bday.svg' alt="Logo" width={20} height={20} className="w-5 h-5" />
                  </div>
                  <div className="-mt-1">
                    <h3 className="font-semibold">Birthday</h3>
                    <p className="text-webDesk">{data?.birthdayDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certi */}
        <div className="bg-white shadow-lg rounded-lg p-5 md:px-10 md:py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Certificate</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5">
            {certifications?.length > 0 ? certifications.map((certification: any, index: number) => (
              <div key={index} className="border rounded-md shadow-sm">
                <Image
                  src={certification.media || '/assets/images/antoni.svg'}
                  alt={'Certification'}
                  loading="lazy"
                  width={550}
                  height={500}
                  className={`w-full h-[270px] object-contain rounded-t-md`}
                />
                <div className="px-10 py-5">
                  <h1 className="text-webSubjudul font-semibold uppercase">{certification?.title}</h1>
                  <h2 className="text-webSubjudul">{certification?.publisher}</h2>
                </div>
              </div>
            )) : <>No Data</>}
          </div>
        </div>

        {/* Licenses & certifications */}
        <div className="bg-white shadow-lg rounded-lg my-8 p-5 md:px-10 md:py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Licenses & certifications</h2>

          <div className="space-y-4">
            {certifications?.length > 0 ? certifications.map((certification: any, i: number) => (
              <CertificationCard key={i} certification={certification} />
            )) :
              <>No Data</>
            }
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-lg rounded-lg my-8 p-5 md:px-10 md:py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Skills</h2>
          <div className="space-y-4">
            {skills?.length > 0 ? skills.map((skill: any, index: number) => (
              <CardSkill key={index} skill={skill} />
            )) : <>No Data</>}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white shadow-lg rounded-lg p-5 mb-8 md:px-10 md:py-8">
          <h2 className="text-gray-900 font-extrabold text-webJudul pb-5">Projects</h2>
          <div className="space-y-4">
            {teamprojects?.length > 0 ? teamprojects.map((teamproject: any, index: number) => (
              <ProjectCard key={index} teamproject={teamproject} />
            )) : <>No Data</>}
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
          src={certification?.media}
          alt="Certification logo"
          width={100}
          height={100}
          className="mr-4 w-10 h-10"
        />
      </div>
      <div>
        <h1 className="text-webJudul font-semibold">{certification?.title}</h1>
      </div>
    </div>
  )
}

const CertificationCard = ({ certification }: any) => {
  return (
    <div className="border rounded-md shadow-sm p-4 flex items-start gap-5">
      <div className="w-2/12">
        <Image
          src={certification.media}
          alt="Certification logo"
          width={1000}
          height={1000}
          className="mr-4 w-full h-full"
        />
      </div>
      <div className="w-10/12 flex flex-col gap-1">
        <h1 className="text-webJudul font-semibold">{certification?.title}</h1>
        <h2 className="text-webSubjudul font-semibold">{certification?.publisher}</h2>
        <p className="text-webDesk">Issued {convertDate(certification?.startDate)}. Expires {convertDate(certification?.finishDate)}</p>
        <p className="text-webDesk">Credential ID {certification?.credentialID}</p>
        <div>
          <Link href={certification?.credentialURL || '/'} target="_blank" className="inline-flex mt-2 px-4 py-2 border rounded-xl text-blue-500 border-gray hover:font-semibold items-center gap-3">
            <p className="text-webDesk">Show credential</p>
            <Image
              src='/assets/icons/teams/Vector (19).svg'
              alt="Certification logo"
              width={13}
              height={13}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ teamproject }: any) => {
  return (
    <div className="border rounded-md shadow-sm p-4 flex items-start gap-5">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-webJudul font-semibold">{teamproject?.projectName}</h1>
        <p className="text-webDesk">{convertDate(teamproject?.startDate)} - {convertDate(teamproject?.finishDate)}</p>
        <p className="text-webDesk">{teamproject?.description}</p>
        <div>
          <Link href={teamproject?.url || '/'} className="mt-2 px-4 py-2 border rounded-[20px] text-blue-500 border-black hover:font-semibold inline-flex items-center gap-3">
            <p className="text-webDesk">Show Project</p>
            <Image
              src={'/assets/icons/teams/Vector (19).svg'}
              alt="Certification logo"
              width={13}
              height={13}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

function convertDate(dateString: string) {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const date = new Date(dateString);

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

function convertJoinDate(dateString: string) {
  // Membuat objek Date dari string tanggal
  const date = new Date(dateString);

  // Mendapatkan bulan, tanggal, dan tahun dari objek Date
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  // Mengembalikan format yang diinginkan (contoh: "3 Juni 2020")
  return `${day} ${month} ${year}`;
}