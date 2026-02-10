import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ 
  variant = "primary", 
  size = "md",
  children, 
  onClick, 
  className = "",
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition inline-flex items-center cursor-pointer justify-center gap: 2";
  
  const variants = {
    primary: "bg-[#F25277] text-white hover:bg-pink-600",
    secondary: "border border-gray-800 hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If href is provided, render as Next.js Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Otherwise rendering as button
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}