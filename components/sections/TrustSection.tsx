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
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Trusted by 1,000+ Nepali businesses on their{" "}
                        <span className="block mt-1 md:mt-2">
                            growth journey.{" "}
                            <span className="text-blue-600">अब तपाईंको team तयार छ?</span>
                        </span>
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide py-4">
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