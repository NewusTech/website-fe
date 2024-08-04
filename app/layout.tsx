import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import lambang from "@/public/assets/icons/logo.svg";
import Bottombar from "@/components/shared/Bottombar";
import { getAboutCompany } from "@/components/Fetching/About/about";
import Script from "next/script";
import { getSeo } from "@/components/Fetching/SEO";
export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutCompany();
  const companyInfo = data?.[0] || {};
  const title = companyInfo?.siteTitle;
  const description = companyInfo?.siteDescription;
  const favicon = companyInfo?.favicon || lambang.src;

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seoGtm = (await getSeo())[0];
  return (
    <html lang="en">
      <head>
        {/* GTM Script */}
        <Script id="GTM">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${seoGtm.tagManager}');`}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Bottombar />
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${seoGtm.tagManager}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
