import React from "react";

interface TopBarProps {
  page: "Swap" | "OPerps"; // Define the possible page types
}

const TopBar: React.FC<TopBarProps> = ({ page }) => {
  return (
    <div className="bg-klTbBg flex items-center justify-between p-3 h-[80px] z-[1] rounded-b-xl sticky top-0">
      {/* Balance Section */}

      {page !== "OPerps" && (
        <div className="bg-klBtnBg text-klFC flex gap-8 text-sm px-6 py-4 font-extrabold rounded-2xl">
          <div>Your Balance</div>
          <div className="w-[210px] text-end">$ 12.563</div>
        </div>
      )}

      {page !== "Swap" && (
        <div className="flex flex-col py-4 px-6">
          <span className="text-xs text-klFD ">Powered by</span>
          <img src="/assets/EthosX.svg" alt="" />
        </div>
      )}

      {/* User Info and Actions */}
      <div className="flex flex-row gap-2">
      {page !== "Swap" && (
        <>
        <div className="bg-klBtnBg text-klc font-extrabold px-6 py-2 gap-2 flex rounded-2xl items-center">
          <img src="/assets/credit-card-down.svg" alt="" />
          <span className="">Faucet</span>
        </div>
        <div className="bg-klBtnBg text-klc font-extrabold px-6 py-2 gap-2 flex rounded-2xl items-center">
          <img src="/assets/container.svg" alt="" />
          <span className="">Test Net</span>
          <img src="/assets/chevron-down.svg" alt="" />
        </div>
        </>
      )}
        

        {/* Points and Active Days */}
        <div className="bg-klBtnBg text-klFC px-6 py-2 gap-3 flex rounded-2xl items-center">
          <div className="f-1 flex gap-2 items-center">
            <div className="icon">
              <img src="/assets/coins.svg" alt="Coins Icon" />
            </div>
            <div className="t">
              <p className="font-extrabold text-klc">100</p>
              <p className="text-xss font-normal">Points Earned</p>
            </div>
          </div>
          <div className="h-6 border border-white opacity-10"></div>
          <div className="f-2 flex gap-2 items-center">
            <div className="icon">
              <img src="/assets/zap.svg" alt="Zap Icon" />
            </div>
            <div className="t">
              <p className="font-extrabold text-klc">2</p>
              <p className="text-xss font-normal">Days Active</p>
            </div>
          </div>
        </div>

        {/* Wallet Address and Action Buttons */}
        <div className="bg-klBtnBg px-6 py-2 gap-2 flex rounded-2xl items-center">
          <img src="/assets/fox.png" alt="Fox Icon" className="h-6 w-6" />
          <p className="font-extrabold text-klc max-w-[130px] overflow-hidden text-ellipsis">
            0xwalletaddresxyz
          </p>
          <img
            src="/assets/copy.svg"
            alt="Copy Icon"
            className="p-1 hover:cursor-pointer"
          />
          <img
            src="/assets/power-off.svg"
            alt="Power Off Icon"
            className="p-1 hover:cursor-pointer"
          />
        </div>

        {/* Settings Icon */}
        <div className="bg-klBtnBg px-4 py-4 flex rounded-2xl items-center hover:cursor-pointer">
          <img src="/assets/settings.svg" alt="Settings Icon" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
