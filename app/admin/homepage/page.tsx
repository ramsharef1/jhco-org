'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface HomepageContent {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  mission: string;
  vision: string;
  updatedAt: string;
}

export default function HomepagePage() {
  const router = useRouter();
  const [content, setContent] = useState<HomepageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchContent();
  }, [router]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/homepage', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setContent(data);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) throw new Error('Failed to save');
      setMessage('✅ Homepage updated successfully!');
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No homepage content found</p>
          <button
            onClick={fetchContent}
            className="bg-[#0a1428] text-white px-4 py-2 rounded hover:bg-[#1a2840]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a1428] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="hover:opacity-80">
            <h1 className="text-2xl font-bold">JHCO Admin - Homepage</h1>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[#d4af37] text-[#0a1428] px-4 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-[#0a1428] mb-8">Edit Homepage Content</h2>

        {message && (
          <div
            className={`mb-6 p-4 rounded ${
              message.includes('✅')
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-8 space-y-8">
          {/* Hero Section */}
          <div className="border-b pb-8">
            <h3 className="text-xl font-bold text-[#0a1428] mb-6">Hero Section</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Title
                </label>
                <input
                  type="text"
                  value={content.heroTitle}
                  onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                  placeholder="Main headline"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Subtitle
                </label>
                <textarea
                  value={content.heroSubtitle}
                  onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                  placeholder="Supporting text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Image URL
                </label>
                <input
                  type="text"
                  value={content.heroImage}
                  onChange={(e) => setContent({ ...content, heroImage: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                  placeholder="https://..."
                />
                {content.heroImage && (
                  <div className="mt-4">
                    <img
                      src={content.heroImage}
                      alt="Hero preview"
                      className="w-full max-h-96 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="border-b pb-8">
            <h3 className="text-xl font-bold text-[#0a1428] mb-6">Mission & Vision</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mission Statement
                </label>
                <textarea
                  value={content.mission}
                  onChange={(e) => setContent({ ...content, mission: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                  placeholder="Our mission..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vision Statement
                </label>
                <textarea
                  value={content.vision}
                  onChange={(e) => setContent({ ...content, vision: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                  placeholder="Our vision..."
                />
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-sm text-gray-500">
            Last updated: {new Date(content.updatedAt).toLocaleString()}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-[#0a1428] text-white py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0a1428] disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </main>
    </div>
  );
}
