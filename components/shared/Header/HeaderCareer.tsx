const Header = () => {
  return (
    <header className="w-full relative">
      <div className="py-10 md:h-[305px] xl:h-[400px] 2xl:max-h-full md:min-h-[75px] bg-[url('/assets/images/our-team.jpg')] bg-cover flex justify-center items-center relative">
        {/* Overlay dengan filter brightness */}
        <div className="absolute inset-0 bg-black/50"/>
        
        <div className="flex flex-col justify-center items-center md:gap-[21px] max-w-[238px] md:max-w-[831px] relative z-10">
          <h1 className="text-white font-bold text-mobileJudul md:text-webJudul">
            Were Hiring !
          </h1>
          <h2 className="text-[#FF6600] font-bold text-mobileJudul md:text-[32px] py-3 md:py-0">
            Be part of our mission.
          </h2>
          <p className="text-white text-center text-mobileDesk md:text-webSubjudul line-clamp-2 md:line-clamp-none">
            Newus Technology is opening up opportunities for talented
            individuals to join our team! Find the position that matches your
            interests and skills! Click on the role that interests you & lets
            contribute and grow together!.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
