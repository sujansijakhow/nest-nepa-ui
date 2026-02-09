"use client";

import React from "react";
import { SiGmail, SiGooglecalendar, SiGoogledocs, SiGoogledrive, SiGooglesheets } from "react-icons/si";
import Button from "../ui/Button";
import { HiArrowUpRight } from "react-icons/hi2";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Soft gradient glows */}
            <div className=" hidden md:block pointer-events-none absolute inset-0">
                <div className="absolute -left-[500px] top-[25%] h-[150px] w-[850px] rounded-full bg-pink-300 opacity-[0.45] blur-[85px]" />

                <div className="absolute -left-[500px] top-[38%] h-[150px] w-[850px] rounded-full bg-blue-200 opacity-[0.45] blur-[85px]" />

                <div className="absolute -right-[500px] top-[25%] h-[220px] w-[900px] rounded-full bg-blue-200 opacity-[0.45] blur-[85px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 md:px-10 p-10 flex justify-center">
                <div className="w-full max-w-3xl text-center">

                    <h1 className="text-3xl md:text-5xl font-bold text-[#4285F4]">
                        Google Workspace
                    </h1>

                    {/* Icons */}
                    <div className="mt-4 flex justify-center gap-4">
                        {/* Gmail */}
                        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform">
                            <img src="/gmail.png" className="w-full h-full object-contain" alt="Gmail" />
                        </a>
                        <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform">
                            <img src="/calendar.png" className="w-full h-full object-contain" alt="Google Calendar" />
                        </a>
                        <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform">
                            <img src="/drive.png" className="w-full h-full object-contain" alt="Google Drive" />
                        </a>

                        <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform">
                            <img src="/docs.png" className="w-full h-full object-contain" alt="Google Docs" />
                        </a>

                        <a href="https://zoom.google.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform">
                            <img src="/zoom.png" className="w-full h-full object-contain" alt="Google Sheets" />
                        </a>
                    </div>

                    <div className="mt-6 text-4xl font-bold leading-tight text-center">
                        <p className="mb-1">
                            <span className="text-[#146DE1] text-3xl">किन केही</span> Businesses efficiently <span className="text-[#146DE1] text-3xl">चल्छन्, र केही</span>
                        </p>
                        <p>
                            daily operations मै struggle <span className="text-[#146DE1] text-3xl">गर्छन् ?</span>
                        </p>
                    </div>



                    <p className="mt-4 text-lg text-black">
                        Reason luck, ads वा team size होइन। Reason हो right partner with right tools.
                    </p>

                    {/* offer remaining */}

                    <div className="mt-4 text-xl text-black">
                        <p>Everything Your Business Needs to Work Smarter. A complete Google </p>
                        <p>Workspace setup done right by Nest Nepal.</p>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full md:w-auto">
                        <Button variant="primary" className="w-full md:w-auto">
                            15 min · Free Demo
                        </Button>

                        <Button variant="secondary" className="flex items-center gap-2 w-full md:w-auto justify-center">
                            Get a quotation <HiArrowUpRight className="h-4 w-4" />
                        </Button>
                    </div>

                </div>
            </div>

        </section>
    );
}
