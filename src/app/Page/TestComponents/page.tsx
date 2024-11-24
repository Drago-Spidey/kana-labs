"use client"; // Add this directive at the top

import React, { useState } from "react";
import KanaButton from "@/app/components/buttons/KanaButton";
import KanaFillButton from "@/app/components/buttons/KanaFillButton";
import KanaOutlineButton from "@/app/components/buttons/KanaOutlineButton";
import OnChainToken from "@/app/components/buttons/OnChainToken";
import DefaultSmall from "../../../../public/assets/default_small.svg";
import DefaultImg from "../../../../public/assets/default.svg";
import ContainerImg from "../../../../public/assets/container.svg";
import Perk2 from "../../../../public/assets/Perk2.png";

import Tradebook from "../../../../public/assets/tradebook.svg";
import Swap from "../../../../public/assets/swapbook.svg";
import Refferal from "../../../../public/assets/referral.svg";
import KanaHeaderButton from "@/app/components/buttons/KanaHeaderButton";
import ThemeSwitcher from "@/app/themeSwitcher";
import ActionCard from "@/app/components/buttons/ActionCard";
import DiscountCard from "@/app/components/buttons/DiscountCard";
import KanaModal from "@/app/components/buttons/KanaModal";
const TestComponents: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="flex flex-col w-full gap-12 ">
      <KanaModal isModalOpen={false} setIsModalOpen={function (open: boolean): void {
        throw new Error("Function not implemented.");
      } } />
      <div className="flex flex-row w-full gap-4 ">
        <KanaButton
          label={"Primary Button"}
          type="primary"
          onClick={() => {toggleModal}}
        />
        <KanaButton
          label={"Secondary Button"}
          type="secondary"
          onClick={() => {}}
        />
        <KanaButton
          label={"Warning Button"}
          type="warning"
          onClick={() => {}}
        />
        <KanaButton
          label={"Danger Button"}
          type="danger"
          leftIcon={<ContainerImg />}
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row w-full gap-4 ">
        <KanaFillButton
          label={"Primary Button"}
          type="primary"
          onClick={() => {}}
        />
        <KanaFillButton
          label={"Secondary Button"}
          type="secondary"
          onClick={() => {}}
        />
        <KanaFillButton
          label={"Warning Button"}
          type="warning"
          onClick={() => {}}
        />
        <KanaFillButton
          label={"Danger Button"}
          type="danger"
          leftIcon={<ContainerImg />}
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row w-full gap-4 ">
        <KanaOutlineButton
          label={"Primary Button"}
          type="primary"
          onClick={() => {}}
        />
        <KanaOutlineButton
          label={"Secondary Button"}
          type="secondary"
          onClick={() => {}}
        />
        <KanaOutlineButton
          label={"Warning Button"}
          type="warning"
          onClick={() => {}}
        />
        <KanaOutlineButton
          label={"Danger Button"}
          type="danger"
          leftIcon={<ContainerImg />}
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row w-full gap-4 ">
        <KanaHeaderButton
          label={"Primary Button"}
          type="primary"
          size="large"
          leftIcon={<ContainerImg />}
          onClick={() => {}}
        />
        <KanaHeaderButton
          label={"Secondary Button"}
          type="primary"
          size="large"
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
        <KanaHeaderButton
          label={"Warning Button"}
          type="primary"
          size="large"
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
        <KanaHeaderButton
          label={"Danger Button"}
          type="primary"
          size="large"
          leftIcon={<ContainerImg />}
          rightIcon={<ContainerImg />}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row w-full gap-4 p-4 mb-16 rounded-2xl  bg-[#F2F9F9]">
        <OnChainToken
          onChainImage={<DefaultImg />}
          baseChainImage={<DefaultSmall />}
          onChainName={"Token"}
          baseChainName={"Chain"}></OnChainToken>
        <OnChainToken
          onChainImage={<DefaultImg />}
          baseChainImage={<DefaultSmall />}
          onChainName={"Token"}
          baseChainName={"Chain"}></OnChainToken>
        <OnChainToken
          onChainImage={<DefaultImg />}
          baseChainImage={<DefaultSmall />}
          onChainName={"Token"}
          baseChainName={"Chain"}></OnChainToken>
        <OnChainToken
          onChainImage={<DefaultImg />}
          baseChainImage={<DefaultSmall />}
          onChainName={"Token"}
          baseChainName={"Chain"}></OnChainToken>
      </div>

      <div className="flex flex-row w-full gap-4 px-[96px] py-[48px] ">
        <ActionCard
          image={<Tradebook className="rounded-t-2xl" />}
          title={"Trade $1 on Tradebook"}
          points={"0.5 pts."}
          btnLabel={"Go to tradebook"}
        />
        <ActionCard
          image={<Swap className="rounded-t-2xl" />}
          title={"Swap $1 on Kana Swap"}
          points={"1 pt."}
          btnLabel={"Go to swap"}
        />
        <ActionCard
          image={<Refferal className="rounded-t-2xl" />}
          title={"Earn by referring your friends"}
          points={""}
          btnLabel={"Go to refferal"}
        />
      </div>

      <div className="flex flex-row w-full gap-4 px-[96px] py-[48px] ">
        <DiscountCard imageSrc={Perk2} altText={"test"} text={"Exclusive beta access to cutting-edge features"}  />
      </div>
    </div>
  );
};

export default TestComponents;
