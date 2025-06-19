import Image from "next/image";
import React from "react";
import { BsEye } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

interface HotDealCardProps {
  title: string;
  description?: string;
  oldPrice?: number | null;
  price: number;
  currency: string;
  image: string;
  rating?: number | null;
  ratingCount?: number | null;
  tags?: string[];
  isSoldOut?: boolean;
}

const HotDealCard: React.FC<HotDealCardProps> = ({
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
}) => {
  return (
    <div className="relative bg-white border border-border-color hover:shadow-hover-shadow p-4 flex flex-col h-full font-public sans">
      {tags.length > 0 && (
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2 py-1 rounded mb-1 ${
                tag.includes("OFF")
                  ? "bg-warning-color text-gray-900"
                  : tag === "HOT"
                  ? "bg-red-600 text-white"
                  : tag === "SOLD OUT"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="p-2 mt-2 shadow-lg rounded-sm">
        <Image
          height={100}
          width={100}
          src={image}
          alt={title}
          className={`w-full h-64 max-h-64 object-contain mb-4 rounded mt-5 ${isSoldOut ? "opacity-50" : ""}`}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => {
                const isActive = index < 5;
                const Star = isActive ? FaStar : FaRegStar;
                return <Star key={index} className="text-[#FFB74C]" />;
            })}
            <span className="text-xs text-[#77878F] ml-3">(52,345)</span>
          </div>
          <h3 className="text-sm my-2">{title}</h3>
          {description && <p className="text-xs text-gray-500 mb-2">{description}</p>}
          <div className="flex items-center gap-2 mb-2">
            {oldPrice && (
              <span className="text-gray-400 text-sm line-through">
                {currency}
                {oldPrice}
              </span>
            )}
            <span className="text-orange-600 font-bold text-lg">
              {currency}
              {price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-7 w-full">
        <button className="p-3 bg-[#FFE7D6] text-gray900rounded-[2px]">
          <HiHeart />
        </button>
        <button className="py-2.5 px-4 flex items-center justify-center gap-2 text-white bg-orange-main rounded-[2px]">
          <MdOutlineShoppingCart className="" />
          <span className="text-sm">ADD TO CART</span>
        </button>
        <button className="p-3 bg-[#FFE7D6] text-gray900rounded-[2px]">
          <BsEye />
        </button>
      </div>
    </div>
  );
};

export default HotDealCard;
