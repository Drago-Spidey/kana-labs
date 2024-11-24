import React, { useState, useEffect, useRef } from "react";
import useStore from "../../store/index";

interface KanaDropdownButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  leftIcon?: React.ReactNode; // Left icon prop
  rightIcon?: React.ReactNode; // Right icon prop
  buttonType?: "button" | "submit" | "reset";
  type?: "default"; // Always "default", auto-adjusts based on theme
  dropdownOptions: { label: string; type: "link" | "text"; href?: string }[]; // Array of options with link and text
}

const KanaDropdownButton: React.FC<KanaDropdownButtonProps> = ({
  label,
  size = "medium",
  width = "auto",
  height = "auto",
  type = "default", // Default to "default"
  leftIcon,
  rightIcon,
  buttonType = "button",
  dropdownOptions,
}) => {
  const { isDarkMode } = useStore();
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to track the dropdown

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-6 py-4 text-md font-extrabold rounded-2xl",
    large: "px-6 py-4 text-md rounded-2xl",
  };

  const typeStyles = {
    default: {
      default: "bg-darkGray-400 text-teal-400 ",
      hover: "hover:text-teal-200 ",
      active: "active:text-teal-600 ",
    },
    defaultlight: {
      default: "bg-[#eff7f8] text-teal-600 ",
      hover: "hover:bg-[#e4f2f3] ",
      active: "active:bg-[#eff7f8] ",
    },
  };

  // Automatically switch styles based on `isDarkMode`
  const activeType = isDarkMode ? "default" : "defaultlight";
  const { default: defaultStyle, hover, active } = typeStyles[activeType];

  const buttonClasses = `
    ${sizeClasses[size]}
    ${defaultStyle}
    ${hover}
    ${active}
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-200
    font-manrope
    font-extrabold
    relative
  `;

  const dropdownClasses = `
    absolute
    top-full
    left-0
    mt-2
    ${isDarkMode? 'bg-darkGray-500  text-white': 'bg-[#EEF7F8]  text-[#364152]'}
    
    rounded-2xl
    shadow-md
    w-full
    z-0
    ${isOpen ? "block" : "hidden"}
  `;

  const optionClasses = `
    px-4
    py-5
       ${isDarkMode? 'hover:bg-[#1f2122]': 'hover:bg-[#E4F2F3]'}

    
    cursor-pointer
    rounded-2xl
    transition-all
    duration-200
    font-extrabold
  `;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type={buttonType}
        onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
        className={buttonClasses}
        style={{
          width, // Custom width
          height, // Custom height
        }}
      >
        {leftIcon}
        <span>{label}</span>
        <div className="ml-4">{rightIcon}</div>
      </button>

      {/* Dropdown menu */}
      <div className={dropdownClasses}>
        {dropdownOptions.map((option, index) => (
          <div
            key={index}
            className={optionClasses}
            onClick={() => {
              if (option.type === "link" && option.href) {
                window.location.href = option.href; // Navigate to the link if it's a "link" type
              } else {
                setIsOpen(false); // Close dropdown for "text" option
                console.log(`Selected: ${option.label}`);
              }
            }}
          >
            {option.type === "link" ? (
              <a href={option.href}>{option.label}</a>
            ) : (
              <span>{option.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanaDropdownButton;
