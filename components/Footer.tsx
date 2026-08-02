'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, footerStructure } from '@/lib/royalDesign';

export default function Footer({ locale = 'en' as Locale }: { locale?: Locale }) {
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Map footer structure to links with base URL
  const sections = [
    {
      key: 'aboutUs',
      title: footerStructure.aboutUs.title,
      titleEn: footerStructure.aboutUs.titleEn,
      links: footerStructure.aboutUs.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'programs',
      title: footerStructure.programs.title,
      titleEn: footerStructure.programs.titleEn,
      links: footerStructure.programs.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'impact',
      title: footerStructure.impact.title,
      titleEn: footerStructure.impact.titleEn,
      links: footerStructure.impact.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'government',
      title: footerStructure.government.title,
      titleEn: footerStructure.government.titleEn,
      links: footerStructure.government.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'getInvolved',
      title: footerStructure.getInvolved.title,
      titleEn: footerStructure.getInvolved.titleEn,
      links: footerStructure.getInvolved.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'resources',
      title: footerStructure.resources.title,
      titleEn: footerStructure.resources.titleEn,
      links: footerStructure.resources.links.map(l => ({ ...l, href: base + l.href })),
    },
    {
      key: 'legal',
      title: footerStructure.legal.title,
      titleEn: footerStructure.legal.titleEn,
      links: footerStructure.legal.links.map(l => ({ ...l, href: base + l.href })),
    },
  ];

  return (
    <footer style={{ backgroundColor: royalColors.deepNavy, color: 'white' }}>
      {/* Heraldic top border */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${royalColors.royalGold}, ${royalColors.crimson}, ${royalColors.royalGold})` }}></div>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '80px 32px 0', borderBottom: `1px solid rgba(212, 175, 55, 0.2)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {sections.map((section) => (
            <div key={section.key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.royalGold, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {ar ? section.title : section.titleEn}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '12px',
                        color: '#ccc',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                    >
                      {ar ? link.label : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Organization Info Section */}
      <div style={{ backgroundColor: `rgba(212, 175, 55, 0.05)`, padding: '48px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
          <div>
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.royalGold, textTransform: 'uppercase', marginBottom: '12px' }}>
              👑 {ar ? 'الرعاية الملكية' : 'Royal Patronage'}
            </h5>
            <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'الهيئة الخيرية الأردنية الهاشمية تعمل تحت الرعاية السامية لنشر العمل الإنساني' : 'Operating under royal patronage to serve humanity'}
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.royalGold, textTransform: 'uppercase', marginBottom: '12px' }}>
              🛡️ {ar ? 'الشفافية' : 'Transparency'}
            </h5>
            <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'التزام كامل بالشفافية والمساءلة في جميع العمليات' : '100% commitment to transparency and accountability'}
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.royalGold, textTransform: 'uppercase', marginBottom: '12px' }}>
              ⚜️ {ar ? 'التميز' : 'Excellence'}
            </h5>
            <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'السعي الدائم للتميز في جودة الخدمات الإنسانية' : 'Pursuing excellence in humanitarian service'}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '32px', textAlign: 'center', fontSize: '12px', color: '#999', borderTop: `1px solid rgba(212, 175, 55, 0.1)` }}>
        <p style={{ margin: '0 0 8px 0' }}>© 2026 JHCO - {ar ? 'الهيئة الخيرية الأردنية الهاشمية' : 'Jordan Hashemite Charity Organization'}</p>
        <p style={{ margin: 0 }}>
          {ar ? 'جميع الحقوق محفوظة | مسجلة بموجب القانون الأردني' : 'All rights reserved | Registered under Jordanian Law'}
        </p>
      </div>
    </footer>
  );
}
