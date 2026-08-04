'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface FinancialData {
  category: string;
  category_ar?: string;
  amount: number;
  currency: string;
  fiscal_year: number;
}

interface FinancialChartProps {
  filters?: Record<string, any>;
}

const COLORS = ['#b45309', '#d97706', '#f59e0b', '#fbbf24', '#fcd34d'];

export default function FinancialChart({ filters }: FinancialChartProps) {
  const [data, setData] = useState<FinancialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? '#e2e8f0' : '#1f2937';
  const gridColor = theme === 'dark' ? '#334155' : '#e5e7eb';

  useEffect(() => {
    const fetchFinancial = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, String(value));
          });
        }

        const response = await fetch(`/api/dashboard/financial?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch financial data');
        const fetchedData = await response.json();
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchFinancial();
  }, [filters]);

  if (loading) {
    return (
      <div className={`h-96 rounded-lg animate-pulse ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'
      }`} />
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
      }`}>
        Error loading financial data: {error}
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-lg border ${
      theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Financial Breakdown</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('bar')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              chartType === 'bar'
                ? 'bg-amber-600 text-white'
                : theme === 'dark'
                ? 'bg-slate-700 text-slate-300'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              chartType === 'pie'
                ? 'bg-amber-600 text-white'
                : theme === 'dark'
                ? 'bg-slate-700 text-slate-300'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Pie
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="category" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#334155' : '#e5e7eb'}`,
                color: textColor,
              }}
            />
            <Legend />
            <Bar dataKey="amount" fill="#b45309" />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ category, amount }) => `${category}: ${amount}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="amount"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#334155' : '#e5e7eb'}`,
                color: textColor,
              }}
            />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
