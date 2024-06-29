import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import { Button } from "@/components/ui/button";
import { getBlogList } from "@/components/Fetching/Blog/blog";
import Link from "next/link";

interface BlogProps {
  id: number,
  title: string;
  slug: string,
  keyword: string,
  excerpt: string,
  body: string,
  kategoriblog_id: number,
  kategoriblog_title: string,
  tagblog_id: number,
  tagblog_title: string,
  user_id: number,
  user_title: string,
  image: any,
  status: boolean,
  status_desc: string,
  publishAt: Date | string,
  createdAt: Date;
  updatedAt: Date;
}

export default async function Blog() {
  const blogList = await getBlogList();
  if (!blogList.length) {
    return <p>No blogs available</p>;
  }

  const lastBlog = blogList[blogList.length - 1];
  const remainingBlogs = blogList.slice(0, -1);

  return (
    <section className="md:bg-gray-2 py-10">
      <div className="container md:mx-auto">
        <div className="flex flex-col items-center md:-mt-0 -mb-8 md:-mb-0 md:pt-9">
          <h4 className="text-[12px] md:text-[16px] text-tangerine">Blog</h4>
          <h2 className="text-[32px] hidden md:block font-semibold text-white">
            Blogssss
          </h2>
        </div>
        <div className="flex justify-between items-center w-full mt-[54px]">
          <div className="flex-col gap-6 hidden md:flex md:w-[40%]">
            <h2 data-aos="zoom-in" className="font-medium text-[32px] text-white">
              {lastBlog.title}
            </h2>
            <p data-aos="zoom-in" className="text-sm w-[350px] text-white text-justify">
              {lastBlog.body}
            </p>
          </div>
          <div data-aos='fade-right' className="hidden md:block md:w-[60%] rounded-xl">
            <Image
              data-aos="zoom-in"
              src={lastBlog.image}
              alt={lastBlog.title}
              width={690}
              height={430}
              className="rounded-xl w-full bg-cover object-cover"
            />
          </div>
        </div>
        <div className="md:py-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-center">
          {blogList?.slice(0, 3).map((blog: BlogProps, i: number) => (
            <CardBlog type="landing" key={i} blogs={blog} />
          ))}
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0 md:pb-[119px] mt-5 md:mt-20">
          <Link href='/blog'>
            <Button className="h-[20px] md:h-[51px] bg-tangerine hover:bg-tangerine-2 text-[8px] md:text-[16px]">
              See More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
