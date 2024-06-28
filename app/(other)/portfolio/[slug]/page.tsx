import Image from "next/image";
import image from '@/public/assets/images/detail-port.svg'
import iconWebsite from '@/public/assets/icons/icon-website.svg'
import iconPlaystore from '@/public/assets/icons/play_store.svg'
import ImageSlider from "@/components/shared/SliderImage";
import CardSquarePorto from "@/components/Portfolio/CardSquarePorto";
import { getProjectList, getProjectDetail } from "@/components/Fetching/Portfolio/port";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projects = await getProjectList()
  const projectsDetail = await getProjectDetail(slug)

  const images = [
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
  ];

  return (
    <section className="min-h-screen">
      <header className="w-full z-10 relative">
        <div className="md:min-w-[1350px] md:min-h-[75px]">
          <Image
            src={image}
            alt="Detail Porto header"
            width={1350}
            height={75}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div className="-mt-[200px] md:-mt-[500px] text-white max-w-7xl mx-auto">
          <div className="max-w-[500px] p-[35px] md:p-0">
            <h1 className="text-[14px] md:text-[36px] font-bold pb-2 md:pb-[50px]">{projectsDetail?.title ? projectsDetail.title : 'Project Name'}</h1>
            <h2 className="text-[12px] md:text-[20px] pb-2 md:pb-5">{projectsDetail?.portfolioYear ? projectsDetail.portfolioYear : '2023'}</h2>
            <p className="text-[12px] md:text-[20px] pb-2 md:pb-[50px]">{projectsDetail?.excerpt ? projectsDetail.excerpt : 'Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar'}</p>
            <div className="flex items-center gap-2 md:gap-6">
              <Link target="_blank" href={projectsDetail?.webLink}>
                <div className="flex items-center justify-center gap-[5px] md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm">
                  <Image
                    src={iconWebsite}
                    width={24}
                    height={24}
                    alt="Icon Website"
                    className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
                  />
                  <p className="text-[10px] md:text-[16px]">Visit Website</p>
                </div>
              </Link>
              <Link target="_blank" href={projectsDetail?.appsLink}>
                <div className="flex justify-center gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm">
                  <Image
                    src={iconPlaystore}
                    width={24}
                    height={24}
                    alt="Icon playstore"
                    className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
                  />
                  <Link href={projectsDetail?.appsLink} className="text-[10px] md:text-[16px]">Google Play</Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto min-h-screen md:pb-44 pt-14 md:pt-72 p-[35px] md:p-0">
        <div className="flex items-center gap-[40px]">
          <Image
            src="/assets/images/placeholder-image (2).jpg"
            alt="image card list"
            width={367}
            height={273}
            className="w-[64px] h-[36px] md:w-[367px] md:h-[273px] rounded-l-[10px] object-cover"
          />
          <div>
            <h1 className="text-2xl md:text-[24px] font-bold md:pb-4">{projectsDetail?.title ? projectsDetail.title : 'Project Name'}</h1>
            <p className="hidden md:block text-[16px]">{projectsDetail?.body ? projectsDetail.body : 'Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. '}</p>
          </div>
        </div>
        <p className="md:hidden text-[16px] text-justify text-sm pt-5">{projectsDetail?.body ? projectsDetail.body : 'Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. '}</p>

        <div className="hidden gap-[40px] pt-5 md:pt-[86px] items-center justify-between">
          {/* <div className="hidden flex gap-[40px] pt-5 md:pt-[86px] items-center justify-between"> */}
          <div className="md:w-1/2">
            <div className="md:hidden mb-4">
              <Image height={367} width={570} src={images[0]} alt="slider" className="w-full" />
            </div>
            <h1 className="text-[24px] font-bold pb-3">{projectsDetail?.title ? projectsDetail.title : 'Project Name'}</h1>
            <p className="text-[16px]">{projectsDetail?.body ? projectsDetail.body : 'Do you really think graphic arts supply houses were hiring  scholars Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est.  <br /> <br /> Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est '}
            </p>
          </div>
          <div className="hidden md:block md:w-1/2">
            <ImageSlider images={images} />
          </div>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="md:text-[28px] font-[500] pb-5 md:pb-10">Technology</h1>
          <div className="flex gap-3 md:gap-5">
            <div className="flex justify-center flex-col items-center">
              <Image src={"/assets/icons/react.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
              <p className="text-[10px] md:text-[16px]">React</p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image src={"/assets/icons/fire.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
              <p className="text-[10px] md:text-[16px]">Firebase</p>
            </div>
          </div>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="md:text-[28px] font-[500] pb-5 md:pb-10">Deskripsi</h1>
          <h2 className="text-sm md:text-[20px] font-[500] pb-5 md:pb-10">{projectsDetail?.title ? projectsDetail.title : 'Figma ipsum component variant main'}</h2>
          <p className="text-sm md:text-[16px] text-justify">
            {projectsDetail?.body ? projectsDetail.body : 'Figma ipsum component variant main layer. Share mask layer shadow community library horizontal inspect. Link image frame component underline ellipse. Move mask component scrolling underline blur fill. Asset arrow image variant arrow follower align strikethrough. Ipsum background component text auto invite style component blur. Device distribute union variant share opacity stroke editor layout. Component project flows union union figma share boolean. Reesizing clip frame slice figjam scrolling connection distribute strikethrough team. List community main selection style connection vector. Layout flatten line project image project slice flatten prototype. Pencil ellipse component rectangle star ipsum draft style. Text hand hand arrange figma device italic selection pencil arrow. Project underline image group group flatten star list fill vertical. Background blur opacity variant draft. Connection thumbnail boolean share style object thumbnail pen slice. Follower arrange share fill select rectangle shadow selection. Rotate strikethrough arrange inspect connection fill share create group. Comment line scale team subtract select subtract horizontal. Layout fill figjam clip project effect layer. Union boolean reesizing strikethrough distribute. Rotate subtract object image ipsum scrolling. Pencil undo main reesizing arrange export. Mask follower italic layout comment layer slice. Scale community bold thumbnail pen auto figjam distribute select. Line pencil stroke prototype invite thumbnail hand. Rotate overflow rotate italic font project scrolling vertical layer boolean. Undo subtract comment rectangle inspect component subtract inspect. Shadow library follower union community boolean scale. Star inspect device object flows italic thumbnail frame. Layer blur asset effect pencil scrolling vertical export. Outline italic plugin rectangle align flows. Variant hand star hand thumbnail union arrange frame layer. Stroke bullet bold community follower distribute boolean export. Subtract library pixel distribute object rotate polygon flatten flows team.'}
          </p>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="md:text-[28px] font-[500] pb-6 md">More Portofolio</h1>
          <div className="hidden md:flex justify-between gap-4 md:gap-5 md:flex-wrap">
            {projects.slice(0, 3).map((project: any, index: any) => (
              <CardSquarePorto key={index} projects={project} />
            ))}
          </div>
          <div className="md:hidden flex justify-between gap-4 md:gap-5 md:flex-wrap">
            {projects.slice(0, 2).map((project: any, index: any) => (
              <CardSquarePorto key={index} projects={project} />
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}