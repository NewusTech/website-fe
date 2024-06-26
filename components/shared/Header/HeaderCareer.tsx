import Image from "next/image";

const Header = ({
  image
}: {
  image: string;
}) => {
  return (
    <header className="w-full z-10 relative">
      <div className="md:min-w-[1350px] h-[212px] md:min-h-[471px] bg-[url('/assets/images/career-header.svg')] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:gap-[21px] max-w-[238px] md:max-w-[831px]">
          <h1 className="text-white uppercase font-bold text-[10px] md:text-[24px]">
            Were hiring !
          </h1>
          <h2 className="text-[#FF6600] font-bold md:text-[56px] pb-3 md:pb-0">Be part of our mission.</h2>
          <p className="text-white text-center text-[6px] md:text-[16px]">Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig. Lörem ipsum astrobel sar direlig.  Kronde est astrobel sar direlig.Lörem ipsum astrobel </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
