import { chooseUs } from "@/constants";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faNodeJs, faFigma, faJs, faGitAlt, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import Services from "./ServiceCard";

const skills = [
  { name: "Next.js", icon: faJs },
  { name: "Tailwind CSS", icon: faCss3Alt },
  { name: "React", icon: faReact },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "MariaDB", icon: faDatabase },
  { name: "Node.js", icon: faNodeJs },
  { name: "Figma", icon: faFigma },
  { name: "Canva", icon: '/assets/icons/canva.svg' },
  { name: "Flutter", icon: '/assets/icons/flutter.svg' },
  { name: "Go Lang", icon: faGolang },
  { name: "Visual Basic", icon: faCode },
];

interface WhyChooseUsProps {
  id: number;
  name: string;
  logo: string;
  desc: string;
}

const WhyChooseUs = () => {
  return (
    <section className="px-5 md:container mx-auto py-8 md:pt-5 md:pb-16 xl:pb-16 2xl:pb-[90px] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full gap-5 h-max">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 h-full">
          <h1 className="text-tangerine font-bold text-nowrap text-mobileJudul md:text-[20px] pb-3 xl:pb-5 text-center lg:text-left">
            <span className="text-blue mr-1 md:mr-[2px]">Why </span>Choose Us?
          </h1>
          <h2 className="text-mobileSubjudul md:text-[24px] font-bold">
            Nobody Knows Clients Like We Have Preferred
          </h2>
          <p className="text-mobileDesk md:text-webDesk">
            Lorem ipsum dolor sit amet consectetur. Enim malesuada integer sit vitae. Etiam leo amet
            nam pellentesque tempus. Fermentum sed consectetur senectus nibh curabitur vitae. Nam
            massa elit neque sociis.
          </p>
          <div className="flex-grow h-full">
            <Services />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full relative">
          <Image
            alt="Background"
            src="/assets/icons/about-landing/bg.jpeg"
            width={1000}
            height={544}
            className="rounded-xl h-[250px] md:h-[355px] lg:h-[402.6px] xl:h-[340px] 2xl:h-[340px] object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-white inline-flex p-3 rounded-md items-center z-20" >
            <Image alt='Certified Enginners' src={'/assets/icons/about-landing/Trusted.svg'} width={50} height={50} className="w-[30px] lg:w-[50px]" />
            <p className="text-mobileDesk md:text-webDesk text-gray-600">Trusted By 9000 Clients</p>
          </div>
        </div>
      </div>
      <div className="pt-8 2xl:pt-20">
        <div className="flex items-center gap-3 pb-3">
          <h1 className="text-center text-tangerine font-bold text-nowrap text-mobileJudul md:text-[20px]">
            <span className="text-blue mr-1 md:mr-[2px]">Our </span>Skills
          </h1>
          <div className="w-full h-[1px] bg-gray"></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 flex-grow-0
         gap-2 md:gap-4">
          {skills.map((skill, index) => (
            <div data-aos="fade-down" key={index} className="w-full flex flex-col items-center p-2 md:p-3 shadow-md xl:shadow-lg rounded-lg  text-center">
              {typeof skill.icon === 'string' ? (
                <Image
                  src={`${skill.icon}`} // Path ke ikon kustom
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mx-auto mb-2 w-7 h-7 md:h-12 md:w-12"
                />
              ) : (
                <FontAwesomeIcon icon={skill.icon} className="w-7 h-7 md:h-12 md:w-12 mb-2" />
              )}
              <h3 className="md:text-webDesk text-mobileDesk font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default WhyChooseUs;
