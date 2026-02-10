// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden min-h-[380px] m-2 rounded-md"
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

            <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-8 z-10">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0 mb-8 md:mb-24">
                    {/* Logo */}
                    <div className="z-10">
                        <div className="relative w-28 h-8 md:w-40 md:h-10">
                            <Image
                                src="/nestlogo.png"
                                alt="Nest Nepal"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-left md:text-right text-white text-sm md:text-base z-10 md:flex md:flex-col md:items-start">
                        <p className="font-medium mb-1">Nepal</p>
                        <p className="text-gray-100">Call us: +977 9851-160-1174</p>
                        <p className="text-gray-100">Kupondole, Lalitpur, Nepal</p>
                        <p className="text-gray-100">support@nestne.com</p>
                    </div>
                </div>

                {/* Large Nest Nepal Text - Desktop */}
                <div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-full pointer-events-none"
                    style={{ top: '30%' }}
                >
                    <h2
                        className="text-center text-[8rem] lg:text-[10rem] font-bold whitespace-nowrap select-none opacity-10"
                        style={{
                            WebkitTextStroke: '2px white',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent',
                            letterSpacing: '0.1em',
                            maskImage:
                                'linear-gradient(to bottom, black 0%, black 60%, transparent 60%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, black 0%, black 60%, transparent 60%, transparent 100%)',
                        }}
                    >
                        NEST NEPAL
                    </h2>
                </div>

                {/* Large Nest Nepal Text - Mobile */}
                <div className="block md:hidden absolute right-0 top-0 bottom-0 pointer-events-none z-0">
                    <div className="relative h-full flex items-end justify-end pr-4">
                        <h2
                            className="text-5xl font-bold select-none opacity-10"
                            style={{
                                WebkitTextStroke: '1px white',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',
                                letterSpacing: '0.02em',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                                maskImage:
                                    'linear-gradient(to left, black 0%, black 60%, transparent 60%, transparent 100%)',
                                WebkitMaskImage:
                                    'linear-gradient(to left, black 0%, black 60%, transparent 60%, transparent 100%)',
                            }}
                        >
                            NEST NEPAL
                        </h2>
                    </div>
                </div>

                {/* Bottom Row - Navigation */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 text-white mt-12">
                    {/* Left: Google Workspace */}
                    <div className="text-sm md:text-base font-medium">
                        Google Workspace
                    </div>

                    {/* Right: Other Nav Links + CTA */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:mt-15 md:gap-8">
                        <span className="text-sm md:text-base font-medium">
                            Why Google Workspace?
                        </span>
                        <span className="text-sm md:text-base font-medium">Pricing</span>
                        <div className="flex items-center gap-1 text-sm md:text-base font-medium">
                            Get A Quotation <HiArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}