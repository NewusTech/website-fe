import Header from "@/components/shared/Header/Header";
import RecentPost from "@/components/BlogPage/RecentPost";

export default function Blog() {
  return (
    <section>
      <Header title="Blog" image="/assets/images/header-blog.jpg" />
      <RecentPost />
    </section>
  );
}
