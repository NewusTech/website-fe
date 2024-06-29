import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItemProps {
  path?: string;
  onClick: () => void;
  children: React.ReactNode;
  dropdownItems?: { path: string; label: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ path, onClick, children, dropdownItems = [] }) => {
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
      <div className="flex justify-end items-center">
        {path ? (
          <Link href={path} onClick={onClick} className={`${isActive ? "text-[#480DEC] font-bold border-b-[3px] border-[#480DEC]" : "md:text-white border-none hover:text-[#b8acdb] hover:font-bold text-white"
            }`}>
            {children}
          </Link>
        ) : (
          <button onClick={handleDropdown} className="md:text-white border-none hover:text-[#b8acdb] hover:font-bold uppercase text-white">
            {children}
          </button>
        )}
        {dropdownItems.length > 0 && (
          <button onClick={handleDropdown} className="ml-2 capitalize">
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.30143 0.796078L6.86786 6.47904L12.5508 0.912609" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <ul className="mt-2 w-48 text-black bg-[#480DEC] capitalize">
          {dropdownItems.map((item, index) => (
            <li key={index} className="bg-[#480DEC]">
              <Link href={item.path} onClick={onClick} className="py-3 text-sm text-white">
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
