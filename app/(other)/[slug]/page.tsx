import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {
  getBlogDetail,
  getBlogList,
  getBlogRecomendation,
} from "@/components/Fetching/Blog/blog";
import BodyContent from "@/components/BlogPage/Detail/Detail";
import { getSocialMedia } from "@/components/Fetching/About/about";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const getPost = await getBlogDetail(params.slug);
  const post = getPost[0];

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.altImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function DetailBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const dataSocials = await getSocialMedia();
  const blogList = await getBlogList();
  const recomendations = await getBlogRecomendation();
  if (!blogDetail) {
    return notFound();
  }
  const { title = "" } = blogDetail?.length > 0 ? blogDetail[0] : {};

  const blogPaths = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: title, href: `/${slug}` },
  ];

  return (
    <section className="max-w-7xl mx-auto md:my-32 mb-6 px-3 md:px-5">
      <div className="py-2">
        <Breadcrumbs paths={blogPaths} />
      </div>
      <BodyContent
        blogDetail={blogDetail?.length > 0 ? blogDetail[0] : {}}
        blogList={blogList}
        dataSocials={dataSocials}
        recomendations={recomendations}
      />
    </section>
  );
}
