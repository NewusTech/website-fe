import { Button } from "@/components/ui/button";
import OurClient from "@/components/OurClient";
import SuccessProject from "@/components/SuccessProject";
import OurService from "@/components/OurService";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <OurClient />
      <SuccessProject />
      <OurService />
      <WhyChooseUs />
      <Blog />
    </main>
  );
}
