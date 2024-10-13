'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [activeIndex, setActiveIndex] = useState(0);

  // Map paths to the corresponding index
  const pathToIndexMap: { [key: string]: number } = {
    '/Page/Swap': 0,
    '/Page/OPerps': 3,
    // Add other paths and their corresponding index here
  };

  // Set activeIndex based on the current path
  useEffect(() => {
    if (pathname && pathToIndexMap[pathname] !== undefined) {
      setActiveIndex(pathToIndexMap[pathname]);
    }
  }, [pathname]);

  const handleNavItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-[#17181A] w-20 sticky top-0 h-svh">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="w-8 h-8 my-10">
          <img src="/assets/KanaLabsLogo.svg" alt="kanalabslogo" />
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-2">
          <Link href="/Page/Swap">
            <NavItem
              icon={<img src="/assets/swap.svg" alt="Swap" />}
              isActive={activeIndex === 0}
              onClick={() => handleNavItemClick(0)}
            />
          </Link>

          <NavItem
            icon={<img src="/assets/stake.svg" alt="Stake" />}
            isActive={activeIndex === 1}
            onClick={() => handleNavItemClick(1)}
          />

          <NavItem
            icon={<img src="/assets/yield.svg" alt="Yield" />}
            isActive={activeIndex === 2}
            onClick={() => handleNavItemClick(2)}
          />

          <Link href="/Page/OPerps">
            <NavItem
              icon={<img src="/assets/switch.svg" alt="Switch" />}
              isActive={activeIndex === 3}
              onClick={() => handleNavItemClick(3)}
            />
          </Link>

          <NavItem
            icon={<img src="/assets/trade.svg" alt="Trade" />}
            isActive={activeIndex === 4}
            onClick={() => handleNavItemClick(4)}
          />

          <NavItem
            icon={<img src="/assets/grid.svg" alt="Grid" />}
            isActive={activeIndex === 5}
            onClick={() => handleNavItemClick(5)}
          />
        </div>
      </div>

      {/* Profile Button */}
      <div className="flex justify-center items-center bg-[#111213] rounded-lg w-14 h-14 mx-auto">
        <img src="/assets/help.svg" alt="Help" />
      </div>
    </div>
  );
};

// Reusable Nav Item Component
const NavItem = ({
  icon,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex justify-center items-center w-14 h-14 rounded-lg transition ${
        isActive ? 'bg-white bg-opacity-20' : 'bg-transparent'
      } hover:bg-white hover:bg-opacity-10`}
      onClick={onClick}
    >
      <div
        className={`transition-transform duration-300 ${
          isActive ? 'brightness-200' : ''
        }`}
      >
        {icon}
      </div>
    </div>
  );
};

export default Sidebar;
