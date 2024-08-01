import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getBlogDetail, getBlogList, getBlogRecomendation } from "@/components/Fetching/Blog/blog";
import BodyContent from "@/components/BlogPage/Detail/Detail";
import { getSocialMedia } from "@/components/Fetching/About/about";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { notFound } from 'next/navigation'
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Blog");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function DetailBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const dataSocials = await getSocialMedia()
  const blogList = await getBlogList();
  const recomendations = await getBlogRecomendation();
  if (!blogDetail) {
		return notFound()
	}
  const {
    title = "",
  } = (blogDetail?.length > 0 ? blogDetail[0] : {});

  const blogPaths = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: title, href: `/${slug}` },
  ];

  return (
    <section className="max-w-7xl mx-auto md:my-32 mb-6 px-3 md:px-5">
      <div className="py-2">
        <Breadcrumbs paths={blogPaths} />
      </div>
      <BodyContent blogDetail={blogDetail?.length > 0 ? blogDetail[0] : {}} blogList={blogList} dataSocials={dataSocials} recomendations={recomendations} />
    </section>
  );
};