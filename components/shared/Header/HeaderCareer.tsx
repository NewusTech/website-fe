const Header = ({
  image
}: {
  image: string;
}) => {
  return (
    <header className="w-full relative">
      <div className="md:min-w-[1350px] h-[212px] md:min-h-[471px] bg-[url('/assets/images/career-header.svg')] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:gap-[21px] max-w-[238px] md:max-w-[831px]">
          <h1 className="text-white font-bold text-[14px] md:text-[24px]">
            Were Hiring !
          </h1>
          <h2 className="text-[#FF6600] font-bold md:text-[56px] pb-3 md:pb-0">Be part of our mission.</h2>
          <p className="text-white text-center text-[10px] md:text-[16px]">Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig. Lörem ipsum astrobel sar direlig.</p>
        </div>
      </div>
    </header>
    // <header className="w-full z-50 relative">
    //   <div className="md:min-w-[1350px] md:min-h-[75px]">
    //     <Image
    //       src={image}
    //       alt="blog header"
    //       width={1350}
    //       height={75}
    //       className={`w-full h-full object-cover`}
    //     />
    //   </div>
    // </header>
  );
};

export default Header;
