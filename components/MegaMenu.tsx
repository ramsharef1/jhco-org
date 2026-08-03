'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { sitemap, type NavItem } from '@/lib/sitemap';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface MegaMenuProps {
  locale: Locale;
  base: string;
}

export default function MegaMenu({ locale, base }: MegaMenuProps) {
  const ar = locale === 'ar';
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
      {sitemap.main.map((item, idx) => (
        <div
          key={idx}
          style={{ position: 'relative' }}
          onMouseEnter={() => setActiveMenu(item.labelEn)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Main Menu Item */}
          <Link
            href={`${base}${item.href}`}
            style={{
              padding: '8px 14px',
              fontSize: '13px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              textDecoration: 'none',
              transition: transitions.base,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${royalColors.hashemiteGold}15`;
              e.currentTarget.style.color = royalColors.hashemiteGold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = royalColors.darkNavy;
            }}
          >
            {item.icon && <span style={{ fontSize: '14px' }}>{item.icon}</span>}
            {ar ? item.label : item.labelEn}
            {item.children && item.children.length > 0 && (
              <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>
            )}
          </Link>

          {/* Mega Menu Dropdown */}
          {item.children && item.children.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                [ar ? 'right' : 'left']: '0',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                border: `1px solid ${royalColors.bgRefined}`,
                padding: '20px 24px',
                marginTop: '8px',
                minWidth: '320px',
                maxWidth: '500px',
                zIndex: 1000,
                opacity: activeMenu === item.labelEn ? 1 : 0,
                visibility: activeMenu === item.labelEn ? 'visible' : 'hidden',
                transform: activeMenu === item.labelEn ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.3s ease',
                pointerEvents: activeMenu === item.labelEn ? 'auto' : 'none',
              }}
            >
              {/* Menu Header */}
              <div style={{ marginBottom: '16px' }}>
                <h4
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {ar ? item.label : item.labelEn}
                </h4>
                {item.description && (
                  <p
                    style={{
                      fontSize: '12px',
                      color: royalColors.textOfficial,
                      margin: '0',
                      lineHeight: '1.4',
                    }}
                  >
                    {ar ? item.descriptionAr : item.description}
                  </p>
                )}
                <div
                  style={{
                    height: '2px',
                    background: royalColors.hashemiteGold,
                    marginTop: '12px',
                  }}
                />
              </div>

              {/* Menu Items Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    item.children.length > 6
                      ? 'repeat(auto-fit, minmax(200px, 1fr))'
                      : 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                {item.children.map((child, childIdx) => (
                  <Link
                    key={childIdx}
                    href={`${base}${child.href}`}
                    style={{
                      padding: '12px 12px',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: royalColors.darkNavy,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      transition: transitions.base,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${royalColors.hashemiteGold}15`;
                      e.currentTarget.style.color = royalColors.hashemiteGold;
                      e.currentTarget.style.transform = 'translateX(' + (ar ? '-2px' : '2px') + ')';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = royalColors.darkNavy;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{ar ? child.label : child.labelEn}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
