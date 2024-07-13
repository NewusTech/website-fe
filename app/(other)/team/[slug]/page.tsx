import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default async function DetailTeamPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <section className="max-w-7xl mx-auto md:my-32 mb-6 px-3 md:px-5">
      <div className="py-2">
        {/* <Breadcrumbs paths={slug} /> */}
      </div>
      {slug}
    </section>
  );
};

const getIconSrc = (title: any) => {
  switch (title.toLowerCase()) {
    case 'facebook':
      return '/assets/icons/black/fb.svg';
    case 'twitter':
      return '/assets/icons/black/twitter.svg';
    case 'linkedin':
      return '/assets/icons/black/linkedin.svg';
    case 'instagram':
      return '/assets/icons/black/instagram.svg';
    case 'tiktok':
      return '/assets/icons/black/tiktok.svg';
    default:
      return '/assets/icons/black/default.svg';
  }
};