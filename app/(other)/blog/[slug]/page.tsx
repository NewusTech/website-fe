import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import CardBlog from "@/components/BlogPage/RecentPost/CardBlog";
import { getBlogDetail, getBlogList } from "@/components/Fetching/Blog/blog";
import { formattedDate } from "@/utils/blog";
import CardBlogSide from "@/components/BlogPage/RecentPost/CardBlogSide";
import { getSocialMedia } from "@/components/Fetching/Contact/contact";
import SocialLink from "@/components/shared/Social/SocialLink";
import TagsDisplay from "@/components/BlogPage/RecentPost/Tags";
export const dynamic = 'force-dynamic';

export default async function DetailBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const dataSocials = await getSocialMedia()
  const blogList = await getBlogList();

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
  } = blogDetail[0] || {};

  const blogPaths = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: title, href: `/blog/${slug}` },
  ];

  return (
    <section className="max-w-7xl mx-auto md:my-32 mb-6 px-3 md:px-0">
      <div className="py-2">
        <Breadcrumbs paths={blogPaths} />
      </div>
      <section className="flex gap-2 w-full">
        <div className="w-9/12">
          <div>
            <h1 className="text-mobileJudul md:text-webJudul font-bold py-1 md:py-2">
              {title ? title : 'Lorem Ipsum Dolor Amet Amit Amon Amin'}
            </h1>
            <div className="flex items-center gap-1.5 text-dark py-3">
              <h5 className="md:text-webDesk text-mobileDesk capitalize"> {user_title ? user_title : 'Lorenka'}</h5>
              <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-dark"></div>
              <h5 className="md:text-webDesk text-mobileDesk">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
            </div>
          </div>
          <div className="w-full h-[150px] md:w-full md:h-[400px] rounded-[6px]">
            <Image
              src={image ? image : `/assets/images/blog.jpg`}
              alt="blog"
              width={1140}
              height={211}
              className="w-full h-[150px] md:h-[400px] object-cover rounded-[6px] md:rounded-[10px]"
            />
          </div>
          <div className="mt-3 md:mt-10 md:text-webDesk text-mobileDesk">
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
          <div className="md:pt-[30px] pt-3">
            <h1 className="font-semibold text-mobileJudul pb-3  md:text-webJudul">Share</h1>
            <div className="flex gap-4 items-center">
              {dataSocials?.map((social: any) => (
                <SocialLink
                  key={social.id}
                  href={social.link}
                  src={getIconSrc(social.title)}
                  alt={social.title.charAt(0).toUpperCase() + social.title.slice(1)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="md:pt-10 pt-5 flex gap-2 md:gap-5 items-center">
              <h2 className="font-medium md:text-webJudul text-mobileJudul text-nowrap">
                More Articles
              </h2>
              <div className="w-full h-[1px] bg-blue-2"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-3 md:hidden">
              {blogList?.slice(0, 2).map((blog: any, index: any) => (
                <CardBlog key={index} blogs={blog} />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-5 py-3">
              {blogList?.slice(0, 3).map((blog: any, index: any) => (
                <CardBlog type="landing" key={index} blogs={blog} />
              ))}
            </div>
          </div>
          {/* Mobile Side */}
          <div className="md:hidden block bg-white rounded-md">
            <div className="md:mt-10 mt-[10px] flex gap-2 md:gap-5 items-center">
              <h2 className="font-medium md:text-webJudul text-mobileJudul text-nowrap">
                Posts
              </h2>
              <div className="w-full h-[1px] bg-blue-2"></div>
            </div>
            <section className="my-5 grid grid-cols-1 gap-3 w-full">
              {blogList?.slice(0, 5).map((blog: any, index: number) => (
                <CardBlogSide key={index} blogs={blog} />
              ))}
            </section>
          </div>

          <div className="md:hidden block bg-white rounded-md">
            <div className="md:mt-10 mt-[10px] flex gap-2 md:gap-5 items-center">
              <h2 className="font-medium md:text-webJudul text-mobileJudul text-nowrap">
                Artikel Terbaru
              </h2>
              <div className="w-full h-[1px] bg-blue-2"></div>
            </div>
            {/* <h1 className="text-webJudul font-bold relative z-20 "></h1>
          <div className="md:w-[60px] md:h-[20px] w-[61px] h-[15px] bg-tangerine absolute z-10 -mt-6 left-28"></div> */}
            <section className="my-5 grid grid-cols-1 gap-3 w-full">
              {blogList?.slice(-5).map((blog: any, index: number) => (
                <CardBlogSide key={index} blogs={blog} />
              ))}
            </section>
          </div>
        </div>
        <div className="w-4/12 xl:w-3/12 lg:flex flex-col gap-2 relative hidden my-5 md:mt-0">
          <div className="p-5 rounded-md">
            <h1 className="text-webJudul font-bold text-center relative z-20 -mt-3 py-3 ">Artikel Terbaru</h1>
            <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-6 right-20"></div>
            <section className="my-5 grid grid-cols-1 gap-3 w-full">
              {blogList?.slice(-12).map((blog: any, index: number) => (
                <CardBlogSide key={index} blogs={blog} />
              ))}
            </section>
          </div>
          <div className="p-5 rounded-md">
            <h1 className="text-webJudul font-bold text-center relative z-20 py-3 ">Recent Post</h1>
            <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-6 right-20"></div>
            <section className="my-5 grid grid-cols-1 gap-3 w-full">
              {blogList?.slice(-5).map((blog: any, index: number) => (
                <CardBlogSide key={index} blogs={blog} />
              ))}
            </section>
          </div>
          <div className="hidden lg:block bg-white p-5 rounded-md">
            <TagsDisplay blogs={blogList} />
          </div>
        </div>
      </section>
    </section>
  );
};

const getIconSrc = (title: any) => {
  switch (title.toLowerCase()) {
    case 'facebook':
      return '/assets/icons/black/fb.svg';
    case 'twitter':
      return '/assets/icons/black/twitter.svg';
    case 'linkedin':
      return '/assets/icons/black/linkedin.svg';
    case 'instagram':
      return '/assets/icons/black/instagram.svg';
    case 'tiktok':
      return '/assets/icons/black/tiktok.svg';
    default:
      return '/assets/icons/black/default.svg';
  }
};