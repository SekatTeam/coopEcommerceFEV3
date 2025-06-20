"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { promotiondata } from '@/app/constants/promtionData';
import ShopButton from './ShopButton';
import { promotionBanner1, promotionBanner2, promotionBanner3 } from '@/app/constants/media';
import { BsDash } from 'react-icons/bs';

const Promotion = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 w-full mx-auto'>
      <div className="w-full lg:w-2/3 bg-[#F2F4F5] rounded-md py-3 px-2 md:px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          style={{ width: '100%', height: '100%' }}
          className="promotion-swiper"
        >
          {promotiondata.map((item: PromoCardProps, index) => (
            <SwiperSlide key={index}>
              <div className='flex gap-4 relative w-full px-2 md:px-8 py-3'>
                <div className='w-full md:w-1/2 mt-3'>
                  <p className="text-[color:var(--main-color)]  text-sm flex items-center gap-1"><BsDash size={20} /> THE BEST PLACE TO PLAY</p>
                  <h2 className='text-2xl md:text-4xl font-bold my-6 text-gray900'>{item.title}</h2>
                  <p className='text-sm md:text-lg text-[#475156] !leading-[28px] mb-4 z-10 w-1/2 md:w-full'>{item.description}</p>
                  <ShopButton
                    marginY='my-5'
                    paddingX='px-4'
                    paddingY='py-3'
                  />
                </div>
                <div className="hidden md:block w-full md:w-1/2 md:relative">
                  <div className="flex items-center justify-end absolute top-0 right-0">
                    <div className="rounded-full border-[6px] border-white h-20 w-20 text-white flex items-center justify-center bg-[color:var(--main-color)]  text-xl font-semibold my-3">
                      {item.badgeText}
                    </div>
                  </div>
                  <Image 
                    src={promotionBanner1} 
                    alt="promo" 
                    width={400} 
                    height={400}
                    className='object-cover'
                  />
                </div>
                <div className="flex flex-col items-center justify-end absolute bottom-0 right-0 md:hidden">
                  <div className="relative">
                    <Image 
                      src={promotionBanner1} 
                      alt="promo" 
                      width={200} 
                      height={200}
                      className='object-cover'
                    />
                    <div className="rounded-full border-[4px] absolute top-0 right-0 border-white h-16 w-16 md:h-20 md:w-20 text-white flex items-center justify-center bg-[color:var(--main-color)]  text-lg font-semibold my-3">
                      {item.badgeText}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-2/6 font-publicSans text-lg overflow-hidden">
          <div className="flex bg-black rounded-md text-white">
            <div className='py-5 pl-5'>
              <h2 className=' uppercase text-[#EBC80C] text-sm font-medium'>Summer sales</h2>
              <p className='text-white text-lg !leading[32px] font-medium capitalize mb-5 mt-3'>Get your Favorite Goceries</p>
              <ShopButton
                marginY='my-2'
                paddingX='px-2'
                paddingY='py-2'
                textSize='text-sm'
              />
            </div>
            <div className="relative h-full w-full">
              <Image 
                src={promotionBanner2} 
                alt='promo' 
                width={250} 
                height={300}
                className='object-cover h-full'
              />
              <div className="absolute top-3 left-4">
                <div className="bg-warning-color text-white rounded-sm px-4 py-1.5 flex text-sm items-center justify-center font-semibold">
                  29% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-[#F2F4F5] rounded-md p-4 gap-3">
            <Image 
              src={promotionBanner3} 
              alt='promo' 
              width={200} 
              height={200}
              className='object-cover pl-3 pr-2 py-2'
            />
            <div className='flex flex-col justify-center items-start'>
              <p className='text-lg md:text-xl !leading[32px] font-medium capitalize mr-4'>Super Amazing Handwash Liquid Shop</p>
              <p className='text-[color:var(--main-color)]  text-xl !leading[32px] font-medium capitalize my-4'>N200</p>
              <ShopButton
                marginY='my-2'
                paddingX='px-3'
                paddingY='py-2'
                textSize="text-sm"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Promotion;