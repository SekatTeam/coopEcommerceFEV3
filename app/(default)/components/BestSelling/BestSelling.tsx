"use client";

import React, { useState } from "react";
import Card from "./Card";
import Banner from "./Banner";
import { bestSelling } from "@/app/constants/bestSelling";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAllProducts } from "@/hooks/useAllProducts";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import { useProductCategories } from "@/hooks/useProductCategories";

// Define Product type if not imported from elsewhere
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
    const title = (item?.title || "").toLowerCase();
    if (tab === "smartphone") return title.includes("samsung") || title.includes("phone");
    if (tab === "laptop") return title.includes("laptop") || title.includes("macbook");
    if (tab === "headphone") return title.includes("earbud") || title.includes("headphon");
    if (tab === "tv") return title.includes("tv") || title.includes("washing machine");
    return false;
  });
};

const BestSelling: React.FC = () => {
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
  ];

  const isAllTab = activeTab?.value === "all";
  const { data: categoryData, isLoading: isCategoryLoading, error: categoryError } = useProductsByCategory(
    activeTab?.catName || "",
    activeTab?.catId || ""
  );

  let products: any[] = bestSelling;
  if (isAllTab) {
    products = data?.object || bestSelling;
  } else if (categoryData?.object) {
    products = categoryData.object;
  }
  const filteredProducts = filterProducts(products, activeTab?.catName || "");
  const displayedProducts = filteredProducts.slice(0, 8);

  if (isLoading || isCategoryLoading || isCategoriesLoading) return <div>Loading best selling products...</div>;
  if (error || categoryError) return <div>Failed to load best selling products.</div>;

  return (
    <section className="py-8 font-publicSans">
      <div className="flex flex-col md:flex-row gap-2">
        <Banner />
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-publicSans mt-5 md:mt-0">BEST SELLING PRODUCTS</h2>
              <div className="hidden md:flex gap-2 mt-2 mb-3">
                {TABS.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-normal border-b-2 px-1 pb-1 transition-colors duration-200 ${activeTab?.value === tab.value ? '[border:var(--main-color)] font-medium' : 'border-transparent text-gray-500 hover:[color:var(--main-color)]'}`}
                  >
                    {tab.label}
                  </button>
                ))}
                <a href="#" className="ml-4 [color:var(--main-color)] font-medium flex items-center gap-1 text-sm font-publicSans">Browse All Product <span><FaArrowRight /></span></a>
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
      </div>
    </section>
  );
};

export default BestSelling;
