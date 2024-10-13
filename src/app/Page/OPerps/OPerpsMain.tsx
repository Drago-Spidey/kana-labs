import Button from '@/app/components/buttons/CustomButton';
import React, { useState } from 'react';
import Image from 'next/image';

const OPerpsMain = () => {
  const [activeTab, setActiveTab] = useState<'longCall' | 'longPut'>('longCall');

  function handleClick(): void {

  }

  return (
    <div className="flex flex-col items-center w-full bg-[#17181A] border border-white/10 rounded-2xl">
      {/* Tab Section */}
      <div className="flex flex-row items-center justify-center w-full h-[56px] bg-[#111213] border-b border-white/10 rounded-t-2xl">
        {/* Long Call OPerps Tab */}
        <div
          onClick={() => setActiveTab('longCall')}
          className={`flex items-center justify-center w-full h-[56px] px-6 cursor-pointer ${
            activeTab === 'longCall' ? 'bg-[rgba(255,255,255,0.06)] rounded-tl-2xl' : ''
          }`}
        >
          <span
            className={`${
              activeTab === 'longCall' ? 'text-white font-extrabold' : 'text-[#A5A5A6]'
            } text-sm`}
          >
            Long Call OPerps
          </span>
        </div>

        {/* Long Put OPerps Tab */}
        <div
          onClick={() => setActiveTab('longPut')}
          className={`flex items-center justify-center w-full h-[56px] px-6 cursor-pointer ${
            activeTab === 'longPut' ? 'bg-[rgba(255,255,255,0.06)] rounded-tr-2xl' : ''
          }`}
        >
          <span
            className={`${
              activeTab === 'longPut' ? 'text-white font-extrabold' : 'text-[#A5A5A6]'
            }  text-sm`}
          >
            Long Put OPerps
          </span>
        </div>
      </div>

      {/* Content Section for Long Call OPerps */}
      {activeTab === 'longCall' && (
      <div className="flex flex-col gap-4 p-4 w-full">
        <div className='flex flex-col rounded-2xl p-4 border border-white/10  bg-klBtnBg'>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-2'>
          <div className='text-sm text-klFC'>Long Call OPerps Token</div>
          <img src="/assets/info.svg" alt="info"/>
        </div>
        <div className='flex flex-col'>
            <input type='text' placeholder='0.00' className='rounded-lg p-4 border border-white/10 bg-klt text-xl font-medium text-klFC overflow-hidden'></input>
          <div className='flex flex-row gap-2 h-[34px] p-2 rounded-lg'>
          <img src="/assets/suggestion-help.svg" alt="suggestion"/>
          <span className='text-xs font-extrabold text-klc'>Not sure how much to buy?</span>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='flex flex-row justify-between w-full'>
          <span className=' text-klFD'>
          USDC Balance
          </span>
          <span className=' text-white/80'>
          123.00 USDC
          </span>
          </div>
          <div className='flex flex-row justify-between w-full'>
          <span className=' text-klFD'>
          LCO Balance
          </span>
          <span className=' text-white/80'>
          12.34
          </span>
          </div>
        </div>
        </div>
        <div className='flex flex-row gap-2'>
        <Button
                label="Buy"
                onClick={handleClick}
                type = "primary"
                width="404px"
              />
              <Button
              label="Sell"
              onClick={handleClick}
              type = "secondary"
              width="404px"
            />
        </div>
        <div className='flex flex-col gap-4 rounded-2xl bg-kle p-5 pr-4 pl-4'>
          <div className="flex justify-between gap-2 w-full">
            <div className='flex flex-col rounded-lg p-2 bg-klBtnBg backdrop-blur-[32px]'>
              <div className='flex justify-between gap-2 w-full'>
                <span className='text-xs text-klFC w-[142px]'>Next Cycle Max Profit</span>
                <Image src="/assets/info-unfill.svg" alt="info" width={13.33} height={13.33}/>
              </div>
              <div>
              <span className='text-sm text-white font-extrabold'>750%</span>&nbsp;&nbsp;
              <span className='text-sm text-[#12B76A]'>~ $1000</span>
              </div>
            </div>
            <div className='flex flex-col rounded-lg p-2 bg-klBtnBg backdrop-blur-[32px]'>
              <div className='flex justify-between gap-2 w-full'>
                <span className='text-xs text-klFC w-[142px]'>Next Cycle Max Loss</span>
                <Image src="/assets/info-unfill.svg" alt="info" width={13.33} height={13.33}/>
              </div>
              <div>
              <span className='text-sm text-white font-extrabold'>50%</span>&nbsp;&nbsp;
              <span className='text-sm text-[#F04438]'>~ $25</span>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <span className='text-klFC text-sm'>
            Expected Leverage
            </span>
            <span className='text-white/80 text-sm font-medium'>
            700x
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-klFC text-sm'>
            Premium paid per cycle
            </span>
            <span className='text-white/80 text-sm font-extrabold'>
            50%
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-klFC text-sm'>
            Distribution
            </span>
            <span className='text-white/80 text-sm font-extrabold'>
            250 LCO : 75000 SCO 
            </span>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default OPerpsMain;
