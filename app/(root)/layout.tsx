import { bannerLandingQuery } from "@/api";
import { getAboutCompany } from "@/components/Fetching/About/about";
import Footer from "@/components/shared/Footer";
import dynamicComponent from "next/dynamic";
const RightSide = dynamicComponent(
  () => import("@/components/LandingPage/Header/RightSide")
);

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aboutCompany = await getAboutCompany();
  const bannerData = await bannerLandingQuery();
  return (
    <div className="flex h-screen flex-col">
      <RightSide aboutCompany={aboutCompany} bannerData={bannerData} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
