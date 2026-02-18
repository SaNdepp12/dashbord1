interface StatusChipProps {
  status: "Stable" | "Degraded" | "Critical" | "Green" | "Amber" | "Red";
  className?: string;
}

export function StatusChip({ status, className = "" }: StatusChipProps) {
  const normalizedStatus = status === "Green" ? "Stable" : status === "Amber" ? "Degraded" : status === "Red" ? "Critical" : status;
  
  const colors = {
    Stable: "bg-green-50 text-green-700 border-green-200",
    Degraded: "bg-amber-50 text-amber-700 border-amber-200",
    Critical: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        border
        ${colors[normalizedStatus]}
        ${className}
      `}
    >
      {normalizedStatus}
    </span>
  );
}