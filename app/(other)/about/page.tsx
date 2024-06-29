import AboutLayout from "@/components/About";
import { getClientist } from "@/components/Fetching/Client/client";
import { getTeamList } from "@/components/Fetching/Division/division";
import Header from "@/components/shared/Header/HeaderAbout";

export default async function AboutPage() {
  const teams = await getTeamList();
  const clients = await getClientist();
  return (
    <section className="min-h-[1200px]">
      <Header
        type="About Us"
        title="About Us"
        image="/assets/images/header-about.png"
      />
      <AboutLayout teams={teams} clients={clients} />
    </section>
  )
}
