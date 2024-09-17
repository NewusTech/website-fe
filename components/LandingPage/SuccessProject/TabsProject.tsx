'use client'

import { useState, useEffect, ChangeEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardListProject from "@/components/LandingPage/SuccessProject/CardListProject";
import CardSquareProject from "@/components/LandingPage/SuccessProject/CardSquareProject";
import Pages from "@/components/shared/Pages";
import GridIcon from "@/public/assets/icons/GridIcon";
import ListIcon from "@/public/assets/icons/ListIcon";

interface Project {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  excerpt: string;
  body: string;
  image: string;
  portfolioYear: string;
  webLink: string;
  appsLink: string;
  KategoriportofolioId: number;
  TagportofolioId: number;
  createdAt: string;
  updatedAt: string;
  Kategoriportofolio: {
    title: string;
    createdAt: string;
  };
  Tagportofolio: {
    title: string;
    createdAt: string;
  };
}

interface Category {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface TabsProjectProps {
  portfolios: Project[];
  categories: Category[];
}

const TabsProject: React.FC<TabsProjectProps> = ({ portfolios, categories }) => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Website Development');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;

  useEffect(() => {
    setProjectList(portfolios);
  }, [portfolios]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  const filteredProjects = projectList.filter(project => {
    const matchCategory = selectedCategory === 'Website Development' || project.Kategoriportofolio.title === selectedCategory;
    const matchSearchTerm = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.body.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearchTerm;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="relative">
      <h1 className="text-blue font-semibold text-mobileJudul md:text-[20px]">
        Success Project
      </h1>
      <Tabs defaultValue="list" className="min-w-screen">
        <TabsList className="flex justify-end -mt-7 md:mt">
          <TabsTrigger value="list" className="ml-2 pb-[3px] pt-[3px]">
            <ListIcon color="w-[10px] md:w-[25px]" />
          </TabsTrigger>
          <TabsTrigger value="square" className="ml-2 pb-[5.5px] pt-[5px]">
            <GridIcon color="w-[10px] md:w-[25px]" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <p className="text-gray text-mobileSubjudul md:text-webSubjudul text-nowrap">
            See How We Elevate Businesses. Explore Our Success Projects.
          </p>
          <div className="flex flex-col xl:flex-row my-4 md:my-5 ">
            <div className="gap-4 xl:flex hidden md:pr-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  className={`bg-transparent border text-webSubjudul border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category.title ? "bg-blue text-white" : ""}`}
                  onClick={() => handleCategoryChange(category.title)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
            <div className="flex w-full pt-2 xl:pt-0">
              <Input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="bg-white border border-dark border-r-0 rounded-r-none"
                aria-label="search-project"
              />
              <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-l-0 rounded-r-[6px]">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={30}
                  height={30}
                  className="mr-3"
                />
              </div>
            </div>
            <div className="gap-2 pt-2 xl:hidden flex overflow-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  className={`bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue text-mobileSubjudul py-2 ${selectedCategory === category.title ? "bg-blue text-white" : ""}`}
                  size="sm"
                  onClick={() => handleCategoryChange(category.title)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
          {paginatedProjects.map((project, index) => (
            <CardListProject key={index} projects={project} />
          ))}
          <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </TabsContent>
        <TabsContent value="square">
          <p className="text-gray text-mobileSubjudul md:text-webSubjudul">
            See How We Elevate Businesses. Explore Our Success Projects.
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-5 ">
            <div className="gap-4 md:flex hidden">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  className={`bg-transparent border text-mobileSubjudul md:text-webSubjudul border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category.title ? "bg-blue text-white" : ""}`}
                  onClick={() => handleCategoryChange(category.title)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
            <div className="flex w-full">
              <Input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="bg-white border border-dark border-r-0 rounded-r-none"
              />
              <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-l-0 rounded-r-[6px]">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={30}
                  height={30}
                  className="mr-3"
                />
              </div>
            </div>
            <div className="gap-2 md:hidden flex overflow-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  className={`bg-transparent border text-mobileSubjudul md:text-webSubjudul border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category.title ? "bg-blue text-white" : ""}`}
                  size="sm"
                  onClick={() => handleCategoryChange(category.title)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 flex-wrap flex-grow-0 justify-center mb-[10px] w-full">
            {paginatedProjects.map((project, index) => (
              <CardSquareProject key={index} projects={project} />
            ))}
          </div>
          <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsProject;
