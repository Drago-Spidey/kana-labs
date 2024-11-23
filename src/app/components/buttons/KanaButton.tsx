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
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-4 text-lg",
    large: "px-8 py-5 text-xl",
  };


  // Define default colors for primary and secondary types using Tailwind classes
  const typeStyles = {
    primary: {
      default: "bg-darkGray-500  text-teal-400 border-teal-400 shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#0E9384]",
      hover: "hover:bg-klblack-500 hover:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#0E9384]",
      active: "active:bg-klblack-500 active:text-teal-600 active:border-teal-400 active:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#0E9384]",
    },
    secondary: {
      default: "bg-darkGray-500 text-cyan-400 border-cyan-400 shadow-[0px_10px_8px_0px_#22CCEE33,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#06AED4]",
      hover: "hover:bg-klblack-500 hover:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#06AED4]",
      active: "active:bg-klblack-500 active:text-cyan-600 active:border-cyan-600 active:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#06AED4]",
    },
    warning: {
      default: "bg-darkGray-500 text-orange-400 border-orange-400 shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#DC6803]",
      hover: "hover:bg-klblack-500 hover:shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#DC6803]",
      active: "active:bg-klblack-500 active:text-orange-600 active:border-orange-600 active:shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#DC6803]",
    },
    danger: {
      default: "bg-darkGray-500 text-red-500 border-red-500 shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#F04438]",
      hover: "hover:bg-klblack-500 hover:shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#F04438]",
      active: "active:bg-klblack-500 active:text-red-600 active:border-red-500 active:shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#F04438]",
    },
    primarylight: {
      default: "bg-klwhite-850  text-teal-400 border-teal-400 shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#0E9384]",
      hover: "hover:bg-klwhite-900 hover:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#0E9384]",
      active: "active:bg-klwhite-900 active:text-teal-600 active:border-teal-400 active:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#0E9384]",
    },
    secondarylight: {
      default: "bg-klwhite-850   text-cyan-400 border-cyan-400 shadow-[0px_10px_8px_0px_#22CCEE33,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#06AED4]",
      hover: "hover:bg-klwhite-900 hover:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#06AED4]",
      active: "active:bg-klwhite-900 active:text-cyan-600 active:border-cyan-600 active:shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#06AED4]",
    },
    warninglight: {
      default: "bg-klwhite-850  text-orange-400 border-orange-400 shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#DC6803]",
      hover: "hover:bg-klwhite-900 hover:shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#DC6803]",
      active: "active:bg-klwhite-900 active:text-orange-600 active:border-orange-600 active:shadow-[0px_10px_8px_0px_#FDB02233,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#DC6803]",
    },
    dangerlight: {
      default: "bg-klwhite-850  text-red-500 border-red-500 shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#F04438]",
      hover: "hover:bg-klwhite-900 hover:shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_7px_0px_0px_#F04438]",
      active: "active:bg-klwhite-900 active:text-red-600 active:border-red-500 active:shadow-[0px_10px_8px_0px_#F0443833,0px_4px_8px_0px_#00000026,0px_3px_0px_0px_#F04438]",
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
    rounded-2xl
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
