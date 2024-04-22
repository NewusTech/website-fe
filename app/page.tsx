import { Button } from "@/components/ui/button";
import OurClient from "@/components/OurClient";
import SuccessProject from "@/components/SuccessProject";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <main>
      <OurClient />
      <SuccessProject />
      <OurService />
    </main>
  );
}
