import {
  getAboutCompany,
  getSocialMedia,
} from "@/components/Fetching/About/about";
import dynamicComponent from "next/dynamic";

const FooterLayout = dynamicComponent(() => import("./FooterLayout"));

export const dynamic = "force-dynamic";

const Footer = async () => {
  const dataAbout = await getAboutCompany();
  const dataSocials = await getSocialMedia();
  return <FooterLayout dataAbout={dataAbout} dataSocials={dataSocials} />;
};

export default Footer;
