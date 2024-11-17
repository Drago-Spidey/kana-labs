import React from "react";


interface OnChainTokenProps {
  tokenName: string; // Name of the token
  status?: string; // Status, e.g., "on Chain"
}
const isDarkMode =false;

const OnChainToken: React.FC<OnChainTokenProps> = ({
  tokenName,
  status = "on Chain",
}) => {
  return (
    <div
          className={` xxl:!w-[10rem]  bxl:!w-[10rem] xl:!w-[10rem]  sxl:!w-[10rem] lg:!w-[10rem] md:w-full sm:w-full max-sm:w-full cursor-pointer flex flex-row justify-start items-center gap-[0.5rem] rounded-[1rem] border-[1px] p-[1rem] ${isDarkMode
            ? "bg-[#FCFDFE] border-[#E3E8EF] "
            : "bg-[#17181A] border-[rgba(255,255,255,0.10)]"
            } hover:bg-[#ffffff0f]`}
          onClick={() => ""}
          id="source"
        >
          <div className="relative rounded-full w-fit">
            <div>
              <img className="w-9" src={"/kana-labs/assets/default.svg"} alt="token" />
            </div>
            <div
              className={`absolute rounded-full right-0 bottom-0 translate-y-[25%] translate-x-[25%]`}
            >
              <img
                className="w-4 h-4 p-[2px] rounded-full"
                src={"/kana-labs/assets/default_small.svg"}
                alt="chain"
              />
            </div>
          </div>
          <div
            className={` flex xxl:flex-col bxl:flex-col xl:flex-col sxl:flex-col lg:flex-col md:flex-row sm:flex-row max-sm:flex-row items-center justify-center font-manrope font-[800] text-[1.125rem] xxl:gap-[0rem] bxl:gap-[0rem] xl:gap-[0rem] sxl:gap-[0rem] lg:gap-[0rem] md:gap-[0.5rem] sm:gap-[0.5rem] max-sm:gap-[0.5rem]  ${isDarkMode
              ? "text-[#4A4B4D]"
              : "text-[rgba(255,255,255,0.80)]"
              } `}
          >
            <div className="">{"Token"}</div>
            <div className="text-[0.625rem] ">{"on Chain"}</div>
          </div>
        </div>
  );
};

export default OnChainToken;
