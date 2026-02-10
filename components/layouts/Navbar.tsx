"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const targetDate = new Date("2026-02-14T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="w-full bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col md:grid md:grid-cols-3 md:items-center">
                <div className="flex justify-between md:justify-start mb-4 md:mb-0 items-center">
                    <img src="/logo.png" alt="logo" className="w-40 md:w-60" />

                    <div className="md:hidden">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-[15px] border border-[#40C351] bg-[#40C35126] px-4 py-2 text-sm font-medium text-[#40C351] hover:bg-[#40C35133]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.96.57 3.78 1.55 5.31L2 22l4.93-1.63a9.86 9.86 0 005.11 1.39h.01c5.46 0 9.89-4.42 9.89-9.88C21.93 6.42 17.5 2 12.04 2z"
                                    fill="#40C351"
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
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <p
                        className="text-pink-500 font-semibold z-10"
                        style={{ fontFamily: "'Dancing Script'", fontSize: "1.8rem" }}
                    >
                        Valentine’s Offer
                    </p>
                    <p className="font-bold text-blue-600 text-xl md:text-3xl -mt-2">
                        {`${timeLeft.days.toString().padStart(2, "0")} : ${timeLeft.hours
                            .toString()
                            .padStart(2, "0")} : ${timeLeft.minutes
                                .toString()
                                .padStart(2, "0")} : ${timeLeft.seconds
                                    .toString()
                                    .padStart(2, "0")}`}
                    </p>
                    <div className="text-xs md:text-sm font-bold text-black mt-1 flex justify-center gap-4 md:gap-8">
                        <span>Days</span>
                        <span>Hrs</span>
                        <span>Min</span>
                        <span>Sec</span>
                    </div>
                </div>

                <div className="hidden md:flex justify-end">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-[15px] border border-[#40C351] bg-[#40C35126] px-4 py-2 text-sm font-medium text-[#40C351] hover:bg-[#40C35133]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                        >
                            <path
                                d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.96.57 3.78 1.55 5.31L2 22l4.93-1.63a9.86 9.86 0 005.11 1.39h.01c5.46 0 9.89-4.42 9.89-9.88C21.93 6.42 17.5 2 12.04 2z"
                                fill="#40C351"
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
                        Contact Sales
                    </Link>
                </div>
            </div>
        </header>
    );
}