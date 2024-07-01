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

export default function TabsProject({ portfolios }: { portfolios: Project[] }) {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Website Development');
  const [categories, setCategories] = useState<string[]>(['Website Development']);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const projects: Project[] = portfolios;
      setProjectList(projects);

      const uniqueCategories: string[] = Array.from(new Set(projects.map(project => project.Kategoriportofolio.title)));
      setCategories([...uniqueCategories]);
    }
    fetchData();
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
      <h1 className="text-blue font-semibold text-[12px] md:text-[32px]">
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
          <p className="text-gray text-[8px] md:text-[16px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel sar direlig.
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-10 ">
            <div className="gap-4 md:flex hidden">
              {categories.map((category) => (
                <Button
                  key={category}
                  className={`bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category ? "bg-blue text-white" : ""
                    }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
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
            <div className="gap-2 md:hidden flex">
              {categories.map((category) => (
                <Button
                  key={category}
                  className={`bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category ? "bg-blue text-white" : ""
                    }`}
                  size="xs"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {paginatedProjects?.map((project, index) => (
            <CardListProject key={index} projects={project} />
          ))}
          <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </TabsContent>
        <TabsContent value="square">
          <p className="text-gray text-[8px] md:text-[16px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel sar direlig.
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-10 ">
            <div className="gap-4 md:flex hidden">
              {categories.map((category) => (
                <Button
                  key={category}
                  className={`bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category ? "bg-blue text-white" : ""
                    }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
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
            <div className="gap-2 md:hidden flex">
              {categories.map((category) => (
                <Button
                  key={category}
                  className={`bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue ${selectedCategory === category ? "bg-blue text-white" : ""
                    }`}
                  size="xs"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 flex-wrap flex-grow-0 justify-center mb-[10px] w-full">
            {paginatedProjects?.map((project, index) => (
              <CardSquareProject key={index} projects={project} />
            ))}
          </div>
          <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
