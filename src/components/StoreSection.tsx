import React, { useState } from "react";
import { Button } from "./ui/button";

interface StoreSectionProps {
  totalPoints: number;
  onPurchase: (points: number) => boolean;
}

interface StoreItem {
  id: string;
  name: string;
  points: number;
  status: "available" | "unavailable" | "timer";
  timerMinutes?: number;
  emoji: string;
  description: string;
}

const storeItems: StoreItem[] = [
  {
    id: "coke1",
    name: "Coca-Cola",
    points: 100,
    status: "available",
    emoji: "🥤",
    description: "Classic 330ml",
  },
  {
    id: "water1",
    name: "Water Bottle",
    points: 50,
    status: "available",
    emoji: "💧",
    description: "Pure 500ml",
  },
  {
    id: "energy1",
    name: "Energy Drink",
    points: 150,
    status: "timer",
    timerMinutes: 630,
    emoji: "⚡",
    description: "Boost 250ml",
  },
  {
    id: "juice1",
    name: "Orange Juice",
    points: 80,
    status: "available",
    emoji: "🍊",
    description: "Fresh 300ml",
  },
  {
    id: "coffee1",
    name: "Cold Coffee",
    points: 120,
    status: "available",
    emoji: "☕",
    description: "Iced 350ml",
  },
  {
    id: "snack1",
    name: "Protein Bar",
    points: 200,
    status: "unavailable",
    emoji: "🍫",
    description: "Chocolate",
  },
  {
    id: "snack2",
    name: "Nuts Mix",
    points: 180,
    status: "available",
    emoji: "🥜",
    description: "Healthy 100g",
  },
  {
    id: "fruit1",
    name: "Apple",
    points: 60,
    status: "available",
    emoji: "🍎",
    description: "Fresh & crispy",
  },
  {
    id: "yogurt1",
    name: "Greek Yogurt",
    points: 90,
    status: "timer",
    timerMinutes: 330,
    emoji: "🥛",
    description: "Protein 150g",
  },
];

export function StoreSection({ totalPoints, onPurchase }: StoreSectionProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "affordable" | "drinks"
  >("all");
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);

  const formatTimer = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const handlePurchase = (item: StoreItem) => {
    if (item.status === "available" && !purchasedItems.includes(item.id)) {
      const success = onPurchase(item.points);
      if (success) {
        setPurchasedItems((prev) => [...prev, item.id]);
      }
    }
  };

  const canAfford = (points: number) => totalPoints >= points;

  const filteredItems = storeItems.filter((item) => {
    if (activeFilter === "affordable")
      return canAfford(item.points) && item.status === "available";
    if (activeFilter === "drinks")
      return ["🥤", "💧", "⚡", "🍊", "☕", "🥛"].includes(item.emoji);
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Current Points Display */}
      <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30">
        <div className="text-center">
          <div className="text-4xl text-amber-400 mb-2">{totalPoints}</div>
          <div className="text-white">Points Available</div>
          <div className="text-sm text-slate-300 mt-1">
            Spend wisely on rewards!
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3">
        <Button
          onClick={() => setActiveFilter("all")}
          className={`flex-1 h-12 rounded-xl transition-all duration-200 ${
            activeFilter === "all"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
          }`}
        >
          All Items
        </Button>
        <Button
          onClick={() => setActiveFilter("affordable")}
          className={`flex-1 h-12 rounded-xl transition-all duration-200 ${
            activeFilter === "affordable"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
          }`}
        >
          Can Afford
        </Button>
        <Button
          onClick={() => setActiveFilter("drinks")}
          className={`flex-1 h-12 rounded-xl transition-all duration-200 ${
            activeFilter === "drinks"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
          }`}
        >
          Drinks
        </Button>
      </div>

      {/* Store Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isPurchased = purchasedItems.includes(item.id);
          const isAvailable = item.status === "available" && !isPurchased;
          const isAffordable = canAfford(item.points);

          return (
            <div
              key={item.id}
              className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-200 ${
                isPurchased
                  ? "border-green-500/50 bg-green-900/20"
                  : isAvailable && isAffordable
                  ? "border-amber-400/30 hover:border-amber-400/50 hover:shadow-lg cursor-pointer"
                  : "border-slate-700/50 opacity-60"
              }`}
              onClick={() =>
                isAvailable && isAffordable && handlePurchase(item)
              }
            >
              <div className="text-center space-y-3">
                {/* Item Icon */}
                <div className="text-5xl">{item.emoji}</div>

                {/* Item Info */}
                <div>
                  <h3 className="text-white text-lg">{item.name}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>

                {/* Status & Price */}
                <div className="space-y-2">
                  {isPurchased ? (
                    <div className="bg-green-600/20 text-green-400 py-2 px-4 rounded-xl border border-green-500/30">
                      <div className="flex items-center justify-center space-x-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Purchased</span>
                      </div>
                    </div>
                  ) : item.status === "timer" ? (
                    <div className="bg-blue-600/20 text-blue-400 py-2 px-4 rounded-xl border border-blue-500/30">
                      <div className="text-xs">Restocking in</div>
                      <div className="text-sm">
                        {formatTimer(item.timerMinutes || 0)}
                      </div>
                    </div>
                  ) : item.status === "unavailable" ? (
                    <div className="bg-red-600/20 text-red-400 py-2 px-4 rounded-xl border border-red-500/30">
                      <div className="text-sm">Out of Stock</div>
                    </div>
                  ) : isAffordable ? (
                    <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 text-amber-400 py-2 px-4 rounded-xl border border-amber-400/30">
                      <div className="text-sm">{item.points} points</div>
                    </div>
                  ) : (
                    <div className="bg-slate-700/50 text-slate-400 py-2 px-4 rounded-xl border border-slate-600/30">
                      <div className="text-sm">{item.points} points</div>
                      <div className="text-xs">
                        Need {item.points - totalPoints} more
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
