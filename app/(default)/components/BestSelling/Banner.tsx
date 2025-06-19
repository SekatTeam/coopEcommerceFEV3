"use client"

import { BestSellingBanner } from '@/app/constants/media'
import Image from 'next/image'
import React from 'react'
import ShopButton from '../ShopButton'

const Banner = () => {
  return (
    <div className="bg-warning-color flex flex-col h-full font-publicSans">
        <div className="flex flex-col justify-center items-center p-5 text-nowrap">
            <div className='mb-3'>
                <p className="text-[#BE4646] text-xs font-semibold text-center mt-4">Kitchen Tools</p>
                <h2 className="text-3xl font-medium text-gray900 my-3 text-center">32% Discount</h2>
                <p className="text-[#475156] text-base text-center mb-5">For all Kitchen Accessories </p>
                <span className="text-sm font-medium text-gray900 mt-6">Offers ends in: <span className="bg-white px-2 py-1 rounded-[2xp] font-semibold ml-2">ENDS OF EASTER</span></span>
            </div>
            <ShopButton
                marginY='my-5'
                paddingX='px-5'
                paddingY='py-3'
            />
        </div>
        <Image
            src={BestSellingBanner}
            alt="banner"
            height={900}
            width={700}
            loading="lazy"
            className='object-cover w-full h-full'
        />
    </div>
  )
}

export default Banner