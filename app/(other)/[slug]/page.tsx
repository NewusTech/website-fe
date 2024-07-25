import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getBlogDetail, getBlogList, getBlogRecomendation } from "@/components/Fetching/Blog/blog";
import BodyContent from "@/components/BlogPage/Detail/Detail";
import { getSocialMedia } from "@/components/Fetching/About/about";
export const dynamic = 'force-dynamic';

export default async function DetailBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const dataSocials = await getSocialMedia()
  const blogList = await getBlogList();
  const recomendations = await getBlogRecomendation();

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