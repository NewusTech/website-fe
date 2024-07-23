'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import { formattedDate } from "@/utils/blog";
import CardBlog from "@/components/BlogPage/RecentPost/CardBlog";
import CardBlogSide from "@/components/BlogPage/RecentPost/CardBlogSide";
import TagsDisplay from "@/components/BlogPage/Detail/Tags";
import SocialLink from "@/components/shared/Social/SocialLink";
import DOMPurify from 'dompurify';

const BodyContent = ({ blogDetail, blogList, dataSocials }: any) => {
  const {
    title = "",
    user_title = "",
    image = "",
    publishAt = "",
    body = "",
    altImage = ""
  } = blogDetail || {};

  const sanitizedBody = DOMPurify?.sanitize(body || 'None');

  useEffect(() => {
    const handleScroll = () => {
      const sidebar: any = document.querySelector('.sidebar');
      const mainContent: any = document.querySelector('.main-content');
      const offsetTop: any = mainContent.offsetTop;

      if (window.scrollY >= offsetTop) {
        sidebar.classList.add('static');
      } else {
        sidebar.classList.remove('static');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col gap-2 w-full">
      <div className="w-full lg:w-9/12 main-content">
        <div>
          <h1 className="text-mobileJudul md:text-webJudul font-bold py-1 md:py-2">
            {title ? title : 'Lorem Ipsum Dolor Amet Amit Amon Amin'}
          </h1>
          <div className="flex items-center gap-1.5 text-dark py-3">
            <h5 className="md:text-webDesk text-mobileDesk capitalize">{user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-dark"></div>
            <h5 className="md:text-webDesk text-mobileDesk">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
        </div>
        <div className="w-full h-[150px] md:w-full md:h-[400px] rounded-[6px] pr-0 lg:pr-5">
          <Image
            src={image || '/assets/images/blog.jpg'}
            alt={altImage || "blog"}
            width={1140}
            height={211}
            className="w-full h-[150px] md:h-[400px] object-cover rounded-[6px] md:rounded-[10px]"
          />
        </div>
        <div className="pt-3 md:pt-5 md:text-[14px] text-mobileDesk mr-0 lg:mr-5">
          <div className="prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
        </div>
        <div className="py-5">
          <h1 className="font-semibold text-mobileJudul pb-2  md:text-webJudul">Share</h1>
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
        <div className="bg-white p-5 rounded-md mr-0 lg:mr-5">
          <div className="flex gap-2 md:gap-5 items-center">
            <h2 className="font-medium md:text-webJudul text-mobileJudul text-nowrap">More Articles</h2>
            <div className="w-full h-[1px] bg-blue-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-3 md:hidden">
            {blogList?.slice(0, 2).map((blog: any, index: any) => (
              <CardBlog key={index} blogs={blog} />
            ))}
          </div>
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-5">
            {blogList?.slice(0, 3).map((blog: any, index: any) => (
              <CardBlog type='landing' key={index} blogs={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 xl:w-3/12 lg:flex flex-col gap-2 relative my-5 md:mt-0 sidebar lg:pt-20">
        <div className="bg-white p-5 rounded-md">
          <h1 className="text-webJudul font-bold text-center relative z-10">Artikel Terbaru</h1>
          <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-0 -mt-6 right-20"></div>
          <section className="my-5 grid grid-cols-1 gap-3 w-full">
            {blogList?.slice(-12).map((blog: any, index: any) => (
              <CardBlogSide key={index} blogs={blog} />
            ))}
          </section>
        </div>
        <div className="bg-white p-5 rounded-md mt-5 lg:mt-0">
          <h1 className="text-webJudul font-bold text-center relative z-20">Recent Post</h1>
          <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-6 right-20"></div>
          <section className="my-5 grid grid-cols-1 gap-3 w-full">
            {blogList?.slice(-5).map((blog: any, index: any) => (
              <CardBlogSide key={index} blogs={blog} />
            ))}
          </section>
        </div>
        <div className="bg-white p-5 rounded-md mt-5 lg:mt-0">
          <TagsDisplay blogs={blogList} />
        </div>
      </div>
    </div>
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

export default BodyContent;
