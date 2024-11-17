import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface KanaHeaderButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  leftIcon?: string | StaticImport; // Left icon prop
  rightIcon?: string | StaticImport; // Right icon prop
  type?: "default" | "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const KanaHeaderButton: React.FC<KanaHeaderButtonProps> = ({
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
    primary: {
      default: "bg-teal-400 text-darkGray-500 ",
      hover: "hover:bg-teal-200 ",
      active: "active:bg-teal-600 ",
    },
    secondary: {
      default: "bg-cyan-400 text-darkGray-500 ",
      hover: "hover:bg-cyan-200 ",
      active: "active:bg-cyan-600 ",
    },
    warning: {
      default: "bg-orange-400 text-darkGray-500",
      hover: "hover:bg-orange-200 ",
      active: "active:bg-orange-600 ",
    },
    danger: {
      default: "bg-red-400 text-darkGray-500 ",
      hover: "hover:bg-red-200 ",
      active: "active:bg-red-600 ",
    },
  };

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
        height, // Custom height         borderRadius: 'var(--smooth-corners, 0.5em)',
      }}
    >
      {leftIcon && <Image src={leftIcon} alt="" />}
      <span>{label}</span>
      {rightIcon && <Image src={rightIcon} alt="" />}
    </button>
  );
};

export default KanaHeaderButton;