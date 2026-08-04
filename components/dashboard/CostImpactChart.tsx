'use client';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CostMetric {
  metric_name: string;
  program: string;
  cost: number;
  outcome_count: number;
  efficiency: string;
}

export default function CostImpactChart() {
  const [data, setData] = useState<CostMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCostMetrics();
  }, []);

  const fetchCostMetrics = async () => {
    try {
      const res = await fetch('/api/dashboard/cost-impact');
      setData(await res.json());
    } catch (error) {
      console.error('Failed to fetch cost metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="h-80 bg-gray-200 animate-pulse rounded" />;
  if (!data.length) return <div className="p-4 text-center text-gray-500">No cost data available</div>;

  const chartData = data.map((d) => ({
    name: d.program,
    cost: d.cost,
    efficiency: parseFloat(d.efficiency),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cost" fill="#d4af37" name="Cost (JOD)" />
        <Bar dataKey="efficiency" fill="#8b5cf6" name="Efficiency" />
      </BarChart>
    </ResponsiveContainer>
  );
}
