import React, { useState } from "react";
import Xcircle from "../../../../public/assets/x-close.svg";
import useStore from "../../store/index";

interface ModelProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void; // Correct type for state setter
}

const KanaModal: React.FC<ModelProps> = ({ isModalOpen, setIsModalOpen }) => {
  const { isDarkMode } = useStore();

  // State to manage modal visibility

  const type = {
    transparent: "px-2 py-1 text-sm",
    dark: " ",
  };

  const typeHeading = {
    transparent: "px-2 py-1 text-sm",
    dark: "bg-darkGray-500 border border-white/10 ",
  };

  //eff7f8  fcfdfe  e3e8ef 4a4b4d

  const typeStyles = {
    dark: {
      bg: "bg-darkGray-500 border border-white/10 ",
      bgHead: " bg-white/[6%] text-white",
    },
    light: {
      bg: "bg-[#FCFDFE] border border-[#E3E8EF] ",
      bgHead: "bg-[#EFF7F8] text-[#4A4B4D] ",
    },
    transparent: {
      bg: "bg-darkGray-500 border border-white/10 ",
      bgHead: "hover:text-teal-200 ",
    },
  };

  const activeType = isDarkMode ? "dark" : "light";

  const { bg, bgHead } = typeStyles[activeType];

  return (
    <div>
      {/* Button to open the modal */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-end lg:items-center lg:justify-center backdrop-blur-2xl">
          <div
            className={`w-full lg:w-[528px] ${bg}  rounded-2xl animation-zoom-in`}>
            <div
              className={`header p-4 flex flex-row ${bgHead} justify-between rounded-t-2xl`}>
              <div >Preferences</div>
              <button onClick={() => setIsModalOpen(false)}>
                <Xcircle className="h-5 w-5 hover:text-red-500" />
              </button>
            </div>
            <div className="p-4">content</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanaModal;
