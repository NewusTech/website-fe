import React from 'react'
import CardDummy from './CardDummy'
import CardBlog2 from './CardBlog2'
import Link from 'next/link'
import Image from 'next/image'
import { removeHTMLTags } from '@/lib/utils'
import { formattedDate } from '@/utils/blog'

const HeaderBlog = ({ blogs, displayedBlogs }: any) => {
  return (
    <section className="hidden md:flex mt-5 xl:mt-5 2xl:mt-10 gap-3 2xl:gap-6">
      <div className="lg:w-1/2 xl:w-1/3 2xl:w-1/2">
        <div className="w-[558px] md:w-full h-[200px] rounded-[10px]">
          <Link href={`/${blogs[0]?.slug}`}>
            <Image
              src={`${blogs[0]?.image || "/assets/images/blog.jpg"}`}
              loading="lazy"
              alt="blog"
              width={558}
              height={500}
              className="w-full h-full object-cover rounded-sm"
            />
          </Link>
        </div>
        <div className="flex items-center gap-1.5 text-gray-2 mt-4">
          <h5 className="md:text-webDesk text-mobileDesk capitalize">{blogs[0]?.user_title}</h5>
          <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
          <h5 className="md:text-webDesk text-mobileDesk">{formattedDate(blogs[0]?.publishAt)}</h5>
        </div>
        <div className="flex items-start md:gap-2 my-1 md:my-1 justify-between">
          <h3 className="font-medium text-dark md:text-webJudul text-mobileJudul md:w-[491px] line-clamp-2">
            <Link href={`/${blogs[0]?.slug}`}>
              {blogs[0]?.title}
            </Link>
          </h3>
          <Link href={`/${blogs[0]?.slug}`}>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-3 h-3"
            />
          </Link>
        </div>
        <div className="relative">
          <p className="md:text-webDesk text-mobileDesk text-gray w-[182px] md:w-full line-clamp-2">
            {removeHTMLTags(blogs[0]?.body)}
            <Link href={`/${blogs[0]?.slug}`} className="absolute bottom-0 right-0 hover:underline md:text-webDesk text-mobileDesk bg-[#F4F4F4] rounded-sm px-1">
              Selengkapnya
            </Link>
          </p>
        </div>
      </div>
      <div className="xl:grid hidden xl:grid-cols-2 gap-2 w-full">
        {blogs.length === 0 ? (
          <CardDummy />
        ) : (
          displayedBlogs?.slice(1, 5).map((blog: any, index: any) => (
            <CardBlog2 key={index} blogs={blog} type="landing" />
          )))}
      </div>
      <div className="grid md:grid-cols-1 xl:hidden xl:grid-cols-4 gap-2 w-full">
        {blogs.length === 0 ? (
          <CardDummy />
        ) : (
          displayedBlogs?.slice(1, 3).map((blog: any, index: any) => (
            <CardBlog2 key={index} blogs={blog} type="landing" />
          )))}
      </div>
    </section>
  )
}

export default HeaderBlog