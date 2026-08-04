'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Recommendation {
  program: string;
  reason: string;
  impact: string;
}

const recommendations: Recommendation[] = [
  { program: 'Healthcare Initiative', reason: 'Matches your interests', impact: '1.2M lives impacted' },
  { program: 'Education Program', reason: 'Similar to supported causes', impact: '250K students' },
  { program: 'Food Security', reason: 'Critical need in your region', impact: '500K families' },
];

export default function RecommendationsCarousel() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  const next = () => setCurrent((current + 1) % recommendations.length);

  return (
    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Recommended for You
      </h3>

      <div className="space-y-3">
        <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>
          {recommendations[current].program}
        </h4>
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          {recommendations[current].reason}
        </p>
        <p className="text-sm font-semibold text-amber-600">
          📊 {recommendations[current].impact}
        </p>
      </div>

      <button
        onClick={next}
        className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
      >
        See Next Recommendation →
      </button>
    </div>
  );
}
