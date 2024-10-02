import { getBlogDetail } from "@/components/Fetching/Blog/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/constants/constants";
import { getobDetail } from "@/components/Fetching/Career/career";
import RenderBlog from "./partials/RenderBlog";
import RenderCareer from "./partials/RenderCareer";
import { getProjectDetail } from "@/components/Fetching/Portfolio/port";
import RenderPortofolio from "./partials/RenderPortofolio";
import { getTeamDetail } from "@/components/Fetching/Division/division";
import RenderTeam from "./partials/RenderTeam";
import favIcon from "@/app/favicon.ico";
export const dynamic = "force-dynamic";

const metaData = (data: any) => {
  return {
    title: data.title,
    description: data.excerpt || data.description,
    keyword: data.keyword,
    openGraph: {
      type: "website",
      title: data.title,
      description: data.excerpt || data.description,
      logo: favIcon,
      siteName: "Newus Technology",
      url: `${BASE_URL}/${data.slug}`,
      images: [
        {
          url: data.image,
          width: 800,
          height: 600,
          alt: data.altImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [data.image],
    },
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const getPost = await getBlogDetail(params.slug);
  if (getPost) {
    return metaData(getPost[0]);
  }

  const getProject = await getobDetail(params.slug);
  if (getProject) {
    return metaData(getProject);
  }

  const getPortofolio = await getProjectDetail(params.slug);
  if (getPortofolio) {
    return metaData(getPortofolio);
  }

  const getTeam = await getTeamDetail(params.slug);
  if (getTeam) {
    return metaData(getTeam);
  }

  // Jika tidak ditemukan data apapun
  return notFound();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const blogDetail = await getBlogDetail(slug);
  if (blogDetail) {
    return <RenderBlog blogDetail={blogDetail} slug={slug} />;
  }

  const jobDetail = await getobDetail(slug);
  if (jobDetail) {
    return <RenderCareer jobDetail={jobDetail} />;
  }

  const getPortofolio = await getProjectDetail(params.slug);
  if (getPortofolio) {
    return <RenderPortofolio projectsDetail={getPortofolio} />;
  }

  const teamDetail = await getTeamDetail(params.slug);
  if (teamDetail) {
    return <RenderTeam teamDetail={teamDetail} />;
  }

  return notFound();
}
