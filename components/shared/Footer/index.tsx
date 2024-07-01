import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import SocialLink from "../Social/SocialLink";

const Footer = () => {
  return (
    <footer className="bg-blue relative pb-14 md:pb-0">
      <div className="container mx-auto">
        <div className="h-[231px] md:h-[370px] w-full flex flex-col md:flex-row">
          <div className="hidden md:block w-[370px] h-[390px] bg-white rounded-[10px] absolute -mt-16">
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
                {/* <div className="flex gap-5 justify-between">
                <Input type="text" placeholder="Input Kode" />
                <Button className="rounded-none bg-[#D9D9D9] hover:bg-[#CBCBCB] text-black py-[10px] px-[65px]">
                  Kode
                </Button>
              </div> */}
                <div className="flex items-center justify-center">
                  <Button className="mt-4 bg-blue hover:bg-blue-2 rounded-[10px] py-2 px-12">
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:ml-[427px] md:mt-[75px] mt-4">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={206}
              height={56}
              className="md:mb-10 w-[93px] h-[30px] md:w-[206px] md:h-[56px]"
            />
            <div className="flex gap-2 md:gap-4 items-center mt-2 md:mt-[55px]">
              <Image
                src="/assets/icons/place.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[10px] h-[10px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[6px]">
                Newus Technology, Jl. In aja dulu, No 212 Lintang Barat
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 items-center mt-2 md:mt-6">
              <Image
                src="/assets/icons/printer.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[10px] h-[10px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[6px]">
                newustech@gmail.com
              </p>
            </div>

            <div className="flex gap-2 md:gap-4 items-center mt-2 md:mt-6">
              <Image
                src="/assets/icons/phone.svg"
                alt="place"
                width={24}
                height={24}
                className="w-[10px] h-[10px] md:w-6 md:h-6"
              />
              <p className="text-white md:text-sm text-[6px]">
                (+62) 888-991-2992
              </p>
            </div>
            <div className="hidden md:flex gap-4 items-center mt-6">
              <SocialLink href="https://www.facebook.com/newustechnology/" src="/assets/icons/facebook.svg" alt="Facebook" />
              <SocialLink href="https://www.twitter.com" src="/assets/icons/twitter.svg" alt="Twitter" />
              <SocialLink href="https://id.linkedin.com/company/newustechnology" src="/assets/icons/linkedin.svg" alt="LinkedIn" />
              <SocialLink href="https://www.youtube.com" src="/assets/icons/youtube.svg" alt="YouTube" />
              <SocialLink href="https://www.instagram.com/newustechnology/" src="/assets/icons/instagram.svg" alt="Instagram" />
              <SocialLink href="https://www.tiktok.com/@newustech" src="/assets/icons/tiktok.svg" alt="Tiktok" />
              {/*
              <SocialLink href="https://www.pinterest.com" src="/assets/icons/pinterest.svg" alt="Pinterest" />
              <SocialLink href="https://api.whatsapp.com/message/VAQVUDT6TDXVG1?autoload=1&app_absent=0" src="/assets/icons/wifi.svg" alt="WhatsApp" /> */}
            </div>
          </div>
          <div className="flex md:flex-col gap-3 md:gap-0 mt-5 md:mt-[52px] md:ml-[50px]">
            <div>
              <h4 className="font-semibold text-white md:text-sm text-[6px] uppercase">
                Technology
              </h4>
              <ul className="list-disc pl-4 md:pl-5 text-white md:text-sm text-[6px] mt-[6px] md:mt-[10px] ">
                <li>Mobile Apps Development</li>
                <li>Website Development</li>
                <li>Web Based Application</li>
                <li>Mobile Applications</li>
                <li>Email Bussines</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white md:text-sm text-[6px] uppercase md:mt-3">
                Digital Marketing
              </h4>
              <ul className="list-disc pl-4 md:pl-5 text-white md:text-sm text-[6px] mt-[6px] md:mt-[10px]">
                <li>Online Advertising ( Seo )</li>
                <li>Social Media Campaign</li>
                <li>Facebook Ads</li>
                <li>Instagram Ads</li>
                <li>Search Engine Optimization</li>
                <li>Content & Engagement</li>
              </ul>
            </div>
            <div className="md:hidden flex flex-col">
              <h4 className="font-semibold text-white md:text-sm text-[6px] uppercase">
                Social Media
              </h4>
              <div className="grid grid-cols-4 gap-3 mt-[6px]">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/youtube.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/google-plus.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/pinterest.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
                <Image
                  src="/assets/icons/wifi.svg"
                  alt="place"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
          <p className="text-[8px] text-white md:hidden mt-5 mb-4">
            Copyright © 2023 • Newus Technology.
          </p>
        </div>
        <div className="hidden md:block h-[1px] w-full bg-white"></div>
        <div className="hidden md:flex mt-5 pb-8 justify-between items-center">
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
    </footer>
  );
};

export default Footer;
