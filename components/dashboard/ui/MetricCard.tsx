'use client';

import React from 'react';
import { useTheme } from 'next-themes';

interface Metric {
  id: string;
  label_en: string;
  label_ar?: string;
  value: number;
  unit_en?: string;
  unit_ar?: string;
  category: string;
  verification_status: string;
  trend?: number;
  color?: string;
  icon?: string;
}

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const { theme } = useTheme();

  const getStatusColor = () => {
    switch (metric.verification_status) {
      case 'VERIFIED':
        return 'text-green-600';
      case 'PENDING':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const bgClass = theme === 'dark'
    ? 'bg-slate-800 border-slate-700'
    : 'bg-white border-gray-200';

  const trendColor = metric.trend && metric.trend > 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`p-6 rounded-lg border ${bgClass} hover:shadow-lg transition-shadow`}>
      {/* Icon and Status */}
      <div className="flex items-start justify-between mb-4">
        {metric.icon && (
          <div className="text-4xl opacity-50">{metric.icon}</div>
        )}
        <div className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor()} bg-opacity-10`}>
          {metric.verification_status}
        </div>
      </div>

      {/* Label */}
      <h3 className="text-sm font-medium text-gray-600 dark:text-slate-400 mb-2">
        {metric.label_en}
      </h3>

      {/* Value */}
      <div className="mb-4">
        <p className="text-3xl font-bold">
          {metric.value.toLocaleString()}
        </p>
        {metric.unit_en && (
          <p className="text-sm text-gray-600 dark:text-slate-400">
            {metric.unit_en}
          </p>
        )}
      </div>

      {/* Trend */}
      {metric.trend !== undefined && (
        <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
          <span>{metric.trend > 0 ? '↑' : '↓'}</span>
          <span>{Math.abs(metric.trend).toFixed(1)}%</span>
        </div>
      )}
    </div>
  );
}
