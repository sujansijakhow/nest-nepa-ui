import React from 'react';
import Image from 'next/image';
import GradientGlow from '../ui/GradientGlow';

type Feature = {
  title: string;
  description?: React.ReactNode;
};

type OrbitIcon = {
  name: string;
  src: string;
  orbit: number;
  angle: number;
};

export default function BrandsSuccessSection() {
  const features: Feature[] = [
    {
      title: 'Your files, all in one place',
      description: (
        <>
          Edit and organize{' '}
          <span className="text-blue-600">Google Docs</span>,{' '}
          <span className="text-blue-600">Sheets</span>,{' '}
          <span className="text-blue-600">Slides</span>, Microsoft Office files,
          and PDFs in real-time. Plus, access over 100 other file types!
        </>
      ),
    },
    { title: 'Annotate PDFs' },
    { title: 'AI-powered search' },
    { title: 'Activity view' },
  ];

  const centerIcon = {
    name: 'Google Drive',
    src: '/drive.png',
  };

  const orbitIcons: OrbitIcon[] = [
    { name: 'Google Keep', src: '/keep.png', orbit: 2, angle: 45 },
    { name: 'Forms', src: '/forms.png', orbit: 2, angle: 135 },
    { name: 'Zoom', src: '/zoom.png', orbit: 2, angle: 225 },
    { name: 'Docs', src: '/docs.png', orbit: 2, angle: 315 },
    { name: 'Chat', src: '/chat.png', orbit: 3, angle: 30 },
    { name: 'Calendar', src: '/calendar.png', orbit: 3, angle: 120 },
    { name: 'Slides', src: '/slides.png', orbit: 3, angle: 210 },
    { name: 'Groups', src: '/groups.png', orbit: 3, angle: 300 },
  ];

  const getPosition = (orbit: number, angle: number, isMobile = false) => {
    const radius = isMobile ? orbit * 50 : orbit * 80;
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
    };
  };

  return (
    <section className="relative bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Gradient Background Circles */}
      <GradientGlow size='large' />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-medium mb-4 text-center">
            <span className="block text-4xl">Brands using Google Workspace to</span>
            <span className="block text-black text-4xl">
              succeed online,
              <span className="text-[#4285F4] text-3xl"> कसरी?</span>
            </span>
          </h2>
          <div className="text-gray-700 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            <p>कसरी teams Google Workspace संग productivity</p>
            <p>बढाउँछन् र समय बचत गर्छन्</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Orbit Icons */}
          <div className="relative h-80 md:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[350px] md:max-w-[500px] max-h-[350px] md:max-h-[500px]">
              {/* Orbit lines */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-80 md:h-80 border border-gray-300 opacity-70 rounded-full" />
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[480px] md:h-[480px] border border-gray-300 opacity-70 rounded-full" />

              {/* Center Icon */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 md:w-20 md:h-20 relative">
                  <Image src={centerIcon.src} alt={centerIcon.name} fill className="object-contain" />
                </div>
              </div>

              {/* Desktop Orbits */}
              <div className="hidden md:block">
                {orbitIcons.map((icon, index) => {
                  const { x, y } = getPosition(icon.orbit, icon.angle);
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transition-transform hover:scale-110"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="w-12 h-12 relative">
                        <Image src={icon.src} alt={icon.name} fill className="object-contain" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Orbits */}
              <div className="md:hidden">
                {orbitIcons.map((icon, index) => {
                  const { x, y } = getPosition(icon.orbit, icon.angle, true);
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transition-transform hover:scale-110"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="w-8 h-8 relative">
                        <Image src={icon.src} alt={icon.name} fill className="object-contain" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className={`border-l-4 pl-6 ${index === 0 ? 'border-blue-500' : 'border-gray-300'}`}>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                {feature.description && <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}