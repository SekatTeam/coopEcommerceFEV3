"use client";

import React, { useState } from "react";
import Card from "./Card";
import Banner from "./Banner";
import { bestSelling } from "@/app/constants/bestSelling";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TABS = [
  { label: "All Product", value: "all" },
  { label: "Smart Phone", value: "smartphone" },
  { label: "Laptop", value: "laptop" },
  { label: "Headphone", value: "headphone" },
  { label: "TV", value: "tv" },
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
    if (tab === "smartphone") return title.includes("samsung") || title.includes("phone");
    if (tab === "laptop") return title.includes("laptop") || title.includes("macbook");
    if (tab === "headphone") return title.includes("earbud") || title.includes("headphon");
    if (tab === "tv") return title.includes("tv") || title.includes("washing machine");
    return false;
  });
};

const BestSelling: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const filteredProducts = filterProducts(bestSelling, activeTab);

  return (
    <section className="py-8 font-publicSans">
      <div className="flex flex-col md:flex-row gap-2">
        <Banner />
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-publicSans mt-5 md:mt-0">BEST SELLING PRODUCTS</h2>
              <div className="hidden md:flex gap-2 lg:gap-4 mt-2 mb-3">
                {TABS.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`text-sm font-normal border-b-2 px-1 pb-1 transition-colors duration-200 ${activeTab === tab.value ? 'border-orange-main font-medium' : 'border-transparent text-gray-500 hover:text-orange-main'}`}
                  >
                    {tab.label}
                  </button>
                ))}
                <a href="#" className="ml-4 text-orange-main font-medium flex items-center gap-1 text-sm font-publicSans">Browse All Product <span><FaArrowRight /></span></a>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filteredProducts.map((deal: Product) => (
              <Card key={deal.id} {...deal} />
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
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
