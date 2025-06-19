"use client";

import { latestNew1, latestNew2, latestNew3 } from '@/app/constants/media';
import Image from 'next/image';
import React from 'react';
import { LuCircleUserRound } from "react-icons/lu";
import { MdEventNote } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    newsImage: latestNew1,
    author: 'Kristin',
    date: '19Dec, 2013',
    views: 453,
    title: 'Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.',
    description: 'Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.',
  },
  {
    newsImage: latestNew2,
    author: 'Robert',
    date: '28 Nov, 2015',
    views: 738,
    title: 'Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.',
    description: 'Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.',
  },
  {
    newsImage: latestNew3,
    author: 'Arlene',
    date: '9 May, 2014',
    views: 826,
    title: 'Curabitur massa orci, consectetur et blandit ac, auctor et tellus.',
    description: 'Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.',
  },
];

const NewsCard = ({ newsImage, author, date, views, title, description }: any) => (
  <div className="bg-white shadow p-4 rounded-md flex flex-col w-full max-w-md mx-auto font-publicSans">
    {newsImage && (
      <Image 
        src={newsImage} 
        alt='news image' 
        className="rounded-sm w-[320px] h-56 object-cover mb-4" 
        height={100}
        width={300}
      />
    )}
    <div className="flex items-center gap-4 text-sm mb-2">
      <p className="flex items-center gap-1 text-xs md:text-sm text-[#475156]"><span className="text-orange-main text-base"><LuCircleUserRound /></span>{author}</p>
      <p className="flex items-center gap-1 text-xs md:text-sm text-[#475156]"><span className="text-orange-main text-base"><MdEventNote /></span>{date}</p>
      <p className="flex items-center gap-1 text-xs md:text-sm text-[#475156]"><span className="text-orange-main text-base"><IoChatbubbleEllipsesOutline /></span>{views}</p>
    </div>
    <div className="font-semibold text-sm md:text-base mb-2 text-gray900">{title}</div>
    <div className="text-[#77878F] text-xs md:text-sm mb-4">{description}</div>
    <button className="border border-[#FFE7D6] text-[#FF7A00] rounded-sm px-4 py-2 text-xs md:text-sm font-semibold flex items-center gap-2 w-fit hover:bg-[#FF7A00]/10 transition">
      READ MORE <span className="text-orange-main text-sm md:text-base"><FaArrowRight /></span>
    </button>
  </div>
);

const LatestNews = () => (
  <section className="bg-[#F7F8FA] py-16 px-4 md:px-20 mt-10 md:mt-16 font-publicSans">
    <div className="md:max-w-6xl mx-auto md:px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 font-publicSans">Latest News</h2>
      <div className="hidden md:flex gap-8 justify-center items-stretch">
        {newsData.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          className="block md:hidden"
          slidesPerView={1}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          style={{ width: '100%', height: '100%' }}

        >
          {newsData.map((news, idx) => (
            <SwiperSlide key={idx}>
              <NewsCard key={idx} {...news} />
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

export default LatestNews;
