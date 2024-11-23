import React from "react";
import useStore from '../../store/index';


interface KanaButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string; 
  height?: string;
  leftIcon?: React.ReactNode; // Left icon prop
  rightIcon?: React.ReactNode;   type?: "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const KanaButton: React.FC<KanaButtonProps> = ({
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
  const typeStyles = {
    primary: {
      default: "bg-darkGray-500 text-teal-400 border-teal-400",
      hover: "hover:bg-klblack-500 hover:text-teal-200 hover:border-teal-200",
      active: "active:bg-klblack-500 active:text-teal-600 active:border-teal-600",
    },
      secondary: {
        default: "bg-darkGray-500 text-cyan-400 border-cyan-400 ",
        hover: "hover:bg-klblack-500 hover:text-cyan-200 hover:border-cyan-200",
        active: "active:bg-klblack-500 active:text-cyan-600 active:border-cyan-600",
      },
      warning: {
        default: "bg-darkGray-500 text-orange-400 border-orange-400 ",
        hover: "hover:bg-klblack-500 hover:text-orange-200 hover:border-orange-200",
        active: "active:bg-klblack-500 active:text-orange-600 active:border-orange-600",
      },
      danger: {
        default: "bg-darkGray-500 text-red-500 border-red-500 border-red-500",
        hover: "hover:bg-klblack-500 hover:text-red-400 hover:border-red-400",
        active: "active:bg-klblack-500 active:text-red-600 active:border-red-600",
      },
      primarylight: {
        default: "bg-klwhite-850 text-teal-600 border-teal-600",
        hover: "hover:bg-teal-600 hover:text-white",
        active: "active:bg-klwhite-900 active:text-teal-600 active:border-teal-400",
      },
      secondarylight: {
        default: "bg-klwhite-850 text-cyan-400 border-cyan-400",
        hover: "hover:bg-cyan-400 hover:text-white",
        active: "active:bg-klwhite-900 active:text-cyan-600 active:border-cyan-600",
      },
      warninglight: {
        default: "bg-klwhite-850 text-orange-400 border-orange-400",
        hover: "hover:bg-orange-400 hover:text-white",
        active: "active:bg-klwhite-900 active:text-orange-600 active:border-orange-600",
      },
      dangerlight: {
        default: "bg-klwhite-850 text-red-500 border-red-500",
        hover: "hover:bg-red-500 hover:text-white",
        active: "active:bg-klwhite-900 active:text-red-600 active:border-red-500",
      },
      
   
  };

  // Extract styles based on button type
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
    border
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

export default KanaButton;
