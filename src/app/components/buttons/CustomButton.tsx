import React, { useState } from 'react';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large'; // Optional predefined sizes
  width?: string; // Custom width
  height?: string; // Custom height
  defaultColor?: string; // Default background color
  hoverColor?: string; // Background color on hover
  clickColor?: string; // Background color on click
  defaultTextColor?: string; // Default text color
  hoverTextColor?: string; // Text color on hover
  clickTextColor?: string; // Text color on click
  borderColor?: string; // Border color
  icon?: React.ReactNode; // Optional icon
  type?: 'primary' | 'secondary'; // Optional button type
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  size = 'medium',
  width = 'auto', // Default to auto, can be overridden
  height = 'auto', // Default to auto, can be overridden
  type = 'primary', // Default type is 'primary'
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  // Define different size classes for padding
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-4 text-lg',
    large: 'px-8 py-5 text-xl',
  };

  // Define default colors for primary and secondary types
  const typeStyles = {
    primary: {
      defaultColor: '#17181A',
      hoverColor: '#0C0C0D',
      clickColor: '#0C0C0D',
      defaultTextColor: '#22CCEE',
      hoverTextColor: '#89e7fa',
      clickTextColor: '#088AB2',
      borderColor: '#22CCEE',
    },
    secondary: {
      defaultColor: '#17181A',
      hoverColor: '#0C0C0D',
      clickColor: '#0C0C0D',
      defaultTextColor: '#2ED3B7',
      hoverTextColor: '#99F6E0',
      clickTextColor: '#0E9384',
      borderColor: '#2ED3B7',
    },
  };

  // Extract styles based on button type
  const {
    defaultColor,
    hoverColor,
    clickColor,
    defaultTextColor,
    hoverTextColor,
    clickTextColor,
    borderColor,
  } = typeStyles[type]; // Use the specified type or default to 'primary'

  // Set background and text colors based on interaction state
  const backgroundColor = isClicked ? clickColor : isHovered ? hoverColor : defaultColor;
  const textColor = isClicked ? clickTextColor : isHovered ? hoverTextColor : defaultTextColor;

  const buttonClasses = `
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    border
    transition-all
    duration-200
    ${sizeClasses[size]}
    shadow-lg
    font-manrope
    font-extrabold
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
        boxShadow: isClicked
          ? `0px 3px 0px ${defaultTextColor}, 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 10px 8px rgba(0, 255, 255, 0.1)`
          : isHovered
          ? `0px 7px 0px ${defaultTextColor}, 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 10px 8px rgba(0, 255, 255, 0.1)`
          : `0px 5px 0px ${defaultTextColor}, 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 10px 8px rgba(0, 255, 255, 0.1)`,
        width, // Custom width
        height, // Custom height
      }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default CustomButton;
