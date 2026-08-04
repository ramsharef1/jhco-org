'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  featured: boolean;
}

interface TestimonialSectionProps {
  filters?: Record<string, any>;
}

export default function TestimonialSection({ filters }: TestimonialSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams({ featured: 'true' });
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, String(value));
          });
        }

        const response = await fetch(`/api/dashboard/stories?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [filters]);

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-lg bg-gray-300" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
      }`}>
        Error loading testimonials: {error}
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-lg border ${
      theme === 'dark'
        ? 'bg-slate-800 border-slate-700'
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-xl font-bold mb-6">Testimonials</h2>

      {testimonials.length === 0 ? (
        <div className={`p-8 text-center ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        } rounded-lg`}>
          <p className="text-gray-500">No testimonials available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <blockquote className={`italic mb-4 ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
              }`}>
                "{testimonial.content}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
