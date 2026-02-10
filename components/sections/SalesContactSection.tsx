'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const SalesContactSection = () => {
    const workspaceIcons = [
        { name: "Gmail", src: "/gmail.png" },
        { name: "Calendar", src: "/calendar.png" },
        { name: "Drive", src: "/drive.png" },
        { name: "Docs", src: "/docs.png" },
        { name: "Zoom", src: "/zoom.png" },
        { name: "Sparkle", src: "/sparkle.png" },
    ];

    const handleWhatsAppClick = () => window.open('https://wa.me/9779804833507', '_blank');
    const handleCallClick = () => (window.location.href = 'tel:+9779804833507');

    return (
        <section className="w-full py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Content */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        {/* Workspace Icons */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                            {workspaceIcons.map((icon, idx) => (
                                <div key={idx} className="w-8 h-8 relative">
                                    <Image src={icon.src} alt={icon.name} fill className="object-contain" />
                                </div>
                            ))}
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Prefer to talk to sales directly?
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                            तपाईंको company को unique requirements अनुसार तयार गरिएको solutions सँग efficiency र collaboration maximize गर्नुहोस्।
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                variant="secondary"
                                className="bg-pink-50 text-pink-600 border border-pink-300 flex gap-2 items-center rounded-xl"
                                onClick={handleWhatsAppClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path
                                        d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.96.57 3.78 1.55 5.31L2 22l4.93-1.63a9.86 9.86 0 005.11 1.39h.01c5.46 0 9.89-4.42 9.89-9.88C21.93 6.42 17.5 2 12.04 2z"
                                        fill="#F25277"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M17.78 16.28c-.24.68-1.39 1.3-1.95 1.38-.51.07-1.16.1-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.3-5.06-4.5-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.17 1.03-2.47.27-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.42-.07.66.5.24.57.83 1.96.9 2.1.07.14.11.3.02.48-.09.18-.14.3-.28.46-.14.16-.3.36-.43.48-.14.14-.28.3-.12.58.16.28.7 1.16 1.5 1.88 1.03.92 1.9 1.2 2.18 1.34.28.14.44.12.6-.07.16-.2.69-.8.88-1.08.18-.28.37-.23.62-.14.25.09 1.58.74 1.85.87.27.14.45.2.52.3.07.11.07.66-.18 1.34z"
                                        fill="white"
                                    />
                                </svg>
                                Message on Whatsapp
                            </Button>

                            <Button
                                variant="secondary"
                                className="rounded-xl bg-blue-50 text-blue-600 border border-blue-300"
                                onClick={handleCallClick}
                            >
                                Call +977 98545435435
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden rounded-br-2xl lg:rounded-r-2xl lg:rounded-bl-none">
                        <Image
                            src="/rainbow.png"
                            alt="Background"
                            fill
                            className="object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-end justify-center lg:justify-end z-10 px-4 lg:px-8">
                            <Image
                                src="/salesperson.png"
                                alt="Sales Representative"
                                width={400}
                                height={400}
                                className="object-contain sm:scale-105 lg:scale-110 translate-y-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesContactSection;