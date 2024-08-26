import RecentPost from "@/components/BlogPage/RecentPost";
import { getSocialMedia } from "@/components/Fetching/About/about";
import {
  getBlogCategory,
  getBlogList,
  getBlogRecomendation,
} from "@/components/Fetching/Blog/blog";
import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Header/Nav";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import React from "react";

const NotFound = async () => {
  const blogs = await getBlogList();
  const recomendations = await getBlogRecomendation();
  const categories = await getBlogCategory();
  const dataSocials = await getSocialMedia();
  const getIconSrc = (title: any) => {
    switch (title.toLowerCase()) {
      case "facebook":
        return <FaFacebook size={32} />;
      case "twitter":
        return <FaTwitter size={32} />;
      case "linkedin":
        return <FaLinkedinIn size={32} />;
      case "youtube":
        return <FaYoutube size={32} />;
      case "instagram":
        return <FaInstagram size={32} />;
      case "tiktok":
        return <FaTiktok size={32} />;
      default:
        return <FaFacebook size={32} />;
    }
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-svh pt-28 bg-white gap-5">
        <div className="grid grid-cols-4 gap-4 mt-[6px]">
          {dataSocials?.map((social: any) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="nofollow"
            >
              {getIconSrc(social.title)}
            </a>
          ))}
        </div>
        <p className="font-semibold text-xl">
          Oops! Sepertinya Halaman Yang Kamu Cari Tidak Ditemukan
        </p>
        <a
          href="/"
          className="text-blue pl-5 pr-5 p-2 border border-blue text-center rounded-md hover:bg-blue hover:text-white duration-300"
        >
          Kembali ke Beranda
        </a>
        <div className="mt-20">
          <RecentPost
            blogs={blogs}
            categories={categories}
            recomendations={recomendations}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
