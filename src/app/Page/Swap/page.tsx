"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import KanaButton from "@/app/components/buttons/KanaButton";
import OnChainToken from "@/app/components/buttons/OnChainToken";
import Dropdown from "@/app/components/Dropdown";
import Input from "@/app/components/Input";
import DefaultSmall from "../../../../public/assets/default_small.svg";
import DefaultImg from "../../../../public/assets/default.svg";
import React, { useEffect, useState } from "react";


// Import your SVGs from the assets 
const Swap = () => {
  function handleClick(): void {
    //  throw new Error("Function not implemented.");
  }

  const [activeTab, setActiveTab] = useState<"sameChain" | "crossChain">(
    "sameChain"
  );

  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const icons = [
    { id: "aptos", src: "/kana-labs/assets/aptos.svg", alt: "Aptos" },
    { id: "zksync", src: "/kana-labs/assets/zksync.svg", alt: "zkSync" },
    { id: "bsc", src: "/kana-labs/assets/bsc.svg", alt: "BSC" },
    { id: "polygon", src: "/kana-labs/assets/polygon.svg", alt: "Polygon" },
    { id: "arbitrum", src: "/kana-labs/assets/arbitrum.svg", alt: "Arbitrum" },
    { id: "avalanche", src: "/kana-labs/assets/avalanche.svg", alt: "Avalanche" },
    { id: "ethereum", src: "/kana-labs/assets/ethereum.svg", alt: "Ethereum" },
    { id: "solana", src: "/kana-labs/assets/solana.svg", alt: "Solana" },
    { id: "sui", src: "/kana-labs/assets/sui-sui-logo.svg", alt: "Sui" },
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
              <img src="/kana-labs/assets/tabler_arrows-split.svg" alt="" />
              <span>Same chain</span>
            </div>
            <div
              onClick={() => handleTabClick("crossChain")}
              className={`py-4 px-6 flex flex-row items-center gap-2 ${
                activeTab === "crossChain"
                  ? "bg-klbg  border-b-klbg"
                  : "bg-klt "
              } rounded-t-2xl border border-white/10 hover:cursor-pointer`}>
              <img src="/kana-labs/assets/tabler_arrows-shuffle.svg" alt="" />
              <span>Cross chain</span>
            </div>
          </div>
          <div className="hover:cursor-pointer flex items-center">
            <img
              src="/kana-labs/assets/Button.svg"
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
                    src="/kana-labs/assets/refresh.svg"
                    alt="Refresh"
                    className="h-4 w-4 "
                  />
                </div>
                <div className="hover:cursor-pointer hover:bg-klc/10 h-8 w-8 rounded-lg grid place-items-center">
                  <img
                    src="/kana-labs/assets/setting03.svg"
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
                  <img src={icon.src} alt={icon.alt} title={icon.alt} className="h-6 w-6" />
                </div>
              ))}
            </div>
            {/* Input section */}
            <div className="connectW flex flex-col gap-3">
              {/* Pay from section */}
              <div className="flex flex-col bg-kle p-4 rounded-2xl border border-white/10">
                <div className="flex flex-col-reverse md:flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    {/* Pay from text */}
                    <div className="wt flex flex-row gap-2 text-xs">
                      <span>Pay from</span>
                      <span className="hover:cursor-pointer text-klc font-extrabold">
                        Connect Wallet
                      </span>
                    </div>
                    {/* Input field */}
                    <div>
                      <Input />
                    </div>
                  </div>
                  {/* Token and Chain section */}
                  <div className="lg:w-[160px]">
                  <OnChainToken onChainImage={<DefaultImg/>} baseChainImage={<DefaultSmall/>} onChainName={"Token"} baseChainName={"Chain"} />
                  </div>
                </div>
                {/* Display balance */}
                <div className="flex flex-row justify-between text-xs py-2">
                <div className="flex flex-row gap-2">
                    <span>USD</span>
                    <span>0</span>
                  </div>
                  <span>Balance -</span>
                </div>
              </div>

              {/* Switch vertical icon */}
              <div className="border border-white/10 bg-klbg h-10 w-10 flex items-center justify-center rounded-lg absolute transform translate-y-[130px] translate-x-[218px]">
                <img src="/kana-labs/assets/switch-vertical.svg" alt="Switch" />
              </div>

              {/* Connect to section */}
              <div className="flex flex-col bg-kle p-4 rounded-2xl border border-white/10">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    {/* Receive from text */}
                    <div className="wt flex flex-row gap-2 text-xs">
                      <span>Receive to</span>
                      <span className="hover:cursor-pointer text-klc font-extrabold">
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
                    <img src="/kana-labs/assets/chain.svg" alt="Chain" />
                    <div className="flex flex-col">
                      <span className="text-lg font-extrabold">Token</span>
                      <span className="text-xs">
                        on <b>Chain</b>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Display balance  */}
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
              <KanaButton
                label="Swap now"
                onClick={handleClick}
                type="primary"
                width="100%" // Custom width
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
