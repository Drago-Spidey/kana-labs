"use client"; // Add this directive at the top

import TradingViewWidget from "@/app/components/widget/TradingViewWidget";
import React, { useState } from "react";
import TradeTable from "./TradeTable";
import PayoffChart from "@/app/components/widget/PayoffChart";
import OPerpsMain from "./OPerpsMain";
import TimeBar from "@/app/components/widget/TimeBar";
import TradeViewOptions from "@/app/components/widget/TradeViewOptions";

const OPerps: React.FC = () => {
    const [symbol, setSymbol] = useState("ETHUSD");  // Declare symbol and setSymbol
    const [resolution, setResolution] = useState("2H");
  const [selectedCycle, setSelectedCycle] = useState<string>("2 Hour Cycle");
  const [selectedCoin, setSelectedCoin] = useState<string>("ETH");

  // Callback to handle cycle selection
  const handleCycleSelect = (cycle: string) => {
    setSelectedCycle(cycle);
    // Update resolution based on selected cycle
    const resolutionMap: Record<string, string> = {
      "1 Hour Cycle": "1H",
      "2 Hour Cycle": "2H",
      "3 Hour Cycle": "3H",
      "4 Hour Cycle": "4H",
    };
    setResolution(resolutionMap[cycle]);
  };

  const handleCoinSelect = (coin: string) => {
    setSelectedCoin(coin);
    // Update symbol based on selected coin
    setSymbol(`${coin}USD`); // Assuming all coins follow this naming convention
  };
  return (
    <div className="flex flex-row w-full gap-4 ">
      
      {/* Chart Section */}
      <div className="chart flex flex-col grow gap-4">
      <TradeViewOptions
    onCycleSelect={handleCycleSelect}
    onCoinSelect={handleCoinSelect}
  />
        <div className="bg-klbg rounded-t-2xl border border-white/10 ">
          <div className="text-klFC flex flex-row justify-between p-2 gap-4 items-center">
            <span className="p-2 font-extrabold text-white">Current cycle</span>
            <div className="flex flex-row">
              <div className="flex flex-col px-4 py-2">
                <span className="text-xs">Start price</span>
                <span className="font-extrabold text-white">$1234</span>
              </div>
              <div className="flex flex-col px-4 py-2">
                <span className="text-xs">Breakeven</span>
                <span className="font-extrabold text-white">$1234</span>
              </div>
              <div className="flex flex-col px-4 py-2">
                <span className="text-xs">Leverage</span>
                <span className="font-extrabold text-white">105x</span>
              </div>
              <div className="flex flex-col px-4 py-2">
                <span className="text-xs">PnL</span>
                <span className="font-extrabold text-klfg">25%</span>
              </div>
            </div>
          </div>
          <TimeBar />
          <TradingViewWidget symbol={symbol} resolution={resolution} />
        </div>
        <TradeTable />
        <div className="h-10">

        </div>
      </div>

      {/* Right Side Section */}
      <div className="rside flex flex-col gap-4 max-w-[436px]">
        <OPerpsMain />
        <PayoffChart />
      </div>
    </div>
  );
};

export default OPerps;
