"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { LoginImage } from "@/app/constants/media";
import { Breadcrumbs } from "@/app/components/BreadCrumbs";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div>
        <Breadcrumbs />
        <div className="min-h-screen flex items-center justify-center font-publicSans">
            <div className="flex flex-col md:flex-row overflow-hidden max-w-7xl w-full">
                <div className="flex-1 pl-8 py-8 pr-8 md:pr-40 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-orange-main mb-2">Sign Up</h2>
                    <p className="mb-6 text-gray-700">Enter your email and password to sign up.</p>
                    <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Enter your fullname</label>
                        <input
                        type="text"
                        placeholder="e.g. Amadi Umar Abiola"
                        className="w-full border rounded px-3 py-2 focus:outline-none"
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                        type="email"
                        placeholder="e.g. michelle@coopshop.com"
                        className="w-full border rounded px-3 py-2 focus:outline-none"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                        type="tel"
                        placeholder="+2348100000000"
                        className="w-full border rounded px-3 py-2 focus:outline-none"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full border rounded px-3 py-2 focus:outline-none pr-10"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={() => setShowPassword((v) => !v)}
                            tabIndex={-1}
                        >
                            {showPassword ? (
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                            ) : (
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592M6.7 6.7A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.293 5.066M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M3 3l18 18"/></svg>
                            )}
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                        type="checkbox"
                        checked={agree}
                        onChange={e => setAgree(e.target.checked)}
                        className="accent-orange-main"
                        />
                        <label className="text-sm">I agree with the Terms & Conditions</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={e => setNewsletter(e.target.checked)}
                        className="accent-orange-main"
                        />
                        <label className="text-sm">I want to subscribe to the Newsletter</label>
                    </div>
                    <button type="submit" className="w-full bg-orange-main text-white py-3 rounded font-semibold mt-2">Sign Up</button>
                    </form>
                    <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-200" />
                    <span className="mx-2 text-gray-400 text-xs">Continue with</span>
                    <div className="flex-grow h-px bg-gray-200" />
                    </div>
                    <div className="flex gap-3 justify-center mb-2">
                    <button className="bg-gray-100 p-2 rounded-full"><span className="sr-only">Facebook</span><svg width="18" height="18" fill="currentColor" className="text-[#3b5998]"><path d="M18 9a9 9 0 1 0-10.406 8.89v-6.29H5.078V9h2.516V7.012c0-2.485 1.492-3.862 3.777-3.862 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V9h2.773l-.443 2.6h-2.33v6.29A9 9 0 0 0 18 9"/></svg></button>
                    <button className="bg-gray-100 p-2 rounded-full"><span className="sr-only">Google</span><svg width="18" height="18" fill="currentColor" className="text-[#ea4335]"><path d="M17.64 9.204c0-.638-.057-1.252-.163-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.797 2.717v2.26h2.908c1.703-1.57 2.685-3.885 2.685-6.618z"/><path d="M9 18c2.43 0 4.47-.805 5.96-2.18l-2.908-2.26c-.807.54-1.84.86-3.052.86-2.348 0-4.337-1.587-5.05-3.715H1.96v2.33A8.997 8.997 0 0 0 9 18z"/><path d="M3.95 10.665A5.41 5.41 0 0 1 3.6 9c0-.575.098-1.135.27-1.665V5.005H1.96A8.997 8.997 0 0 0 0 9c0 1.418.34 2.76.95 3.96l2.998-2.295z"/><path d="M9 3.58c1.32 0 2.5.454 3.43 1.345l2.57-2.57C13.47.807 11.43 0 9 0A8.997 8.997 0 0 0 1.96 5.005l2.998 2.33C4.663 5.167 6.652 3.58 9 3.58z"/></svg></button>
                    <button className="bg-gray-100 p-2 rounded-full"><span className="sr-only">X</span><svg width="18" height="18" fill="currentColor" className="text-black"><path d="M17.94 1.29a1 1 0 0 0-1.41 0l-6.53 6.53-6.53-6.53A1 1 0 0 0 1.29 2.7l6.53 6.53-6.53 6.53a1 1 0 1 0 1.41 1.41l6.53-6.53 6.53 6.53a1 1 0 0 0 1.41-1.41l-6.53-6.53 6.53-6.53a1 1 0 0 0 0-1.41z"/></svg></button>
                    </div>
                    <div className="text-center text-sm text-gray-600">
                    Already have an account? <Link href="/login" className="text-orange-main font-medium">Sign in</Link>
                    </div>
                </div>
                <div className="flex-1 relative hidden md:flex items-center justify-center bg-gray-100">
                    <Image
                        src={LoginImage}
                        alt="Shopping"
                        width={400}
                        height={400}
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#FFFFFFA6] px-4 py-6 rounded-lg shadow shadow-[#1E293B1A] text-center w-[90%] max-w-md">
                        <h3 className="text-lg md:text-xl font-semibold text-[#7B2D26] mb-2">SignUp / Login To Complete Your Order</h3>
                        <p className="text-gray-700 mb-2 text-sm">Designer curated collection of eyewear for special occasions.</p>
                        <Link href="#" className="text-orange-main font-semibold flex items-center justify-center gap-1 hover:underline text-sm">
                        Check it out <FaArrowRight className="inline-block" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}
