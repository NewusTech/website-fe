import { Button } from "@/components/ui/button";
import OurClient from "@/components/OurClient";
import SuccessProject from "@/components/SuccessProject";

export default function Home() {
  return (
    <main className="mx-auto container">
      <OurClient />
      <SuccessProject />
    </main>
  );
}
