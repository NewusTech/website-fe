import Header from "@/components/shared/Header/Header";
import RecentPost from "@/components/BlogPage/RecentPost";
import {
  getBlogCategory,
  getBlogList,
  getBlogRecomendation,
} from "@/components/Fetching/Blog/blog";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const blogMeta = seoPages?.find((page) => page.pages === "Blog") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: blogMeta.metaTitle,
    description: blogMeta.metaDesc,
    openGraph: {
      type: "website",
      title: blogMeta.metaTitle,
      description: blogMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: blogMeta.metaImage,
          width: 800,
          height: 600,
          alt: blogMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogMeta.metaTitle,
      description: blogMeta.metaDesc,
      images: [blogMeta.metaImage],
    },
  };
}

export default async function Blog() {
  const blogs = await getBlogList();
  const recomendations = await getBlogRecomendation();
  const categories = await getBlogCategory();

  return (
    <section>
      <Header title="Blog" type="Blog" image="/assets/images/header-blog.jpg" />
      <RecentPost
        blogs={blogs}
        categories={categories}
        recomendations={recomendations}
      />
    </section>
  );
}
