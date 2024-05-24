import Image from "next/image";

const Nav = () => {
  return (
    <section className="max-w-screen 2xl:container 2xlmx-auto">
      <div className="2xl:w-[72%] container mx-auto flex justify-between md:mt-[30px] items-center md:z-20 md:top-0 md:absolute py-[22px] md:py-0">
        <Image
          src="/assets/icons/logo-mobile.svg"
          alt="logo"
          width={206}
          height={56}
          className="w-[114px] h-[34px] md:w-[206px] md:h-[56px]"
        />
        <Image
          src="/assets/icons/hamburger-2.svg"
          alt="logo"
          width={24}
          height={40}
          className="md:hidden"
        />
        <div className="hidden md:block py-[10px] px-[7px] md:bg-blue rounded-[4px]">
          <Image
            src="/assets/icons/hamburger.svg"
            alt="logo"
            width={24}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
