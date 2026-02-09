"use client";

import React from "react";

export default function DemoSection() {
    return (
        <section className="relative w-full bg-white py-5">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                
                {/* Video Placeholder/Wireframe */}
                <div className="relative aspect-video bg-[#F2F2F2] rounded-2xl overflow-hidden shadow-lg">
                    {/* Play Button in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text Below Video */}
                <div className="text-center mt-8">
                    <p className="text-sm md:text-md text-gray-700">
                        Get A Free 15 Min Demo, See if it fits your business
                    </p>
                </div>

            </div>
        </section>
    );
}