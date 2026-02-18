import { GlassCard } from "./glass-card";
import { Server, Activity, AlertCircle, Bell, Settings, LayoutGrid } from "lucide-react";

interface SidebarProps {
  activeItem?: string;
}

export function Sidebar({ activeItem = "Journeys" }: SidebarProps) {
  const menuItems = [
    { icon: LayoutGrid, label: "Overview" },
    { icon: Activity, label: "Journeys" },
    { icon: Server, label: "APIs" },
    { icon: AlertCircle, label: "Incidents" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <GlassCard className="h-full p-6 flex flex-col gap-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.label === activeItem;
        return (
          <div
            key={item.label}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
              ${isActive 
                ? "bg-blue-500/30 text-white" 
                : "text-white/60 hover:text-white hover:bg-white/5 cursor-pointer"
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </GlassCard>
  );
}
