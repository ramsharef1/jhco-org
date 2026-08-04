'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import MetricCard from './ui/MetricCard';

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

interface MetricsGridProps {
  filters?: Record<string, any>;
}

export default function MetricsGrid({ filters }: MetricsGridProps) {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, String(value));
          });
        }

        const response = await fetch(`/api/dashboard/metrics?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch metrics');
        const data = await response.json();
        setMetrics(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [filters]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-32 rounded-lg animate-pulse ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
      }`}>
        Error loading metrics: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.slice(0, 5).map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
        />
      ))}
    </div>
  );
}
