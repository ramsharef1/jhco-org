'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

interface ExportButtonProps {
  exportParams?: Record<string, any>;
  onExportStart?: () => void;
  onExportComplete?: (fileUrl: string) => void;
}

export default function ExportButton({
  exportParams = {},
  onExportStart,
  onExportComplete,
}: ExportButtonProps) {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async (format: 'PDF' | 'EXCEL' | 'CSV') => {
    try {
      setIsLoading(true);
      onExportStart?.();

      const response = await fetch('/api/dashboard/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          export_format: format,
          export_params: exportParams,
        }),
      });

      if (!response.ok) throw new Error('Export failed');

      const { file_url } = await response.json();
      onExportComplete?.(file_url);

      // Trigger download
      const link = document.createElement('a');
      link.href = file_url;
      link.download = `dashboard-${new Date().toISOString().split('T')[0]}.${
        format === 'PDF' ? 'pdf' : format === 'EXCEL' ? 'xlsx' : 'csv'
      }`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setIsLoading(false);
      setShowMenu(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        disabled={isLoading}
        className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={showMenu}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {isLoading ? 'Exporting...' : 'Export'}
      </button>

      {showMenu && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-lg border shadow-lg z-50 ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-gray-200'
          }`}
          role="menu"
        >
          <button
            onClick={() => handleExport('PDF')}
            className={`w-full text-left px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            role="menuitem"
          >
            Export as PDF
          </button>
          <button
            onClick={() => handleExport('EXCEL')}
            className={`w-full text-left px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            role="menuitem"
          >
            Export as Excel
          </button>
          <button
            onClick={() => handleExport('CSV')}
            className={`w-full text-left px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors rounded-b-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            role="menuitem"
          >
            Export as CSV
          </button>
        </div>
      )}
    </div>
  );
}
