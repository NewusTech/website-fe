import { getAboutCompany } from "@/components/Fetching/About/about";
import AboutLayout from "./AboutLayout";
export const dynamic = 'force-dynamic';

export default async function AboutLanding() {
  const data = await getAboutCompany();

  return (
    <AboutLayout data={data} />
  );
}
