'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function AIInsightsSummary() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const res = await fetch('/api/dashboard/summaries?program=healthcare');
      const data = await res.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Failed to fetch summary:', error);
      setSummary('Our healthcare program continues making a positive impact in underserved communities.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className={`h-20 animate-pulse rounded ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'}`} />;

  return (
    <div className={`p-4 rounded-lg border-l-4 border-amber-600 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-amber-50'
    }`}>
      <div className="flex gap-3">
        <span className="text-2xl">🤖</span>
        <div>
          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            AI Insights
          </h3>
          <p className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
