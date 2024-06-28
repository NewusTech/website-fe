import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavItem = ({ path, onClick, children }: any) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(path === pathname);
  }, [pathname, path]);

  return (
    <li
      className={`${isActive ? "text-[#480DEC] font-bold" : "md:text-white   hover:text-[#480DEC] hover:font-bold"
        }`}
    >
      <Link href={path} onClick={onClick} className={`${isActive ? "border-b-[3px] border-[#480DEC]" : "border-none hover:font-bold"
        }`}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
