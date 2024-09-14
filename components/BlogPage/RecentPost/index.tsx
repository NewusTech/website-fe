"use client";

import CardBlog, { BlogProps } from "./CardBlog";
import Pages from "@/components/shared/Pages";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import CardBlogSide from "./CardBlogSide";
import TagsDisplay from "./Tags";
import HeaderBlog from "./HeaderBlog";
import { useSearchParams } from "next/navigation";

export default function RecentPost({ blogs, categories, recomendations }: any) {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");

  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const itemsPerPageMobile = 8;

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredBlogs = blogs.filter((blog: BlogProps) => {
    // Memeriksa kecocokan kategori dengan filter yang diberikan
    const matchesCategory = filter === "All" || blog.kategoriblog_title.toLowerCase() === filter.toLowerCase();
  
    // Memeriksa kecocokan title atau body dengan searchTerm
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      blog.body.toLowerCase().includes(searchTerm.toLowerCase());
  
    // Memeriksa apakah ada tag yang sesuai dengan searchTerm
    const matchesTags = blog.tags.some(tag => tag.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
    // Memeriksa apakah ada tag yang sesuai dengan tag dari searchParams
    const matchesSearchParamTag = tag 
      ? blog.tags.some(blogTag => blogTag.title.toLowerCase() === tag.toLowerCase())
      : true; // Jika tag dari searchParams tidak ada, anggap cocok
  
    // Menggabungkan semua kondisi
    return matchesCategory && (matchesSearch || matchesTags) && matchesSearchParamTag;
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) as [];
  const displayedBlogsMobile = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPageMobile,
    currentPage * itemsPerPageMobile
  );
  // const repeatedMedias = Array(8).fill(displayedBlogs).flat(); //ganti nanti

  return (
    <main className="relative">
      <section className="px-5 2xl:px-10 mt-[40px] md:mb-10 mb-5 relative w-full">
        <div className="flex justify-center absolute inset-x-0 -top-[63px] xl:-top-[67px] z-10 overflow-hidden">
          <Input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white shadow-xl py-5 md:py-6 px-5 w-[300px] md:w-[700px]"
          />
        </div>
        {/* buat ketika search section ini di hide */}
        {!searchTerm && !tag && (
          <section>
            <h1 className="text-dark md:text-[24px] font-medium pt-5">
              Recent Blog Post
            </h1>
            {displayedBlogsMobile.length > 0 && (
              <HeaderBlog blogs={blogs} displayedBlogs={blogs} />
            )}
          </section>
        )}
        <div className="flex md:pt-8 w-full">
          <div className="sm:w-full lg:w-8/12 xl:w-9/12">
            <section
              className="hidden md:flex gap-5 md:gap-10"
              style={{
                overflowX: "scroll",
                scrollbarWidth: "thin",
                msOverflowStyle: "scrollbar",
                overflowY: "hidden",
              }}
            >
              {[
                "All",
                ...categories.map((category: any) => category.title),
              ].map((category) => (
                <div
                  key={category}
                  className={`rounded-xl flex items-center justify-center ${filter === category ? "bg-blue md:px-10 py-2 px-5" : ""}`}
                  onClick={() => handleFilterChange(category)}
                >
                  <p
                    className={`text-nowrap text-mobileSubjudul md:text-webSubjudul ${filter === category ? "text-white font-semibold" : "text-dark hover:text-blue transition-colors duration-300 cursor-pointer capitalize"}`}
                  >
                    {category}
                  </p>
                </div>
              ))}
            </section>
            {/* Mobile */}
            <section className="my-5 grid grid-cols-2 md:grid-cols-3 gap-[5px] md:hidden md:flex-wrap md:flex-grow-0 xl:gap-2">
              {displayedBlogsMobile.length > 0 ? (
                displayedBlogsMobile?.map((blog: any, index: number) => (
                  <CardBlog key={index} blogs={blog} />
                ))
              ) : (
                <div className="border shadow-lg py-10 px-5 font-bold text-center rounded-lg w-full">
                  Coming Soon !
                </div>
              )}
            </section>
            {/* MD ketas */}
            <section className="hidden my-5 gap-[10px] md:grid md:grid-cols-3 md:flex-wrap md:flex-grow-0 xl:gap-5">
              {displayedBlogs.length > 0 ? (
                displayedBlogs.map(
                  (
                    blog: any,
                    index: number //ganti nanti
                  ) => <CardBlog key={index} blogs={blog} />
                )
              ) : (
                <div className="border shadow-lg py-10 px-5 font-bold text-center rounded-lg w-full">
                  Coming Soon !
                </div>
              )}
            </section>
            <div className="flex justify-end w-full pr-10 pb-10 sm:pb-0">
              <Pages
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Mobile Side */}
            <div className="md:hidden block bg-white p-5 mb-5 rounded-md">
              <h1 className="text-webJudul font-bold relative z-20 -mt-3 py-3 ">
                Rekomendasi Artikel
              </h1>
              <div className="md:w-[60px] md:h-[20px] w-[61px] h-[15px] bg-tangerine absolute z-10 -mt-6 left-28"></div>
              <section className="my-5 grid grid-cols-1 gap-3 w-full">
                {recomendations
                  ?.slice(-12)
                  .reverse()
                  .map((blog: any, index: number) => (
                    <CardBlogSide key={index} blogs={blog} />
                  ))}
              </section>
            </div>
            <div className="block md:hidden bg-white p-5 rounded-md overflow-y-scroll scrollbar-thin">
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
                {blogs
                  ?.slice(-3)
                  .reverse()
                  .map((blog: any, index: number) => (
                    <CardBlogSide key={index} blogs={blog} />
                  ))}
              </section>
              <section className="xl:hidden my-5 grid grid-cols-2 gap-3 w-full">
                {blogs
                  ?.slice(-2)
                  .reverse()
                  .map((blog: any, index: number) => (
                    <CardBlogSide key={index} blogs={blog} />
                  ))}
              </section>
            </div>
          </div>

          {/* Side bar web */}
          <div className="w-4/12 xl:w-3/12 lg:flex flex-col gap-4 relative hidden ml-3 my-5 md:mt-0">
            <div className="bg-white p-5 rounded-md">
              <h1 className="text-webJudul font-bold text-center relative z-20 py-3 ">
                Rekomendasi Artikel
              </h1>
              <div className="md:w-[60px] md:h-[20px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-9 right-16"></div>
              <section className="my-5 grid grid-cols-1 gap-3 w-full">
                {recomendations
                  ?.slice(-12)
                  .reverse()
                  .map((blog: any, index: number) => (
                    <CardBlogSide key={index} blogs={blog} />
                  ))}
              </section>
            </div>
            <div className="hidden lg:block bg-white p-5 rounded-md xl:h-[300px] 2xl:h-[313px] overflow-y-scroll scrollbar-thin">
              <TagsDisplay blogs={blogs} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
