"use client";

import React, { useState } from "react";
import Banner from "./Banner";
import { bestSelling } from "@/app/constants/bestSelling";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TABS = [
  { label: "All Product", value: "all" },
  { label: "Keyboard & Mouse", value: "keyboard" },
  { label: "Headphone", value: "headphone" },
  { label: "Webcam", value: "webcam" },
  { label: "Printer", value: "printer" },
];

interface Product {
  id: number;
  title: string;
  oldPrice: number | null;
  price: number;
  currency: string;
  image: any;
  rating: number;
  ratingCount: number;
  tags: string[];
  isSoldOut: boolean;
}

const filterProducts = (products: Product[], tab: string) => {
  if (tab === "all") return products;
  return products.filter((item: Product) => {
    const title = item.title.toLowerCase();
    if (tab === "keyboard") return title.includes("keyboard") || title.includes("mouse");
    if (tab === "headphone") return title.includes("headphon") || title.includes("earbud");
    if (tab === "webcam") return title.includes("webcam");
    if (tab === "printer") return title.includes("printer");
    return false;
  });
};

const Favourite: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const filteredProducts = filterProducts(bestSelling, activeTab);

  return (
    <section className="py-8 font-PublicSans">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="flex-1 lg:w-[70%]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">FAVOURITE PRODUCTS</h2>
            <div className="hidden md:flex gap-2 mt-2">
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`text-sm border-b-2 px-1 pb-1 transition-colors duration-200 ${activeTab === tab.value ? 'border-orange-main font-medium' : 'border-transparent text-gray-500 hover:text-orange-main'}`}
                >
                  {tab.label}
                </button>
              ))}
              <a href="#" className="ml-3 text-orange-main font-medium flex items-center gap-1 text-sm font-publicSans">Browse All Product <span><FaArrowRight /></span></a>
            </div>
          </div>
          <div className="hidden md:grid  md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filteredProducts.map((deal: Product) => (
              <Card key={deal.id} {...deal} />
            ))}
          </div>
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
              {filteredProducts.map((deal: Product) => (
                <SwiperSlide key={deal.id.toString()}>
                  <Card key={deal.id} {...deal} />
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
        <div className="w-full lg:w-[30%]">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Favourite;
