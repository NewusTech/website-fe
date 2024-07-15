import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, src, alt }: any) => (
  <Link href={href} passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="lg:h-6 h-5 w-5 lg:w-6"
    />
  </Link>
);

export default SocialLink;