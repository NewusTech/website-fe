import { chooseUs } from "@/constants";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faNodeJs, faFigma, faJs, faGitAlt, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

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
    <section className="container mx-auto py-10 md:pt-5 md:pb-10 md:mb-20 overflow-hidden">
      <div>
        <h1 className="text-center text-tangerine text-mobileJudul md:text-[24px]">
          <strong className="text-blue mr-1 md:mr-[2px]">Why </strong>Choose Us?
        </h1>
        <h4 className="font-bold text-mobileSubjudul md:text-webSubjudul text-center mt-[10px] md:mt-5 text-black">
          &quot;Trusted IT Consulting for Exceptional Service Quality&quot;
        </h4>
        <div className="flex items-center justify-center mt-4 md:mt-10 gap-2 md:gap-[30px] max-w-6xl mx-auto overflow-hidden">
          {chooseUs.map(({ id, logo, name, desc }: WhyChooseUsProps) => (
            <div
              data-aos='fade-in'
              data-aos-delay={id * 100}
              key={id}
              className="flex flex-col items-center justify-center gap-3 md:gap-[60px] w-4/12 mx-auto md:w-4/12"
            >
              <div className="md:w-[100px] md:h-[100px] h-7 w-7">
                <Image
                  src={logo}
                  alt={name}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <p className="text-center md:w-full lg:w-[320px] md:text-webDesk text-mobileDesk line-clamp-3 md:line-clamp-none">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 md:pt-20 lg:px-10">
        <h1 className="text-center text-tangerine text-mobileJudul md:text-[24px] pb-3 md:pb-10">
          <strong className="text-blue mr-2 md:mr-[10px]">Our Skills</strong>
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 flex-grow-0
         gap-2 md:gap-4">
          {skills.map((skill, index) => (
            <div data-aos="fade-down" key={index} className="w-full flex flex-col items-center p-2 md:p-3  shadow-lg rounded-lg  text-center">
              {typeof skill.icon === 'string' ? (
                <Image
                  src={`${skill.icon}`} // Path ke ikon kustom
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mx-auto mb-4 w-7 h-7 md:h-12 md:w-12"
                />
              ) : (
                <FontAwesomeIcon icon={skill.icon} className="w-7 h-7 md:h-12 md:w-12 mb-4" />
              )}
              <h3 className="md:text-webDesk text-mobileDesk font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
