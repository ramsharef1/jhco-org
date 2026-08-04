'use client';

import React, { ReactNode, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/lib/i18n';
import FilterSidebar from './FilterSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { theme } = useTheme();
  const { t, language } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const bgClass = theme === 'dark'
    ? 'bg-slate-950 text-white'
    : 'bg-white text-gray-900';

  const accentClass = 'from-amber-600 to-amber-500'; // JHCO royal colors

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Header */}
      <header className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r ${accentClass} bg-clip-text text-transparent">
                {t('dashboard.title', 'Impact Dashboard')}
              </h1>
              <p className={`mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                {t('dashboard.subtitle', 'JHCO Impact Metrics & Financial Overview')}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className={`w-64 min-h-[calc(100vh-8rem)] ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-gray-50 border-gray-200'
          } border-r transition-all`}>
            <div className="sticky top-0 p-6">
              <FilterSidebar />
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-gray-200 bg-gray-50'} mt-12`}>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className={`text-center ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            <p>{t('dashboard.footer', 'JHCO - Building Healthier Communities')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
