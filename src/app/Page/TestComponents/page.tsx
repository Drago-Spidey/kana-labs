
"use client"; // Add this directive at the top

import React, { useState } from "react";
import KanaButton from "@/app/components/buttons/KanaButton";
import KanaFillButton from "@/app/components/buttons/KanaFillButton";
import KanaOutlineButton from "@/app/components/buttons/KanaOutlineButton";

const TestComponents: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-12 ">
      <div className="flex flex-row w-full gap-4 ">
        <KanaButton label={"Primary Button"} type="primary" onClick={() => { }} />
        <KanaButton label={"Secondary Button"} type="secondary" onClick={() => { }} />
        <KanaButton label={"Warning Button"} type="warning" onClick={() => { }} />
        <KanaButton label={"Danger Button"} type="danger" onClick={() => { }} />
      </div>
      <div className="flex flex-row w-full gap-4 ">
        <KanaFillButton label={"Primary Button"} type="primary" onClick={() => { }} />
        <KanaFillButton label={"Secondary Button"} type="secondary" onClick={() => { }} />
        <KanaFillButton label={"Warning Button"} type="warning" onClick={() => { }} />
        <KanaFillButton label={"Danger Button"} type="danger" onClick={() => { }} />
      </div>
      <div className="flex flex-row w-full gap-4 ">
        <KanaOutlineButton label={"Primary Button"} type="primary" onClick={() => { }} />
        <KanaOutlineButton label={"Secondary Button"} type="secondary" onClick={() => { }} />
        <KanaOutlineButton label={"Warning Button"} type="warning" onClick={() => { }} />
        <KanaOutlineButton label={"Danger Button"} type="danger" onClick={() => { }} />
      </div>
    </div>

  );
};

export default TestComponents;
