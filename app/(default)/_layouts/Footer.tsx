import { AppleIcon, FooterEclipse, GoogleIcon } from "@/app/constants/media";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-10 pb-4 px-8 mt-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-3xl mb-2 font-PublicSans">CoopShop</h2>
          <span className="font-semibold text-lg my-2">Contact Us</span>
          <div className="mb-2 mt-2">
            <div className="flex items-center gap-2 text-sm mb-1">
              <FaWhatsapp size={24} />
              Whats App
            </div>
            <span className="ml-6 text-sm font-publicSans">+1 202-918-2132</span>
          </div>
          <div className="mb-2">
            <div className="flex items-center gap-2 text-sm mb-1">
             <PiPhoneCallLight size={24} />
              Call Us
            </div>
            <span className="ml-6 text-sm font-publicSans">+1 202-918-2132</span>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg">Download App</span>
            <div className="flex gap-4 mt-4">
              {/* <div className="bg-black p-2 flex items-center gap-2 rounded-md">
                <SiApple size={30} className="text-white" />
                <div className="text-white">
                  <span className="text-[10px] font-sembold">Download on the</span>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </div> */}
              <Image 
                src={AppleIcon}
                alt="icon"
                height={55}
                width={127}
                className="cursor-pointer object-cover rounded-md"
              />
              <Image 
                src={GoogleIcon}
                alt="icon"
                height={55}
                width={127}
                className="cursor-pointer object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b-[3px] border-white w-fit font-publicSans">Most Popular Categories</h3>
          <ul className="text-sm space-y-2 mt-2 list-disc ml-4">
            <li className="cursor-pointer mt-4">Staples</li>
            <li className="cursor-pointer">Beverages</li>
            <li className="cursor-pointer">Personal Care</li>
            <li className="cursor-pointer">Home Care</li>
            <li className="cursor-pointer">Baby Care</li>
            <li className="cursor-pointer">Vegetables & Fruits</li>
            <li className="cursor-pointer">Snacks & Foods</li>
            <li className="cursor-pointer">Dairy & Bakery</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b-[3px] border-white w-fit font-publicSans">Customer Services</h3>
          <ul className="text-sm space-y-2 mt-2">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Terms & Conditions</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-xs text-gray-300">
        © 2025 All rights reserved. Coop Shop Ltd.
      </div>
      <div className="absolute right-0 top-0">
          <Image 
            src={FooterEclipse}
            height={400}
            width={200}
            alt="eclipse"
            className="object-cover h-full"
          />
      </div>
    </footer>
  );
}
