import Header from "@/components/shared/Header/Header";
import RecentPost from "@/components/BlogPage/RecentPost";
import { getBlogCategory, getBlogList } from "@/components/Fetching/About/Blog/blog";
export const dynamic = 'force-dynamic';

export default async function Blog() {
  const blogs = await getBlogList();
  const categories = await getBlogCategory();

  return (
    <section>
      <Header title="Blog" type="Blog" image="/assets/images/header-blog.jpg" />
      <RecentPost blogs={blogs} categories={categories} />
    </section>
  );
}
