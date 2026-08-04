'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTheme } from 'next-themes';

const financialData = [
  { name: 'Healthcare', value: 2500000 },
  { name: 'Education', value: 1800000 },
  { name: 'Food Security', value: 1200000 },
  { name: 'Operations', value: 500000 },
];

const COLORS = ['#d4af37', '#8b5cf6', '#f97316', '#0ea5e9'];

export default function ExecutiveTransparency() {
  const { theme } = useTheme();

  const total = financialData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-4">
      <div>
        <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Budget Allocation (FY 2026)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={financialData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {financialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `JOD ${(value / 1000000).toFixed(1)}M`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={`p-4 rounded border-l-4 border-amber-600 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-blue-50'
      }`}>
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
          <strong>Total FY 2026 Budget:</strong> JOD {(total / 1000000).toFixed(1)}M
        </p>
        <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          ✓ Verified by independent audit | ISO 9001 Certified
        </p>
      </div>
    </div>
  );
}
