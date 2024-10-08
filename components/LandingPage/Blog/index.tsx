import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import { Button } from "@/components/ui/button";
import { getBlogSelected } from "@/components/Fetching/Blog/blog";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListIcon from "@/public/assets/icons/ListIcon";
import GridIcon from "@/public/assets/icons/GridIcon";
import CardBlogSquare from "./CardBlogSquare";
import { removeHTMLTags } from "@/lib/utils";

export default async function Blog() {
  const blogList = await getBlogSelected();
  const lastBlog = blogList[blogList.length - 1];

  return (
    <section className="overflow-hidden">
      <div className="bg-[#14141F] md:bg-[#14141F] py-6 md:py-10">
        <div className="px-5 md:container md:mx-auto">
          <div className="flex flex-col items-center md:py-1">
            <h3 className="text-mobileJudul md:text-[20px] font-semibold text-tangerine">Blog</h3>
          </div>
          <Tabs defaultValue="list" className="min-w-screen">
            <TabsList className="hidden md:flex justify-end md:mt-5">
              <TabsTrigger value="list" className="data-[state=active]:bg-tangerine  data-[state=active]:text-white text-tangerine ml-2 pb-[3px] pt-[3px]">
                <ListIcon color="w-[10px] md:w-[25px]" />
              </TabsTrigger>
              <TabsTrigger value="square" className="data-[state=active]:bg-tangerine  data-[state=active]:text-white text-tangerine ml-2">
                <GridIcon color="w-[10px] md:w-[25px]" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <div className="flex justify-between items-center gap-4 lg:gap-8  w-full xl:mt-[20px]">
                <div className="flex-col gap-4 xl:gap-6 hidden md:flex md:w-[40%] lg:w-[40%] xl:w-[40%]">
                  <h2 data-aos="zoom-in" className="font-medium lg:w-[400px] xl:w-[480px] text-mobileJudul md:text-webJudul text-white truncate lg:text-clip text-wrap capitalize">
                    {lastBlog?.title || 'Title'}
                  </h2>
                  <p data-aos="zoom-in" className="text-mobileSubjudul md:text-webSubjudul text-white text-justify md:line-clamp-12 xl:line-clamp-[14]">
                    {removeHTMLTags(lastBlog?.body || 'None')}
                  </p>
                  <Link className="text-mobileDesk md:text-webDesk hover:underline text-white" href={`/${lastBlog?.slug}`}>Selengkapnya</Link>
                </div>
                <div data-aos='fade-right' className="hidden md:block md:w-[58%] lg:w-[60%] xl:w-[60%] rounded-xl">
                  <Image
                    data-aos="zoom-in"
                    src={lastBlog?.image || '/assets/images/blog.jpg'}
                    alt={lastBlog?.altImage || 'logo'}
                    width={854}
                    height={480}
                    className="rounded-xl w-full h-[300px] lg:h-[300px] xl:h-[400px] bg-cover object-cover"
                  />
                </div>
              </div>
              <div className="md:py-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
                {blogList?.slice(0, 6).map((blog: any, i: number) => (
                  <CardBlog type="landing" key={i} blogs={blog} />
                ))}
              </div>
              <div className="flex items-center justify-center md:pb-5 mt-5">
                <Link href='/blog'>
                  <Button className="md:h-[51px] h-[31px] rounded-xl bg-tangerine hover:bg-tangerine-2 py-1 text-[11px] md:text-webDesk  text-white">
                    See More Articles
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="square" className="">
              <div className="md:-ml-5 pt-5 md:py-10 px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 gap-x-3 xl:gap-x-10 items-center whitespace-nowrap">
                {blogList?.slice(-12).map((blog: any, i: number) => (
                  <CardBlogSquare key={i} blogs={blog} />
                ))}
              </div>
              <div className="flex items-center justify-center mb-6 md:mb-0 md:pb-5 mt-5">
                <Link href='/blog'>
                  <Button className="rounded-xl h-[16px] md:h-[51px] bg-tangerine hover:bg-tangerine-2 text-mobileDesk md:text-webDesk  text-white">
                    See More Articles
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
};
