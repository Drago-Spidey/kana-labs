import React from "react";
import KanaOutlineButton from "./KanaOutlineButton";

interface cardProbs {
  image: React.ReactNode;
  title: string;
  points: string;
  btnLabel: string;
}

const ActionCard: React.FC<cardProbs> = ({
  image,
  title,
  points,
  btnLabel,
}) => {
  return (
    <div className="flex flex-col rounded-2xl border text-white bg-darkGray-500 border-white/10">
      <div className="h-[160px] w-auto">{image}</div>
      <div className="flex flex-col px-6 py-4 gap-4">
        <div className="flex flex-row justify-between">
          <span className="">{title}</span>
          <span>{points}</span>
        </div>
        <div>
          <KanaOutlineButton size="small" label={btnLabel} />
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
