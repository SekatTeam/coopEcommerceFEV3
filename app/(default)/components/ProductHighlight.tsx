import { ProductHighLightData } from '@/app/constants/promtionData'
import React from 'react'
import ShopButton from './ShopButton'
import Image from 'next/image'
import { promotionBanner1 } from '@/app/constants/media';

const ProductHighlight = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 font-PublicSans'>
      {ProductHighLightData.map((item: PromoCardProps, idx: number) => (
        <div
          key={idx}
          className="flex gap-4 relative w-full px-8 py-3 rounded-md"
          style={{ backgroundColor: item.bgColor, color: item.textColor }}
        >
          <div className='w-full md:w-1/2 mt-3'>
            <p
              className="text-sm flex items-center gap-1 px-3 py-1 rounded-md w-max mb-2"
              style={{ backgroundColor: item.badgeBgColor, color: item.badgeColor }}
            >
              {item.badgeText}
            </p>
            <h2 className='text-3xl font-semibold my-6 leading-[40px]'>{item.title}</h2>
            <p className='leading-[28px] mb-4'>{item.description}</p>
            <ShopButton
              marginY='my-5'
              paddingX='px-5'
              paddingY='py-3'
              textSize='text-sm'
            />
          </div>
          <div className="w-1/2 flex items-center justify-center relative">
            {item?.price && (
              <div className="flex items-center justify-end absolute top-0 right-0">
                <div className="rounded-full h-20 w-20 text-white flex items-center justify-center bg-[color:var(--main-color)]  text-xl font-semibold my-3">
                  {item.price}
                </div>
              </div>
            )}
            <Image 
              src={promotionBanner1} 
              alt="promo" 
              width={400} 
              height={400}
              className='object-cover'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductHighlight