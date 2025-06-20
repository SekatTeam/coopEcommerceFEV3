"use client";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { recentlyAdded } from "@/app/constants/recentlyAdded";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecentlyAdded = () => {
  return (
    <section className="py-8 px-4">
        <h2 className="font-public-sans text-xl font-semibold my-3">RECENTLY ADDED</h2>
        <div className="relative">
          <Swiper
            className=""
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 6 },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {recentlyAdded.map((item) => (
              <SwiperSlide
                className=""
                key={item.id}
              >
                <div className="border border-border-color p-3">
                    <Image
                        alt=""
                        width={150}
                        height={150}
                        loading="lazy"
                        src={item.image}
                        className="w-[150px] h-[150px] object-cover"
                    />
                    <p className="text-center text-sm font-public-sans font-medium mt-2">{item.title}</p>
                </div> 
              </SwiperSlide>
            ))}
            <button className="swiper-button-prev !w-[24px] !h-[24px] rounded-full after:hidden absolute left-[-18px] top-1/2 z-10 bg-[color:var(--main-color)] ">
              <FaArrowLeft className="text-white p-1 text-2xl" />
            </button>
            <button className="swiper-button-next !w-[24px] !h-[24px] rounded-full after:hidden absolute right-[-18px] top-1/2 z-10 bg-[color:var(--main-color)] ">
              <FaArrowRight className="p-1 text-white text-2xl" />
            </button>
          </Swiper>
        </div>
    </section>
  )
}

export default RecentlyAdded