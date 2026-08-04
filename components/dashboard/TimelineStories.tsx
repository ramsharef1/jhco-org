'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Story {
  id: string;
  title: string;
  content: string;
  heroImage?: string;
  program?: string;
  createdAt: string;
}

export default function TimelineStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await fetch('/api/dashboard/stories');
      setStories(await res.json());
    } catch (error) {
      console.error('Failed to fetch stories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="space-y-4">{[...Array(3)].map((_, i) => <div key={i} className={`h-40 rounded animate-pulse ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'}`} />)}</div>;

  return (
    <div className="space-y-8">
      {stories.map((story, idx) => (
        <div key={story.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-amber-600' : 'bg-amber-500'}`} />
            {idx < stories.length - 1 && <div className={`w-1 h-16 ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'}`} />}
          </div>
          <div className="flex-1 pb-8">
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              {new Date(story.createdAt).toLocaleDateString()}
            </p>
            <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {story.title}
            </h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              {story.content.substring(0, 150)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
