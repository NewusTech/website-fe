import { getAboutCompany } from "@/components/Fetching/About/about";
import NavLayout from "./NavLayout";

const Nav = async () => {
  const aboutCompany = await getAboutCompany();
  return (
    <NavLayout aboutCompany={aboutCompany} />
  );
};

export default Nav;
