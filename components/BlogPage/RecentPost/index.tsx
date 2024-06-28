import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import Pages from "@/components/shared/Pages";
import CardBlog2 from "@/components/LandingPage/Blog/CardBlog2";
import { getBlogList } from '@/components/Fetching/Blog/blog'
import CardDummy from "./CardDummy";
import Link from "next/link";
import { formattedDate } from "@/utils/blog";

export default async function RecentPost() {
  const blogs = await getBlogList();

  return (
    <section className="container mx-auto mt-[60px] md:mb-[80px] mb-10">
      <h1 className="text-dark text-2xl font-medium">Recent Blog Post</h1>
      <section className="hidden md:flex mt-10 gap-6">
        <div className="w-1/2">
          <div className="w-[558px] md:w-full h-[250px] rounded-[10px]">
            <Link href={`/blog/${blogs[0]?.id}`} >
              <Image
                src={`${blogs[0]?.image ? blogs[0].image : "/assets/images/blog.jpg"}`}
                alt="blog"
                width={558}
                height={250}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-gray-2 mt-4">
            <h5 className="md:text-[14px] text-[6px]">{blogs[0]?.user_title}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
            <h5 className="md:text-[14px] text-[6px]">{formattedDate(blogs[0]?.publishAt)}</h5>
          </div>
          <div className="flex items-start md:gap-2 my-1 md:my-4 justify-between">
            <h3 className="font-medium text-dark md:text-2xl text-[8px] md:w-[491px]">
              <Link href={`/blog/${blogs[0]?.id}`} >
                {blogs[0]?.title}
              </Link>
            </h3>
            <Link href={`/blog/${blogs[0]?.id}`}>
              <Image
                src="/assets/icons/arrow-up-right-black.svg"
                alt="arrow up"
                width={24}
                height={24}
                className="md:w-6 md:h-6 w-3 h-3"
              />
            </Link>
          </div>
          <p className="md:text-sm text-[8px] text-gray w-[182px] md:w-full">
            {blogs[0]?.body}
          </p>
          <div className="flex gap-1 mt-3 md:mt-4">
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">{blogs[0].tagblog_title}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {blogs.length === 0 ? (
            <CardDummy />
          ) : (
            blogs?.slice(1, 3).map((blog: any, index: any) => (
              <CardBlog2 key={index} blogs={blog} type="landing" />
            )))}
        </div>
      </section>
      <section className="hidden md:flex gap-4 mt-20">
        <div className="bg-blue w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-white font-extrabold text-[16px]">All</p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            Technology
          </p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            Coding
          </p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            SEO
          </p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            Music
          </p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            Engineering
          </p>
        </div>
        <div className="w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark text-[16px] hover:text-blue transition-colors duration-300">
            Testing
          </p>
        </div>
      </section>
      {/* <section className="my-5 grid grid-cols-2 gap-[10px] md:flex md:flex-wrap md:justify-between md:gap-6">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </section> */}
      <section className="my-5 grid grid-cols-2 gap-[10px] md:flex md:flex-wrap md:justify-between md:gap-6">
        {blogs?.map((blog: any, index: any) => (
          <CardBlog key={index} blogs={blog} />
        ))}
      </section>
      <Pages />
    </section>
  );
};
