'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import GridIcon from '@/public/assets/icons/GridIcon';
import ListIcon from '@/public/assets/icons/ListIcon';
import Pages from '../shared/Pages';
import CardSquarePorto from './CardSquarePorto';
import CardListPorto from './CardListPorto';

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

type IndexProps = {
  portfolios: Project[];
};

export default function Index({ portfolios }: IndexProps) {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const projects: Project[] = portfolios;
      setProjectList(projects);

      const uniqueCategories: string[] = Array.from(new Set(projects.map(project => project.Kategoriportofolio.title)));
      setCategories(['All', ...uniqueCategories]);
    }
    fetchData();
  }, [portfolios]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  const filteredProjects = projectList.filter(project => {
    const matchCategory = selectedCategory === 'All' || project.Kategoriportofolio.title === selectedCategory;
    const matchSearchTerm = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.body.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearchTerm;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <section>
      <div className="flex justify-center gap-[6px] md:gap-6 px-7 flex-wrap md:overflow-hidden pt-4 md:pt-10">
        {categories.map((category: string, index: number) => (
          <div
            key={index}
            className={` h-[14px] md:w-auto md:h-[43px] cursor-pointer rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-5 md:px-10 ${selectedCategory === category ? 'bg-blue' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            <p className={`text-${selectedCategory === category ? 'white' : 'dark'} font-[500] text-[10px] md:text-[16px] transition-colors duration-300 whitespace-nowrap md:whitespace-normal`}>
              {category}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-4 md:pt-12 pb-10 md:pb-20">
        <div>
          <Tabs defaultValue="list" className="px-4">
            <div className="flex justify-between items-center">
              <div className="flex w-full md:w-[773px] h-[24px] md:h-[40px] items-center border-[0.5px] rounded-md md:rounded-lg border-dark">
                <div className="flex items-center justify-center pl-3 border-0 rounded-none">
                  <Image
                    src="/assets/icons/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                    className="z-30"
                  />
                </div>
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="flex-grow h-full py-2 pl-2 md:pl-4 pr-2 border-0 rounded-none"
                />
              </div>
              <TabsList>
                <TabsTrigger value="list" className="ml-2 pb-[3px] pt-[3px]">
                  <ListIcon color="w-[10px] md:w-[25px]" />
                </TabsTrigger>
                <TabsTrigger value="square" className="ml-2 pb-[5.5px] pt-[5px]">
                  <GridIcon color="w-[10px] md:w-[25px]" />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="list">
              <div className="flex flex-col md:flex-col gap-4 my-4 md:my-7 ">
                {paginatedProjects.map((project: any, index: number) => (
                  <CardListPorto key={index} projects={project} />
                ))}
              </div>
              <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </TabsContent>
            <TabsContent value="square">
              <div className="flex gap-4 md:gap-[20px] flex-grow flex-wrap my-2 md:my-7 mb-10 justify-center">
                {paginatedProjects.map((project: any, index: number) => (
                  <CardSquarePorto key={index} projects={project} />
                ))}
              </div>
              <Pages currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
