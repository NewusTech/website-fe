import Image from "next/image";
import image from '@/public/assets/images/detail-port.svg'
import iconWebsite from '@/public/assets/icons/icon-website.svg'
import iconPlaystore from '@/public/assets/icons/play_store.svg'
import ImageSlider from "@/components/shared/SliderImage";
import CardSquarePorto from "@/components/Portfolio/CardSquarePorto";

export default function Page({ params }: { params: { slug: string } }) {
  const images = [
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
    '/assets/images/placeholder-image (2).jpg',
    // Tambahkan URL gambar lain jika diperlukan
  ];

  const projects = [
    { slug: 'project-1', name: 'Project One', description: 'Description for project one' },
    { slug: 'project-2', name: 'Project Two', description: 'Description for project two' },
    { slug: 'project-3', name: 'Project Two', description: 'Description for project two' },
    // Tambahkan proyek lain sesuai kebutuhan
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
            <h1 className="text-[12px] md:text-[36px] font-bold pb-2 md:pb-[50px]">Name Project</h1>
            <h2 className="text-[12px] md:text-[20px] pb-2 md:pb-5">2023</h2>
            <p className="text-[12px] md:text-[20px] pb-2 md:pb-[50px]">Lörem ipsum astrobel sar direlig. Kronde est
              konfoni med kelig. Terabel pov astrobel sar</p>
            <div className="flex items-center gap-2 md:gap-6">
              <div className="flex items-center justify-center gap-[5px] md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm">
                <Image
                  src={iconWebsite}
                  width={24}
                  height={24}
                  alt="Icon Website"
                  className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
                />
                <button className="text-[6px] md:text-[16px]">Visit Website</button>
              </div>
              <div className="flex justify-center gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm">
                <Image
                  src={iconPlaystore}
                  width={24}
                  height={24}
                  alt="Icon playstore"
                  className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
                />
                <button className="text-[6px] md:text-[16px]">Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto min-h-screen md:pb-96 pt-14 md:pt-72 p-[35px] md:p-0">
        <div className="flex items-center gap-[40px]">
          <Image
            src="/assets/images/placeholder-image (2).jpg"
            alt="image card list"
            width={367}
            height={273}
            className="w-[64px] h-[36px] md:w-[367px] md:h-[273px] rounded-l-[10px] object-cover"
          />
          <div>
            <h1 className="text-[10px] md:text-[24px] font-bold pb-4">NAMA PROJECT / CLIENT</h1>
            <p className="hidden md:block text-[16px]">Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. </p>
          </div>
        </div>
        <p className="md:hidden text-[16px] text-justify  pt-5">Lorem ipsum dolor sit amet consectetur. Quam diam cursus sed et tortor ornare blandit maecenas. Sagittis etiam lacus luctus nibh commodo fames ultrices. Tristique velit at mattis pretium enim eros. Suscipit ultricies nulla egestas in lectus feugiat etiam. In in fermentum id arcu. Pellentesque gravida lectus posuere fringilla pretium enim commodo. Convallis eget sed ut maecenas morbi id in. Sem tortor et ac nibh. </p>

        <div className="flex gap-[40px] pt-5 md:pt-[86px] items-center justify-between">
          <div className="md:w-1/2">
            <div className="md:hidden mb-4">
              <Image height={367} width={570} src={images[0]} alt="slider" className="w-full" />
            </div>
            <h1 className="text-[24px] font-bold pb-3">Lorem Ipsum Dolor Amet</h1>
            <p className="text-[16px]">Do you really think graphic arts supply houses were hiring  scholars Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est.
              <br />
              <br />
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
          </div>
          <div className="hidden md:block md:w-1/2">
            <ImageSlider images={images} />
          </div>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="text-[28px] font-[500] pb-5 md:pb-10">Technology</h1>
          <div className="flex gap-3 md:gap-5">
            <Image src={"/assets/icons/react.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
            <Image src={"/assets/icons/fire.png"} height={60} width={60} alt="Icon" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
          </div>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="text-[28px] font-[500] pb-5 md:pb-10">Deskripsi</h1>
          <h2 className="text-[20px] font-[500] pb-5 md:pb-10">Figma ipsum component variant main</h2>
          <p className="text-[16px] text-justify">
            Figma ipsum component variant main layer. Share mask layer shadow community library horizontal inspect. Link image frame component underline ellipse. Move mask component scrolling underline blur fill. Asset arrow image variant arrow follower align strikethrough. Ipsum background component text auto invite style component blur. Device distribute union variant share opacity stroke editor layout.
            Component project flows union union figma share boolean. Reesizing clip frame slice figjam scrolling connection distribute strikethrough team. List community main selection style connection vector. Layout flatten line project image project slice flatten prototype. Pencil ellipse component rectangle star ipsum draft style. Text hand hand arrange figma device italic selection pencil arrow. Project underline image group group flatten star list fill vertical. Background blur opacity variant draft. Connection thumbnail boolean share style object thumbnail pen slice. Follower arrange share fill select rectangle shadow selection. Rotate strikethrough arrange inspect connection fill share create group. Comment line scale team subtract select subtract horizontal. Layout fill figjam clip project effect layer. Union boolean reesizing strikethrough distribute.
            Rotate subtract object image ipsum scrolling. Pencil undo main reesizing arrange export. Mask follower italic layout comment layer slice. Scale community bold thumbnail pen auto figjam distribute select. Line pencil stroke prototype invite thumbnail hand. Rotate overflow rotate italic font project scrolling vertical layer boolean. Undo subtract comment rectangle inspect component subtract inspect. Shadow library follower union community boolean scale. Star inspect device object flows italic thumbnail frame. Layer blur asset effect pencil scrolling vertical export. Outline italic plugin rectangle align flows. Variant hand star hand thumbnail union arrange frame layer. Stroke bullet bold community follower distribute boolean export. Subtract library pixel distribute object rotate polygon flatten flows team.
          </p>
        </div>

        <div className="pt-5 md:pt-[84px]">
          <h1 className="text-[28px] font-[500] pb-6">More Portofolio</h1>
          <div className="flex justify-between gap-4 md:gap-5 md:flex-wrap">
            {projects.map((project) => (
              <CardSquarePorto key={project.slug} slug={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}