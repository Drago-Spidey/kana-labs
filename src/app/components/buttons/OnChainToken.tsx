import React from "react";
import useStore from '../../store/index';


interface OnChainTokenProps {
  onChainImage: React.ReactNode; // URL or path to the On-chain Image
  baseChainImage: React.ReactNode; // URL or path to the Base Chain Image
  onChainName: string; // Name of the On-chain token
  baseChainName: string; // Name of the Base Chain
}

const OnChainToken: React.FC<OnChainTokenProps> = ({
  onChainImage,
  baseChainImage,
  onChainName,
  baseChainName,
}) => {

  const { isDarkMode } = useStore();

  return (
<div
  className={`flex flex-row gap-2 w-full rounded-2xl h-fit lg:w-fit border p-4 ${isDarkMode ? 'bg-darkGray-500 hover:bg-darkGray-400  border-white/10  text-white' : ' text-klwhite-100 bg-klwhite-850 hover:bg-[#ffffff0f] border-gray-200 '} cursor-pointer`}
>      {/* On-Chain and Base-Chain Images */}
      <div className="relative">
        {onChainImage}

        <span className="rounded-full absolute bottom-0 right-0">
          {baseChainImage}
        </span>
      </div>

      {/* On-Chain and Base-Chain Names */}
      <div className="flex flex-row font-extrabold items-center gap-2 md:gap-0 md:flex-col ">
        <p className="text-[18px]">{onChainName}</p>
        <div className=" text-xss flex flex-row gap-1 h-fill items-center">
          <span className="font-normal">on</span>
          <span className="">{baseChainName}</span>
        </div>
      </div>
    </div>
  );
};

export default OnChainToken;
