"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface BestDealCardProps {
  id: string;
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

const BestDealCard: React.FC<BestDealCardProps> = ({
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
    <div className="relative bg-white border border-border-color hover:shadow-hover-shadow p-4 flex flex-col h-full cursor-pointer"
      onClick={() => router.push(`/${id}`)}
    >
      {tags.length > 0 && (
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2 py-1 rounded mb-1 inline-block ${
                tag.includes("OFF")
                  ? "bg-warning-color text-gray-900"
                  : tag === "HOT"
                  ? "bg-red-400 text-white"
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
      <Image
        height={100}
        width={100}
        src={image}
        alt={title}
        className={`w-full h-40 object-contain mb-4 rounded ${
          isSoldOut ? "opacity-50" : ""
        }`}
      />
      <div className="flex-1 flex flex-col">
        <h3 className="text-xs mb-1">{title}</h3>
        {description && (
          <p className="text-xs text-gray-500 mb-2">{description}</p>
        )}
        <div className="flex items-center gap-2">
          {oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              {currency}
              {oldPrice}
            </span>
          )}
          <span className="text-orange-600 font-bold text-sm md:text-lg">
            {currency}
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestDealCard;
