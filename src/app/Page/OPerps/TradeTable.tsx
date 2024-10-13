"use client";

import React, { useState } from "react";

interface TableData {
  time: string;
  date: string;
  market: string;
  icon: string;
  side: string;
  amount: string;
  type: string;
  timeTillExecution: string;
  executionUnit: string;
  marketType: string; // New field for "Put" or "Call"
  marketPosition: string; // New field for "Long" or "Short"
}

const TradeTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("openOrders"); // Default to "Open Orders"

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);}
  const tableData: TableData[] = [
    {
      time: "3:15:22 PM",
      date: "10-Mar-24",
      market: "ETH",
      side: "Buy",
      amount: "120",
      type: "Market",
      timeTillExecution: "03:45",
      executionUnit: "Minutes",
      marketType: "Call",
      marketPosition: "Long",
      icon: "ethereum",
    },
    {
      time: "2:30:00 PM",
      date: "11-Mar-24",
      market: "BNB",
      side: "Sell",
      amount: "300",
      type: "Limit",
      timeTillExecution: "01:15",
      executionUnit: "Minutes",
      marketType: "Put",
      marketPosition: "Short",
      icon: "bsc",
    },
    {
      time: "1:41:13 PM",
      date: "12-Mar-24",
      market: "APT",
      side: "Buy",
      amount: "250",
      type: "LPO",
      timeTillExecution: "02:34",
      executionUnit: "Minutes",
      marketType: "Put",
      marketPosition: "Long",
      icon: "aptos",
    },
    {
      time: "4:10:45 PM",
      date: "13-Mar-24",
      market: "SOL",
      side: "Sell",
      amount: "500",
      type: "Stop",
      timeTillExecution: "05:12",
      executionUnit: "Minutes",
      marketType: "Call",
      marketPosition: "Short",
      icon: "solana",
    },
    {
      time: "9:00:00 AM",
      date: "14-Mar-24",
      market: "ETH",
      side: "Buy",
      amount: "600",
      type: "Market",
      timeTillExecution: "01:55",
      executionUnit: "Minutes",
      marketType: "Put",
      marketPosition: "Long",
      icon: "ethereum",
    },
    {
      time: "12:45:30 PM",
      date: "15-Mar-24",
      market: "BNB",
      side: "Sell",
      amount: "400",
      type: "Limit",
      timeTillExecution: "03:10",
      executionUnit: "Minutes",
      marketType: "Call",
      marketPosition: "Short",
      icon: "bsc",
    },
    {
      time: "6:30:45 PM",
      date: "16-Mar-24",
      market: "SOL",
      side: "Buy",
      amount: "350",
      type: "LPO",
      timeTillExecution: "02:05",
      executionUnit: "Minutes",
      marketType: "Put",
      marketPosition: "Long",
      icon: "solana",
    },
  ];
  

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
  };

  const [sortConfig, setSortConfig] = useState<{
    key: keyof TableData | null;
    direction: "asc" | "desc" | null;
  }>({
    key: null,
    direction: null,
  });

  const sortedData = [...tableData].sort((a, b) => {
    if (sortConfig.key) {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      // Handle sorting based on the data type (numbers, strings, etc.)
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      } else if (typeof aVal === "string" && typeof bVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (sortConfig.direction === "asc") {
        return aVal > bVal ? 1 : -1;
      } else if (sortConfig.direction === "desc") {
        return aVal < bVal ? 1 : -1;
      }
    }
    return 0;
  });

  const handleSort = (key: keyof TableData) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex flex-col w-full bg-klbg border border-white/10 rounded-2xl">
      {/* First Div (Tab Header Section) */}
      <div className="flex flex-row items-center justify-between text-klFC h-12 border-b border-white/10 ">
        <div className="flex flex-row text-xs">
          <div
            className={`px-6 h-12 cursor-pointer flex items-center ${activeTab === "openOrders" ? "text-white bg-white/[6%] rounded-tl-xl" : "text-gray-500"}`}
            onClick={() => handleTabClick("openOrders")}
          >
           <span>Open Orders</span> 
          </div>
          <div
            className={`px-6 h-12 cursor-pointer flex items-center ${activeTab === "position" ? "text-white bg-white/[6%]" : "text-gray-500"}`}
            onClick={() => handleTabClick("position")}
          >
            Position
          </div>
          <div
            className={`px-6 h-12 cursor-pointer flex items-center ${activeTab === "trade" ? "text-white bg-white/[6%] " : "text-gray-500"}`}
            onClick={() => handleTabClick("trade")}
          >
            Trade
          </div>
        </div>
        <div className="px-4 cursor-pointer">
          <img src="/images/dots-horizontal.svg" alt="" />
        </div>
      </div>

      {/* Sorting items (only show for Open Orders) */}
      {activeTab === "openOrders" && (
        <div className="grid grid-cols-5 w-full items-center text-xss py-2 px-4 gap-4 bg-klb border-b border-white/10 font-normal text-klFC">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("time")}>
            <span>Time</span>
            <img src="/images/chevron-selector-vertical.svg" alt="sort" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("market")}>
            <span>Market</span>
            <img src="/images/chevron-selector-vertical.svg" alt="sort" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("side")}>
            <span>Side</span>
            <img src="/images/chevron-selector-vertical.svg" alt="sort" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("amount")}>
            <span>Amount</span>
            <img src="/images/chevron-selector-vertical.svg" alt="sort" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("timeTillExecution")}>
            <span>Till at execution</span>
            <img src="/images/chevron-selector-vertical.svg" alt="sort" />
          </div>
        </div>
      )}

      {/* Items (conditionally rendered based on active tab) */}
      <div className="flex flex-col items-start w-full">
        {activeTab === "openOrders" &&
          sortedData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 w-full gap-4 items-center p-4 ${
                index < sortedData.length - 1 ? "border-b border-white/10" : "" // Remove the border for the last row
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs text-white">{row.time}</span>
                <span className="text-xss text-[#777879]">{row.date}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={`/images/${row.icon.toLowerCase()}.svg`}
                    alt={`${row.market} Icon`}
                    className="w-4 h-4"
                  />
                  <span className="text-xs text-white">{row.market}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xss text-[#A5A5A6]">{row.marketType}</span>
                  <span className="text-xss text-[#A5A5A6]">•</span>
                  <span className="text-xss text-[#12B76A]">{row.marketPosition}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white">{row.side}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white">{row.amount}</span>
                <span className="text-xss text-[#777879]">{row.type}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white">{row.timeTillExecution}</span>
                <span className="text-xss text-[#777879]">{row.executionUnit}</span>
              </div>
            </div>
          ))}
        {activeTab !== "openOrders" && (
          <div className="text-xs text-gray-500 py-4 px-6">No data available for {activeTab}.</div>
        )}
      </div>
    </div>
  );
};

export default TradeTable;
