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
import RichMediaGallery from '@/components/dashboard/RichMediaGallery';
import TimelineStories from '@/components/dashboard/TimelineStories';
import BehindScenesCarousel from '@/components/dashboard/BehindScenesCarousel';
import CostImpactChart from '@/components/dashboard/CostImpactChart';
import AnomalyAlerts from '@/components/dashboard/AnomalyAlerts';
import ConfidenceIntervals from '@/components/dashboard/ConfidenceIntervals';
import LeaderboardTable from '@/components/dashboard/LeaderboardTable';
import ChallengeProgressCard from '@/components/dashboard/ChallengeProgressCard';
import NewsletterSignupForm from '@/components/dashboard/NewsletterSignupForm';
import AIInsightsSummary from '@/components/dashboard/AIInsightsSummary';
import RecommendationsCarousel from '@/components/dashboard/RecommendationsCarousel';
import ExecutiveTransparency from '@/components/dashboard/ExecutiveTransparency';

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

        {/* Phase 3 Wave 2 Components - Rich Media Section */}
        <section aria-labelledby="media-heading">
          <h3 id="media-heading" className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Rich Media & Impact Stories
          </h3>
          <div className="space-y-8">
            {/* Rich Media Gallery */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Gallery
              </h4>
              <RichMediaGallery />
            </div>

            {/* Timeline Stories */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Timeline of Impact
              </h4>
              <TimelineStories />
            </div>

            {/* Behind the Scenes */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Behind the Scenes
              </h4>
              <BehindScenesCarousel />
            </div>
          </div>
        </section>

        {/* Analytics & Insights Section */}
        <section aria-labelledby="analytics-heading">
          <h3 id="analytics-heading" className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Analytics & Insights
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cost Impact Analysis */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cost Efficiency Analysis
              </h4>
              <CostImpactChart />
            </div>

            {/* Data Quality & Confidence */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Data Quality & Confidence Intervals
              </h4>
              <ConfidenceIntervals />
            </div>
          </div>

          {/* Anomaly Alerts */}
          <div className={`p-6 rounded-lg border mt-8 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              System Alerts & Anomalies
            </h4>
            <AnomalyAlerts />
          </div>
        </section>

        {/* Community & Engagement Section */}
        <section aria-labelledby="community-heading">
          <h3 id="community-heading" className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Community & Engagement
          </h3>
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Top Contributors
              </h4>
              <LeaderboardTable />
            </div>

            {/* Active Challenges */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Active Challenges
              </h4>
              <ChallengeProgressCard />
            </div>

            {/* Newsletter Signup */}
            <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Stay Updated
              </h4>
              <NewsletterSignupForm />
            </div>
          </div>
        </section>

        {/* AI-Powered Intelligence Section */}
        <section aria-labelledby="ai-heading">
          <h3 id="ai-heading" className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            AI-Powered Intelligence
          </h3>
          <div className="space-y-8">
            {/* AI Insights */}
            <AIInsightsSummary />

            {/* Personalized Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecommendationsCarousel />

              {/* Executive Financial Transparency */}
              <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                <ExecutiveTransparency />
              </div>
            </div>
          </div>
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
