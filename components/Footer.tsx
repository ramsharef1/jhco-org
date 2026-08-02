'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, footerStructure, transitions, spacing } from '@/lib/royalDesign';

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
    <footer style={{ backgroundColor: royalColors.darkNavy, color: 'white' }}>
      {/* Heraldic top border - Warm gradient */}
      <div style={{ height: '6px', background: `linear-gradient(90deg, ${royalColors.hashemiteGold}, ${royalColors.charityRed}, ${royalColors.compassionTeal}, ${royalColors.hashemiteGold})` }}></div>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: spacing.xxxl + ' ' + spacing.xl + ' 0', borderBottom: `1px solid rgba(232, 185, 35, 0.15)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: spacing.xxl, marginBottom: spacing.xxxl }}>
          {sections.map((section) => (
            <div key={section.key} style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.hashemiteGold, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                {ar ? section.title : section.titleEn}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '13px',
                        color: '#d0d0d0',
                        textDecoration: 'none',
                        transition: transitions.base,
                        cursor: 'pointer',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = royalColors.compassionTeal;
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d0d0d0';
                        e.currentTarget.style.transform = 'translateX(0)';
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
      <div style={{ background: `linear-gradient(135deg, rgba(232, 185, 35, 0.08) 0%, rgba(26, 188, 156, 0.05) 100%)`, padding: spacing.xxl + ' ' + spacing.xl, borderBottom: `1px solid rgba(232, 185, 35, 0.1)` }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacing.xxl }}>
          <div style={{ padding: spacing.lg, borderRadius: '8px', background: 'rgba(232, 185, 35, 0.05)', transition: transitions.base }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(232, 185, 35, 0.1)';
                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(232, 185, 35, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(232, 185, 35, 0.05)';
                 e.currentTarget.style.boxShadow = 'none';
               }}
          >
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.hashemiteGold, textTransform: 'uppercase', marginBottom: spacing.md, letterSpacing: '1px' }}>
              👑 {ar ? 'الرعاية الملكية' : 'Royal Patronage'}
            </h5>
            <p style={{ fontSize: '13px', color: '#d0d0d0', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'الهيئة الخيرية الأردنية الهاشمية تعمل تحت الرعاية السامية لنشر العمل الإنساني' : 'Operating under royal patronage to serve humanity'}
            </p>
          </div>

          <div style={{ padding: spacing.lg, borderRadius: '8px', background: 'rgba(26, 188, 156, 0.05)', transition: transitions.base }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(26, 188, 156, 0.1)';
                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 188, 156, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(26, 188, 156, 0.05)';
                 e.currentTarget.style.boxShadow = 'none';
               }}
          >
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.compassionTeal, textTransform: 'uppercase', marginBottom: spacing.md, letterSpacing: '1px' }}>
              🛡️ {ar ? 'الشفافية' : 'Transparency'}
            </h5>
            <p style={{ fontSize: '13px', color: '#d0d0d0', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'التزام كامل بالشفافية والمساءلة في جميع العمليات' : '100% commitment to transparency and accountability'}
            </p>
          </div>

          <div style={{ padding: spacing.lg, borderRadius: '8px', background: 'rgba(231, 76, 60, 0.05)', transition: transitions.base }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(231, 76, 60, 0.1)';
                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(231, 76, 60, 0.05)';
                 e.currentTarget.style.boxShadow = 'none';
               }}
          >
            <h5 style={{ fontSize: '12px', fontWeight: '700', color: royalColors.charityRed, textTransform: 'uppercase', marginBottom: spacing.md, letterSpacing: '1px' }}>
              ⚜️ {ar ? 'التميز' : 'Excellence'}
            </h5>
            <p style={{ fontSize: '13px', color: '#d0d0d0', lineHeight: '1.6', margin: 0 }}>
              {ar ? 'السعي الدائم للتميز في جودة الخدمات الإنسانية' : 'Pursuing excellence in humanitarian service'}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: spacing.xl, textAlign: 'center', fontSize: '12px', color: '#aaa', borderTop: `1px solid rgba(232, 185, 35, 0.1)` }}>
        <p style={{ margin: '0 0 8px 0' }}>© 2026 JHCO - {ar ? 'الهيئة الخيرية الأردنية الهاشمية' : 'Jordan Hashemite Charity Organization'}</p>
        <p style={{ margin: 0 }}>
          {ar ? 'جميع الحقوق محفوظة | مسجلة بموجب القانون الأردني' : 'All rights reserved | Registered under Jordanian Law'}
        </p>
      </div>
    </footer>
  );
}
