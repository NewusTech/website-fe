import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributeAnchorTarget, useEffect, useState } from "react";

interface NavItemProps {
  path?: string;
  onClick: () => void;
  children: React.ReactNode;
  dropdownItems?: { path: string; label: string }[];
  target?: HTMLAttributeAnchorTarget
}

const NavItem: React.FC<NavItemProps> = ({ path, onClick, children, dropdownItems = [], target="" }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (path) {
      setIsActive(path === pathname);
    }
  }, [pathname, path]);

  const handleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="relative">
      <div className="flex items-center">
        {path ? (
          <Link href={path} onClick={onClick} className={`${isActive ? "text-[#480DEC] font-bold border-b-[3px] border-[#480DEC]" : "md:text-black border-none hover:text-[#480DEC] hover:font-bold"
            }`}>
            {children}
          </Link>
        ) : (
          <button onClick={handleDropdown} className="md:text-black border-none hover:text-[#480DEC] hover:font-bold capitalize">
            {children}
          </button>
        )}
        {dropdownItems.length > 0 && (
          <button onClick={handleDropdown} className="ml-2 capitalize">
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.05827 0.999997L6.6247 6.68296L12.3077 1.11653" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-[#F4F4F4] md:bg-[#F4F4F4]/80 md:backdrop-blur-3xl capitalize border border-gray-200 rounded-md shadow-lg gap-y-4">
          {dropdownItems.map((item, index) => (
            <li key={index} className="bg-[#F4F4F4] md:bg-[#F4F4F4]/80 md:backdrop-blur-3xl">
              <Link href={item.path} onClick={onClick} className="block px-4 py-2 text-sm text-gray-700" target={target}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
