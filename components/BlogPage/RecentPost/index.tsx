'use client';

import Image from "next/image";
import CardBlog from "./CardBlog";
import Pages from "@/components/shared/Pages";
import CardBlog2 from "./CardBlog2";
import CardDummy from "./CardDummy";
import Link from "next/link";
import { formattedDate } from "@/utils/blog";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import styles from './style.module.css';
import CardBlogSide from "./CardBlogSide";
import TagsDisplay from "./Tags";

export default function RecentPost({ blogs, categories }: any) {
  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredBlogs = blogs.filter((blog: any) => {
    const matchesCategory = filter === "All" || blog.kategoriblog_title.toLowerCase() === filter.toLowerCase();
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.body.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const displayedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  // const repeatedMedias = Array(8).fill(displayedBlogs).flat(); //ganti nanti

  return (
    <main className="relative">
      <section className="px-5 md:px-10 mt-[60px] md:mb-[80px] mb-10 relative w-full">
        <div className="flex justify-center absolute inset-x-0 -top-[85px] z-10 overflow-hidden">
          <Input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white shadow-xl py-5 md:py-6 px-5 w-[300px] md:w-[700px]"
          />
        </div>
        {/* buat ketika search section ini di hide */}
        {!searchTerm && (
          <section>
            <h1 className="text-dark md:text-[24px] font-medium">Recent Blog Post</h1>
            <section className="hidden md:flex mt-10 gap-6">
              <div className="w-1/2">
                <div className="w-[558px] md:w-full h-[200px] rounded-[10px]">
                  <Link href={`/${blogs[0]?.slug}`} >
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
                    <Link href={`/${blogs[0]?.slug}`} >
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
                <p className="md:text-webDesk text-mobileDesk text-gray w-[182px] md:w-full line-clamp-2">
                  {blogs[0]?.body}
                </p>
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
          </section>
        )}
        <div className="flex md:mt-10 w-full">
          <div className="sm:w-full lg:w-8/12 xl:w-9/12">
            <section className="hidden md:flex gap-5 md:gap-10" style={{ overflowX: 'scroll', scrollbarWidth: 'thin', msOverflowStyle: 'scrollbar', overflowY: 'hidden' }}>
              {["All", ...categories.map((category: any) => category.title)].map(category => (
                <div key={category}
                  className={`w-full rounded-xl flex items-center justify-center ${filter === category ? "bg-blue md:px-10 py-2 px-5" : ""}`}
                  onClick={() => handleFilterChange(category)}
                >
                  <p className={`text-nowrap text-mobileSubjudul md:text-webSubjudul ${filter === category ? "text-white font-semibold" : "text-dark hover:text-blue transition-colors duration-300 cursor-pointer capitalize"}`}>
                    {category}
                  </p>
                </div>
              ))}
            </section>
            <section className="my-5 grid grid-cols-2 md:grid-cols-3 gap-[5px] md:flex md:flex-wrap md:flex-grow-0 xl:gap-2">
              {displayedBlogs.length > 0 ? (
                displayedBlogs.map((blog: any, index: number) => ( //ganti nanti
                  <CardBlog key={index} blogs={blog} />
                ))
              ) : (
                <div className='border shadow-lg py-10 px-5 font-bold text-center rounded-lg w-full'>
                  Coming Soon !
                </div>
              )}
            </section>
            <div className="flex justify-end w-full pr-10 pb-10 sm:pb-0">
              <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>

            {/* Mobile Side */}
            <div className="md:hidden block bg-white p-5 -m-5 rounded-md">
              <h1 className="text-webJudul font-bold relative z-20 -mt-3 py-3 ">Artikel Terbaru</h1>
              <div className="md:w-[60px] md:h-[20px] w-[61px] h-[15px] bg-tangerine absolute z-10 -mt-6 left-28"></div>
              <section className="my-5 grid grid-cols-1 gap-3 w-full">
                {blogs?.slice(-12).map((blog: any, index: number) => (
                  <CardBlogSide key={index} blogs={blog} />
                ))}
              </section>
            </div>
            <div className="block md:hidden bg-white rounded-md">
              <TagsDisplay blogs={blogs} />
            </div>

            {/* More Article */}
            <div className="hidden sm:block bg-white p-5 rounded-md mt-5">
              <div className="flex justify-between items-center gap-5 md:gap-5 relative">
                <h1 className="relative z-20 capitalize text-black text-center font-bold md:text-webJudul text-nowrap text-mobileJudul">
                  More <span className="text-blue">Artikel</span>
                </h1>
                <div className="w-full h-[1px] bg-gray-4"></div>
              </div>
              <section className="hidden my-5 xl:grid grid-cols-3 gap-3 w-full">
                {blogs?.slice(-3).map((blog: any, index: number) => (
                  <CardBlogSide key={index} blogs={blog} />
                ))}
              </section>
              <section className="xl:hidden my-5 grid grid-cols-2 gap-3 w-full">
                {blogs?.slice(-2).map((blog: any, index: number) => (
                  <CardBlogSide key={index} blogs={blog} />
                ))}
              </section>
            </div>
          </div>

          {/* Side bar web */}
          <div className="w-4/12 xl:w-3/12 px-5 lg:flex flex-col gap-4 relative hidden my-5 md:mt-0">
            <div className="bg-white p-5 rounded-md">
              <h1 className="text-webJudul font-bold text-center relative z-20 -mt-3 py-3 ">Artikel Terbaru</h1>
              <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-6 right-20"></div>
              <section className="my-5 grid grid-cols-1 gap-3 w-full">
                {blogs?.slice(0, 12).map((blog: any, index: number) => (
                  <CardBlogSide key={index} blogs={blog} />
                ))}
              </section>
            </div>
            <div className="hidden lg:block bg-white p-5 rounded-md">
              <TagsDisplay blogs={blogs} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
