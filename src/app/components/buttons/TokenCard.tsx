// components/TokenCard.tsx
import React from "react";

interface TokenCardProps {
  tokenImgSrc: React.ReactNode;
  tokenName: string;
  chainImgSrc: React.ReactNode;
  chainName: string;
}

const TokenCard: React.FC<TokenCardProps> = ({
  tokenImgSrc,
  tokenName,
  chainImgSrc,
  chainName,
}) => {
  return (
    <div
      className="xxl:!w-[10rem] bxl:!w-[10rem] xl:!w-[10rem] sxl:!w-[10rem] lg:!w-[10rem] md:w-full sm:w-full max-sm:w-full cursor-pointer flex flex-row justify-start items-center gap-[0.5rem] rounded-[1rem] border-[1px] p-[1rem] bg-[#FCFDFE] border-[#431a69] hover:bg-[#ffffff0f]"
    >
      {/* Token Icon */}
      <div className="relative rounded-full w-fit">
        <div className="w-9"> {tokenImgSrc}</div>
        <div className="absolute rounded-full right-0 bottom-0 translate-y-[25%] translate-x-[25%]">
          <div className="w-4 h-4 p-[2px] rounded-full"> {chainImgSrc}</div>
        </div>
      </div>

      {/* Token Name and Chain */}
      <div className="flex xxl:flex-col bxl:flex-col xl:flex-col sxl:flex-col lg:flex-col md:flex-row sm:flex-row max-sm:flex-row items-center justify-center font-manrope font-[800] text-[1.125rem] xxl:gap-[0rem] bxl:gap-[0rem] xl:gap-[0rem] sxl:gap-[0rem] lg:gap-[0rem] md:gap-[0.5rem] sm:gap-[0.5rem] max-sm:gap-[0.5rem] text-[#4A4B4D]">
        <div>{tokenName}</div>
        <div className="text-[0.625rem] font-[800]">
          <span className="font-[400] px-1">on</span>
          {chainName}
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
