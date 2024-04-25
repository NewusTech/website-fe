import Image from "next/image";
import CardBlog from "@/components/Blog/CardBlog";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section className="container mx-auto bg-gray-2">
      <div className="flex flex-col items-center pt-9">
        <h4 className="text-[16px] text-tangerine">Blog</h4>
        <h2 className="text-[32px] font-semibold text-white">Blogsssss</h2>
      </div>
      <div className="flex justify-between items-center mt-[54px]">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-[32px] text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="text-sm w-[350px] text-white">
            Lorem ipsum dolor sit amet consectetur. Sit quam ac habitant
            interdum habitasse nulla sit nibh suscipit. Nam at tempus est nibh
            ornare in ut elementum amet. Interdum consequat nulla ornare
            placerat sed aenean aenean enim. Sed vestibulum integer semper est
            sit mattis molestie.Lorem ipsum dolor sit amet consectetur. Sit quam
            ac habitant interdum habitasse nulla sit nibh suscipit. Nam at
            tempus est nibh ornare in ut elementum amet. Interdum consequat
            nulla ornare placerat sed aenean aenean enim. Sed vestibulum integer
            semper est sit mattis molestie.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/blog.jpg"
            alt="blog"
            width={690}
            height={430}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="py-5 grid grid-cols-3 gap-5 items-center">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
      <div className="flex items-center justify-center pb-[119px] mt-20">
        <Button className="bg-tangerine hover:bg-tangerine-2">
          See More Articles
        </Button>
      </div>
    </section>
  );
};

export default Blog;
