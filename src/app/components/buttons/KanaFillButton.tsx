import React from "react";

interface KanaFillButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string; 
  height?: string;
  icon?: React.ReactNode;
  type?: "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const KanaFillButton: React.FC<KanaFillButtonProps> = ({
  label,
  size = "medium",
  width = "auto",
  height = "auto",
  type = "primary",
  icon,
  onClick,
  buttonType = "button",
}) => {

    const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-4 text-md",
  };

  
  // Define default colors for primary and secondary types using Tailwind classes
    //borderRadius: 'var(--smooth-corners, 0.5em)', // Smooth corners

  const typeStyles = {
    primary: {
        default: "bg-teal-400 text-darkGray-500 ",
        hover: "hover:bg-teal-200",
        active: "active:bg-teal-600",
      },
    secondary: {
        default: "bg-cyan-400 text-darkGray-500 ",
        hover: "hover:bg-cyan-200",
        active: "active:bg-cyan-600",
    },
    warning: {
        default: "bg-orange-400 text-darkGray-500 ",
        hover: "hover:bg-orange-200",
        active: "active:bg-orange-600",
      },
    danger: {
        default: "bg-red-400 text-darkGray-500 ",
        hover: "hover:bg-red-200",
        active: "active:bg-red-600",
    },
   
  };

  // Extract styles based on button type
  const { default: defaultStyle, active, hover } = typeStyles[type];

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
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};
  //, // Smooth corners

export default KanaFillButton;
