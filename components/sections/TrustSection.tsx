"use client";

import React from "react";
import Image from "next/image";

export default function TrustSection() {
    const logos = [
        { name: "Department of Health", src: "/health.png" },
        { name: "Nepal Can", src: "/can.png" },
        { name: "Sita Air", src: "/sita.png" },
        { name: "Music Nepal", src: "/musicnepal.png" },
        { name: "Nagarik", src: "/nagrik.png" },
        { name: "IMS Group", src: "/ims.png" },
        { name: "DHI", src: "/dhi.png" },
        { name: "Keystone", src: "/keystone.png" },
    ];

    return (
        <section className="w-full bg-gray-50 py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-10">
                
                {/* Header Text */}
                <div className="text-center mb-8">
                    <div className="text-base flex flex-col md:text-lg text-gray-700">
                        Trusted by 1,000+ Nepali businesses on their 
                        <div>
                            growth journey. 
                            <span className="text-blue-600"> अब तपाईंको team तयार छ?</span>
                        </div>
                    </div>
                </div>

                {/* Logos Grid - Single Row */}
                <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto">
                    {logos.map((logo, index) => (
                        <div 
                            key={index} 
                            className="h-10 w-20 md:h-12 md:w-24 relative flex-shrink-0"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}