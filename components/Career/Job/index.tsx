'use client'

import React, { useState } from 'react';
import CardJob from './CardJob';
import NotFound from '@/components/shared/NotFound';

interface Job {
  JobCategory: any;
  category: string;
  id: number;
  title: string;
  description: string;
  salary: string | number;
  status: string;
}

interface Category {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface JobProps {
  dataJobs: Job[];
  categoryJobs: Category[];
}

const Job: React.FC<JobProps> = ({ dataJobs, categoryJobs }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredJobs = selectedCategory === 'All'
    ? dataJobs
    : dataJobs.filter(job => job.JobCategory.title === selectedCategory);

  return (
    <section className='pb-20'>
      <div className="w-full flex justify-between md:justify-start gap md:gap-6 flex-wrap md:overflow-hidden pb-4 md:pb-0 md:pt-10">
        <div
          className={`bg-blue w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[16px] md:rounded-[16px] flex items-center justify-center py-3 px-10 cursor-pointer ${selectedCategory === 'All' ? 'bg-blue text-white' : 'bg-white text-dark'
            }`}
          onClick={() => setSelectedCategory('All')}
        >
          <p className="font-bold text-mobileSubjudul md:text-webSubjudul whitespace-nowrap md:whitespace-normal">
            All
          </p>
        </div>
        {categoryJobs.map((category) => (
          <div
            key={category.id}
            className={`w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10 cursor-pointer ${selectedCategory === category.title ? 'bg-blue text-white' : 'bg-white text-dark'
              }`}
            onClick={() => setSelectedCategory(category.title)}
          >
            <p className="font-[500] text-mobileSubjudul md:text-webSubjudul hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
              {category.title}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className='md:pt-6 flex flex-col gap-4'>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className='md:pt-6'>
                <CardJob
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  salary={job.salary}
                  status={job.status}
                />
              </div>
            ))
          ) : (
            <div className='md:pt-10'>
              <NotFound />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Job;
