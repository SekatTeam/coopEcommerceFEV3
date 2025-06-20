import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FashionImage5 } from "@/app/constants/media";


interface CardProps {
  id: number;
  title: string;
  description?: string;
  oldPrice?: number | null;
  price: number;
  currency: string;
  image: string;
  rating?: number | null | undefined;
  ratingCount?: number | null;
  tags?: string[];
  isSoldOut?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  oldPrice,
  price,
  currency,
  image,
  rating,
  ratingCount,
  tags = [],
  isSoldOut = false,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      className="relative bg-white border border-border-color hover:shadow-hover-shadow p-4 flex flex-col h-full cursor-pointer"
      onClick={() => router.push(`/${id}`)}
    >
      {tags.length > 0 && (
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2 py-1 rounded mb-1 ${
                tag.includes("OFF")
                  ? "bg-warning-color text-gray-900"
                  : tag === "HOT"
                  ? "bg-red-500 text-white"
                  : tag === "SOLD OUT"
                  ? "bg-gray-400 text-white"
                  : tag === "BEST SALE"
                  ? "bg-orange-main text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <Image
        height={100}
        width={100}
        src={image || FashionImage5}
        alt={title}
        className={`w-full h-40 object-contain overflow-hidden mb-4 rounded ${isSoldOut ? "opacity-50" : ""}`}
      />
        <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }, (_, index) => {

                const isActive = index < 5;
                const Star = isActive ? FaStar : FaRegStar;
                return <Star key={index} className="text-[#FFB74C]" />;
            })}
            <span className="text-xs text-[#77878F] ml-3">({ratingCount ? ratingCount : "5,432"})</span>
        </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-xs mb-1">{title}</h3>
        {/* {description && <p className="text-xs text-gray-500 mb-2">{description}</p>} */}
        <div className="flex items-center gap-2">
          {oldPrice ? (
            <span className="text-gray-400 text-sm line-through">
              {currency}
              {oldPrice === 0 ? 12000 : oldPrice}
            </span>
          )
          :(
            <span className="text-gray-400 text-sm line-through">
              12090
            </span>
          )}
          <span className="text-orange-600 font-bold text-lg">
            {currency}
            {price === 0 ? 10000 : price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
