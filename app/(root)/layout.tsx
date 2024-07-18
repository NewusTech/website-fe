import { getAboutCompany } from "@/components/Fetching/About/about";
import RightSide from "@/components/LandingPage/Header/RightSide";
import Footer from "@/components/shared/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aboutCompany = await getAboutCompany();
  return (
    <div className="flex h-screen flex-col">
      <RightSide aboutCompany={aboutCompany} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
