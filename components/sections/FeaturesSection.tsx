// components/HeroFeatures.tsx
import React from 'react';
import Button from '../ui/Button';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
}

interface WorkspaceIcon {
  name: string;
  src: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      title: 'Premium AI built-in',
      description:
        'Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.',
    },
    {
      title: 'Tools born in the Cloud',
      description:
        'Collaborate in real time, from any device, across tools that are always up-to-date.',
    },
    {
      title: 'Enterprise-grade security',
      description:
        'Protect your emails, files, and meetings with AI-powered security and compliance controls.',
    },
  ];

  const workspaceIcons: WorkspaceIcon[] = [
    { name: 'Gmail', src: '/gmail.png' },
    { name: 'Drive', src: '/drive.png' },
    { name: 'Zoom', src: '/zoom.png' },
    { name: 'Calendar', src: '/calendar.png' },
    { name: 'Chat', src: '/chat.png' },
    { name: 'Gemini', src: '/sparkle.png' },
    { name: 'Docs', src: '/docs.png' },
    { name: 'Sheets', src: '/sheets.png' },
    { name: 'Slides', src: '/slides.png' },
    { name: 'Vids', src: '/vid.png' },
    { name: 'Keep', src: '/keep.png' },
    { name: 'Sites', src: '/sites.png' },
    { name: 'Forms', src: '/forms.png' },
    { name: 'Tasks', src: '/tasks.png' },
    { name: 'NotebookLM', src: '/notebook.png' },
    { name: 'AppSheet', src: '/appsheet.png' },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Header */}
        <h1 className="text-3xl md:text-4xl font-medium mb-12 md:mb-16">
          <span className="text-[#146DE1]">सबै</span>
          <span className="text-black"> Tools</span>
          <span className="text-[#146DE1]"> एउटै</span>
          <span className="text-black"> Platform </span>
          <span className="hidden md:inline text-3xl text-black">मा</span>
          <br />
          <span className="text-[#4285F4]">Google Workspace</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <p className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                {feature.title}
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12 md:mb-16">
          <Button variant="secondary" className="flex items-center gap-2">
            Get a quotation <HiArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-8">
          Google Workspace includes:
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-4 md:gap-6 max-w-6xl mx-auto">
          {workspaceIcons.map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs md:text-sm">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}