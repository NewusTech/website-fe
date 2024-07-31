import Header from "@/components/shared/Header/Header";
import RecentPost from "@/components/BlogPage/RecentPost";
import { getBlogCategory, getBlogList, getBlogRecomendation } from "@/components/Fetching/Blog/blog";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
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

export default async function Blog() {
  const blogs = await getBlogList();
  const recomendations = await getBlogRecomendation();
  const categories = await getBlogCategory();

  return (
    <section>
      <Header title="Blog" type="Blog" image="/assets/images/header-blog.jpg" />
      <RecentPost blogs={blogs} categories={categories} recomendations={recomendations} />
    </section>
  );
}
