'use client';

import React from 'react';

interface FilterChipProps {
  label: string;
  selected: boolean;
  onSelect: (selected: boolean) => void;
  count?: number;
}

export default function FilterChip({
  label,
  selected,
  onSelect,
  count,
}: FilterChipProps) {
  return (
    <button
      onClick={() => onSelect(!selected)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        selected
          ? 'bg-amber-600 text-white'
          : 'bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600'
      }`}
      aria-pressed={selected}
    >
      {label}
      {count !== undefined && <span className="ml-2 text-xs">({count})</span>}
    </button>
  );
}
