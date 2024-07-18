import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getBlogDetail, getBlogList } from "@/components/Fetching/Blog/blog";
import { getSocialMedia } from "@/components/Fetching/Contact/contact";
import BodyContent from "@/components/BlogPage/Detail/Detail";
export const dynamic = 'force-dynamic';

export default async function DetailBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDetail = await getBlogDetail(slug);
  const dataSocials = await getSocialMedia()
  const blogList = await getBlogList();

  const {
    title = "",
    keyword = "",
    excerpt = "",
    body = "",
    kategoriblog_id = "",
    kategoriblog_title = "",
    tagblog_id = "",
    tagblog_title = "",
    user_id = "",
    user_title = "",
    image = "",
    status = "",
    status_desc = "",
    publishAt = "",
    createdAt = "",
    updatedAt = ""
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
      <BodyContent blogDetail={blogDetail?.length > 0 ? blogDetail[0] : {}} blogList={blogList} dataSocials={dataSocials} />
    </section>
  );
};