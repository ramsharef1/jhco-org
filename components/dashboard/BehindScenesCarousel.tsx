'use client';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const behindScenes = [
  {
    id: '1',
    name: 'Field Team Update',
    description: 'Our healthcare team in Gaza providing medical support',
    image: 'https://images.unsplash.com/photo-1576091160550-112173faf246?w=500&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Education Impact',
    description: 'Students receiving education through JHCO programs',
    image: 'https://images.unsplash.com/photo-1427504494785-cdec0f72edd3?w=500&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Community Outreach',
    description: 'Volunteers engaging with local communities',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop',
  },
];

export default function BehindScenesCarousel() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  const next = () => setCurrent((current + 1) % behindScenes.length);
  const prev = () => setCurrent((current - 1 + behindScenes.length) % behindScenes.length);

  const scene = behindScenes[current];

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={scene.image}
          alt={scene.name}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg">{scene.name}</h3>
          <p className="text-gray-200 text-sm">{scene.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={prev} className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700" aria-label="Previous">
          ← Prev
        </button>
        <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          {current + 1} of {behindScenes.length}
        </span>
        <button onClick={next} className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700" aria-label="Next">
          Next →
        </button>
      </div>
    </div>
  );
}
