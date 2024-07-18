import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import lambang from "@/public/assets/icons/logo.svg";
import Bottombar from "@/components/shared/Bottombar";
import { getAboutCompany } from "@/components/Fetching/About/about";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutCompany();
  const companyInfo = data?.[0] || {};
  const title = companyInfo.siteTitle || "IT CONSULTANT LAMPUNG & SOFTWARE DEVELOPMENT";
  const description = companyInfo.siteDescription || "IT CONSULTANT LAMPUNG & SOFTWARE DEVELOPMENT";
  const favicon = companyInfo.favicon || lambang.src;

  return {
    title,
    description,
    icons: {
      icon: {
        url: favicon,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Bottombar />
      </body>
    </html>
  );
}
