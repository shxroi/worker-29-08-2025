"use client"
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1116] border-t border-[#1f2933] text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top legal row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              {/* Valve boxed logo (simple text box matching visual) */}
              <div className="bg-[#2b3238] text-[#cbd5e1] px-3 py-1 rounded-sm font-semibold tracking-widest text-sm">
                VALVE
              </div>
            </div>

            <div className="text-xs leading-snug max-w-2xl">
              <div className="mb-2">
                © {new Date().getFullYear()} Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              </div>
              <div className="flex flex-wrap gap-2 text-[#9aa6b3]">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <span className="opacity-40">|</span>
                <a href="#" className="hover:text-white">Legal</a>
                <span className="opacity-40">|</span>
                <a href="#" className="hover:text-white">Steam Subscriber Agreement</a>
                <span className="opacity-40">|</span>
                <a href="#" className="hover:text-white">Refunds</a>
                <span className="opacity-40">|</span>
                <a href="#" className="hover:text-white">Cookies</a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end space-x-4">
            {/* small steam text/logo placeholder */}
            <span className="flex items-center  flex-1">
                    <Image
                      src="/header_logo.png"
                      alt="Steam logo"
                      width={120}
                      height={120}
                      priority
                      className="mr-4"
                    />
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#161a1e] my-6" />

        {/* Links row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">About Valve</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Jobs</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Steamworks</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Steam Distribution</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Support</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Gift Cards</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* social icons (placeholders) */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8.9v-2.9h1.6V9.1c0-1.6 1-2.5 2.5-2.5.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.2h1.7l-.3 2.9h-1.4v7A10 10 0 0022 12z"/></svg>
            </a>
            <a href="#" aria-label="X" className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.4 6.6L13.9 11l4.5 4.4-1.4 1.4L12.5 12.4 8 16.9 6.6 15.5 11.1 11 6.6 6.6 8 5.2 12.5 9.7 17 5.2z"/></svg>
            </a>
            <a href="#" aria-label="Community" className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a4 4 0 110 8 4 4 0 010-8zm6 12c0-2.2-3.6-4-8-4s-8 1.8-8 4v2h16v-2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}