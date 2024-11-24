import React from "react";
import useStore from "../../store/index";

interface KanaHeaderButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  leftIcon?: React.ReactNode; // Left icon prop
  rightIcon?: React.ReactNode; // Right icon prop
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  type?: "default"; // Always "default", auto-adjusts based on theme
}

const KanaHeaderButton: React.FC<KanaHeaderButtonProps> = ({
  label,
  size = "medium",
  width = "auto",
  height = "auto",
  type = "default", // Default to "default"
  leftIcon,
  rightIcon,
  onClick,
  buttonType = "button",
}) => {
  const { isDarkMode } = useStore();

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-sm rounded-lg",
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
  `;

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={buttonClasses}
      style={{
        width, // Custom width
        height, // Custom height
      }}
    >
      {leftIcon}
      <span>{label}</span>
      {rightIcon}
    </button>
  );
};

export default KanaHeaderButton;
