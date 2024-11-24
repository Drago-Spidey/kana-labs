import React, { useState } from 'react';
import Image from 'next/image';
import Xcircle from '../../../public/assets/x-circle.svg';

interface ModelProps  {

    isModalOpen : boolean,
    setIsModalOpen: (open: boolean) => void; // Correct type for state setter

}

const KanaModal: React.FC<ModelProps> = ( {isModalOpen, setIsModalOpen}) => {
  // State to manage modal visibility
 
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Button to open the modal */}
      {/* Modal */}
      {isModalOpen && (
        <div className='fixed z-[2] inset-0 flex items-end lg:items-center lg:justify-center backdrop-blur-2xl'>
          <div className='w-full lg:w-[528px] bg-darkGray-500 border border-white/10 rounded-2xl'>
            <div className='header p-4 flex flex-row justify-between bg-white/[6%] rounded-t-2xl'>
              <div>
                Preferences
              </div>
              <button onClick={toggleModal}>
                <Xcircle />
              </button>
            </div>
           <div className='p-4'>
            content
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanaModal;