import React from 'react'
import ShopButton from './ShopButton'
import Image from 'next/image'
import { Hotdeal } from '@/app/constants/media'

const HotDeal = () => {
  return (
    <div className="bg-[#FFE7D6] flex gap-4 w-full px-8 py-3 rounded-md font-publicSans" >
        <div className='w-1/2 mt-7'>
        <p className="text-sm flex items-center gap-1 px-3 py-1 rounded-sm w-max mb-2 bg-[color:var(--main-color)] text-white" >
            SAVE UP TO N200.00
        </p>
        <h2 className='text-3xl font-bold my-6 !leading-[24px] text-gray900'>Man Anthracite</h2>
        <p className='!leading-[28px] mb-4 text-[#5F6C72] max-w-[400px]'>The awesome party shoe for men who well understand fashion and lifestyle</p>
        <ShopButton
            marginY='my-5'
            paddingX='px-5'
            paddingY='py-3'
        />
        </div>
        <div className="w-1/2 flex items-center justify-center relative">
            <div className="flex items-center justify-end absolute top-0 left-20">
                <div className="rounded-full border-[6px] border-white h-20 w-20 text-black flex items-center justify-center bg-[color:var(--main-color)]  text-xl font-semibold my-3">
                    N1999
                </div>
            </div>
            <Image 
                src={Hotdeal} 
                alt="promo" 
                width={400} 
                height={400}
                className='object-cover'
            />
        </div>
    </div>
  )
}

export default HotDeal