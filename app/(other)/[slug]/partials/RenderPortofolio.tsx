"use client";

import Image from "next/image";
import image from "@/public/assets/images/detail-port.svg";
import iconWebsite from "@/public/assets/icons/icon-website.svg";
import iconPlaystore from "@/public/assets/icons/play_store.svg";
import ImageSlider from "@/components/shared/SliderImage";
import CardSquarePorto from "@/components/Portfolio/CardSquarePorto";
import {
  getProjectList,
  responseGetPortofolio,
} from "@/components/Fetching/Portfolio/port";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { formattedDate } from "@/utils/blog";

export default function RenderPortofolio({
  projectsDetail,
}: {
  projectsDetail: responseGetPortofolio;
}) {
  const [projects, setProjects] = useState<any[]>([]);
  const [modalTnc, setModalTnc] = useState(false);
  const getProjects = async () => {
    const response = await getProjectList();
    setProjects(response);
  };

  const truncate = (str: any, maxLength: any) => {
    if (!str) return "";
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-hidden">
        <header className="w-full z-10 relative">
          <div className="xl:min-w-[1350px] md:min-h-[75px]">
            <Image
              src={image || "/assets/images/blog.jpg"}
              alt="Detail Porto header"
              width={1350}
              height={75}
              className={`w-full h-full md:h-[50vh] lg:h-[90vh] xl:h-[85vh] 2xl:h-[100vh] object-cover`}
            />
          </div>
          <div className="-mt-[190px] px-[10px] md:px-5 xl:px-10 xl:mx-auto md:-mt-[300px] lg:-mt-[330px] xl:-mt-[400px] 2xl:-mt-[400px] text-white 2xl:max-w-7xl">
            <div className="max-w-[500px] pt-5 2xl:p-0">
              <h1 className="text-mobileJudul md:text-webJudul font-bold pb-2 md:pb-5 xl:pb-[50px] uppercase">
                {truncate(projectsDetail?.title, 50) || "Project Name"}
              </h1>
              <h2 className="text-mobileSubjudul md:text-webSubjudul pb-2 md:pb-5">
                {projectsDetail?.portfolioYear || "INSTANSI"}
              </h2>
              <p className="text-mobileDesk md:text-webDesk pb-2 md:pb-[50px]">
                {truncate(projectsDetail?.excerpt, 150) ||
                  "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar"}
              </p>
              <div className="flex items-center gap-2 md:gap-6 pt-3 md:pt-0">
                <Link
                  className="flex justify-center gap-1 md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm"
                  href={projectsDetail?.webLink || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={iconWebsite || "/assets/images/web.jpg"}
                    width={24}
                    height={24}
                    alt="Icon Website"
                    className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
                  />
                  <p className="text-[10px] md:text-[16px]">Visit Website</p>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  className="flex justify-center gap-1 md:gap-[10px] md:py-4 py-[6.5px] px-[7.5px] md:px-8 bg-[#333333] border border-white rounded-sm"
                  target="_blank"
                  href={projectsDetail?.appsLink || "/"}
                >
                  <Image
                    src={iconPlaystore || "/assets/images/web.jpg"}
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

        <div className="w-full mx-auto min-h-screen md:pb-24 pt-8 md:pt-[70px] lg:pt-[110px] xl:pt-[150px] 2xl:pt-[180px] p-[10px] md:p-5 xl:p-10">
          <div className="container flex items-center gap-5 relative">
            <div className="flex justify-center items-center md:hidden w-full">
              <div className="w-[60%] h-full flex items-center relative">
                <Image
                  src={
                    projectsDetail?.image ||
                    "/assets/images/placeholder-image (2).jpg"
                  }
                  alt="image card list"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md"
                />
                <div className="absolute top-0 right-0 z-10">
                  <Image
                    src={
                      projectsDetail?.logo ||
                      `/assets/images/placeholder-image (2).jpg`
                    }
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
                src={
                  projectsDetail?.image ||
                  "/assets/images/placeholder-image (2).jpg"
                }
                alt={projectsDetail?.altImage || "image card list"}
                width={1000}
                height={1000}
                className="h-full w-full xl:w-[200px] 2xl:w-[130px] object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute top-1 right-1 z-10">
                <Image
                  src={
                    projectsDetail?.logo ||
                    `/assets/images/placeholder-image (2).jpg`
                  }
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
              <div
                className="hidden md:block lg:hidden text-webDesk text-justify line-clamp-1"
                dangerouslySetInnerHTML={{
                  __html: truncate(projectsDetail?.body, 615),
                }}
              />

              {/* Large devices (desktops, between 1024px and 1280px) */}
              <div
                className="hidden lg:block xl:hidden text-webDesk text-justify line-clamp-1"
                dangerouslySetInnerHTML={{
                  __html: truncate(projectsDetail?.body, 800),
                }}
              />

              {/* Extra large devices (large desktops, 1280px and up) */}
              <div
                className="hidden xl:block text-webDesk text-justify line-clamp-1"
                dangerouslySetInnerHTML={{
                  __html: truncate(projectsDetail?.body, 860),
                }}
              />
            </div>
          </div>
          <div
            className="container md:hidden text-mobileDesk md:text-webDesk text-justify pt-5"
            dangerouslySetInnerHTML={{ __html: projectsDetail?.body }}
          />
          {/* <p >{removeHTMLTags(projectsDetail?.body) || 'Lorem ipsum '}</p> */}
          {projectsDetail.galeri.length > 0 && (
            <div className="container hidden md:flex gap-[40px] items-center justify-center py-4 md:py-6">
              <div className="block md:w-9/12 pt-5">
                <ImageSlider images={projectsDetail?.galeri} />
              </div>
            </div>
          )}

          <div className="container pt-5">
            <div className="flex gap-3 items-center pb-5">
              <h1 className="text-mobileJudul md:text-webJudul font-[500]">
                Technology
              </h1>
              <div className="w-full h-[1px] bg-gray"></div>
            </div>
            <div className="flex gap-3 md:gap-5">
              {projectsDetail.techs.map((data) => (
                <div
                  key={data.TechnologyPortofolioId}
                  className="flex justify-center flex-col items-center gap-2"
                >
                  <Image
                    src={data.tech.image || "/assets/icons/react.png"}
                    height={60}
                    width={60}
                    alt="Icon"
                    className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                  />
                  <h3 className="text-mobileDesk md:text-webSubjudul">
                    {data.tech.title || "Title"}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="container pt-5 md:pt-10">
            <div className="flex gap-3 items-center pb-5">
              <h1 className="text-mobileJudul md:text-webJudul font-[500]">
                Description
              </h1>
              <div className="w-full h-[1px] bg-gray"></div>
            </div>
            <h2 className="text-mobileJudul md:text-webJudul font-[500] pb-5">
              {projectsDetail?.title || "Figma ipsum component variant main"}
            </h2>
            <div
              className="text-mobileDesk md:text-webDesk 2xl:text-webSubjudul leading-6 2xl:leading-7 prose prose-li:list-decimal prose-ul:list-inside"
              dangerouslySetInnerHTML={{
                __html: projectsDetail?.closingDescription,
              }}
            />
          </div>

          <div className="container pt-5">
            <div className="flex gap-3 items-center pb-5">
              <h1 className="text-mobileJudul md:text-webJudul font-[500]">
                Ulasan
              </h1>
              <div className="w-full h-[1px] bg-gray"></div>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              {/* <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 md:gap-0">
                <div className="rounded-full w-[9rem] h-[9rem] flex flex-col justify-center items-center bg-[#E3EDFD]">
                  <p className="text-3xl font-semibold">5,0</p>
                  <p className="text-lg">Dari 5</p>
                </div>
                <div className="flex flex-col ml-0 md:ml-auto gap-4 my-auto">
                  <div className="flex flex-col font-semibold gap-2 text-center">
                    Pelayanan
                    <div className="text-base text-yellow-500 w-full flex flex-row justify-center gap-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold gap-2 text-center">
                    Kecepatan membalas
                    <div className="text-base text-yellow-500 w-full flex flex-row justify-center gap-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-0 md:ml-20 mr-0 md:mr-auto gap-4 my-auto">
                  <div className="flex flex-col font-semibold gap-2 text-center">
                    Value for money
                    <div className="text-base text-yellow-500 w-full flex flex-row justify-center gap-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold gap-2 text-center">
                    Keterampilan dan keahlian
                    <div className="text-base text-yellow-500 w-full flex flex-row justify-center gap-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </div> */}
              {projectsDetail.testimony && (
                <div className="mt-4 bg-gray/20 rounded-md flex flex-col p-4">
                  <div className="flex flex-col-reverse md:flex-row ">
                    <div className="flex flex-row w-full items-center">
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-[#4475E0] w-[62px] h-[62px]"
                      />
                      <p className="my-auto flex flex-col gap-1 ml-6">
                        {projectsDetail.nameTestimony}
                        <span>
                          {formattedDate(
                            projectsDetail.dateTestimony ||
                              projectsDetail.createdAt
                          )}
                        </span>
                      </p>
                    </div>
                    <p className="ml-auto flex flex-row items-center gap-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500"
                      />{" "}
                      5,0
                    </p>
                  </div>
                  <p className="mt-2 text-justify">
                    {projectsDetail.testimony}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* <div className="w-[100%] py-5 mt-10 container flex flex-col sm:flex-row bg-[#E3EDFD] justify-center sm:justify-between items-center">
            <Image
              src="/assets/images/icon-park_protect.svg"
              height={90}
              width={90}
              alt="newus protected"
            />
            <div className="flex flex-col ml-auto w-[90%]">
              <p className="text-blue-smooth text-xl md:text-5xl font-medium">
                Uang Anda akan aman sampai pekerjaan disetujui{" "}
                <span className="text-black">Layanan aman dan bebas repot</span>
              </p>
              <p
                className="text-gray-2 text-lg md:text-3xl mt-1 md:mt-4 flex flex-row cursor-pointer"
                onClick={() => {
                  setModalTnc(true);
                }}
              >
                Baca syarat dan ketentuan tambahan{" "}
                <Image
                  height={20}
                  width={20}
                  src={"/assets/images/icom-more.svg"}
                  alt="'more"
                  className="ml-2"
                />
              </p>
              <Dialog onOpenChange={setModalTnc} open={modalTnc}>
                <DialogContent className="w-[70%] max-h-[70%] overflow-y-auto">
                  <p className="text-xl font-semibold">Syarat & Ketentuan</p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque voluptas rem sunt ullam maxime, molestias veniam,
                  sapiente at deleniti expedita provident et modi aliquid
                  deserunt ipsum? Nemo consequuntur expedita explicabo sequi qui
                  placeat, eius quae aut blanditiis praesentium dolor aperiam,
                  ipsum et! Reprehenderit dolorum facilis labore eligendi animi
                  vero neque temporibus, ut assumenda ab quas sunt. Ratione,
                  asperiores esse voluptas, fugiat dicta dolorem vel optio
                  perferendis alias et recusandae! Vero, delectus amet? Eos,
                  culpa veniam delectus beatae temporibus expedita facilis neque
                  quidem reprehenderit dolorem optio ducimus laboriosam, quod
                  eveniet assumenda suscipit accusamus laudantium nemo omnis
                  animi! Omnis accusantium voluptatibus nesciunt impedit,
                  laudantium possimus mollitia odit odio tempora at distinctio
                  vel tenetur deleniti! Reprehenderit explicabo sed ratione
                  voluptates pariatur ad dolore commodi! Minus deserunt, vel
                  asperiores nobis veritatis placeat officia accusantium odit et
                  in sit doloremque quod officiis quos itaque omnis incidunt
                  veniam voluptatibus doloribus quibusdam obcaecati.
                  Necessitatibus dolores quaerat commodi ea enim rerum amet
                  doloremque sit aspernatur? Cumque perferendis, totam assumenda
                  reiciendis eaque debitis voluptas illo, dicta, architecto
                  eveniet eos tempora vitae placeat repudiandae inventore? Iure
                  est officiis, corrupti rerum tempore, amet odio minima
                  cupiditate vitae incidunt dicta corporis recusandae,
                  consequuntur alias dignissimos. Neque beatae natus voluptatem
                  voluptate nobis temporibus.
                  <Button
                    className="w-fit bg-blue-smooth text-white px-4 py-2 mx-auto"
                    onClick={() => setModalTnc(false)}
                  >
                    Saya setuju
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div> */}

            <div className="flex flex-wrap gap-2 pt-5 items-center container">
              <h1 className="font-semibold text-mobileJudul  md:text-webJudul mr-2">
                Tags :
              </h1>
              {projectsDetail.tags.map((data) => (
                <Link
                  key={data.id}
                  href={`/portofolio?tag=${data.title}`}
                  className="rounded-sm border border-gray shadow px-3 py-1 text-sm cursor-pointer"
                >
                  {data.title}
                </Link>
              ))}
            </div>

          <div className="container pt-10 w-full pb-5 xl:pb-20">
            <div className="flex gap-3 items-center pb-5">
              <h1 className="text-mobileJudul md:text-webJudul font-[500] text-nowrap">
                More Portfolio
              </h1>
              <div className="w-full h-[1px] bg-gray"></div>
            </div>
            <div className="hidden md:flex overflow-x-auto justify-between gap-4">
              {projects
                ?.slice(0, 3)
                .map((project: any, index: any) => (
                  <CardSquarePorto key={index} projects={project} />
                ))}
            </div>
            <div className="overflow-auto md:hidden flex w-full gap-4">
              {projects
                ?.slice(0, 2)
                .map((project: any, index: any) => (
                  <CardSquarePorto key={index} projects={project} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
