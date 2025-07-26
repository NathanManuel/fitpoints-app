import React from "react";
import { Button } from "./ui/button";

export function ProfileSection() {
  const profileData = {
    name: "Fitness Enthusiast",
    level: "Beginner",
    joinDate: "January 2025",
    streak: 3,
    favoriteWorkout: "Running",
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h3 className="text-2xl text-white">{profileData.name}</h3>
            <div className="text-purple-400">{profileData.level} Level</div>
            <div className="text-slate-400 text-sm">
              Member since {profileData.joinDate}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-2xl text-orange-400 mb-1">
            {profileData.streak}
          </div>
          <div className="text-slate-400 text-sm">Day Streak</div>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
          <div className="text-3xl mb-2">❤️</div>
          <div className="text-lg text-red-400 mb-1">
            {profileData.favoriteWorkout}
          </div>
          <div className="text-slate-400 text-sm">Favorite</div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-xl text-white mb-4">Settings</h3>
        <div className="space-y-3">
          <Button className="w-full h-14 bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 rounded-xl justify-start">
            <span className="mr-3">🔔</span>
            Workout Reminders
          </Button>
          <Button className="w-full h-14 bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 rounded-xl justify-start">
            <span className="mr-3">🎯</span>
            Daily Goals
          </Button>
          <Button className="w-full h-14 bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 rounded-xl justify-start">
            <span className="mr-3">📊</span>
            Data & Privacy
          </Button>
        </div>
      </div>

      {/* App Info */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-xl text-white mb-4">About</h3>
        <div className="space-y-2 text-slate-400">
          <div className="flex justify-between">
            <span>App Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>Privacy Policy</span>
            <span className="text-blue-400">View →</span>
          </div>
          <div className="flex justify-between">
            <span>Terms of Service</span>
            <span className="text-blue-400">View →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
