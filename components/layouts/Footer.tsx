// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Footer() {
  return (
    <nav
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top left, #0234F8, #011F92)',
      }}
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 md:gap-0 mb-8 md:mb-24">
          {/* Logo */}
          <div className="z-10">
            <Image
              src="/nest-nepal-logo.svg"
              alt="Nest Nepal"
              width={140}
              height={45}
              className="h-7 md:h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Contact Info */}
          <div className="text-left md:text-right text-white text-xs md:text-sm z-10">
            <p className="font-medium mb-1">Nepal</p>
            <p className="text-gray-100">Call us: +977 9851-160-1174</p>
            <p className="text-gray-100">Kupondole, Lalitpur, Nepal</p>
            <p className="text-gray-100">support@nestne.com</p>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 text-white pb-4 md:pb-0">
          {/* Nav Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8 w-full md:w-auto">
            <span className="text-sm md:text-base font-medium">
              Google Workspace
            </span>
            <span className="text-sm md:text-base font-medium">
              Why google workspace?
            </span>
            <span className="text-sm md:text-base font-medium">Pricing</span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1 text-sm md:text-base font-medium mt-2 md:mt-0">
            Get A Quotation <HiArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </nav>
  );
}