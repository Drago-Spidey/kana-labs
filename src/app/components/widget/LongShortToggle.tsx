"use client";

import React, { useState } from "react";

const LongShortToggle = () => {
  const [selected, setSelected] = useState("Long");

  const handleToggle = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="flex flex-row items-center bg-klb border border-white/10 rounded-lg">
      <button
        className={`flex flex-row items-center justify-center px-6 py-2 rounded-lg ${
          selected === "Long" ? "bg-[#2ED3B780]/50 backdrop-blur-[32]" : "bg-transparent"
        }`}
        onClick={() => handleToggle("Long")}
      >
        <span
          className={`font-manrope font-bold text-md ${
            selected === "Long" ? "text-white" : "text-gray-400"
          }`}
        >
          Long
        </span>
      </button>
      <button
        className={`flex flex-row items-center justify-center px-6 py-2 rounded-lg ${
          selected === "Short" ? "bg-[#2ED3B780]/50 backdrop-blur-[32]" : "bg-transparent"
        }`}
        onClick={() => handleToggle("Short")}
      >
        <span
          className={`font-manrope font-bold text-md ${
            selected === "Short" ? "text-white" : "text-gray-400"
          }`}
        >
          Short
        </span>
      </button>
    </div>
  );
};

export default LongShortToggle;
