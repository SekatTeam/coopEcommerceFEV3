"use client"

import { bestDeals } from "@/app/constants/bestDeals";
import BestDealCard from "@/app/(default)/components/BestDeal/BestDealCard";
import { hotDeals } from "@/app/constants/hotDeal";
import HotDealCard from "./HotDealCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BestDeals: React.FC = () => {
  
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center justify-center gap-3 lg:gap-5">
          <h2 className="text-xl md:text-2xl font-semibold">Best Deals</h2>
          <span className="text-xs md:text-sm">Deals ends in <span className="bg-warning-color px-2 py-1 rounded-[2xp] font-semibold text-xs md:text-sm font-publicSans ml-2">16d : 21h : 57m : 23s</span></span>
        </div>
        <a href="#" className="hidden text-orange-main font-medium md:flex items-center gap-1 text-xs font-publicSans">Browse All Product <span><FaArrowRight /></span></a>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        {hotDeals.map((hotdeal) => (
          <HotDealCard key={hotdeal.id} {...hotdeal} />
        ))}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4">
            {bestDeals.map((deal) => (
              <BestDealCard key={deal.id.toString()} {...deal} id={deal.id.toString()} />
            ))}
          </div>
          <div className="md:hidden">
            <Swiper
              className="block md:hidden"
              slidesPerView={2}
              modules={[Pagination, Autoplay, Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              style={{ width: '100%', height: '300px' }}

            >
              {bestDeals.map((deal) => (
                <SwiperSlide key={deal.id.toString()}>
                  <BestDealCard {...deal} id={deal.id.toString()} />
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev !w-[24px] !h-[24px] rounded-full after:hidden absolute left-[-10px] top-1/2 z-10 bg-orange-main">
                <FaArrowLeft className="text-white p-1 text-2xl" />
              </button>
              <button className="swiper-button-next !w-[24px] !h-[24px] rounded-full after:hidden absolute right-[-10px] top-1/2 z-10 bg-orange-main">
                <FaArrowRight className="p-1 text-white text-2xl" />
              </button>
            </Swiper>
          </div>
      </div>
    </section>
  );
};

export default BestDeals;
