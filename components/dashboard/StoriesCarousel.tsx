'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Story {
  id: string;
  title: string;
  content: string;
  program?: string;
  featured: boolean;
}

interface StoriesCarouselProps {
  filters?: Record<string, any>;
}

export default function StoriesCarousel({ filters }: StoriesCarouselProps) {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, String(value));
          });
        }

        const response = await fetch(`/api/dashboard/stories?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch stories');
        const data = await response.json();
        setStories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [filters]);

  if (loading) {
    return (
      <div className={`h-64 rounded-lg animate-pulse ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'
      }`} />
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
      }`}>
        Error loading stories: {error}
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className={`p-8 rounded-lg text-center ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'
      }`}>
        <p className="text-gray-500">No stories available</p>
      </div>
    );
  }

  const currentStory = stories[currentIndex];

  return (
    <div className={`p-6 rounded-lg border ${
      theme === 'dark'
        ? 'bg-slate-800 border-slate-700'
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-xl font-bold mb-6">Featured Stories</h2>

      <div className="relative">
        {/* Story Content */}
        <div className={`p-6 rounded-lg ${
          theme === 'dark' ? 'bg-slate-700' : 'bg-gray-50'
        }`}>
          <h3 className="text-lg font-bold mb-2">{currentStory.title}</h3>
          {currentStory.program && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-4">
              {currentStory.program}
            </span>
          )}
          <p className={`line-clamp-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
            {currentStory.content}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors"
            aria-label="Previous story"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-amber-600' : theme === 'dark' ? 'bg-slate-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to story ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors"
            aria-label="Next story"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
