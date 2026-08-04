'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import FilterChip from './ui/FilterChip';

interface FilterSidebarProps {
  onFiltersChange?: (filters: Record<string, any>) => void;
}

export default function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const { theme } = useTheme();
  const [filters, setFilters] = useState({
    program: '',
    region: '',
    startDate: '',
    endDate: '',
    verification_status: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const programs = [
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'food-aid', label: 'Food Aid' },
    { id: 'livelihoods', label: 'Livelihoods' },
    { id: 'emergency', label: 'Emergency Relief' },
  ];

  const regions = [
    { id: 'mena', label: 'Middle East & North Africa' },
    { id: 'asia', label: 'Asia' },
    { id: 'africa', label: 'Africa' },
    { id: 'europe', label: 'Europe' },
  ];

  const verificationStatuses = [
    { id: 'VERIFIED', label: 'Verified' },
    { id: 'PENDING', label: 'Pending' },
    { id: 'UNVERIFIED', label: 'Unverified' },
  ];

  return (
    <div className="space-y-6">
      {/* Programs Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Programs</h3>
        <div className="space-y-2">
          {programs.map((program) => (
            <label key={program.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.program === program.id}
                onChange={(e) => handleFilterChange('program', e.target.checked ? program.id : '')}
                className="w-4 h-4 rounded accent-amber-600"
              />
              <span className="text-sm">{program.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Region Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Regions</h3>
        <div className="space-y-2">
          {regions.map((region) => (
            <label key={region.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.region === region.id}
                onChange={(e) => handleFilterChange('region', e.target.checked ? region.id : '')}
                className="w-4 h-4 rounded accent-amber-600"
              />
              <span className="text-sm">{region.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Range Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Date Range</h3>
        <div className="space-y-3">
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => handleFilterChange('startDate', e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border text-sm ${
              theme === 'dark'
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'bg-white border-gray-300'
            }`}
          />
          <input
            type="date"
            value={filters.endDate}
            onChange={(e) => handleFilterChange('endDate', e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border text-sm ${
              theme === 'dark'
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'bg-white border-gray-300'
            }`}
          />
        </div>
      </div>

      {/* Verification Status Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Verification</h3>
        <div className="space-y-2">
          {verificationStatuses.map((status) => (
            <label key={status.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.verification_status === status.id}
                onChange={(e) => handleFilterChange('verification_status', e.target.checked ? status.id : '')}
                className="w-4 h-4 rounded accent-amber-600"
              />
              <span className="text-sm">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          const clearedFilters = {
            program: '',
            region: '',
            startDate: '',
            endDate: '',
            verification_status: '',
          };
          setFilters(clearedFilters);
          onFiltersChange?.(clearedFilters);
        }}
        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          theme === 'dark'
            ? 'bg-slate-700 hover:bg-slate-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
        }`}
      >
        Clear Filters
      </button>
    </div>
  );
}
