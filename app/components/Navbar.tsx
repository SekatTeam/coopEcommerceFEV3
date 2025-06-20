"use client"

import Image from "next/image";
import React from "react";
import { logoIcon, user } from "../constants/media";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import MobileNavbar from "./MobileNavbar";
import { useCompanyInfoAndBackgroundColor } from "@/hooks/useCompanyInfoAndBackgroundColor";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const { data, isLoading } = useCompanyInfoAndBackgroundColor();
  const logo = data?.data?.companyInfo?.logo || logoIcon;
  const shortName = data?.data?.companyInfo?.shortName || "";
  const mainColor = data?.data?.backGround?.mainColor || '#FF6600';
  console.log("Company Info:", data?.data?.background);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && mainColor) {
      document.documentElement.style.setProperty('--main-color', mainColor);
    }
  }, [mainColor]);

  return (
    <nav className="w-full flex items-center justify-between px-4 lg:px-20 py-3 border-b border-gray-200 bg-white">
      <div className="flex flex-col w-full md:hidden">
          <div className="flex items-center gap-2">
            <Image  src={logo}
              width={100}
              height={100} 
              alt="AMNI COOPERATIVE Logo" 
              className="h-14 w-14 cursor-pointer" 
            />
            <span className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: shortName }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4">
              {/* <MobileNavbar /> */}
            <button className="text-3xl" 
              // onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-7 h-[2px] bg-gray-700 mb-1 rounded"></span>
              <span className="block w-7 h-[2px] bg-gray-700 mb-1 rounded"></span>
              <span className="block w-7 h-[2px] bg-gray-700 rounded"></span>
            </button>
              <button className="text-lg"><BsSearch /></button>
            </div>
            <div className="flex items-center gap-4">
              <RiHome2Line size={24} className="text-[#7B7B7B]" />
              <HiOutlineRefresh size={24} className="text-[#7B7B7B]" />
              <FiUser size={24} className="text-[#7B7B7B]" />
              <div className="relative">
                <Link href="/cart">
                  <MdOutlineShoppingCart size={24} className="text-[#7B7B7B] cursor-pointer" />
                  <div className="absolute -top-1 -right-2 text-xs [background:var(--main-color)] text-white h-4 w-4 rounded-full flex items-center justify-center">0</div>
                </Link>
              </div>
              <Image src={user} width={24} height={24} alt="User" className="rounded-full object-cover" />
            </div>
          </div>
          {showMobileNav && <MobileNavbar />}
      </div>
      <div className="hidden md:flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src={logo}
            width={100}
            height={100} 
            alt="AMNI COOPERATIVE Logo" 
            className="h-14 w-14 cursor-pointer" 
          />
          <span className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: shortName }} />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex w-[400px]">
            <input
              placeholder="Search for Brands, Products or  Categories"
              className="flex-1 px-4 py-2 border border-border-color focus:outline-none focus:ring-0 focus:[border:var(--main-color)] text-sm"
            />
            <button
              className="[background:var(--main-color)] px-4 flex items-center justify-center rounded-r-md cursor-pointer text-white text-sm">
              <BsSearch size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center text-base font-medium gap-2 text-black cursor-pointer">
            Home
            <RiHome2Line size={24} className="font-normal" />
          </div>
          <div className="flex flex-col items-center text-base font-medium gap-2 text-black cursor-pointer">
              Refresh
              <HiOutlineRefresh size={24} className="font-normal" />
          </div>
          <div className="flex flex-col items-center text-base font-medium gap-2 text-black cursor-pointer">
            <Link href="/login" className="flex flex-col items-center gap-2">
              Account
              <FiUser size={24} className="font-normal" />
            </Link>
          </div>
          <div className="flex flex-col items-center text-base font-medium gap-2 text-black cursor-pointer relative">
            <Link href="/cart" className="flex flex-col items-center gap-2">
              Cart
              <MdOutlineShoppingCart size={24} className="font-normal" />
              <div className="absolute -top-2 right-0 text-base font-medium gap-2 [background:var(--main-color)] text-white h-4 w-4 rounded-full flex items-center justify-center">0</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
