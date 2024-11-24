import React from "react";
import useStore from "../../store/index";

interface DynamicInputProps {
  id: string;
  value: string | number;
  placeholder?: string;
  min?: number;
  type?: "text" | "number" | "email" | "password";
  className?: string;
  onChange: (value: string | number) => void;
}

const Input: React.FC<DynamicInputProps> = ({
  id,
  value,
  placeholder = "Enter value",
  min = 0,
  type = "text",
  className = "", // Default to light mode
  onChange,
}) => {

    const { isDarkMode } = useStore();

  // Define styles for light and dark themes
  const themeClasses = isDarkMode
    ? "text-white border-b-[rgba(255,255,255,0.10)]"
    : "text-black border-b-[#E3E8EF]";

  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      min={min}
      type={type}
      autoComplete="off"
      className={`outline-0 border-0 h-full bg-transparent border-b-[1px] py-[0.5rem] text-left font-manrope w-full font-[600] text-[1.25rem] ${themeClasses} ${className}`}
      onChange={(e) => {
        const inputValue =  e.target.value;
        onChange(inputValue);
      }}
    />
  );
};

export default Input;
