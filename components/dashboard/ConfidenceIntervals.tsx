'use client';
import React from 'react';
import { useTheme } from 'next-themes';

interface Metric {
  name: string;
  value: number;
  confidence: number; // 0-100
}

const metrics: Metric[] = [
  { name: 'Families Served', value: 125430, confidence: 98 },
  { name: 'Volunteers', value: 3847, confidence: 95 },
  { name: 'Programs', value: 52, confidence: 100 },
  { name: 'Countries', value: 12, confidence: 92 },
];

export default function ConfidenceIntervals() {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      {metrics.map((m) => (
        <div key={m.name}>
          <div className="flex justify-between mb-1">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{m.name}</span>
            <span className="text-sm text-amber-600">{m.confidence}% confidence</span>
          </div>
          <div className={`h-2 rounded-full ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'}`}>
            <div
              className="h-full rounded-full bg-amber-600 transition-all"
              style={{ width: `${m.confidence}%` }}
            />
          </div>
          <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            {m.value.toLocaleString()} (±{Math.round(m.value * (1 - m.confidence / 100))})
          </p>
        </div>
      ))}
    </div>
  );
}
