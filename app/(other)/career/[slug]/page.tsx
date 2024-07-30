import DetailCareer from "@/components/Career/DetailCareer";
import { getobDetail } from "@/components/Fetching/Career/career";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import React from 'react'
export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { slug: number } }) {
  const { slug } = params;
  const jobDetail = await getobDetail(slug);
  const careerPaths = [
    { label: 'Home', href: '/' },
    { label: 'Career', href: '/career' },
    { label: jobDetail?.title },
  ];


  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto pt-4 md:pt-32 px-5 md:px-8 pb-10 lg:pb-20 2xl:pb-32">
        <Breadcrumbs paths={careerPaths} />
        <DetailCareer
          title={jobDetail?.title}
          description={jobDetail?.description}
          coverLetter={jobDetail?.coverLetter}
        />
      </div>
    </section>
  )
}