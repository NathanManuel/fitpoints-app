import React from "react";

interface BottomNavigationProps {
  currentSection: "workout" | "store" | "stats" | "profile";
  onSectionChange: (section: "workout" | "store" | "stats" | "profile") => void;
  totalPoints: number;
}

export function BottomNavigation({
  currentSection,
  onSectionChange,
  totalPoints,
}: BottomNavigationProps) {
  const navItems = [
    {
      id: "workout" as const,
      label: "Workouts",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M20.5 7L16 3.5L12 7L8 3.5L3.5 7L12 17L20.5 7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "store" as const,
      label: "Store",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "stats" as const,
      label: "Stats",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "profile" as const,
      label: "Profile",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
      <div className="safe-area-pb">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-200 min-w-[70px] ${
                currentSection === item.id
                  ? "bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-400 border border-amber-400/30"
                  : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              <div
                className={`transition-transform duration-200 ${
                  currentSection === item.id ? "scale-110" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs">{item.label}</span>
              {currentSection === item.id && (
                <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
