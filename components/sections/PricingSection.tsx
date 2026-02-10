"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import GradientGlow from "../ui/GradientGlow";

type Feature = { icon: string; text: string };

export default function PricingSection() {
  const workspaceIcons = [
    { name: "Gmail", src: "/gmail.png" },
    { name: "Calendar", src: "/calendar.png" },
    { name: "Drive", src: "/drive.png" },
    { name: "Docs", src: "/docs.png" },
    { name: "Zoom", src: "/zoom.png" },
    { name: "Sparkle", src: "/sparkle.png" },
  ];

  const storageFeatures: Feature[] = [
    { icon: "/drive.png", text: "30GB Pooled Storage per user" },
  ];

  const communicateFeatures: Feature[] = [
    { icon: "/gmail.png", text: "Secured & Personalized Gmail" },
    { icon: "/calendar.png", text: "Always in Track with Schedule" },
    { icon: "/zoom.png", text: "HD Video Calls (100 Users)" },
    { icon: "/groups.png", text: "Group Security at your Group" },
  ];

  const collaborateFeatures: Feature[] = [
    { icon: "/docs.png", text: "Documents with Google Docs" },
    { icon: "/sheets.png", text: "Data Insights with Google Sheets" },
    { icon: "/slides.png", text: "Present with Google Slides" },
    { icon: "/docs.png", text: "Surveys, To-dos and Many More" },
  ];

  const controlFeatures: Feature[] = [
    { icon: "/admin.png", text: "Basic Security & Admin Control" },
    { icon: "/endpoint.png", text: "Standard Endpoint Management" },
    { icon: "/search.png", text: "Smart Search with Workspace" },
    { icon: "/vault.png", text: "Vault for eDiscovery" },
    { icon: "/drive.png", text: "Backup options for Drive and Gmail" },
  ];

  const renderFeatures = (features: Feature[]) =>
    features.map((feature, index) => (
      <div key={index} className="flex items-start gap-3 text-gray-700">
        <div className="w-5 h-5 relative flex-shrink-0 mt-1">
          <Image
            src={feature.icon}
            alt={feature.text}
            fill
            className="object-contain"
          />
        </div>
        <p>{feature.text}</p>
      </div>
    ));

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <GradientGlow size="large" />

      <div className="mx-auto max-w-6xl px-4 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-2">
            के <span className="text-[#4285F4]">Google Workspace</span>{" "}
            तपाईंको
          </h2>
          <h3 className="text-4xl md:text-5xl mb-4">
            business growth <span className="text-[#4285F4]">को लागि</span> best
            fit <span className="text-[#4285F4]">हो?</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-slate-900">
            Tailored Plans तपाईंको Online Presence को होस पहिलार्ई
          </p>
          <p className="text-base md:text-lg lg:text-xl text-slate-900">
            Elevate र Empower गर्न
          </p>

          <div className="flex justify-center gap-3 mt-6">
            {workspaceIcons.map((icon, index) => (
              <div key={index} className="w-6 h-6 relative">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col items-center md:border-r border-gray-300">
            <h3 className="text-2xl font-bold mb-6">Starter</h3>
            <div className="mb-6 flex flex-col gap-4 items-center">
              <div className="flex items-baseline gap-2">
                <span className="text-sm">Rs.</span>
                <span className="text-5xl font-bold">499</span>
                <span className="text-2xl text-gray-400 relative">
                  560
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="30"
                      x2="100"
                      y2="70"
                      stroke="#F25277"
                      strokeWidth="5"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-sm text-gray-600">
                per user / month, 1 year commitment{" "}
                <span className="text-blue-500">ⓘ</span>
              </p>
            </div>

            <Button
              variant="secondary"
              className="bg-pink-50 text-pink-600 border border-pink-200 flex gap-2 items-center rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
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
              Contact Sales
            </Button>
          </div>

          <div className="space-y-8 pl-6 md:pl-0">
            <div>
              <h4 className="font-bold text-lg mb-3">Storage</h4>
              <div className="space-y-3">{renderFeatures(storageFeatures)}</div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Communicate</h4>
              <div className="space-y-3">{renderFeatures(communicateFeatures)}</div>
            </div>
          </div>

          <div className="space-y-8 pl-6 md:pl-0">
            <div>
              <h4 className="font-bold text-lg mb-3">Collaborate</h4>
              <div className="space-y-3">{renderFeatures(collaborateFeatures)}</div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Control</h4>
              <div className="space-y-3">{renderFeatures(controlFeatures)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}