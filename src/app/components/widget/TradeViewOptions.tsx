"use client";

import React, { useState } from "react";
import LongShortToggle from "./LongShortToggle";

type TradeViewOptionProps = {
  onCycleSelect: (selectedCycle: string) => void;
  onCoinSelect: (selectedCoin: string) => void;
};

const TradeViewOptions = ({ onCycleSelect, onCoinSelect }: TradeViewOptionProps) => {
  const cycleOptions = ["1 Hour Cycle", "2 Hour Cycle", "3 Hour Cycle", "4 Hour Cycle"];
  const coinOptions = ["ETH", "BNB", "APT", "SOL"];

  // State for the selected options
  const [selectedCycle, setSelectedCycle] = useState("2 Hour Cycle");
  const [selectedCoin, setSelectedCoin] = useState("ETH");

  const [isCycleOptionsOpen, setCycleIsOpen] = useState(false);
  const [isCoinOptionsOpen, setCoinIsOpen] = useState(false);

  const coinImages : {[key:string]:string} = {
ETH : "/kana-labs/assets/ethereum.svg", BNB : "/kana-labs/assets/bsc.svg", APT : "/kana-labs/assets/aptos.svg", SOL : "/kana-labs/assets/solana.svg"
  }
  const toggleCycleDropdown = () => {
    setCycleIsOpen(!isCycleOptionsOpen);
  };

  const toggleCoinDropdown = () => {
    setCoinIsOpen(!isCoinOptionsOpen);
  };

  // Handlers for selecting an option
  const handleCycleSelect = (option: string) => {
    setSelectedCycle(option); // Update selected cycle
    setCycleIsOpen(false);
    onCycleSelect(option);
  };

  const handleCoinSelect = (option: string) => {
    setSelectedCoin(option); // Update selected coin
    setCoinIsOpen(false);
    onCoinSelect(option);
  };

  return (
    <div className="flex flex-row justify-between gap-4 border border-white/10 rounded-2xl bg-klt p-4">
      {/* Coin Dropdown */}
      <div className="relative w-full">
        <button
          className="flex flex-row justify-between items-center p-2 px-4 gap-2 w-full h-10 bg-[#1D1E20] rounded-lg"
          onClick={toggleCoinDropdown}
        >
          <span className="flex gap-2 items-center w-full">
            <img src={coinImages[selectedCoin]} alt={selectedCoin} />
            <span className="text-white/80 text-sm font-extrabold">{selectedCoin}</span>
            <span className="text-[#777879] text-xs font-bold">USDC</span>
          </span>

          <img
            src={isCoinOptionsOpen ? "/kana-labs/assets/dropup.svg" : "/kana-labs/assets/dropdown.svg"}
            alt={isCoinOptionsOpen ? "Dropup icon" : "Dropdown icon"}
            className="w-4 h-4"
          />
        </button>
        {isCoinOptionsOpen && (
          <div className="absolute mt-2 w-full bg-[#1D1E20] rounded-lg shadow-lg">
            <ul className="p-2">
              {coinOptions.map((option, index) => (
                <li
                  key={index}
                  className="text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => handleCoinSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Cycle Dropdown */}
      <div className="relative w-full">
        <button
          className="flex flex-row justify-between  items-center p-2 px-4 gap-2 w-full h-10 bg-[#1D1E20] rounded-lg"
          onClick={toggleCycleDropdown}
        >
          <span className="text-white/80 text-sm w-full text-start">{selectedCycle}</span>
          <img
            src={isCycleOptionsOpen ? "/kana-labs/assets/dropup.svg" : "/kana-labs/assets/dropdown.svg"}
            alt={isCycleOptionsOpen ? "Dropup icon" : "Dropdown icon"}
            className="w-4 h-4"
          />
        </button>
        {isCycleOptionsOpen && (
          <div className="absolute mt-2 w-full bg-[#1D1E20] rounded-lg shadow-lg">
            <ul className="p-2">
              {cycleOptions.map((option, index) => (
                <li
                  key={index}
                  className="text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => handleCycleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <LongShortToggle />
    </div>
  );
};

export default TradeViewOptions;
