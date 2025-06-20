"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { bestDeals } from "@/app/constants/bestDeals";
import { Breadcrumbs } from "@/app/components/BreadCrumbs";
import { FaStar, FaRegStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SelectItem } from "@/app/components/Select";
import React, { useEffect, useRef, useState } from "react";
import { MdHeight, MdOutlineShoppingCart } from "react-icons/md";
import { PiHandshakeLight, PiHeartStraightThin } from "react-icons/pi";
import { LuRefreshCcw } from "react-icons/lu";
import { PaymentMethod } from "@/app/constants/media";
import { LiaAwardSolid } from "react-icons/lia";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { CgHeadset } from "react-icons/cg";
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    const id = params.product;
    const deal = bestDeals.find((d) => d.id.toString() === id);
    if (!deal) return notFound();
    const [quantity, setQuantity] = useState(1);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateButtonState = () => {
        if (sectionRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sectionRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (sectionRef.current) {
        sectionRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sectionRef.current) {
        sectionRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const currentSection = sectionRef.current;
        if (currentSection) {
        updateButtonState();
        currentSection.addEventListener("scroll", updateButtonState);
        }
        return () => {
        if (currentSection) {
            currentSection.removeEventListener("scroll", updateButtonState);
        }
        };
    }, []);

  return (
    <div>
        <Breadcrumbs />
        <div className="max-w-6xl mx-auto py-8 px-8 md:px-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col items-center">
                    <Image 
                        src={deal.image} 
                        alt={deal.title} 
                        width={400} 
                        height={400} 
                        className="rounded-lg object-contain" 
                    />
                    <div className="flex gap-2 mt-4 justify-center relative max-w-[400px] w-full">
                        <button
                            onClick={scrollLeft}
                            disabled={isAtStart}
                            className={`absolute left-0 z-10 p-2 rounded-full shadow-md ${
                            isAtStart ? "bg-orange-100 cursor-not-allowed [color:var(--main-color)]" : "bg-orange-200 hover:bg-orange-300 [color:var(--main-color)] border-2 border-white" 
                            }`}
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                        >
                            <FaArrowLeft />
                        </button>
                        <div ref={sectionRef} className="flex overflow-x-auto gap-4 snap-x snap-proximity scrollbar-hidden">
                            {[...Array(6)].map((_, i) => (
                                <Image key={i} 
                                    src={deal.image} 
                                    alt={deal.title} 
                                    width={70} 
                                    height={70} 
                                    className="rounded border object-contain shadow-md"
                                />
                            ))}
                        </div>
                        <button
                            onClick={scrollRight}
                            disabled={isAtEnd}
                            className={`absolute right-0 z-10 p-2 rounded-full shadow-md ${
                            isAtEnd ? "bg-orange-100 cursor-not-allowed [color:var(--main-color)]" : "bg-orange-200 hover:bg-orange-300 [color:var(--main-color)] border-2 border-white" 
                            }`}
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, index) => {
                                const isActive = index < 5;
                                const Star = isActive ? FaStar : FaRegStar;
                                return <Star key={index} className="text-[color:var(--main-color)] " />;
                            })}
                            <span className="text-xs md:text-sm text-gray900 font-medium md:ml-3">4.7 Star Rating</span>
                        </div>
                        {deal.ratingCount ? (
                            <span className="text-xs md:text-sm text-[#5F6C72] ml-3">({deal.ratingCount} User feedback)</span>
                        ) : (
                            <span className="text-xs md:text-sm text-[#5F6C72] ml-3">(21,671 User feedback)</span>
                        )}
                    </div>
                    <h1 className="text-[#191C1F] mt-2 mb-2 font-publicSans font-medium">{deal.title}</h1>
                    <div className="grid grid-cols-2 my-4">
                        <div className="text-sm mb-2">
                            <span className="text-sm text-[#5F6C72]">Sku:</span><span className="text-xs md:text-sm text-gray900 font-medium ml-3">A2RT5U</span>
                        </div>
                        <div className="text-sm mb-2">
                            <span className="text-sm text-[#5F6C72]">Availabilty:</span><span className="text-xs md:text-sm text-green-600 font-medium ml-3">In stock</span>
                        </div>
                        <div className="text-sm mb-2">
                            <span className="text-sm text-[#5F6C72]">Brand:</span><span className="text-xs md:text-sm text-gray900 font-medium ml-3">Timberland</span>
                        </div>
                        <div className="text-sm mb-2">
                            <span className="text-sm text-[#5F6C72]">Category:</span><span className="text-xs md:text-sm text-gray900 font-medium ml-3">Footware</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 my-3">
                        <span className="text-[color:var(--main-color)]  text-lg md:text-2xl font-publicSans font-semibold">₦{deal.price}</span>
                        {deal.oldPrice && <span className="line-through text-gray-400 ml-2">₦{deal.oldPrice}</span>}
                        {deal.tags && deal.tags.length > 0 && (
                        <span className="ml-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">{deal.tags[0]}</span>
                        )}
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4 border-t pt-4 text-sm text-gray900">
                        <div>
                            <div className="font-semibold">Color</div>
                            <div className="flex gap-2 mt-2">
                                <span className="w-6 h-6 rounded-full border-2 border-[color:var(--main-color)]  inline-block bg-orange-200"></span>
                                <span className="w-6 h-6 rounded-full border-2 border-gray-300 inline-block bg-gray-200"></span>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Size</div>
                            <SelectItem
                                options={[
                                    { value: '41', label: '41-inch Super Leather Italian Footwear' },
                                    { value: '42', label: '42-inch Super Leather Italian Footwear' },
                                    { value: '43', label: '43-inch Super Leather Italian Footwear' },
                                    { value: '44', label: '44-inch Super Leather Italian Footwear' },
                                ]}
                            />
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Memory</div>
                            <SelectItem
                                options={[
                                    { value: '16GB', label: '1TV SSD Storage' },
                                    { value: '32GB', label: '32GB unified memory' },
                                    { value: '64GB', label: '64GB unified memory' },
                                ]}
                            />
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Storage</div>
                            <SelectItem
                                options={[
                                    { value: '16GB', label: '1TV SSD Storage' },
                                    { value: '32GB', label: '1TV SSD Storage' },
                                    { value: '64GB', label: '1TV SSD Storage' },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="col-span-2 md:col-span-1 border border-border-color rounded-md flex items-center justify-between px-2 md:px-4">
                            <button
                              className="px-3 py-2 rounded text-xl"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >-</button>
                            <span className="px-4">{quantity.toString().padStart(2, '0')}</span>
                            <button
                              className="px-3 py-2 rounded text-xl"
                              onClick={() => setQuantity((q) => q + 1)}
                            >+</button>
                        </div>
                        <button className="col-span-2 py-2.5 px-2 md:px-4 flex items-center justify-center gap-2 text-white [background:var(--main-color)] rounded-[2px]">
                            <MdOutlineShoppingCart className="" />
                            <span className="text-xs md:text-sm">ADD TO CART</span>
                        </button>
                        <button className="col-span-4 md:col-span-1 border [border:var(--main-color)] [color:var(--main-color)] px-2 md:px-6 py-2 rounded text-xs md:text-sm">BUY NOW</button>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <button className="text-gray-500 flex items-center justify-center gap-2 text-sm"><PiHeartStraightThin /> Add to Wishlist</button>
                        <button className="text-gray-500 text-sm flex items-center justify-center gap-2"><LuRefreshCcw />Add to Compare</button>
                    </div>
                    <div className="border border-border-color p-3 rounded-md">
                        <div className="text-sm text-gray-400 mb-2">100% Guarantee Safe Checkout</div>
                        <Image
                            src={PaymentMethod}
                            alt="Payment Methods"
                            width={200}
                            height={50}
                            className="w-[300px] h-auto"
                        />
                        
                    </div>
                </div>
            </div>
            <div className="mt-10 bg-white rounded shadow-sm border border-border-color p-6 font-publicSans">
                <div className="flex flex-wrap md:justify-center gap-4 md:gap-8 border-b pb-2 mb-4">
                    <button className="border-b-2 border-[color:var(--main-color)] font-medium text-[10px] md:text-sm text-gray900">DESCRIPTION</button>
                    <button className="text-gray600 font-medium text-[10px] md:text-sm">ADDITIONAL INFORMATION</button>
                    <button className="text-gray600 font-medium text-[10px] md:text-sm">SPECIFICATION</button>
                    <button className="text-gray600 font-medium text-[10px] md:text-sm">REVIEW</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <div className="font-medium text-base text-gray900 mb-2">Description</div>
                    <p className="text-gray600 text-xs">The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                    <p className="text-gray600 text-xs mt-1">Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="font-medium text-base text-gray600 mb-2">Feature</div>
                    <div className="text-xs text-gray600">
                        <span className="flex items-center"><span className="[color:var(--main-color)] mr-2"><LiaAwardSolid size={20} /></span> Free 1 Year Warranty</span>
                        <span className="flex items-center"><span className="[color:var(--main-color)] mr-2"><CiDeliveryTruck size={20} /></span>Free Shipping & Fasted Delivery</span>
                        <span className="flex items-center"><span className="[color:var(--main-color)] mr-2"><PiHandshakeLight size={20} /></span>100% Money-back guarantee</span>
                        <span className="flex items-center"><span className="[color:var(--main-color)] mr-2"><CgHeadset size={20} /></span>24/7 Customer support</span>
                        <span className="flex items-center"><span className="[color:var(--main-color)] mr-2"><CiCreditCard1 size={20} /></span>Secure payment method</span>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="font-medium text-base text-gray600 mb-2">Shipping Information</div>
                    <ul className="text-xs text-gray-600 list-disc pl-4">
                    <li><b>Courier:</b> 2-4 days, free shipping</li>
                    <li><b>Local Shipping:</b> up to one week, $19.00</li>
                    <li><b>UPS Ground Shipping:</b> 4-6 days, $29.00</li>
                    <li><b>Unishop Global Export:</b> 3-4 days, $39.00</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
