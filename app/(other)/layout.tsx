import Nav from "@/components/shared/Header/Nav";
import Footer from "@/components/shared/Footer";

export default function OtherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
