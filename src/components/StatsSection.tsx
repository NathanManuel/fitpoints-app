import React from "react";

interface StatsSectionProps {
  totalPoints: number;
  completedWorkouts: string[];
}

export function StatsSection({
  totalPoints,
  completedWorkouts,
}: StatsSectionProps) {
  const totalEarned = totalPoints + completedWorkouts.length * 15;
  const weeklyGoal = 7;
  const weeklyProgress = Math.min(completedWorkouts.length, weeklyGoal);
  const progressPercentage = (weeklyProgress / weeklyGoal) * 100;

  const stats = [
    {
      label: "Current Points",
      value: totalPoints,
      icon: "⭐",
      color: "text-amber-400",
    },
    {
      label: "Workouts Today",
      value: completedWorkouts.length,
      icon: "💪",
      color: "text-blue-400",
    },
    {
      label: "Total Earned",
      value: totalEarned,
      icon: "🏆",
      color: "text-green-400",
    },
    {
      label: "Weekly Goal",
      value: `${weeklyProgress}/${weeklyGoal}`,
      icon: "🎯",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Progress Card */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
        <h3 className="text-xl text-white mb-4">Weekly Progress</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Workouts Completed</span>
            <span className="text-blue-400">
              {weeklyProgress}/{weeklyGoal}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-sm text-slate-400 text-center">
            {weeklyGoal - weeklyProgress > 0
              ? `${
                  weeklyGoal - weeklyProgress
                } more workouts to reach your goal!`
              : "Congratulations! Goal achieved! 🎉"}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-2xl ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievement Card */}
      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
        <h3 className="text-xl text-white mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <span className="text-amber-400">🔥</span>
            </div>
            <div>
              <div className="text-white">First Workout</div>
              <div className="text-slate-400 text-sm">
                Started your fitness journey
              </div>
            </div>
          </div>
          {completedWorkouts.length >= 3 && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400">💚</span>
              </div>
              <div>
                <div className="text-white">Consistency Champion</div>
                <div className="text-slate-400 text-sm">
                  Completed 3 workouts
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
