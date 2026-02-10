"use client";

import React from "react";

interface GradientGlowProps {
  className?: string; // optional extra classes
  leftGradient?: boolean; // show left gradient
  rightGradient?: boolean; // show right gradient
  size?: "small" | "medium" | "large"; // optional sizing preset
}

export default function GradientGlow({
  className = "",
  leftGradient = true,
  rightGradient = true,
  size = "medium",
}: GradientGlowProps) {
  // sizes for gradient circles
  const sizes = {
    small: { width: 500, height: 150 },
    medium: { width: 850, height: 150 },
    large: { width: 1000, height: 250 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`hidden md:block pointer-events-none absolute inset-0 ${className}`}>
      {leftGradient && (
        <div
          className="absolute -left-[500px] top-[30%] rounded-full"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background:
              "linear-gradient(90deg, #217BFE4D 0%, #078EFB4D 30%, #AC87EB4D 60%, #AC87EB4D 100%)",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />
      )}
      {rightGradient && (
        <div
          className="absolute -right-[500px] top-[30%] rounded-full"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background:
              "linear-gradient(90deg, #217BFE4D 0%, #078EFB4D 30%, #AC87EB4D 60%, #AC87EB4D 100%)",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />
      )}
    </div>
  );
}