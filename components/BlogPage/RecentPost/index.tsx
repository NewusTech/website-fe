'use client';

import Image from "next/image";
import CardBlog from "./CardBlog";
import Pages from "@/components/shared/Pages";
import CardBlog2 from "./CardBlog2";
import CardDummy from "./CardDummy";
import Link from "next/link";
import { formattedDate } from "@/utils/blog";
import { useState, useEffect } from "react";
import NotFound from "@/components/shared/NotFound";
import { Input } from "@/components/ui/input";

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

  return (
    <section className="container mx-auto mt-[60px] md:mb-[80px] mb-10 relative">
      <div className="md:w-full right-14 md:right-0 flex justify-center absolute -top-[85px] z-10">
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
          <h1 className="text-dark md:text-2xl font-medium">Recent Blog Post</h1>
          <section className="hidden md:flex mt-10 gap-6">
            <div className="w-1/2">
              <div className="w-[558px] md:w-full h-[250px] rounded-[10px]">
                <Link href={`/blog/${blogs[0]?.id}`} >
                  <Image
                    src={`${blogs[0]?.image ? blogs[0].image : "/assets/images/blog.jpg"}`}
                    loading="lazy"
                    alt="blog"
                    width={558}
                    height={250}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-1.5 text-gray-2 mt-4">
                <h5 className="md:text-[14px] text-[6px]">{blogs[0]?.user_title}</h5>
                <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
                <h5 className="md:text-[14px] text-[6px]">{formattedDate(blogs[0]?.publishAt)}</h5>
              </div>
              <div className="flex items-start md:gap-2 my-1 md:my-4 justify-between">
                <h3 className="font-medium text-dark md:text-2xl text-[8px] md:w-[491px]">
                  <Link href={`/blog/${blogs[0]?.id}`} >
                    {blogs[0]?.title}
                  </Link>
                </h3>
                <Link href={`/blog/${blogs[0]?.id}`}>
                  <Image
                    src="/assets/icons/arrow-up-right-black.svg"
                    alt="arrow up"
                    width={24}
                    height={24}
                    className="md:w-6 md:h-6 w-3 h-3"
                  />
                </Link>
              </div>
              <p className="md:text-sm text-[8px] text-gray w-[182px] md:w-full">
                {blogs[0]?.body}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {blogs.length === 0 ? (
                <CardDummy />
              ) : (
                blogs?.slice(1, 3).map((blog: any, index: any) => (
                  <CardBlog2 key={index} blogs={blog} type="landing" />
                )))}
            </div>
          </section>
        </section>
      )}
      <section className="hidden md:flex gap-4 mt-10">
        {["All", ...categories.map((category: any) => category.title)].map(category => (
          <div key={category}
            className={`md:px-10 h-[43px] rounded-[16px] flex items-center justify-center ${filter === category ? "bg-blue" : ""}`}
            onClick={() => handleFilterChange(category)}
          >
            <p className={`text-[16px] ${filter === category ? "text-white font-semibold" : "text-dark hover:text-blue transition-colors duration-300 cursor-pointer capitalize"}`}>
              {category}
            </p>
          </div>
        ))}
      </section>
      <section className="my-5 grid grid-cols-2 gap-[10px] md:flex md:flex-wrap md: md:flex-grow-0 md:gap-6">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog: any, index: number) => (
            <CardBlog key={index} blogs={blog} />
          ))
        ) : (
          <div className='border shadow-lg py-10 px-5 font-bold text-center rounded-lg w-full'>
            Coming Soon !
          </div>
        )}
      </section>
      <div className="flex flex-end w-full pr-10">
        <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  );
}
