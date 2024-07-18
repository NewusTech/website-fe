import { getAboutCompany, getSocialMedia } from "@/components/Fetching/About/about";
import FooterLayout from "./FooterLayout";
export const dynamic = 'force-dynamic';

const Footer = async () => {
  const dataAbout = await getAboutCompany()
  const dataSocials = await getSocialMedia();
  return (
    <FooterLayout dataAbout={dataAbout} dataSocials={dataSocials} />
  );
};

export default Footer;
