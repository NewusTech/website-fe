import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section className="md:bg-gray-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center -mt-6 md:pt-9">
          <h4 className="text-[16px] text-tangerine">Blog</h4>
          <h2 className="text-[32px] hidden md:block font-semibold text-white">
            Blogsssss
          </h2>
        </div>
        <div className="flex justify-between items-center mt-[54px]">
          <div className="flex-col gap-6 hidden md:flex">
            <h2 className="font-medium text-[32px] text-white">
              What is Lorem Ipsum?
            </h2>
            <p className="text-sm w-[350px] text-white">
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
          <div className="hidden md:block">
            <Image
              src="/assets/images/blog.jpg"
              alt="blog"
              width={690}
              height={430}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="md:py-5 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <CardBlog type="landing" />
          <CardBlog type="landing" />
          <CardBlog type="landing" />
          <CardBlog type="landing" />
          <CardBlog type="landing" />
          <CardBlog type="landing" />
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

export default Blog;
