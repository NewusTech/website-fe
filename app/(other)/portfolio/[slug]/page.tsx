import Image from "next/image";
import image from '@/public/assets/images/detail-port.svg'
import iconWebsite from '@/public/assets/icons/icon-website.svg'
import iconPlaystore from '@/public/assets/icons/play_store.svg'
import ImageSlider from "@/components/shared/SliderImage";
import CardSquarePorto from "@/components/Portfolio/CardSquarePorto";
import { getProjectList, getProjectDetail } from "@/components/Fetching/Portfolio/port";
import Link from "next/link";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Portfolio");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projects = await getProjectList()
  const projectsDetail = await getProjectDetail(slug)

  const truncate = (str: any, maxLength: any) => {
    if (!str) return '';
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  // const truncateBody = (str: any, maxLength: any) => {
  //   if (!str) return '';
  //   const div: any = document.createElement('div');
  //   div.innerHTML = str;
  //   return div.textContent.length > maxLength ? div.textContent.substring(0, maxLength) + '...' : div.textContent;
  // };

  return (
    <section className="min-h-screen overflow-hidden">
      <header className="w-full z-10 relative">
        <div className="xl:min-w-[1350px] md:min-h-[75px]">
          <Image
            src={image || '/assets/images/blog.jpg'}
            alt="Detail Porto header"
            width={1350}
            height={75}
            className={`w-full h-full md:h-[50vh] lg:h-[90vh] xl:h-[85vh] 2xl:h-[100vh] object-cover`}
          />
        </div>
        <div className="-mt-[190px] px-[10px] md:px-5 xl:px-10 xl:mx-auto md:-mt-[300px] lg:-mt-[330px] xl:-mt-[400px] 2xl:-mt-[400px] text-white 2xl:max-w-7xl">
          <div className="max-w-[500px] pt-5 2xl:p-0">
            <h1 className="text-mobileJudul md:text-webJudul font-bold pb-2 md:pb-5 xl:pb-[50px] uppercase">{truncate(projectsDetail?.title, 50) || 'Project Name'}</h1>
            <h2 className="text-mobileSubjudul md:text-webSubjudul pb-2 md:pb-5">{projectsDetail?.portfolioYear || 'INSTANSI'}</h2>
            <p className="text-mobileDesk md:text-webDesk pb-2 md:pb-[50px]">{truncate(projectsDetail?.excerpt, 150) || 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar'}</p>
            <div className="flex items-center gap-2 md:gap-6 pt-3 md:pt-0">
              <Link
                className="flex justify-center gap-1 md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm"
                href={projectsDetail?.webLink || '/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={iconWebsite || '/assets/images/web.jpg'}
                  width={24}
                  height={24}
                  alt="Icon Website"
                  className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[10px] md:text-[16px]">Visit Website</p>
              </Link>
              <Link rel="noopener noreferrer" className="flex justify-center gap-1 md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm" target="_blank" href={projectsDetail?.appsLink || '/'}>
                <Image
                  src={iconPlaystore || '/assets/images/web.jpg'}
                  width={24}
                  height={24}
                  alt="Icon playstore"
                  className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[10px] md:text-[16px]">Google Play</p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="2xl:max-w-7xl mx-auto min-h-screen md:pb-24 pt-8 md:pt-[70px] lg:pt-[110px] xl:pt-[150px] 2xl:pt-[180px] p-[10px] md:p-5 xl:p-10">
        <div className="flex items-center gap-5 relative">
          <div className="flex justify-center items-center md:hidden w-full">
            <div className="w-[60%] h-full flex items-center relative">
              <Image
                src={projectsDetail?.image || "/assets/images/placeholder-image (2).jpg"}
                alt="image card list"
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md"
              />
              <div className="absolute top-0 right-0 z-10">
                <Image
                  src={projectsDetail?.logo || `/assets/images/placeholder-image (2).jpg`}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="hidden max-w-[300px] xl:max-w-[130px] lg:max-w-[200px] md:w-full h-full md:flex items-center relative">
            <Image
              src={projectsDetail?.image || "/assets/images/placeholder-image (2).jpg"}
              alt={projectsDetail?.altImage || "image card list"}
              width={1000}
              height={1000}
              className="h-full w-full xl:w-[200px] 2xl:w-[130px] object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute top-1 right-1 z-10">
              <Image
                src={projectsDetail?.logo || `/assets/images/placeholder-image (2).jpg`}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[35px] h-[35px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px] object-cover"
              />
            </div>
          </div>
          <div>
            {/* Responsive Body Content */}
            {/* Medium devices (tablets, less than 1024px) */}
            <div className="hidden md:block lg:hidden text-webDesk text-justify line-clamp-1"
              dangerouslySetInnerHTML={{ __html: truncate(projectsDetail?.body, 615) }} />

            {/* Large devices (desktops, between 1024px and 1280px) */}
            <div className="hidden lg:block xl:hidden text-webDesk text-justify line-clamp-1"
              dangerouslySetInnerHTML={{ __html: truncate(projectsDetail?.body, 800) }} />

            {/* Extra large devices (large desktops, 1280px and up) */}
            <div className="hidden xl:block text-webDesk text-justify line-clamp-1"
              dangerouslySetInnerHTML={{ __html: truncate(projectsDetail?.body, 860) }} />
          </div>
        </div>
        <div className="md:hidden text-mobileDesk md:text-webDesk text-justify pt-5" dangerouslySetInnerHTML={{ __html: projectsDetail?.body }} />
        {/* <p >{removeHTMLTags(projectsDetail?.body) || 'Lorem ipsum '}</p> */}
        <div className="hidden md:flex gap-[40px] items-center justify-center py-4 md:py-6">
          <div className="block md:w-9/12 pt-5">
            <ImageSlider images={projectsDetail?.galeri} />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex gap-3 items-center pb-5">
            <h1 className="text-mobileJudul md:text-webJudul font-[500]">Technology</h1>
            <div className="w-full h-[1px] bg-gray"></div>
          </div>
          <div className="flex gap-3 md:gap-5">
            {
              projectsDetail?.TechnologyPortofolio && (
                <div className="flex justify-center flex-col items-center gap-2">
                  <Image src={projectsDetail?.TechnologyPortofolio.image || "/assets/icons/react.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
                  <h3 className="text-mobileDesk md:text-webSubjudul">{projectsDetail?.TechnologyPortofolio.title || 'Title'}</h3>
                </div>
              )
            }
          </div>
        </div>

        <div className="pt-5 md:pt-10">
          <div className="flex gap-3 items-center pb-5">
            <h1 className="text-mobileJudul md:text-webJudul font-[500]">Description</h1>
            <div className="w-full h-[1px] bg-gray"></div>
          </div>
          <h2 className="text-mobileJudul md:text-webJudul font-[500] pb-5">{projectsDetail?.title || 'Figma ipsum component variant main'}</h2>
          <div className='text-mobileDesk md:text-webDesk 2xl:text-webSubjudul leading-6 2xl:leading-7' dangerouslySetInnerHTML={{ __html: projectsDetail?.closingDescription }} />
        </div>

        <div className="pt-10 w-full pb-5 xl:pb-20">
          <div className="flex gap-3 items-center pb-5">
            <h1 className="text-mobileJudul md:text-webJudul font-[500] text-nowrap">More Portfolio</h1>
            <div className="w-full h-[1px] bg-gray"></div>
          </div>
          <div className="hidden md:flex overflow-x-auto justify-between gap-4">
            {projects?.slice(0, 3).map((project: any, index: any) => (
              <CardSquarePorto key={index} projects={project} />
            ))}
          </div>
          <div className="overflow-auto md:hidden flex w-full gap-4">
            {projects?.slice(0, 2).map((project: any, index: any) => (
              <CardSquarePorto key={index} projects={project} />
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
