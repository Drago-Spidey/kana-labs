"use client"; // Add this line to indicate that this is a Client Component

import React, { useState } from "react";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values (including decimals)
    const value = event.target.value;

    // Use a regular expression to validate the input
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="relative">
      <input
        type="text" // Keep as text to allow manual input validation
        value={inputValue}
        onChange={handleChange}
        className="border-0 border-b border-b-white/10 outline-none appearance-none py-2 text-xl font-extrabold w-full bg-kle "
        placeholder="0.00"
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          aria-label="Clear input"
        >
          <img src="/images/x-circle.svg" alt=""  /> {/* Replace with your close icon */}
        </button>
      )}
    </div>
  );
};

export default Input;
