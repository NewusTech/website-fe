import React from 'react'
import CardJob from './CardJob'

const Job = () => {
  const jobData = [
    {
      id: 1,
      title: 'Product Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      minSalary: 10000000,
      maxSalary: 15000000,
      status: ['Full Remote', 'Full Time']
    },
    {
      id: 2,
      title: 'Fullstack Developer',
      description: 'Join our development team as a Fullstack Developer to build robust web applications.',
      minSalary: 10000000,
      maxSalary: 15000000,
      status: ['Full Remote', 'Full Time']
    },
    {
      id: 3,
      title: 'Sales Marketing',
      description: 'We need a Sales Marketing expert to help grow our customer base and drive sales.',
      minSalary: 10000000,
      maxSalary: 15000000,
      status: ['On Site', 'Full Time']
    },
    {
      id: 4,
      title: 'Frontend Developer',
      description: 'We are looking for a skilled Frontend Developer to enhance our user interfaces.',
      minSalary: 10000000,
      maxSalary: 15000000,
      status: ['Full Remote', 'Full Time']
    }
  ];

  return (
    <section className='pb-20'>
      <div className="flex justify-center gap-[6px] md:gap-6 px-7 flex-wrap md:overflow-hidden pt-7 md:pt-10">
        <div className="bg-blue w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-white font-extrabold text-[6px] md:text-[16px] whitespace-nowrap md:whitespace-normal">
            All
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Mobile Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Web App Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Website Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Digital Marketing
          </p>
        </div>
      </div>

      <div className='md:pt-6'>
        {jobData.map((job) => (
          <div key={job.title} className='md:pt-6'>
            <CardJob
              id={job.id}
              title={job.title}
              description={job.description}
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
              status={job.status}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Job