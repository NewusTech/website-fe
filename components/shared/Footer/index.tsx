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
    <footer className="bg-blue relative pb-32 pt-5 md:pt-5 md:pb-0">
      <div className="container mx-auto">
        <div className="h-[231px] md:h-full lg:h-[370px] w-full flex flex-col lg:flex-row py-0 md:py-5 lg:py-0 ">
          <div className="hidden lg:block w-[370px] h-[390px] bg-white rounded-[10px] absolute -mt-12">
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
          <div className="lg:ml-[427px] lg:mt-[50px] mt-4">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={206}
              height={56}
              className="lg:mb-10 w-[100px] h-[30px] md:w-[206px] md:h-[56px]"
            />
            <div className="flex gap-2 lg:gap-4 items-center mt-2 lg:mt-[55px]">
              <Image
                src="/assets/icons/place.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[15px] h-[15px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[10px] md:min-w-[350px] xl:min-w-[600px]">
                {dataAbout?.address || 'Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35212'}
              </p>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center mt-2 lg:mt-6">
              <Image
                src="/assets/icons/phone.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[15px] h-[15px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[10px]">
                {dataAbout?.phoneNumber || '(+62) 888-991-2992'}
              </p>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center mt-2 lg:mt-6">
              <Image
                src="/assets/icons/printer.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[15px] h-[15px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[10px]">
                {dataAbout?.email || 'newustechnology@gmail.com'}
              </p>
            </div>
            <div className="hidden lg:flex gap-4 items-center mt-4">
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
          <div className="flex lg:flex-col gap-3 md:gap-10 lg:gap-0 mt-5 lg:mt-[42px] lg:ml-[0px] lg:w-1/5">
            <div>
              <h4 className="font-semibold text-white md:text-sm text-[10px] uppercase">
                Technology
              </h4>
              <ul className="list-disc pl-2 lg:pl-5 text-white md:text-sm text-[8px] mt-[6px] lg:mt-[10px]">
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
              <ul className="list-disc pl-4 lg:pl-5 text-white md:text-sm text-[8px] mt-[6px] lg:mt-[10px]">
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
                <Link href='https://www.facebook.com/newustechnology/' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="place"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link>
                <Link href='https://id.linkedin.com/company/newustechnology' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="place"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link>
                <Link href='https://www.instagram.com/newustechnology/' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="place"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link>
                <Link href='https://www.tiktok.com/@newustech' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/tiktok.svg"
                    alt="place"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link><Link href='https://www.youtube.com' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/youtube.svg"
                    alt="place"
                    width={16}
                    height={16}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link>
                <Link href='https://api.whatsapp.com/message/VAQVUDT6TDXVG1?autoload=1&app_absent=0' passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
                  <Image
                    src="/assets/icons/wifi.svg"
                    alt="place"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] md:w-10 md:h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-[10px] md:text-sm text-white lg:hidden mt-5 mb-4">
            Copyright © 2023 • Newus Technology.
          </p>
        </div>
        <div className="hidden lg:block h-[1px] w-full bg-white"></div>
        <div className="hidden lg:flex mt-5 pb-8 justify-between items-center">
          <ul className="flex gap-10 text-white uppercase font-medium text-sm">
            <li>
              <Link href='/service' >
                Service
              </Link></li>
            <li><Link href='/portfolio' >
              Portfolio
            </Link></li>
            <li><Link href='/blog' >
              Blog
            </Link></li>
            <li><Link href='/about' >
              About
            </Link></li>
            <li><Link href='/career' >
              Career
            </Link></li>
            <li><Link href='/contact' >
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
