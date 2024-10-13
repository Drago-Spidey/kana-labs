"use client";  // Ensures this is a client-side component

import React, { useState } from "react";

const Dropdown = () => {
  // State to manage visibility of the dropdown content
  const [isOpen, setIsOpen] = useState(false);

  // Toggle visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border border-white/10 text-klFC rounded-2xl p-6 font-normal w-full bg-klbg my-4 "
     
    >
      {/* Header section */}
      <div className="flex flex-row justify-between hover:cursor-pointer"  onClick={toggleDropdown} >
        <span>Additional Details</span>
        {/* Conditionally render the icon based on isOpen state */}
        <img
          src={isOpen ? "/images/dropup.svg" : "/images/dropdown.svg"}
          alt={isOpen ? "Dropup icon" : "Dropdown icon"}
        />
      </div>

      {/* Conditionally render the dropdown content with smooth transition */}
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 mt-4">
          <hr className="border-white/10" />

          <div className="flex flex-row justify-between">
            <span>Minimum received</span>
            <span>0.00</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>Transaction Fee</span>
            <span>0.00</span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-klc font-extrabold">More routes</span>
            <img src="/images/share.svg" alt="Share icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
