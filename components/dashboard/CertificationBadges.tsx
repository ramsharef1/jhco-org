'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import BadgeCard from './ui/BadgeCard';

interface Certification {
  id: string;
  name_en: string;
  name_ar?: string;
  issuer: string;
  issue_date: string;
  expiry_date?: string;
  badge_type: string;
  icon_url?: string;
  description_en?: string;
  description_ar?: string;
}

interface CertificationBadgesProps {
  filters?: Record<string, any>;
}

export default function CertificationBadges({ filters }: CertificationBadgesProps) {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, String(value));
          });
        }

        const response = await fetch(`/api/dashboard/certifications?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch certifications');
        const data = await response.json();
        setCertifications(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, [filters]);

  if (loading) {
    return (
      <div className={`p-6 rounded-lg border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="h-32 animate-pulse bg-gray-300 rounded-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
      }`}>
        Error loading certifications: {error}
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-lg border ${
      theme === 'dark'
        ? 'bg-slate-800 border-slate-700'
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-xl font-bold mb-6">Audit Badges & Certifications</h2>

      {certifications.length === 0 ? (
        <div className={`p-8 text-center ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        } rounded-lg`}>
          <p className="text-gray-500">No certifications available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <BadgeCard
              key={cert.id}
              certification={cert}
            />
          ))}
        </div>
      )}
    </div>
  );
}
