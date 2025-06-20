import { FlashImage, promotionBanner1, promotionBanner2 } from '@/app/constants/media';
import Image from 'next/image';
import React from 'react';

const productData = [
  {
    category: 'FLASH SALE TODAY',
    items: [
      {
        image: {promotionBanner2},
        title: 'Healthy groceries for your daily meals',
        price: '₦1,500',
      },
      {
        image: {promotionBanner2},
        title: 'Fashion at it best',
        price: '₦1,500',
      },
      {
        image: {promotionBanner2},
        title: 'Roasted fish and Meats',
        price: '₦1,500',
      },
    ],
  },
  {
    category: 'BEST SELLERS',
    items: [
      {
        image: {promotionBanner1},
        title: 'Groceries for your spicy food',
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: "The Big Boy’s Footwear",
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: 'Every Occasion Foot Machine',
        price: '₦1,500',
      },
    ],
  },
  {
    category: 'TOP RATED',
    items: [
      {
        image: {promotionBanner1},
        title: 'Sport Ready Sneakers',
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: 'Amazing Footwear',
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: 'Ladies Fashion - Affordable',
        price: '₦1,500',
      },
    ],
  },
  {
    category: 'NEW ARRIVAL',
    items: [
      {
        image: {promotionBanner1},
        title: 'Sugar Free Snacks',
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: 'Sweetened Snacks',
        price: '₦1,500',
      },
      {
        image: {promotionBanner1},
        title: 'Kitchen Apron',
        price: '₦1,500',
      },
    ],
  },
];

const ProductShowcase = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 justify-between font-publicSans mt-5">
      {productData.map((section) => (
        <div key={section.category} className="flex-1">
          <h3 className="font-semibold mb-4 text-[16px]">{section.category}</h3>
          <div className="flex flex-col gap-4">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex flex-row gap-4 items-center border border-border-color rounded-md p-4">
                <Image
                     src={FlashImage} 
                     alt={item.title} 
                     className="w-20 h-20 object-cover rounded-md" 
                />
                <div>
                  <div className="mb-2 text-sm">{item.title}</div>
                  <div className="text-[color:var(--main-color)]  font-semibold">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
