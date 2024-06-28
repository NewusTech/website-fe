import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import { Button } from "@/components/ui/button";
import { getBlogList } from "@/components/Fetching/Blog/blog";

interface BlogProps {
  id?: number,
  title?: string;
  slug?: string,
  keyword?: string,
  excerpt?: string,
  body?: string,
  kategoriblog_id?: number,
  kategoriblog_title?: string,
  tagblog_id?: number,
  tagblog_title?: string,
  user_id?: number,
  user_title?: string,
  image: any,
  status?: boolean,
  status_desc?: string,
  publishAt?: Date | string
  createdAt?: Date;
  updatedAt: Date;
}

export default async function Blog() {
  const blogList = await getBlogList();

  return (
    <section className="md:bg-gray-2">
      <div className="container md:mx-auto">
        <div className="flex flex-col items-center -mt-6 -mb-10 md:-mb-0 md:pt-9">
          <h4 className="text-[12px] md:text-[16px] text-tangerine">Blog</h4>
          <h2 className="text-[32px] hidden md:block font-semibold text-white">
            Blogssss
          </h2>
        </div>
        <div className="flex justify-between items-center w-full mt-[54px]">
          <div className="flex-col gap-6 hidden md:flex md:w-[40%]">
            <h2 className="font-medium text-[32px] text-white">
              What is Lorem Ipsum?
            </h2>
            <p className="text-sm w-[350px] text-white text-justify">
              Lorem ipsum dolor sit amet consectetur. Sit quam ac habitant
              interdum habitasse nulla sit nibh suscipit. Nam at tempus est nibh
              ornare in ut elementum amet. Interdum consequat nulla ornare
              placerat sed aenean aenean enim. Sed vestibulum integer semper est
              sit mattis molestie.Lorem ipsum dolor sit amet consectetur. Sit
              quam ac habitant interdum habitasse nulla sit nibh suscipit. Nam
              at tempus est nibh ornare in ut elementum amet. Interdum consequat
              nulla ornare placerat sed aenean aenean enim. Sed vestibulum
              integer semper est sit mattis molestie.
            </p>
          </div>
          <div className="hidden md:block md:w-[60%]">
            <Image
              src="/assets/images/blog.jpg"
              alt="blog"
              width={690}
              height={430}
              className="rounded-xl w-full md:pb-3"
            />
          </div>
        </div>
        <div className="md:py-5 md:-mr-[45px] grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {blogList?.map((blog: any, i: number) => (
            <CardBlog type="landing" key={i} blogs={blog} />
          ))}
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0 md:pb-[119px] mt-5 md:mt-20">
          <Button className="h-[20px] md:h-[51px] bg-tangerine hover:bg-tangerine-2 text-[8px] md:text-[16px]">
            See More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
