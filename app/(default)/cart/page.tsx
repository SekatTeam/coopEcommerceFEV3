"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/components/BreadCrumbs";
import { BestDealImage3, BestDealImage4 } from "@/app/constants/media";
import { FaArrowLeft, FaArrowRight, FaTimesCircle } from "react-icons/fa";

const initialCart = [
	{
		id: 1,
		name: "Man Anthracite - The awesome party shoe for men who...",
		price: 70,
		oldPrice: 99,
		image: BestDealImage3,
		quantity: 1,
	},
	{
		id: 2,
		name: "Wired Over-Ear Gaming Headphones with USB",
		price: 250,
		image: BestDealImage4,
		quantity: 3,
	},
];

export default function Cart() {
	const [cart, setCart] = useState(initialCart);
	const [coupon, setCoupon] = useState("");

	const handleQuantity = (id: number, delta: number) => {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const handleRemove = (id: number) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = 0;
	const discount = 24;
	const tax = 61.99;
	const total = subtotal - discount + tax;

	return (
        <section>
            <Breadcrumbs />
            <div className="flex flex-col md:flex-row gap-8 justify-center py-8 h-auto font-publicSans mx-4 md:mx-0">
                <div className="bg-white rounded-lg shadow w-full px-4 md:max-w-2xl">
                    <h2 className="text-xl font-semibold mb-4 px-3 md:px-6 pt-6">Shopping Cart</h2>
                    <div className="bg-border-color py-2 mb-4 hidden md:flex text-gray900 text-xs font-semibold px-3">
                        <div className="w-2/5">PRODUCTS</div>
                        <div className="w-1/5 text-center">PRICE</div>
                        <div className="w-1/5 text-center">QUANTITY</div>
                        <div className="w-1/5 text-center">SUB-TOTAL</div>
                    </div>

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="border-b last:border-b-0 p-3 md:p-6"
                      >
                        <div className="flex flex-col md:flex-row md:items-center w-full">
                          {/* Product & Price Row */}
                          <div className="flex w-full md:w-3/5 items-center gap-3">
                            <button
                              className="text-gray-400 hover:text-red-500 mr-2 md:mr-2"
                              onClick={() => handleRemove(item.id)}
                              aria-label="Remove item"
                            >
                              <FaTimesCircle size={16} />
                            </button>
                            <div className="w-8 h-8 md:w-16 md:h-16 relative">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded shadow"
                              />
                            </div>
                            <span className="text-xs md:text-sm text-gray-700 line-clamp-2 flex-1">
                              {item.name}
                            </span>
                            <div className="text-right md:w-1/5 min-w-[70px]">
                              {item.oldPrice && (
                                <span className="line-through text-gray-400 text-xs mr-1">
                                  N{item.oldPrice}
                                </span>
                              )}
                              <span className="font-medium text-sm md:text-base">N{item.price}</span>
                            </div>
                          </div>
                          {/* Quantity & Subtotal Row (stacked on small, inline on md+) */}
                          <div className="flex w-full md:w-2/5 mt-3 md:mt-0 md:justify-end gap-4">
                            <div className="flex justify-center items-center gap-2 border border-border-color rounded w-fit mx-auto md:mx-0">
                              <button
                                className="px-2 py-1 rounded text-base md:text-lg"
                                onClick={() => handleQuantity(item.id, -1)}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity.toString().padStart(2, "0")}
                              </span>
                              <button
                                className="px-2 py-1 rounded text-base md:text-lg"
                                onClick={() => handleQuantity(item.id, 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-center font-medium text-sm md:text-base flex items-center">
                              N{item.price * item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center mt-6 p-3 md:p-6">
                        <Link
                            href="/"
                            className="border px-2 md:px-6 py-2 rounded flex items-center gap-2 font-medium text-xs md:text-base"
                        >
                            <FaArrowLeft /> RETURN TO SHOP
                        </Link>
                        <button className="text-xs md:text-base border border-orange-main text-black px-2 md:px-6 py-2 rounded font-medium hover:bg-orange-main hover:text-white transition">
                            UPDATE CART
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:max-w-xs">
                    <div className="bg-white rounded-lg shadow p-3 md:p-6">
                        <h3 className="font-semibold mb-4">Card Totals</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#5F6C72]">Sub-total</span>
                            <span className="text-gray900">N{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#5F6C72]">Shipping</span>
                            <span className="text-gray900">{shipping === 0 ? "Free" : `N${shipping}`}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#5F6C72]">Discount</span>
                            <span className="text-gray900">N{discount}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                            <span className="text-[#5F6C72]">Tax</span>
                            <span className="text-gray900">N{tax}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-base mb-4">
                            <span className="text-gray900">Total</span>
                            <span className="text-gray900">N{total.toFixed(2)} NGN</span>
                        </div>
                        <button className="w-full bg-orange-main text-white py-3 rounded font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                            PROCEED TO CHECKOUT <FaArrowRight />
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-semibold mb-4">Coupon Code</h3>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 border px-3 py-2 rounded focus:outline-none"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button className="bg-orange-main text-white px-2 md:px-4 py-2 rounded font-medium text-sm md:text-base">
                                APPLY COUPON
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}
