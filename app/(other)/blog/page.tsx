import Header from "@/components/shared/Header/Header";
import RecentPost from "@/components/BlogPage/RecentPost";
import { getBlogCategory, getBlogList, getBlogRecomendation } from "@/components/Fetching/Blog/blog";
export const dynamic = 'force-dynamic';

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
