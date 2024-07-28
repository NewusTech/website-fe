import AboutLayout from "@/components/About";
import { getAboutCompany } from "@/components/Fetching/About/about";
import { getClientist } from "@/components/Fetching/Client/client";
import { getTeamList, getTeamMedia } from "@/components/Fetching/Division/division";
import Header from "@/components/shared/Header/HeaderAbout";
export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const teams = await getTeamList();
  const clients = await getClientist();
  const medias = await getTeamMedia();
  const abouts = await getAboutCompany();
  console.log(teams);

  return (
    <section className="min-h-[1200px]">
      <Header
        type="About Us"
        title="About Us"
        image="/assets/images/header-about.png"
      />
      <AboutLayout abouts={abouts} teams={teams} clients={clients} medias={medias} />
    </section>
  )
}
