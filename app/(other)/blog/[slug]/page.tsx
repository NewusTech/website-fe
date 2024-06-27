import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import CardBlog from "@/components/LandingPage/Blog/CardBlog";
import { getBlogDetail, getBlogList } from "@/components/Fetching/Blog/blog";
import { formattedDate } from "@/utils/blog";


export default async function DetailBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const {
    title = "",
    keyword = "",
    excerpt = "",
    body = "",
    kategoriblog_id = "",
    kategoriblog_title = "",
    tagblog_id = "",
    tagblog_title = "",
    user_id = "",
    user_title = "",
    image = "",
    status = "",
    status_desc = "",
    publishAt = "",
    createdAt = "",
    updatedAt = ""
  } = blogDetail || {};

  const blogPaths = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blogDetail?.title, href: `/blog/${slug}` },
  ];

  const blogList = await getBlogList();

  return (
    <section className="max-w-7xl mx-auto md:my-32 mb-6 px-3 md:px-0">
      <div className="py-2">
        <Breadcrumbs paths={blogPaths} />
      </div>
      <section>
        <div>
          <h1 className="text-[12px] md:text-3xl font-bold pt-4 mb-1 md:mb-2">
            {title ? title : 'Lorem Ipsum Dolor Amet Amit Amon Amin'}
          </h1>
          <div className="flex items-center gap-1.5 text-dark py-3">
            <h5 className="md:text-[14px] text-[8px]"> {user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-dark"></div>
            <h5 className="md:text-[14px] text-[8px]">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
        </div>
        <div className="w-full h-[150px] md:w-full md:h-[400px] rounded-[6px]">
          <Image
            src={image !== null ? image : `/assets/images/blog.jpg`}
            alt="blog"
            width={1140}
            height={211}
            className="w-full h-[150px] md:h-[400px] object-cover rounded-[6px] md:rounded-[10px]"
          // className="w-full h-full object-cover rounded-[6px] md:rounded-[10px]"
          />
        </div>
        <div className="mt-3 md:mt-10 md:text-[16px] text-[10px]">
          {body ? <p className="text-justify">{body}</p> : (
            <p className="text-justify">
              <strong>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </strong>
              <br />
              <br />
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
              Kronde est So how did the classical Latin become so incoherent?
              According to McClintock, a 15th century typesetter likely scrambled
              part of Ciceros De Finibus in order to provide placeholder text to
              mockup various fonts for a type specimen book. Its difficult to
              find examples of lorem ipsum in use before Letraset made it popular
              as a dummy text in the 1960s, although McClintock says he remembers
              coming across the lorem ipsum passage in a book of old metal type
              samples. So far he hasnt relocated where he once saw the passage,
              but the popularity of Cicero in the 15th century supports the theory
              that the filler text has been used for centuries. And anyways, as
              Cecil Adams reasoned, “[Do you really] think graphic arts supply
              houses were hiring classics scholars in the 1960s?” Perhaps. But it
              seems reasonable to imagine that there was a version in use far
              before the age of Letraset. <br /> <br />
              <strong>Implementation & Testing</strong> <br /> <br />
              Lörem ipsum astrobel sar direlig. Kronde est direlig.Lörem ipsum
              astrobel sar direlig. Kronde est So how did the classical Latin
              become so incoherent? According to McClintock, a 15th century
              typesetter likely scrambled part of Ciceros De Finibus in order to
              provide placeholder text to mockup various fonts for a type specimen
              book. Its difficult to find examples of lorem ipsum in use before
              Letraset made it popular as a dummy text in the 1960s, although
              McClintock says he remembers coming across the lorem ipsum passage
              in a book of old metal type samples. So far he haof Cicero inpports
              the theory that the filler text has been used for centuries. And
              anyways, as Cecil Adams reasoned, “[Do you really] think graphic
              arts supply houses were hiring classics scholars in the 1960s?”
              Perhaps. But it seems reasonable to imagine that there was a version
              in use far before the age of Letraset Its difficult to find
              examples of lorem ipsum in use before Letraset made it popular as a
              dummy text in the 1960s, although McClintock says he remembers
              coming across the lorem ipsum passage in a book of old metal type
              samples. So far he haof Cicero inpports the theory that the filler
              text has been used for centurie
              <br />
              <br />
              Lörem ipsum astrobel sar direlig. Kronde est <br /> as Cecil Adams
              reasoned, <br />
              McClintock says he remembers coming across the lorem <br /> haof
              Cicero inpports <br /> <br /> “[Do you really] think graphic arts
              supply houses were hiring classics scholars in the 1960s?” Perhaps.
              But it seems reasonable to imagine that there was a version in use
              far before the age of Letraset Its difficult to find examples of
              lorem ipsum in use before Letraset made it popular as a dummy text
              in the 1960s, although McClintock says he remembers coming across
              the
            </p>
          )}

        </div>
        <div className="md:mt-[30px] mt-[6px]">
          <div className="hidden md:block">
            <h1 className="font-bold">Share</h1>
            <div className="md:flex gap-4 items-center mt-3">
              <Image
                src="/assets/icons/black/linkedin.svg"
                alt="place"
                width={24}
                height={24}
              />
              <Image
                src="/assets/icons/black/fb.svg"
                alt="place"
                width={24}
                height={24}
                color="black"
                className="text-black"
              />
              <Image
                src="/assets/icons/black/twitter.svg"
                alt="place"
                width={24}
                height={24}
              />
              <Image
                src="/assets/icons/black/ig.svg"
                alt="place"
                width={24}
                height={24}
              />
              <Image
                src="/assets/icons/black/link.svg"
                alt="place"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="md:mt-10 mt-[10px] flex justify-between items-center">
          <h2 className="font-medium md:text-[28px] text-[8px]">
            More Articles
          </h2>
          <div className="md:w-[916px] w-[200px] h-[2px] bg-gray-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-3 md:mt-10">
          {blogList?.map((blog: any, index: any) => (
            <CardBlog key={index} blogs={blog} />
          ))}
        </div>
      </section>
    </section>
  );
};
