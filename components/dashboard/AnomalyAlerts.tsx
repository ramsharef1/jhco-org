'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Anomaly {
  id: string;
  metric_name: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  resolved: boolean;
}

export default function AnomalyAlerts() {
  const [alerts, setAlerts] = useState<Anomaly[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await fetch('/api/dashboard/analyze');
      const data = await res.json();
      setAlerts(Array.isArray(data) ? data : data.anomalies || []);
    } catch (error) {
      console.error('Failed to fetch alerts:', error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const severityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading alerts...</div>;

  return (
    <div className="space-y-3">
      {alerts.length === 0 ? (
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          ✓ No anomalies detected
        </p>
      ) : (
        alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 rounded border-l-4 ${severityColor(alert.severity)}`}
            role="alert"
          >
            <div className="font-semibold">{alert.metric_name}</div>
            <p className="text-sm">{alert.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
