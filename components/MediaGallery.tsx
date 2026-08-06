'use client';

import { useState } from 'react';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface MediaItem {
  id: string;
  titleEn: string;
  titleAr: string;
  imageUrl: string;
  descriptionEn?: string;
  descriptionAr?: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  locale?: string;
  columns?: number;
}

export default function MediaGallery({ items, locale = 'en', columns = 3 }: MediaGalleryProps) {
  const ar = locale === 'ar';
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? items.find(i => i.id === selectedId) : null;

  return (
    <>
      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
        gap: spacing.xl,
        marginBottom: spacing.xxxl,
      }}>
        {items.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
              transition: transitions.base,
              aspectRatio: '16/9',
            }}
            onMouseEnter={(e) => {
              const div = e.currentTarget as HTMLDivElement;
              div.style.transform = 'translateY(-4px)';
              div.style.boxShadow = '0 12px 24px rgba(10,20,40,0.12)';
            }}
            onMouseLeave={(e) => {
              const div = e.currentTarget as HTMLDivElement;
              div.style.transform = 'translateY(0)';
              div.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
            }}
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={ar ? item.titleAr : item.titleEn}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 26, 77, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: transitions.base,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = '0';
            }}
            >
              <div style={{
                fontSize: '32px',
                marginBottom: spacing.md,
              }}>
                {item.type === 'video' ? '▶️' : '🖼️'}
              </div>
              <div style={{
                color: 'white',
                textAlign: 'center',
                padding: spacing.lg,
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: 0,
                }}>
                  {ar ? item.titleAr : item.titleEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          onClick={() => setSelectedId(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: spacing.lg,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Media */}
            {selected.type === 'image' ? (
              <img
                src={selected.imageUrl}
                alt={ar ? selected.titleAr : selected.titleEn}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <iframe
                width="100%"
                height="500"
                src={selected.videoUrl}
                title={ar ? selected.titleAr : selected.titleEn}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Info */}
            <div style={{
              marginTop: spacing.lg,
              color: 'white',
              textAlign: ar ? 'right' : 'left',
              direction: ar ? 'rtl' : 'ltr',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: `0 0 ${spacing.md} 0`,
              }}>
                {ar ? selected.titleAr : selected.titleEn}
              </h3>
              {(selected.descriptionEn || selected.descriptionAr) && (
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {ar ? selected.descriptionAr : selected.descriptionEn}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              style={{
                marginTop: spacing.lg,
                padding: `${spacing.sm} ${spacing.lg}`,
                backgroundColor: royalColors.hashemiteGold,
                color: royalColors.deepRoyal,
                border: 'none',
                borderRadius: '2px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: transitions.base,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f4c430';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = royalColors.hashemiteGold;
              }}
            >
              {ar ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
