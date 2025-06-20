"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdOutlinePayment, MdOutlineFavoriteBorder, MdOutlineFeedback, MdOutlineReport, MdOutlineSettings } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { BsBoxSeam, BsPerson } from "react-icons/bs";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
        <button className="text-3xl" onClick={() => setOpen((v) => !v)}>
            <span className="block w-7 h-[2px] bg-gray-700 mb-1 rounded"></span>
            <span className="block w-7 h-[2px] bg-gray-700 mb-1 rounded"></span>
            <span className="block w-7 h-[2px] bg-gray-700 rounded"></span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/assets/images/Image (1).png" alt="profile" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-sm">Biola Babajide</div>
            <div className="text-xs text-gray-500">Guest - Shopper Navigation</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FiSearch size={22} className="text-gray-700" />
          <button onClick={() => setOpen(o => !o)} aria-label="Open menu">
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute left-0 top-24 w-[90vw] max-w-xs bg-white rounded-lg shadow-lg z-50 animate-slideIn">
          <div className="flex flex-col py-4">
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <RiDashboardLine size={20} /> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <FaRegListAlt size={20} /> Product Listing
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <BsBoxSeam size={20} /> Tracking Purchase
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlineShoppingCart size={20} /> Cart
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlinePayment size={20} /> Payments
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-white [background:var(--main-color)] rounded-none">
              <FaRegListAlt size={20} /> Order Summary
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlineFavoriteBorder size={20} /> Favorites
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlineFeedback size={20} /> Feedbacks
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlineReport size={20} /> Reports
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <MdOutlineSettings size={20} /> Setting
            </Link>
            <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-100">
              <TbLogout size={20} /> Log-out
            </Link>
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.2s ease;
        }
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
