'use client';

import React from 'react';
import { useTheme } from 'next-themes';

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

interface BadgeCardProps {
  certification: Certification;
}

export default function BadgeCard({ certification }: BadgeCardProps) {
  const { theme } = useTheme();

  const isExpired = certification.expiry_date && new Date(certification.expiry_date) < new Date();

  const badgeColors: Record<string, { bg: string; border: string }> = {
    AUDIT: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    ISO: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
    ACCREDITATION: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    AWARD: { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800' },
  };

  const colors = badgeColors[certification.badge_type] || badgeColors.AUDIT;

  return (
    <div className={`p-4 rounded-lg border ${colors.bg} ${colors.border}`}>
      {/* Icon */}
      {certification.icon_url && (
        <div className="mb-3">
          <img
            src={certification.icon_url}
            alt={certification.name_en}
            className="h-12 w-12 object-contain"
          />
        </div>
      )}

      {/* Name */}
      <h3 className="font-bold text-sm mb-1">{certification.name_en}</h3>

      {/* Issuer */}
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
        by {certification.issuer}
      </p>

      {/* Dates */}
      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <p>Issued: {new Date(certification.issue_date).toLocaleDateString()}</p>
        {certification.expiry_date && (
          <p className={isExpired ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
            Expires: {new Date(certification.expiry_date).toLocaleDateString()}
            {isExpired && ' (Expired)'}
          </p>
        )}
      </div>

      {/* Badge Type */}
      <div className="mt-3">
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
          certification.badge_type === 'AUDIT' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' :
          certification.badge_type === 'ISO' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100' :
          certification.badge_type === 'ACCREDITATION' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' :
          'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100'
        }`}>
          {certification.badge_type}
        </span>
      </div>

      {/* Description */}
      {certification.description_en && (
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {certification.description_en}
        </p>
      )}
    </div>
  );
}
