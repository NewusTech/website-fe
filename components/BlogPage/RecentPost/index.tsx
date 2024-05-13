import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import Pages from "@/components/shared/Pages";

const RecentPost = () => {
  return (
    <section className="container mx-auto mt-[60px] md:mb-[80px] mb-10">
      <h1 className="text-dark text-2xl font-medium">Recent Blog Post</h1>
      <section className="hidden md:flex mt-10 gap-6">
        <div className="w-[558px]">
          <div className="w-[558px] h-[250px] rounded-[10px]">
            <Image
              src="/assets/images/blog.jpg"
              alt="blog"
              width={558}
              height={250}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex items-center gap-1.5 text-gray-2 mt-4">
            <h5 className="md:text-[14px] text-[6px]">Lorenka </h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
            <h5 className="md:text-[14px] text-[6px]"> January 13, 2024</h5>
          </div>
          <div className="flex items-start md:gap-2 my-1 md:my-4 justify-between">
            <h3 className="font-medium text-dark md:text-2xl text-[8px] md:w-[491px]">
              Lorem Ipsum Dolor Amet Amit Amon Amin
            </h3>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-3 h-3"
            />
          </div>
          <p className="md:text-sm text-[8px] text-gray w-[182px] md:w-full">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel ?
          </p>
          <div className="flex gap-1 mt-3 md:mt-4">
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">Coding</p>
            </div>
            <div className="bg-gray rounded-full px-[10px] py-1">
              <p className="text-gray-2 md:text-xs text-[6px]">UI / UX</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-[267px] h-[205px] rounded-[10px]">
              <Image
                src="/assets/images/blog.jpg"
                alt="blog"
                width={257}
                height={205}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-gray-2">
                <h5 className="md:text-[14px] text-[6px]">Lorenka </h5>
                <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
                <h5 className="md:text-[14px] text-[6px]"> January 13, 2024</h5>
              </div>
              <h3 className="my-4 font-medium text-dark md:text-2xl text-[8px] md:w-[246px]">
                Lorem Ipsum Dolor
              </h3>
              <p className="md:text-sm text-[8px] text-gray w-[249px]">
                Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
                Terabel pov astrobel ?
              </p>
              <div className="flex gap-1 mt-3 md:mt-4">
                <div className="bg-gray rounded-full px-[10px] py-1">
                  <p className="text-gray-2 md:text-xs text-[6px]">Coding</p>
                </div>
                <div className="bg-gray rounded-full px-[10px] py-1">
                  <p className="text-gray-2 md:text-xs text-[6px]">UI / UX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[267px] h-[205px] rounded-[10px]">
              <Image
                src="/assets/images/blog.jpg"
                alt="blog"
                width={257}
                height={205}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-gray-2">
                <h5 className="md:text-[14px] text-[6px]">Lorenka </h5>
                <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
                <h5 className="md:text-[14px] text-[6px]"> January 13, 2024</h5>
              </div>
              <h3 className="my-4 font-medium text-dark md:text-2xl text-[8px] md:w-[246px]">
                Lorem Ipsum Dolor
              </h3>
              <p className="md:text-sm text-[8px] text-gray w-[249px]">
                Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
                Terabel pov astrobel ?
              </p>
              <div className="flex gap-1 mt-3 md:mt-4">
                <div className="bg-gray rounded-full px-[10px] py-1">
                  <p className="text-gray-2 md:text-xs text-[6px]">Coding</p>
                </div>
                <div className="bg-gray rounded-full px-[10px] py-1">
                  <p className="text-gray-2 md:text-xs text-[6px]">UI / UX</p>
                </div>
              </div>
            </div>
          </div>
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
      <section className="my-5 grid grid-cols-2 gap-[10px] md:flex md:flex-wrap md:justify-between md:gap-6">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </section>
      <Pages />
    </section>
  );
};
export default RecentPost;
