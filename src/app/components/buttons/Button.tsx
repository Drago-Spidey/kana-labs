import React from "react";

// Define the type for props
interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="
        h-14 
        border 
        text-klc 
        font-extrabold 
        border-klc 
        rounded-2xl 
        w-full 
        text-center 
        shadow-customCombined 
        
        hover:bg-klb
        hover:shadow-customH
        active:bg-klb
        active:shadow-customA
      "
    >
      {label}
    </button>
  );
};

export default Button;
