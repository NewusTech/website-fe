import { getAboutCompany, getSocialMedia } from "@/components/Fetching/About/about";
import FooterLayout from "./FooterLayout";

const Footer = async () => {
  const dataAbout = await getAboutCompany()
  const dataSocials = await getSocialMedia();
  return (
    <FooterLayout dataAbout={dataAbout} dataSocials={dataSocials} />
  );
};

export default Footer;
