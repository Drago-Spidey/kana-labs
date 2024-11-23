import React from "react";
import useStore from '../../store/index';


interface KanaFillButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string; 
  height?: string;
  leftIcon?: React.ReactNode; // Left icon prop
  rightIcon?: React.ReactNode;   type?: "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const KanaFillButton: React.FC<KanaFillButtonProps> = ({
  label,
  size = "medium",
  width = "auto",
  height = "auto",
  type = "primary",
  leftIcon,
  rightIcon,
  onClick,
  buttonType = "button",
}) => {

  const { isDarkMode } = useStore();

    const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-4 text-md",
  };

  
  // Define default colors for primary and secondary types using Tailwind classes
    //borderRadius: 'var(--smooth-corners, 0.5em)', // Smooth corners
    const typeStyles = {
      primary: {
        default: "bg-teal-400",
        hover: "hover:bg-teal-200",
        active: "active:bg-teal-600",
      },
      primarylight: {
        default: "bg-teal-400 ",
        hover: "hover:bg-teal-500",
        active: "active:bg-teal-600",
      },
      secondary: {
        default: "bg-cyan-400",
        hover: "hover:bg-cyan-500",
        active: "active:bg-cyan-600",
      },
      secondarylight: {
        default: "bg-cyan-400",
        hover: "hover:bg-cyan-500",
        active: "active:bg-cyan-600",
      },
      warning: {
        default: "bg-orange-400",
        hover: "hover:bg-orange-200",
        active: "active:bg-orange-600",
      },
      warninglight: {
        default: "bg-orange-400",
        hover: "hover:bg-orange-500",
        active: "active:bg-orange-600",
      },
      danger: {
        default: "bg-red-500",
        hover: "hover:bg-red-400",
        active: "active:bg-red-600",
      },
      dangerlight: {
        default: "bg-red-500",
        hover: "hover:bg-red-600",
        active: "active:bg-red-700",
      },
    };

    const theme: string = isDarkMode ? "" : "light";
  // Generate the full key and ensure it exists in typeStyles
  const styleKey = `${type}${theme}` as keyof typeof typeStyles;

  // Provide fallback styles in case the key doesn't exist
  const { default: defaultStyle, hover, active } =
    typeStyles[styleKey] || typeStyles.primary;

    

  const buttonClasses = `
    ${sizeClasses[size]}
    ${defaultStyle}
    ${hover}
    ${active}
    flex
    items-center
    justify-center
    gap-2
    rounded-lg
    transition-all
    duration-200
    font-manrope
    font-extrabold
    ${isDarkMode?'text-darkGray-500':'text-white'}
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
  //, // Smooth corners

export default KanaFillButton;
