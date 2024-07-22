import Image from "next/image";
import image from '@/public/assets/images/detail-port.svg'
import iconWebsite from '@/public/assets/icons/icon-website.svg'
import iconPlaystore from '@/public/assets/icons/play_store.svg'
import ImageSlider from "@/components/shared/SliderImage";
import CardSquarePorto from "@/components/Portfolio/CardSquarePorto";
import { getProjectList, getProjectDetail } from "@/components/Fetching/Portfolio/port";
import Link from "next/link";
import { removeHTMLTags } from "@/lib/utils";
export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projects = await getProjectList()
  const projectsDetail = await getProjectDetail(slug)

  const images = [
    projectsDetail?.image,
    projectsDetail?.image,
    projectsDetail?.image,
    projectsDetail?.image,
  ];

  return (
    <section className="min-h-screen overflow-hidden">
      <header className="w-full z-10 relative">
        <div className="md:min-w-[1350px] md:min-h-[75px]">
          <Image
            src={image || '/assets/images/blog.jpg'}
            alt="Detail Porto header"
            width={1350}
            height={75}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div className="-mt-[200px] md:ml-[30px] xl:mx-auto md:-mt-[500px]  xl:-mt-[500px] 2xl:-mt-[600px] text-white max-w-7xl mx-auto">
          <div className="max-w-[500px] p-[35px] 2xl:p-0">
            <h1 className="text-mobileJudul md:text-webJudul font-bold pb-2 md:pb-[50px]">{projectsDetail?.title || 'Project Name'}</h1>
            <h2 className="text-mobileSubjudul md:text-webSubjudul pb-2 md:pb-5">{projectsDetail?.portfolioYear || 'INSTANSI'}</h2>
            <p className="text-mobileSubjudul md:text-webSubjudul pb-2 md:pb-[50px]">{projectsDetail?.excerpt || 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar'}</p>
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                className="flex items-center justify-center gap-[5px] md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm"
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
              <div>
                <Link rel="noopener noreferrer" className="flex justify-center gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm" target="_blank" href={projectsDetail?.appsLink || '/'}>
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
        </div>
      </header>

      <div className="2xl:max-w-7xl mx-auto min-h-screen md:pb-44 pt-8 md:pt-[250px] xl:pt-[200px] 2xl:pt-[380px] p-[10px] md:p-5 xl:p-5">
        <div className="flex items-center gap-5 relative">
          <div className="flex justify-center items-center md:hidden">
            <div className="w-[40%] md:w-[28%] h-full flex items-center relative">
              <Image
                src={projectsDetail?.image || "/assets/images/placeholder-image (2).jpg"}
                alt="image card list"
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute top-2 right-2 z-10">
                <Image
                  src={projectsDetail?.logo || `/assets/images/placeholder-image (2).jpg`}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="hidden w-[40%] md:w-[28%] h-full md:flex items-center relative">
            <Image
              src={projectsDetail?.image || "/assets/images/placeholder-image (2).jpg"}
              alt="image card list"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute top-2 right-2 z-10">
              <Image
                src={projectsDetail?.logo || `/assets/images/placeholder-image (2).jpg`}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
              />
            </div>
          </div>
          <div>
            {/* <h1 className="text-2xl md:text-[24px] font-bold md:pb-4">{projectsDetail?.title || 'Project Name'}</h1> */}
            <p className="hidden md:block text-webDesk line-clamp-3">{removeHTMLTags(projectsDetail?.body) || 'Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. '}</p>
          </div>
        </div>
        <p className="md:hidden text-mobileDesk md:text-webDesk text-justify pt-5">{removeHTMLTags(projectsDetail?.body) || 'Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. '}</p>

        <div className="hidden md:flex gap-[40px] items-center justify-center py-4 md:py-10">
          <div className="block md:w-9/12">
            <ImageSlider images={images} />
          </div>
        </div>

        <div className="pt-5">
          <h1 className="text-mobileJudul md:text-webJudul font-[500] pb-5">Technology</h1>
          <div className="flex gap-3 md:gap-5">
            <div className="flex justify-center flex-col items-center">
              <Image src={"/assets/icons/react.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
              <p className="text-mobileDesk md:text-webSubjudul">React</p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image src={"/assets/icons/fire.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
              <p className="text-mobileDesk md:text-webSubjudul">Firebase</p>
            </div>
          </div>
        </div>

        <div className="pt-5 md:pt-10">
          <div className="flex gap-5 items-center pb-5">
            <h1 className="text-mobileJudul md:text-webJudul font-[500]">Deskripsi</h1>
            <div className="w-full h-[1px] bg-gray"></div>
          </div>
          <h2 className="text-mobileJudul md:text-webJudul font-[500] pb-5">{projectsDetail?.title || 'Figma ipsum component variant main'}</h2>
          <p className="text-mobileDesk md:text-webDesk text-justify">
            {removeHTMLTags(projectsDetail?.body) || 'Figma ipsum component variant main layer. Share mask layer shadow community library horizontal inspect. Link image frame component underline ellipse. Move mask component scrolling underline blur fill. Asset arrow image variant arrow follower align strikethrough. Ipsum background component text auto invite style component blur. Device distribute union variant share opacity stroke editor layout. Component project flows union union figma share boolean. Reesizing clip frame slice figjam scrolling connection distribute strikethrough team. List community main selection style connection vector. Layout flatten line project image project slice flatten prototype. Pencil ellipse component rectangle star ipsum draft style. Text hand hand arrange figma device italic selection pencil arrow. Project underline image group group flatten star list fill vertical. Background blur opacity variant draft. Connection thumbnail boolean share style object thumbnail pen slice. Follower arrange share fill select rectangle shadow selection. Rotate strikethrough arrange inspect connection fill share create group. Comment line scale team subtract select subtract horizontal. Layout fill figjam clip project effect layer. Union boolean reesizing strikethrough distribute. Rotate subtract object image ipsum scrolling. Pencil undo main reesizing arrange export. Mask follower italic layout comment layer slice. Scale community bold thumbnail pen auto figjam distribute select. Line pencil stroke prototype invite thumbnail hand. Rotate overflow rotate italic font project scrolling vertical layer boolean. Undo subtract comment rectangle inspect component subtract inspect. Shadow library follower union community boolean scale. Star inspect device object flows italic thumbnail frame. Layer blur asset effect pencil scrolling vertical export. Outline italic plugin rectangle align flows. Variant hand star hand thumbnail union arrange frame layer. Stroke bullet bold community follower distribute boolean export. Subtract library pixel distribute object rotate polygon flatten flows team.'}
          </p>
        </div>

        <div className="pt-10 w-full pb-5 xl:pb-20">
          <div className="flex gap-5 items-center pb-5">
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

const getYearFromDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
