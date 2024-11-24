import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface probs{
    imageSrc:string | StaticImport,
    altText : string;
     text: string;
}

const DiscountCard:React.FC<probs> = ({ imageSrc,altText, text }) => {
  return (
    <div className="bg-[#1D1E20] overflow-x-hidden border border-[#FFFFFF1A] rounded-2xl p-6 min-w-[416px] lg:w-[416px] min-h-[200px] flex-shrink-0">
      <Image
        alt={altText}
        loading="lazy"
        width={648}
        height={408}
        src={imageSrc}
        className="mx-auto w-auto h-[6.3rem]"
      />
      <p className="text-[#FFFFFFCC] font-normal text-base text-center mt-6">
        {text}
      </p>
    </div>
  );
};

export default DiscountCard;
