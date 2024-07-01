import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, src, alt }: any) => (
  <Link href={href} passHref target="_blank" rel="noopener noreferrer" className="hover:backdrop-blur-xl hover:shadow-xl">
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
    />
  </Link>
);

export default SocialLink;