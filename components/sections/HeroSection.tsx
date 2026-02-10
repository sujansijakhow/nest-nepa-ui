"use client";

import React from "react";
import Button from "../ui/Button";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import GradientGlow from "../ui/GradientGlow";

const heroIcons = [
    { src: "/gmail.png", alt: "Gmail", href: "https://mail.google.com" },
    { src: "/calendar.png", alt: "Google Calendar", href: "https://calendar.google.com" },
    { src: "/drive.png", alt: "Google Drive", href: "https://drive.google.com" },
    { src: "/docs.png", alt: "Google Docs", href: "https://docs.google.com" },
    { src: "/zoom.png", alt: "Zoom", href: "https://zoom.google.com" },
];

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            
            <GradientGlow size="large" />
            <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-10 flex justify-center">
                <div className="w-full max-w-3xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#4285F4]">
                        Google Workspace
                    </h1>

                    <div className="mt-4 flex justify-center gap-4">
                        {heroIcons.map((icon, idx) => (
                            <a
                                key={idx}
                                href={icon.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 text-4xl font-bold leading-tight">
                        <p className="mb-1">
                            <span className="text-[#146DE1] text-3xl">किन केही</span> Businesses efficiently{" "}
                            <span className="text-[#146DE1] text-3xl">चल्छन्, र केही</span>
                        </p>
                        <p>
                            daily operations मै struggle <span className="text-[#146DE1] text-3xl">गर्छन् ?</span>
                        </p>
                    </div>

                    <p className="mt-4 text-lg text-black">
                        Reason luck, ads वा team size होइन. Reason हो right partner with right tools.
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-4">
                        <Image
                            src="/discount.png"
                            alt="Offer 1"
                            width={250}
                            height={150}
                            className="object-contain"
                        />
                        <Image
                            src="/sub.png"
                            alt="Offer 2"
                            width={250}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 text-md md:text-xl text-black">
                        <span>Everything Your Business Needs to Work Smarter. A complete Google</span>
                        <span> Workspace setup done right by Nest Nepal.</span>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full md:w-auto">
                        <Button variant="primary" className="w-full md:w-auto">
                            15 min · Free Demo
                        </Button>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-2 w-full md:w-auto justify-center"
                        >
                            Get a quotation <HiArrowUpRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}