'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface MediaItem {
  id: string;
  type: 'video' | 'photo';
  url: string;
  title_en: string;
  program?: string;
}

export default function RichMediaGallery() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await fetch('/api/dashboard/media');
      const data = await res.json();
      setMedia(data);
      if (data.length > 0) setSelected(data[0]);
    } catch (error) {
      console.error('Failed to fetch media:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className={`p-4 rounded animate-pulse h-96 ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'}`} />;

  return (
    <div className="space-y-4">
      {selected && (
        <div className="rounded-lg overflow-hidden bg-black">
          {selected.type === 'video' ? (
            <iframe
              src={selected.url.replace('youtube.com/watch?v=', 'youtube.com/embed/')}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <img
              src={selected.url}
              alt={selected.title_en}
              className="w-full aspect-video object-cover"
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {media.slice(0, 12).map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`relative rounded overflow-hidden aspect-square transition-all ${
              selected?.id === item.id
                ? 'ring-2 ring-amber-600'
                : 'hover:opacity-80'
            }`}
            aria-label={item.title_en}
          >
            {item.type === 'video' ? (
              <div className="bg-gray-900 flex items-center justify-center h-full">
                <span className="text-white text-2xl">▶</span>
              </div>
            ) : (
              <img
                src={item.url}
                alt={item.title_en}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
