'use client';
import React from 'react';
import { useTheme } from 'next-themes';

interface Challenge {
  title: string;
  goal: number;
  current: number;
  endDate: string;
  badge?: string;
}

const activeChallenges: Challenge[] = [
  {
    title: '100 New Volunteers Challenge',
    goal: 100,
    current: 73,
    endDate: '2026-12-31',
    badge: '🎯',
  },
  {
    title: 'Holiday Fundraising Drive',
    goal: 50000,
    current: 35420,
    endDate: '2026-12-25',
    badge: '🎁',
  },
];

export default function ChallengeProgressCard() {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      {activeChallenges.map((challenge) => {
        const progress = (challenge.current / challenge.goal) * 100;
        const daysLeft = Math.ceil(
          (new Date(challenge.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
        );

        return (
          <div
            key={challenge.title}
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {challenge.badge} {challenge.title}
                </h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  {daysLeft} days left
                </p>
              </div>
              <span className="text-xl">{Math.round(progress)}%</span>
            </div>

            <div className={`h-2 rounded-full ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" style={{ width: `${progress}%` }} />
            </div>

            <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              {challenge.current.toLocaleString()} / {challenge.goal.toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
