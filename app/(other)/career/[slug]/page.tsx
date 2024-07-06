import DetailCareer from "@/components/Career/DetailCareer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import React from 'react'
export const dynamic = 'force-dynamic';

const careerPaths = [
  { label: 'Home', href: '/' },
  { label: 'Career', href: '/career' },
  { label: 'Frontend Developer', href: '/career/frontend-developer' },
];

const careerData = {
  title: 'Frontend Developer',
  description: [
    'Design, develop and build highly scalable, cross-platform, and high-performance web/mobile applications using React and React-Native.',
    'Apply design patterns and design principles to produce maintainable and easy to extend code.',
    'Perform issue analysis, root-cause analysis, and issue resolution.',
    'Write and manage technical documentation.'
  ],
  requirements: [
    'Strong proficiency in Typescript.',
    'Outstanding skills in React and React Native.',
    'Strong understanding of user-friendly experience & interface, pay attention to details, and proficiency in HTML5, CSS3, React Native styling, and animation.',
    'Experience in responsive web and PWA.',
    'Extensive knowledge in using RESTful and GraphQL.',
    'Experience working with Redux, Redux-Saga, Redux-Thunk, or MobX.',
    'Have experience/exposure to cloud services (AWS/GCP).',
    'Extensive knowledge in unit testing.',
    'Ability to effectively communicate problems and solutions to the different team members.',
    'Firm grasp in object-oriented, functional, or event-driven programming practices.',
    'Good cross-team collaboration and communication skills.',
    'Willingness to learn and adapt to different technologies.'
  ],
  prefered: [
    'Experience in Native Modules development with Java/Kotlin or Swift.',
    'Understands web and mobile applications profiling and able to improve the performance of components.',
    'Experienced in Agile/Scrum development.'
  ],
  benefits: [
    'Competitive Salary',
    'WFH',
    'Technical Certification (AWS, GCP, Scrum)',
    'WFH/WFO Allowances',
    'BPJS Kesehatan & BPJS Ketenagakerjaan',
    'Medical',
    'Working Facilities (Laptop, Monitor, Table and Chair)'
  ]
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="min-h-[1200px] bg-white">
      <div className="max-w-7xl mx-auto pt-4 md:pt-32 px-8 pb-10 md:pb-32 md:px-3">
        <Breadcrumbs paths={careerPaths} />
        <DetailCareer
          title={careerData.title}
          description={careerData.description}
          requirements={careerData.requirements}
          prefered={careerData.prefered}
          benefits={careerData.benefits}
        />
      </div>
    </section>
  )
}