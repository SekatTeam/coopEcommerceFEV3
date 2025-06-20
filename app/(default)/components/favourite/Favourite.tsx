"use client";

import React, { useState } from "react";
import Banner from "./Banner";
import { bestSelling } from "@/app/constants/bestSelling";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAllProducts } from "@/hooks/useAllProducts";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import { useProductCategories } from "@/hooks/useProductCategories";

type Product = {
  id?: string;
  itemID?: string;
  title?: string;
  itemName?: string;
  description?: string;
  itemDescription?: string;
  price?: number;
  itemPrice?: number;
  oldPrice?: number;
  itemTotalPrice?: number;
  image?: string;
  itemPicturePath?: string;
  outstock?: number;
  isSoldOut?: boolean;
};

const filterProducts = (products: Product[], tab: string) => {
  if (tab === "all") return products;
  return products.filter((item: Product) => {
    const title = (item?.title || item?.itemName || "").toLowerCase();
    if (tab === "keyboard") return title.includes("keyboard") || title.includes("mouse");
    if (tab === "headphone") return title.includes("headphon") || title.includes("earbud");
    if (tab === "webcam") return title.includes("webcam");
    if (tab === "printer") return title.includes("printer");
    return false;
  });
};

const Favourite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<{ value: string; catName?: string; catId?: string } | null>({ value: "all" });
  const { data: categoriesData, isLoading: isCategoriesLoading } = useProductCategories();
  const { data, isLoading, error } = useAllProducts();

  const categories = categoriesData?.object || [];
  const TABS = [
    { label: "All Product", value: "all" },
    ...categories.map((cat: any) => ({
      label: cat.itemName,
      value: cat.id,
      catName: cat.itemName,
      catId: cat.id,
    })),
    { label: "Keyboard & Mouse", value: "keyboard" },
    { label: "Headphone", value: "headphone" },
    { label: "Webcam", value: "webcam" },
    { label: "Printer", value: "printer" },
  ];

  // Always show all products and make 'All Product' tab active and others inactive
  const isAllTab = true;
  const activeTabValue = 'all';
  let products: any[] = data?.object || bestSelling;
  const displayedProducts = products.slice(0, 8);

  if (isLoading || isCategoriesLoading) return <div>Loading favourite products...</div>;
  if (error) return <div>Failed to load favourite products.</div>;

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
                  disabled
                  className={`text-sm border-b-2 px-1 pb-1 transition-colors duration-200 ${tab.value === 'all' ? '[border:var(--main-color)] font-medium' : 'border-transparent text-gray-500'}`}
                >
                  {tab.label}
                </button>
              ))}
              <a href="#" className="ml-3 [color:var(--main-color)] font-medium flex items-center gap-1 text-sm font-publicSans">Browse All Product <span><FaArrowRight /></span></a>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
            {displayedProducts.map((deal: any) => (
              <Card
                key={deal.itemID || deal.id}
                id={deal.itemID || deal.id}
                title={deal.itemName || deal.title}
                description={deal.itemDescription || deal.description}
                price={deal.itemPrice || deal.price}
                oldPrice={deal.itemTotalPrice || deal.oldPrice}
                currency="₦"
                image={deal.itemPicturePath || deal.image}
                isSoldOut={deal.outstock > 0 || deal.isSoldOut}
              />
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
              {displayedProducts.map((deal: any) => (
                <SwiperSlide key={deal.itemID || deal.id}>
                  <Card
                    key={deal.itemID || deal.id}
                    id={deal.itemID || deal.id}
                    title={deal.itemName || deal.title}
                    description={deal.itemDescription || deal.description}
                    price={deal.itemPrice || deal.price}
                    oldPrice={deal.itemTotalPrice || deal.oldPrice}
                    currency="₦"
                    image={deal.itemPicturePath || deal.image}
                    isSoldOut={deal.outstock > 0 || deal.isSoldOut}
                  />
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev !w-[24px] !h-[24px] rounded-full after:hidden absolute left-[-10px] top-1/2 z-10 [background:var(--main-color)]">
                <FaArrowLeft className="text-white p-1 text-2xl" />
              </button>
              <button className="swiper-button-next !w-[24px] !h-[24px] rounded-full after:hidden absolute right-[-10px] top-1/2 z-10 [background:var(--main-color)]">
                <FaArrowRight className="p-1 text-white text-2xl" />
              </button>
            </Swiper>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Favourite;
