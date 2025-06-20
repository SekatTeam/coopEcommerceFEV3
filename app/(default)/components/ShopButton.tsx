"use client"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

type ShopButtonProps = {
    marginY?: string;
    paddingX?: string;
    paddingY?: string;
    onclick?: () => void;
    textSize?: string;
};

const ShopButton: React.FC<ShopButtonProps> = ({ marginY, paddingX, paddingY, onclick, textSize = "16px" }) => {
  return (
    <button 
        className={`${marginY} ${paddingX} ${paddingY} ${textSize} rounded-sm uppercase font-semibold md:font-bold !leading-[1.2%] text-white bg-[color:var(--main-color)]  flex items-center justify-center gap-2 text-sm md:text-base`}
        onClick={() => onclick ? onclick() : undefined}
    >
        Shop now
        <FaArrowRight />
    </button>
  )
}

export default ShopButton