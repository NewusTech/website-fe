import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import lambang from "@/public/assets/icons/logo.svg";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT CONSULTANT LAMPUNG & SOFTWARE DEVELOPMENT",
  description: "Mal Pelayanan Publik Lampung Timur",
  icons: {
    icon: {
      url: `${lambang.src}`,
    },
  },
};

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
