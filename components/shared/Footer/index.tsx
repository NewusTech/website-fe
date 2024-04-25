import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-blue relative">
      <div className="h-[370px] w-full flex">
        <div className="w-[370px] h-[419px] bg-white rounded-[10px] absolute -mt-16">
          <div className="w-full h-auto bg-blue py-[14px] px-[19px] rounded-t-[10px]">
            <h3 className="uppercase text-white font-bold text-[16px]">
              Contact Form
            </h3>
          </div>
          <div className="mt-[10px] mx-[18px] mb-[16px] flex flex-col gap-[10px]">
            <Input type="text" placeholder="Your Name" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Subject Message" />
            <Textarea placeholder="Message" className="h-[100px]" />
            <div className="flex gap-5 justify-between">
              <Input type="text" placeholder="Input Kode" />
              <Button className="rounded-none bg-[#D9D9D9] hover:bg-[#CBCBCB] text-black py-[10px] px-[65px]">
                Kode
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Button className="mt-4 bg-blue hover:bg-blue-2 rounded-[10px] py-2 px-12">
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="ml-[427px] mt-[75px]">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={206}
            height={56}
            className="mb-10"
          />
          <div className="flex gap-4 items-center mt-[55px]">
            <Image
              src="/assets/icons/place.svg"
              alt="place"
              width={24}
              height={24}
            />
            <p className="text-white text-sm">
              Newus Technology, Jl. In aja dulu, No 212 Lintang Barat
            </p>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <Image
              src="/assets/icons/phone.svg"
              alt="place"
              width={24}
              height={24}
            />
            <p className="text-white text-sm">(+62) 888-991-2992</p>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <Image
              src="/assets/icons/printer.svg"
              alt="place"
              width={24}
              height={24}
            />
            <p className="text-white text-sm">newustech@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <Image
              src="/assets/icons/facebook.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/twitter.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/linkedin.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/youtube.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/instagram.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/google-plus.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/pinterest.svg"
              alt="place"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/wifi.svg"
              alt="place"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="mt-[52px] ml-[50px]">
          <h4 className="font-semibold text-white text-sm uppercase">
            Technology
          </h4>
          <ul className="list-disc pl-5 text-white text-sm mt-[10px] ">
            <li>Mobile Apps Development</li>
            <li>Website Development</li>
            <li>Web Based Application</li>
            <li>Mobile Applications</li>
            <li>Email Bussines</li>
            <li>Maintenance</li>
          </ul>
          <h4 className="font-semibold text-white text-sm uppercase mt-3">
            Digital Marketing
          </h4>
          <ul className="list-disc pl-5 text-white text-sm mt-[10px]">
            <li>Online Advertising ( Seo )</li>
            <li>Social Media Campaign</li>
            <li>Facebook Ads</li>
            <li>Instagram Ads</li>
            <li>Search Engine Optimization</li>
            <li>Content & Engagement</li>
          </ul>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="flex mt-5 pb-8 justify-between items-center">
        <ul className="flex gap-10 text-white uppercase font-medium text-sm">
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>About</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
        <p className="text-sm text-white">
          Copyright © 2023 • Newus Technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
