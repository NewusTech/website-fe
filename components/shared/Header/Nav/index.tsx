'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const pathname = usePathname();
  const lightLogoPaths = [
    '/',
    '/service',
    '/team',
    '/about',
    '/career',
    '/blog',
    '/portfolio',
  ];
  const useLightLogo = lightLogoPaths.includes(pathname);
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <section className="max-w-screen 2xl:container 2xlmx-auto">
      <div className="2xl:w-[80%] container mx-auto flex justify-between md:mt-[30px] items-center md:z-20 md:top-0 md:absolute py-[22px] md:py-0">
        <Link href="/">
          <Image
            src="/assets/icons/logo-mobile.svg"
            alt="logo"
            loading="lazy"
            width={206}
            height={56}
            className="md:hidden cursor-pointer w-[114px] h-[34px] md:w-[206px] md:h-[56px]"
          />
          <Image
            src={useLightLogo ? '/assets/icons/newus-light.svg' : '/assets/icons/logo-mobile.svg'}
            alt="logo"
            loading="lazy"
            width={206}
            height={56}
            className="hidden md:block cursor-pointer w-[114px] h-[34px] md:w-[206px] md:h-[56px]"
          />
        </Link>
        <Image
          src={`${openDropdown ? "/assets/icons/close.svg" : "/assets/icons/hamburger-2.svg"}`}
          alt="logo"
          loading="lazy"
          width={24}
          height={40}
          className={`md:hidden ${openDropdown ? 'bg-blue md:bg-none text-[#480DEC] -p-1 md:p-0' : 'cursor-pointer md:hidden'}`}
          onClick={handleDropdown}
        />
        <div
          onClick={handleDropdown} className={`hidden md:block ${openDropdown ? 'p-[0.5px]' : 'py-[10px] px-[7px] '} md:bg-blue rounded-[4px]`}>
          <Image
            src={`${openDropdown ? "/assets/icons/close.svg" : "/assets/icons/hamburger.svg"}`}
            alt="logo"
            width={24}
            height={40}
            className={`cursor-pointer ${openDropdown ? 'w-10' : ''}`}
          />
        </div>
        {openDropdown && (
          <nav className="absolute top-14 md:top-16 right-0 z-50 bg-[#F4F4F4] md:bg-[#F4F4F4]/80 md:backdrop-blur-3xl w-72 md:w-[300px] mt-5 md:mt-0 py-5 px-6 shadow-lg md:rounded-md md:right-6">
            <ul className="text-right flex flex-col items-end gap-8 capitalize text-[16px]">
              <NavItem path="/service" onClick={handleDropdown}>
                Service
              </NavItem>
              <NavItem path="/portfolio" onClick={handleDropdown}>
                Portfolio
              </NavItem>
              <NavItem path="/blog" onClick={handleDropdown}>
                Blog
              </NavItem>
              <NavItem path="/about" onClick={handleDropdown}>
                About
              </NavItem>
              <NavItem path="/team" onClick={handleDropdown}>
                Team
              </NavItem>
              <NavItem path="/contact" onClick={handleDropdown}>
                Contact
              </NavItem>
              <NavItem path="/career" onClick={handleDropdown}>
                Career
              </NavItem>
              <NavItem onClick={handleDropdown} dropdownItems={[
                { path: '/company-profile', label: 'Company Profile' },
                { path: '/certificate', label: 'Sertifikat' }
              ]}>
                Download
              </NavItem>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Nav;
