import React, { useState } from "react";
import { Button } from "./ui/button";

interface WorkoutSectionProps {
  totalPoints: number;
  onCompleteWorkout: (points: number, workoutId: string) => void;
  completedWorkouts: string[];
}

interface Workout {
  id: string;
  name: string;
  points: number;
  category: "outdoor" | "indoor";
  icon: string;
  duration?: string;
}

const workouts: Workout[] = [
  {
    id: "running",
    name: "Running or Jogging",
    points: 15,
    category: "outdoor",
    icon: "🏃‍♂️",
    duration: "30 min",
  },
  {
    id: "cycling",
    name: "Cycling",
    points: 15,
    category: "outdoor",
    icon: "🚴‍♂️",
    duration: "45 min",
  },
  {
    id: "hiking",
    name: "Hiking or Trail Running",
    points: 20,
    category: "outdoor",
    icon: "🥾",
    duration: "60 min",
  },
  {
    id: "bootcamp",
    name: "Outdoor Bootcamp",
    points: 25,
    category: "outdoor",
    icon: "💪",
    duration: "45 min",
  },
  {
    id: "calisthenics",
    name: "Calisthenics",
    points: 20,
    category: "outdoor",
    icon: "🤸‍♂️",
    duration: "30 min",
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    points: 30,
    category: "outdoor",
    icon: "🧗‍♂️",
    duration: "60 min",
  },
  {
    id: "yoga",
    name: "Outdoor Yoga",
    points: 15,
    category: "outdoor",
    icon: "🧘‍♀️",
    duration: "30 min",
  },
  {
    id: "skating",
    name: "Rollerblading",
    points: 20,
    category: "outdoor",
    icon: "⛸️",
    duration: "30 min",
  },
  {
    id: "pushups",
    name: "10 Push-ups",
    points: 10,
    category: "indoor",
    icon: "💪",
    duration: "5 min",
  },
  {
    id: "jumping",
    name: "30 Jumping Jacks",
    points: 10,
    category: "indoor",
    icon: "🤾‍♂️",
    duration: "5 min",
  },
  {
    id: "squats",
    name: "20 Squats",
    points: 10,
    category: "indoor",
    icon: "🏋️‍♂️",
    duration: "5 min",
  },
  {
    id: "plank",
    name: "60s Plank Hold",
    points: 15,
    category: "indoor",
    icon: "🏋️‍♀️",
    duration: "1 min",
  },
];

export function WorkoutSection({
  totalPoints,
  onCompleteWorkout,
  completedWorkouts,
}: WorkoutSectionProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "outdoor" | "indoor"
  >("all");

  const filteredWorkouts = workouts.filter(
    (workout) => activeFilter === "all" || workout.category === activeFilter
  );

  const isCompleted = (workoutId: string) =>
    completedWorkouts.includes(workoutId);

  return (
    <div className="space-y-6">
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
          All Workouts
        </Button>
        <Button
          onClick={() => setActiveFilter("outdoor")}
          className={`flex-1 h-12 rounded-xl transition-all duration-200 ${
            activeFilter === "outdoor"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
          }`}
        >
          Outdoor
        </Button>
        <Button
          onClick={() => setActiveFilter("indoor")}
          className={`flex-1 h-12 rounded-xl transition-all duration-200 ${
            activeFilter === "indoor"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
          }`}
        >
          Indoor
        </Button>
      </div>

      {/* Workout Cards */}
      <div className="space-y-3">
        {filteredWorkouts.map((workout) => {
          const completed = isCompleted(workout.id);

          return (
            <div
              key={workout.id}
              className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-200 ${
                completed
                  ? "border-green-500/30 bg-green-900/20"
                  : "border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="text-3xl">{workout.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg">{workout.name}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-slate-400 text-sm">
                        {workout.duration}
                      </span>
                      <span className="text-amber-400 text-sm">
                        +{workout.points} pts
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => onCompleteWorkout(workout.points, workout.id)}
                  disabled={completed}
                  className={`h-12 px-6 rounded-xl transition-all duration-200 ${
                    completed
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {completed ? (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Done</span>
                    </div>
                  ) : (
                    "Start"
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <div className="text-center">
          <div className="text-3xl text-amber-400 mb-2">{totalPoints}</div>
          <div className="text-slate-300">Total Points Earned</div>
          <div className="text-sm text-slate-400 mt-2">
            {completedWorkouts.length} workouts completed today
          </div>
        </div>
      </div>
    </div>
  );
}
