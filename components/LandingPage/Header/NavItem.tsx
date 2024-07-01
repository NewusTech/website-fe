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
      <div className="flex justify-end items-center -mr-4 md:-mr-0  ">
        {path ? (
          <Link href={path} onClick={onClick} className={`${isActive ? "text-[#480DEC] font-bold border-b-[3px] border-[#480DEC]" : "md:text-white border-none hover:text-[#b8acdb] hover:font-bold text-white"
            }`}>
            {children}
          </Link>
        ) : (
          <button onClick={handleDropdown} className="md:text-white border-none hover:text-[#b8acdb] hover:font-bold md:uppercase text-black pr-3 md:pr-0">
            {children}
          </button>
        )}
        {dropdownItems.length > 0 && (
          <div>
            <button onClick={handleDropdown} className="hidden md:block md:ml-2 capitalize">
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.30143 0.796078L6.86786 6.47904L12.5508 0.912609" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button onClick={handleDropdown} className="md:hidden mr-3 capitalize">
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05827 0.999997L6.6247 6.68296L12.3077 1.11653" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <ul className="mt-2 md:w-48 text-black md:bg-[#480DEC] capitalize">
          {dropdownItems.map((item, index) => (
            <li key={index} className="md:bg-[#480DEC]">
              <Link href={item.path} onClick={onClick} className="md:py-3 text-black md:text-white text-[12px]">
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
