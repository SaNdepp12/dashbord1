import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        backdrop-blur-[24px] bg-white/10 border border-white/15 rounded-[18px]
        shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_20px_rgba(59,130,246,0.15)]
        ${hover ? "hover:bg-white/14 hover:border-white/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3),0_0_32px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
