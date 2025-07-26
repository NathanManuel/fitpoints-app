import React, { useState } from "react";
import { WorkoutSection } from "./components/WorkoutSection";
import { StoreSection } from "./components/StoreSection";
import { StatsSection } from "./components/StatsSection";
import { ProfileSection } from "./components/ProfileSection";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  const [currentSection, setCurrentSection] = useState<
    "workout" | "store" | "stats" | "profile"
  >("workout");
  const [totalPoints, setTotalPoints] = useState(300);
  const [completedWorkouts, setCompletedWorkouts] = useState<string[]>([]);

  const addPoints = (points: number, workoutId: string) => {
    if (!completedWorkouts.includes(workoutId)) {
      setTotalPoints((prev) => prev + points);
      setCompletedWorkouts((prev) => [...prev, workoutId]);
    }
  };

  const spendPoints = (points: number) => {
    if (totalPoints >= points) {
      setTotalPoints((prev) => prev - points);
      return true;
    }
    return false;
  };

  const getSectionTitle = () => {
    switch (currentSection) {
      case "workout":
        return "Workouts";
      case "store":
        return "Rewards Store";
      case "stats":
        return "Statistics";
      case "profile":
        return "Profile";
      default:
        return "Fitness App";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                >
                  <path
                    d="M20.5 7L16 3.5L12 7L8 3.5L3.5 7L12 17L20.5 7Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-lg text-white">FitPoints</h1>
              </div>
            </div>

            <div className="flex items-center bg-slate-800/80 rounded-full px-4 py-2 space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-white"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-amber-400 text-lg">{totalPoints}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-24 px-4">
        <div className="py-6">
          <h2 className="text-2xl text-white mb-6">{getSectionTitle()}</h2>

          {currentSection === "workout" && (
            <WorkoutSection
              totalPoints={totalPoints}
              onCompleteWorkout={addPoints}
              completedWorkouts={completedWorkouts}
            />
          )}
          {currentSection === "store" && (
            <StoreSection totalPoints={totalPoints} onPurchase={spendPoints} />
          )}
          {currentSection === "stats" && (
            <StatsSection
              totalPoints={totalPoints}
              completedWorkouts={completedWorkouts}
            />
          )}
          {currentSection === "profile" && <ProfileSection />}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        totalPoints={totalPoints}
      />
    </div>
  );
}
