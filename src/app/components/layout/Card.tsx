"use client";

import React, { useEffect, useState } from "react";
import Input from "../Input";

import Dropdown from "../Dropdown";
import Button from "../buttons/CustomButton";
// Import your SVGs from the assets folder

const Swap = () => {
  function handleClick(): void {
    //  throw new Error("Function not implemented.");
  }

  const [activeTab, setActiveTab] = useState<"sameChain" | "crossChain">(
    "sameChain"
  );

  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const icons = [
    { id: "aptos", src: "/images/aptos.svg", alt: "Aptos" },
    { id: "zksync", src: "/images/zksync.svg", alt: "zkSync" },
    { id: "bsc", src: "/images/bsc.svg", alt: "BSC" },
    { id: "polygon", src: "/images/polygon.svg", alt: "Polygon" },
    { id: "arbitrum", src: "/images/arbitrum.svg", alt: "Arbitrum" },
    { id: "avalanche", src: "/images/avalanche.svg", alt: "Avalanche" },
    { id: "ethereum", src: "/images/ethereum.svg", alt: "Ethereum" },
    { id: "solana", src: "/images/solana.svg", alt: "Solana" },
    { id: "sui", src: "/images/sui-sui-logo.svg", alt: "Sui" },
  ];

  useEffect(() => {
    setActiveIcon(icons[0].id);
  }, []);

  const handleTabClick = (tab: "sameChain" | "crossChain") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[536px]">
      <div className=" mb-[-1px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row font-extrabold text-klFC text-sm">
            <div
              onClick={() => handleTabClick("sameChain")}
              className={`py-4 px-6 flex flex-row items-center gap-2 ${
                activeTab === "sameChain"
                  ? "bg-klbg  border-b-klbg "
                  : "bg-klt "
              } rounded-t-2xl border border-white/10 hover:cursor-pointer`}>
              <img src="/images/tabler_arrows-split.svg" alt="" />
              <span>Same chain</span>
            </div>
            <div
              onClick={() => handleTabClick("crossChain")}
              className={`py-4 px-6 flex flex-row items-center gap-2 ${
                activeTab === "crossChain"
                  ? "bg-klbg  border-b-klbg"
                  : "bg-klt "
              } rounded-t-2xl border border-white/10 hover:cursor-pointer`}>
              <img src="/images/tabler_arrows-shuffle.svg" alt="" />
              <span>Cross chain</span>
            </div>
          </div>
          <div className="hover:cursor-pointer flex items-center">
            <img
              src="/images/Button.svg"
              alt=""
              className=" hover:bg-klc/10 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" bg-klbg flex justify-center border border-white/10 text-klFC rounded-b-2xl p-6 rounded-r-2xl">
        {/* Main container with specific width, background, and rounded borders */}
        {activeTab === "sameChain" ? (
          <div className="w-[488px]">
            {/* Header section */}
            <div className="flex flex-row justify-between items-center">
              <div className="font-extrabold">Same-chain Swap</div>

              {/* Icons for refresh and settings */}
              <div className="flex flex-row gap-2">
                <div className="hover:cursor-pointer hover:bg-klc/10 h-8 w-8 rounded-lg grid place-items-center">
                  <img
                    src="/images/refresh.svg"
                    alt="Refresh"
                    className="h-4 w-4 "
                  />
                </div>
                <div className="hover:cursor-pointer hover:bg-klc/10 h-8 w-8 rounded-lg grid place-items-center">
                  <img
                    src="/images/setting03.svg"
                    alt="Settings"
                    className="h-4 w-4 hover:cursor-pointer hover:bg-klc/10 "
                  />
                </div>
              </div>
            </div>

            {/* Row of blockchain icons */}
            <div className="flex flex-row gap-2 my-4">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  onClick={() => setActiveIcon(icon.id)}
                  className={`p-2  w-10 rounded-lg cursor-pointer 
            ${
              activeIcon === icon.id
                ? "border border-white/10 bg-white/[6%]"
                : ""
            }
            hover:bg-white/[6%]`}>
                  <img src={icon.src} alt={icon.alt} className="h-6 w-6" />
                </div>
              ))}
            </div>
            {/* Input section */}
            <div className="connectW flex flex-col gap-3">
              {/* Pay from section */}
              <div className="flex flex-col bg-kle p-4 rounded-2xl border border-white/10">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    {/* Pay from text */}
                    <div className="wt flex flex-row gap-2 text-xs">
                      <span>Pay from</span>
                      <span className="text-klc font-extrabold">
                        Connect Wallet
                      </span>
                    </div>
                    {/* Input field */}
                    <div>
                      <Input />
                    </div>
                  </div>
                  {/* Token and Chain section */}
                  <div className="flex flex-row gap-2 p-4 rounded-2xl bg-klbg border border-white/10 w-[160px]">
                    <img src="/images/chain.svg" alt="Chain" />
                    <div className="flex flex-col">
                      <span className="text-lg font-extrabold">Token</span>
                      <span className="text-xs">
                        on <b>Chain</b>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Display balance */}
                <div className="flex flex-row justify-between text-xs py-2">
                  <span>USD 0</span>
                  <span>Balance -</span>
                </div>
              </div>

              {/* Switch vertical icon */}
              <div className="border border-white/10 bg-klbg h-10 w-10 flex items-center justify-center rounded-lg absolute transform translate-y-[130px] translate-x-[218px]">
                <img src="/images/switch-vertical.svg" alt="Switch" />
              </div>

              {/* Connect to section */}
              <div className="flex flex-col bg-kle p-4 rounded-2xl border border-white/10">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    {/* Receive from text */}
                    <div className="wt flex flex-row gap-2 text-xs">
                      <span>Receive from</span>
                      <span className="text-klc font-extrabold">
                        Connect Wallet
                      </span>
                    </div>
                    {/* Input field */}
                    <div>
                      <Input />
                    </div>
                  </div>
                  {/* Token and Chain section */}
                  <div className="flex flex-row gap-2 p-4 rounded-2xl bg-klbg border border-white/10 w-[160px]">
                    <img src="/images/chain.svg" alt="Chain" />
                    <div className="flex flex-col">
                      <span className="text-lg font-extrabold">Token</span>
                      <span className="text-xs">
                        on <b>Chain</b>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Display balance */}
                <div className="flex flex-row justify-between text-xs py-2">
                  <div className="flex flex-row gap-2">
                    <span>USD</span>
                    <span>0</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span>Balance </span>
                    <span>-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap button */}
            <div className="mt-4">
              <Button
                label="Swap now"
                onClick={handleClick}
                defaultColor="#17181A"
                hoverColor="#0C0C0D"
                clickColor="#0C0C0D"
                defaultTextColor="#2ED3B7"
                hoverTextColor="#99F6E0"
                clickTextColor="#0E9384"
                borderColor="#2ED3B7"
                width="488px" // Custom width
                // Custom height
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Swap;
