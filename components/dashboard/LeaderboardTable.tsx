'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface LeaderEntry {
  id: string;
  user_name: string;
  type: 'donor' | 'volunteer';
  points: number;
  rank: number;
}

export default function LeaderboardTable() {
  const [entries, setEntries] = useState<LeaderEntry[]>([]);
  const [type, setType] = useState<'donor' | 'volunteer'>('donor');
  const { theme } = useTheme();

  useEffect(() => {
    fetchLeaderboard();
  }, [type]);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(`/api/dashboard/leaderboard?type=${type}`);
      const data = await res.json();
      setEntries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
      setEntries([]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setType('donor')}
          className={`px-4 py-2 rounded ${
            type === 'donor'
              ? 'bg-amber-600 text-white'
              : theme === 'dark'
              ? 'bg-slate-800 text-slate-300'
              : 'bg-gray-200 text-gray-900'
          }`}
        >
          Top Donors
        </button>
        <button
          onClick={() => setType('volunteer')}
          className={`px-4 py-2 rounded ${
            type === 'volunteer'
              ? 'bg-amber-600 text-white'
              : theme === 'dark'
              ? 'bg-slate-800 text-slate-300'
              : 'bg-gray-200 text-gray-900'
          }`}
        >
          Top Volunteers
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={theme === 'dark' ? 'border-b border-slate-700' : 'border-b border-gray-200'}>
              <th className="text-left py-2">Rank</th>
              <th className="text-left py-2">Name</th>
              <th className="text-right py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {entries.slice(0, 10).map((entry) => (
              <tr key={entry.id} className={theme === 'dark' ? 'border-b border-slate-800' : 'border-b border-gray-100'}>
                <td className="py-3">
                  {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                </td>
                <td className="py-3">{entry.user_name}</td>
                <td className="py-3 text-right font-semibold">{entry.points.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
