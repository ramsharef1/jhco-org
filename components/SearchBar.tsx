'use client';

import { useState } from 'react';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface SearchBarProps {
  locale?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ locale = 'en', onSearch, placeholder }: SearchBarProps) {
  const ar = locale === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: spacing.sm,
      direction: ar ? 'rtl' : 'ltr',
    }}>
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          color: royalColors.darkNavy,
          transition: transitions.base,
          padding: spacing.sm,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.color = royalColors.hashemiteGold;
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.color = royalColors.darkNavy;
        }}
      >
        🔍
      </button>

      {/* Search Input (Conditional) */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          [ar ? 'right' : 'left']: 0,
          top: '100%',
          marginTop: spacing.md,
          backgroundColor: 'white',
          border: `1px solid ${royalColors.bgRefined}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(10,20,40,0.15)',
          padding: spacing.md,
          display: 'flex',
          gap: spacing.sm,
          zIndex: 100,
          minWidth: '300px',
        }}>
          <input
            type="text"
            placeholder={placeholder || (ar ? 'ابحث...' : 'Search...')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
                setIsOpen(false);
              }
            }}
            style={{
              flex: 1,
              border: 'none',
              padding: spacing.sm,
              fontSize: '13px',
              fontFamily: 'inherit',
              direction: ar ? 'rtl' : 'ltr',
              textAlign: ar ? 'right' : 'left',
            }}
            autoFocus
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.deepRoyal,
              border: 'none',
              borderRadius: '2px',
              padding: `${spacing.sm} ${spacing.md}`,
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: transitions.base,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f4c430';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = royalColors.hashemiteGold;
            }}
          >
            {ar ? 'بحث' : 'Go'}
          </button>
        </div>
      )}
    </div>
  );
}
