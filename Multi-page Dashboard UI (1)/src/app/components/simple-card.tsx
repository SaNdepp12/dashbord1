import React from "react";

interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function SimpleCard({ children, className = "", hover = false, onClick }: SimpleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl shadow-sm border border-gray-200
        ${hover ? "hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
