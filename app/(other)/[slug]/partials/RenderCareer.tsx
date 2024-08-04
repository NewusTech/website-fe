import DetailCareer from "@/components/Career/DetailCareer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default function RenderCareer({ jobDetail }: { jobDetail: any }) {
  const careerPaths = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
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
  );
}
