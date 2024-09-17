import { getAboutCompany } from "@/components/Fetching/About/about";
import dynamic from "next/dynamic";

const AboutLayout = dynamic(() => import("./AboutLayout"));

export default async function AboutLanding() {
  const data = await getAboutCompany();

  return <AboutLayout data={data} />;
}
