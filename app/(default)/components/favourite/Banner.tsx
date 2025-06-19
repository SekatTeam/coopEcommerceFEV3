"use client"

import { FavouriteBanner } from '@/app/constants/media'
import Image from 'next/image'
import React from 'react'
import ShopButton from '../ShopButton'

const Banner = () => {
  return (
    <div className="flex flex-col h-full font-publicSans gap-5">
        <div className="flex flex-col justify-center items-center px-5 py-4 bg-[#F7E99E]">
            <Image
                src={FavouriteBanner}
                height={100}
                width={100}
                alt="banner"
            />
            <div className='mb-3'>
                <p className="text-2xl font-semibold text-center mt-4 text-gray900">Beautiful Throw Pillows for your sitting Comfort</p>
                <p className="font-medium text-[#475156] my-3 text-center">Multicolour, Soft and Clean Pillows</p>
                <span className="text-sm font-medium text-[#475156] mt-6 flex items-center justify-center">Only for: <span className="bg-white px-2 py-1 rounded-[2xp] font-semibold ml-2">N299 NGN</span></span>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <ShopButton
                    marginY='my-5'
                    paddingX='px-5'
                    paddingY='py-3'
                />
            </div>
        </div>
        <div className="bg-[#124261] flex flex-col justify-center items-center px-5 py-4 text-nowrap text-white">
            <div className='mb-3 flex flex-col justify-center items-center'>
                <p className="text-xs font-semibold text-center mt-4 capitalize bg-[#FFFFFF1F] p-1.5 rounded-sm inline-block">Summer Sales</p>
                <h2 className="text-3xl font-medium text-gray900my-3 text-center py-4">32% Discount</h2>
                <p className="text-base text-center flex items-center justify-center">only for <span className="text-[#E57C29]">Kitchenware</span> product.</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <ShopButton
                    marginY='my-5'
                    paddingX='px-5'
                    paddingY='py-3'
                />
            </div>
        </div>
    </div>
  )
}

export default Banner