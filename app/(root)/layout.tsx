import RightSide from "@/components/LandingPage/Header/RightSide";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <RightSide />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
