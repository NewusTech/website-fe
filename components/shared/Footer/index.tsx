'use client'

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import SocialLink from "../Social/SocialLink";
import { useEffect, useState } from "react";
import { getSocialMedia } from "@/components/Fetching/Contact/contact";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataAbout, setDataAbout] = useState<any>(null);
  const [dataSocials, setDataSocials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/aboutcompany/get`, {
          cache: 'no-store',
        });
        const data = await response.json();
        setDataAbout(data.data[0]);
      } catch (error) {
        console.error('Error fetching data about the company:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await getSocialMedia();
        setDataSocials(response);
      } catch (error) {
        console.error('Failed to fetch social media links:', error);
      }
    };

    fetchSocialMedia();
  }, []);

  const getIconSrc = (title: any) => {
    switch (title.toLowerCase()) {
      case 'facebook':
        return '/assets/icons/facebook.svg';
      case 'twitter':
        return '/assets/icons/twitter.svg';
      case 'linkedin':
        return '/assets/icons/linkedin.svg';
      case 'youtube':
        return '/assets/icons/youtube.svg';
      case 'instagram':
        return '/assets/icons/instagram.svg';
      case 'tiktok':
        return '/assets/icons/tiktok.svg';
      default:
        return '/assets/icons/default.svg';
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-blue relative pb-12 pt-5 md:pt-2 md:pb-0">
      <div className="px-5 md:container mx-auto">
        <div className="h-full md:h-full lg:h-[370px] w-full flex flex-col lg:flex-row py-0 md:py-5 lg:py-0 ">
          <div className="hidden lg:block w-[300px] xl:w-[370px] h-[390px] bg-white rounded-[10px] absolute -mt-12">
            <div className="w-full h-auto bg-blue py-[14px] px-[19px] rounded-t-[10px]">
              <h3 className="uppercase text-white font-bold text-[16px]">
                Contact Form
              </h3>
            </div>
            <form action="mailto:newustechnology@gmail.com" method="post" encType="text/plain">
              <div className="mt-[10px] mx-[18px] mb-[16px] flex flex-col gap-[10px]">
                <Input type="text" placeholder="Your Name" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Subject Message" />
                <Textarea placeholder="Message" className="h-[100px]" />
                <div className="flex items-center justify-center">
                  <Button className="mt-4 bg-blue hover:bg-blue-2 rounded-[10px] py-2 px-12">
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:ml-[310px] xl:ml-[400px] lg:mt-[20px] xl:mt-10  lg:w-8/12 xl:w-8/12">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={206}
              height={56}
              className="mb-2 lg:mb-3 xl:mb-5 2xl:mb-10 w-[100px] h-[30px] xl:w-[206px] md:w-[150px] md:h-[56px]"
            />
            <p className="text-white md:text-[12px] text-[10px] md:min-w-[250px] lg:min-w-[250px] xl:w-[550px] 2xl:w-[700px] xl:leading-6">
              Newus Technology adalah Software House di Bandar Lampung yang mengkhususkan diri dalam pengembangan website kustom, aplikasi/sistem berbasis web, dan aplikasi berbasis Android dan iOS. Sebagai perusahaan software di Bandar Lampung, Newus Technology juga menyediakan layanan sebagai konsultan IT di Lampung.
            </p>
            <h1 className="text-white md:text-sm text-[10px] font-semibold pt-5 pb-3">Hubungi Kami</h1>
            <div className="flex gap-2 lg:gap-2 2xl:gap-3 items-start">
              <Image
                src="/assets/icons/place.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[15px] h-[15px] lg:w-6 lg:h-6"
              />
              <p className="text-white md:text-webDesk text-[10px] md:min-w-[250px] lg:min-w-[250px] xl:w-[550px] 2xl:w-[700px]">
                {dataAbout?.address || 'Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35212'}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 flex-wrap">
              <div className="flex gap-2 lg:gap-2 2xl:gap-3 items-center">
                <Image
                  src="/assets/icons/phone.svg"
                  alt="place"
                  width={24}
                  height={24}
                  className="w-[15px] h-[15px] lg:w-6 lg:h-6"
                />
                <p className="text-white md:text-webDesk text-[10px]">
                  {dataAbout?.phoneNumber || '(+62) 888-991-2992'}
                </p>
              </div>
              <div className="flex gap-2 lg:gap-2 2xl:gap-3 items-center">
                <Image
                  src="/assets/icons/printer.svg"
                  alt="place"
                  width={24}
                  height={24}
                  className="w-[15px] h-[15px] lg:w-6 lg:h-6"
                />
                <p className="text-white md:text-webDesk text-[10px]">
                  {dataAbout?.email || 'newustechnology@gmail.com'}
                </p>
              </div>
              <div className="hidden lg:flex gap-4 items-center">
                {dataSocials?.map((social: any) => (
                  <SocialLink
                    key={social.id}
                    href={social.link}
                    src={getIconSrc(social.title)}
                    alt={social.title.charAt(0).toUpperCase() + social.title.slice(1)}
                  />
                ))}
                {/* <SocialLink href="https://www.facebook.com/newustechnology/" src="/assets/icons/facebook.svg" alt="Facebook" />
              <SocialLink href="https://www.twitter.com" src="/assets/icons/twitter.svg" alt="Twitter" />
              <SocialLink href="https://id.linkedin.com/company/newustechnology" src="/assets/icons/linkedin.svg" alt="LinkedIn" />
              <SocialLink href="https://www.youtube.com" src="/assets/icons/youtube.svg" alt="YouTube" />
              <SocialLink href="https://www.instagram.com/newustechnology/" src="/assets/icons/instagram.svg" alt="Instagram" />
              <SocialLink href="https://www.tiktok.com/@newustech" src="/assets/icons/tiktok.svg" alt="Tiktok" /> */}
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col gap-3 md:gap-10 lg:gap-0 mt-5 lg:mt-[32px] xl:mt-[42px] lg:ml-[10px] lg:w-4/12 xl:w-4/12">
            <div>
              <h4 className="font-semibold text-white md:text-sm text-[10px] uppercase">
                Technology
              </h4>
              <ul className="list-disc pl-3 md:pl-4 lg:pl-5 text-white md:text-webDesk text-[10px] mt-[6px] lg:mt-[10px]">
                <li>Mobile Apps Development</li>
                <li>Website Development</li>
                <li>Web Based Application</li>
                <li>Mobile Applications</li>
                <li>Email Bussines</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white md:text-sm text-[10px] uppercase lg:mt-3">
                Digital Marketing
              </h4>
              <ul className="list-disc pl-4 lg:pl-5 text-white md:text-webDesk text-[10px] mt-[6px] lg:mt-[10px]">
                <li>Online Advertising (SEO)</li>
                <li>Social Media Campaign</li>
                <li>Facebook Ads</li>
                <li>Instagram Ads</li>
                <li>Search Engine Optimization</li>
                <li>Content & Engagement</li>
              </ul>
            </div>
            <div className="lg:hidden flex flex-col">
              <h4 className="font-semibold text-white md:text-sm text-[10px] uppercase">
                Social Media
              </h4>
              <div className="grid grid-cols-4 gap-3 mt-[6px]">
                {dataSocials?.map((social: any) => (
                  <SocialLink
                    key={social.id}
                    href={social.link}
                    src={getIconSrc(social.title)}
                    alt={social.title.charAt(0).toUpperCase() + social.title.slice(1)}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[10px] md:text-webSubjudul text-white lg:hidden pt-3">
            Copyright © 2023 • Newus Technology.
          </p>
        </div>
        <div className="hidden lg:block h-[1px] w-full bg-white"></div>
        <div className="hidden lg:flex mt-5 pb-5 justify-between items-center">
          <ul className="flex gap-10 text-white uppercase font-medium text-mobileSubjudul md:text-webSubjudul">
            <li>
              <Link href='/service' className="text-mobileSubjudul md:text-webSubjudul" >
                Service
              </Link></li>
            <li><Link href='/portfolio' className="text-mobileSubjudul md:text-webSubjudul">
              Portfolio
            </Link></li>
            <li><Link href='/blog' className="text-mobileSubjudul md:text-webSubjudul">
              Blog
            </Link></li>
            <li><Link href='/about' className="text-mobileSubjudul md:text-webSubjudul">
              About
            </Link></li>
            <li><Link href='/career' className="text-mobileSubjudul md:text-webSubjudul">
              Career
            </Link></li>
            <li><Link href='/contact' className="text-mobileSubjudul md:text-webSubjudul">
              Contact
            </Link></li>
          </ul>
          <p className="text-sm text-white">
            Copyright © 2023 • Newus Technology.
          </p>
        </div>
      </div>
      <div className="fixed bottom-14 md:bottom-4 lg:bottom-3 right-4 z-40">
        <div className="bg-[#5FD568] rounded-3xl py-2 px-4">
          <button onClick={toggleDropdown} className="flex gap-3 lg:gap-4 text-white items-center focus:outline-none">
            <span className="lg:font-semibold text-mobileSubjudul md:text-webSubjudul">Contact Us</span>
            <Image
              src="/assets/icons/whatsapp-icon.svg"
              alt="Contact Us"
              width={1000}
              height={1000}
              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] object-contain"
            />
          </button>
        </div>
        {isOpen && (
          <div className="bg-white rounded-lg shadow-lg mt-2 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/icons/logo-2.svg"
                alt="Devi"
                width={1000}
                height={1000}
                className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] object-contain"
              />
              <Link
                target="_blank"
                href=" https://api.whatsapp.com/message/VAQVUDT6TDXVG1?autoload=1&app_absent=0"
                className="text-black text-mobileSubjudul md:text-webSubjudul"
              >
                Admin
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/antoni.svg"
                alt="Pasha"
                width={1000}
                height={1000}
                className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] object-contain"
              />
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=6285279737868"
                className="text-black text-mobileSubjudul md:text-webSubjudul"
              >
                Antoni
              </Link>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
