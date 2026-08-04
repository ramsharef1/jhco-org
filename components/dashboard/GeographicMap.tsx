'use client';

import React from 'react';
import { useTheme } from 'next-themes';

interface GeographicMapProps {
  filters?: Record<string, any>;
}

export default function GeographicMap({ filters }: GeographicMapProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border ${
        theme === 'dark'
          ? 'bg-slate-800 border-slate-700'
          : 'bg-white border-gray-200'
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Geographic Coverage</h2>

      <div
        className={`w-full h-96 rounded-lg flex items-center justify-center ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-100'
        }`}
      >
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7.5m0 0l6.553-3.276A1 1 0 0117 5.618v10.764a1 1 0 01-1.553.894L9 7.5m0 0V5m6 9.5l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.553-.894L15 9.5m0 0V7"
            />
          </svg>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
            Interactive map coming soon
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Powered by Mapbox
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        }`}>
          <p className="text-sm text-gray-500">Countries</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        }`}>
          <p className="text-sm text-gray-500">Regions</p>
          <p className="text-2xl font-bold">48</p>
        </div>
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        }`}>
          <p className="text-sm text-gray-500">Communities</p>
          <p className="text-2xl font-bold">156</p>
        </div>
      </div>
    </div>
  );
}
