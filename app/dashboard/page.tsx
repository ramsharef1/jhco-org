'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useTheme } from 'next-themes';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MetricsGrid from '@/components/dashboard/MetricsGrid';
import FinancialChart from '@/components/dashboard/FinancialChart';
import GeographicMap from '@/components/dashboard/GeographicMap';
import StoriesCarousel from '@/components/dashboard/StoriesCarousel';
import CertificationBadges from '@/components/dashboard/CertificationBadges';
import TestimonialSection from '@/components/dashboard/TestimonialSection';
import VolunteerCTA from '@/components/dashboard/VolunteerCTA';
import ExportButton from '@/components/dashboard/ui/ExportButton';
import SocialShareMenu from '@/components/dashboard/ui/SocialShareMenu';

interface DashboardFilters {
  program?: string;
  region?: string;
  startDate?: string;
  endDate?: string;
  verification_status?: string;
}

export default function DashboardPage() {
  const { theme } = useTheme();
  const [filters, setFilters] = useState<DashboardFilters>({});
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering (for hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFiltersChange = useCallback((newFilters: DashboardFilters) => {
    setFilters(newFilters);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-slate-950" />;
  }

  return (
    <DashboardLayout>
      {/* Page Header with Controls */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Track JHCO's impact across all programs
          </p>
        </div>
        <div className="flex gap-3">
          <ExportButton exportParams={filters} />
          <SocialShareMenu title="Check out JHCO Impact Dashboard" />
        </div>
      </div>

      {/* Main Dashboard Sections */}
      <div className="space-y-8">
        {/* Section 1: Key Metrics */}
        <section aria-labelledby="metrics-heading">
          <h3 id="metrics-heading" className="sr-only">Key Impact Metrics</h3>
          <MetricsGrid filters={filters} />
        </section>

        {/* Section 2: Two-Column Layout - Financial & Geographic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Financial Chart */}
          <section aria-labelledby="financial-heading">
            <h3 id="financial-heading" className="sr-only">Financial Breakdown by Program</h3>
            <FinancialChart filters={filters} />
          </section>

          {/* Geographic Map */}
          <section aria-labelledby="geographic-heading">
            <h3 id="geographic-heading" className="sr-only">Geographic Coverage</h3>
            <GeographicMap filters={filters} />
          </section>
        </div>

        {/* Section 3: Featured Stories */}
        <section aria-labelledby="stories-heading">
          <h3 id="stories-heading" className="sr-only">Featured Impact Stories</h3>
          <StoriesCarousel filters={filters} />
        </section>

        {/* Section 4: Certifications & Audit Badges */}
        <section aria-labelledby="certifications-heading">
          <h3 id="certifications-heading" className="sr-only">Audit Badges and Certifications</h3>
          <CertificationBadges filters={filters} />
        </section>

        {/* Section 5: Testimonials */}
        <section aria-labelledby="testimonials-heading">
          <h3 id="testimonials-heading" className="sr-only">Donor and Beneficiary Testimonials</h3>
          <TestimonialSection filters={filters} />
        </section>

        {/* Section 6: Call to Action - Volunteer */}
        <section aria-labelledby="volunteer-heading">
          <h3 id="volunteer-heading" className="sr-only">Volunteer Signup</h3>
          <VolunteerCTA />
        </section>

        {/* Section 7: Trust & Transparency Statement */}
        <section className={`p-8 rounded-lg border ${
          theme === 'dark'
            ? 'bg-slate-800 border-slate-700'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <h3 className="text-lg font-bold mb-4">Our Commitment to Transparency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-amber-600">Verified Data</h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                All metrics are independently verified by third-party auditors. We maintain the highest standards of accuracy and accountability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-amber-600">Financial Transparency</h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Our financial statements are audited annually. Every dollar is tracked and reported. View our audit reports anytime.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-amber-600">Impact Accountability</h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                We measure and report on real outcomes. Our stories come from verified beneficiaries, ensuring authentic impact reporting.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Error Boundary Fallback */}
      <div className={`mt-12 p-6 rounded-lg border ${
        theme === 'dark'
          ? 'bg-slate-800 border-slate-700'
          : 'bg-gray-50 border-gray-200'
      }`}>
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Have questions about the data? Contact our team at{' '}
          <a href="mailto:impact@jhco.org" className="text-amber-600 hover:text-amber-700 font-medium">
            impact@jhco.org
          </a>
        </p>
      </div>
    </DashboardLayout>
  );
}
