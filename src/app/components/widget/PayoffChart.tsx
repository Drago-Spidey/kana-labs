// components/PayoffChart.tsx
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; // Import ApexOptions
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PayoffChart = () => {
  const [series, setSeries] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<
    "payoff" | "previousCycles" | "poolOverview"
  >("payoff");

  useEffect(() => {
    // Data points
    const points = [
      { x: -5, y: 0 },
      { x: -4, y: 0 },
      { x: -3, y: 0 },
      { x: -2, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 5, y: 4 },
    ];

    // Set series data for the chart
    setSeries([
      {
        name: "Payoff",
        data: points,
      },
    ]);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "line", // Make sure this is explicitly defined as a string literal
      height: "100%",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight", // Change this to 'straight' for a straight line
      width: 2,
      colors: ["#00F9A9"],
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      tickAmount: 0,
      axisBorder: { show: true, offsetY: 0, strokeWidth:0.1,color: "rgba(255,255,255,0.5)" },
      axisTicks: { show: false },
      
    },
    yaxis: {
      show: true, // Hide y-axis
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: { show: true, width: 1, offsetX: 200, offsetY: 0 },
    },
    grid: {
      show: false, // Hide grid
    },
    markers: {
      size: 0, // Hide markers
    },
  };

  return (
    <div className="flex flex-col items-start w-full  bg-klbg border border-white/10 rounded-2xl">
    {/* Header with Tabs */}
    <div className="grid grid-cols-3 text-xs text-center text-klFC justify-between items-center w-full border-b border-white/10 h-12 ">
      <div
        onClick={() => setActiveTab("payoff")}
        className={`flex justify-center  items-center px-6 py-2 cursor-pointer  h-full ${
          activeTab === "payoff" ? "bg-white/[6%] rounded-tl-2xl" : ""
        }`}>
        <span
          className={` ${activeTab === "payoff" ? "font-extrabold text-white" : ""}`}>
          Payoff Chart
        </span>
      </div>
      <div
        onClick={() => setActiveTab("previousCycles")}
        className={`flex justify-center items-center px-6 py-2 h-full grow cursor-pointer ${
          activeTab === "previousCycles" ? "bg-white/[6%]" : ""
        }`}>
        <span
          className={` ${activeTab === "previousCycles" ? "font-extrabold text-white" : ""}`}>
          Previous Cycles
        </span>
      </div>
      <div
        onClick={() => setActiveTab("poolOverview")}
        className={`flex justify-center items-center px-6 py-2 h-full grow cursor-pointer ${
          activeTab === "poolOverview" ? "bg-white/[6%]" : ""
        }`}>
        <span
          className={` ${activeTab === "poolOverview" ? "font-extrabold text-white" : ""}`}>
          Pool Overview
        </span>
      </div>
    </div>
  
    {/* Conditionally render content based on activeTab */}
    {activeTab === "payoff" && (
      <div className="w-full ">
        {/* ETH Price label */}
        <div className=" flex flex-col relative top-[54px] left-[230px] z-10 w-fit">
          <span className="text-xss text-klFC">ETH Price now</span>
          <span className="text-xs text-white font-extrabold">$3,512.40</span>
        </div>
  
        {/* Chart */}
        <Chart options={options} series={series} type="line" height="165px" width="100%" />
  
        {/* Max profit label */}
        <div className="flex flex-col text-sm text-klFC w-full gap-1 pb-6  px-8">
          <span>Max profit</span>
          <span>Entry Price (Break-Even)</span>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default PayoffChart;
