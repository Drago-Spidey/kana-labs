import Image from "next/image";
import React from "react";

interface OnChainTokenProps {
  onChainImage: string; // URL or path to the On-chain Image
  baseChainImage: string; // URL or path to the Base Chain Image
  onChainName: string; // Name of the On-chain token
  baseChainName: string; // Name of the Base Chain
}

const OnChainToken: React.FC<OnChainTokenProps> = ({
  onChainImage,
  baseChainImage,
  onChainName,
  baseChainName,
}) => {
  return (
    <div className="flex flex-row gap-2 w-full rounded-2xl border border-white/10 p-4 bg-darkGray-500 hover:bg-darkGray-400 cursor-pointer">
      {/* On-Chain and Base-Chain Images */}
      <div className="relative">
        <Image
          className="rounded-full"
          height={40}
          width={40}
          src={onChainImage}
          alt={`${onChainName} image`}
        />
        <Image
          className="rounded-full absolute bottom-0 right-0"
          height={16}
          width={16}
          src={baseChainImage}
          alt={`${baseChainName} image`}
        />
      </div>

      {/* On-Chain and Base-Chain Names */}
      <div className="flex flex-col text-white/80 font-manrope">
        <div className="font-[800]">{onChainName}</div>
        <div className="font-semibold text-xss">
          {"on "}
          <span className="font-extrabold">{baseChainName}</span>
        </div>
      </div>
    </div>
  );
};

export default OnChainToken;