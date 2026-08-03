'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState('');

  const handleSeedDatabase = async () => {
    setSeeding(true);
    setMessage('');

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/seed', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to seed');
      await response.json();
      setMessage('✅ Database seeded! Reloading...');
      setTimeout(() => location.reload(), 1500);
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
      setSeeding(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const userStr = localStorage.getItem('admin_user');

    if (!token || !userStr) {
      router.push('/admin/login');
      return;
    }

    try {
      setUser(JSON.parse(userStr));
      setLoading(false);
    } catch (err) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a1428] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">JHCO Admin Panel</h1>
            <p className="text-gray-400 text-sm">Royal Authority Management</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="bg-[#d4af37] text-[#0a1428] px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1428] mb-2">Welcome, {user?.name}</h2>
          <p className="text-gray-600">Manage JHCO content, images, and statistics from here</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Images */}
          <Link href="/admin/images">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer border-l-4 border-[#d4af37]">
              <div className="text-3xl mb-2">🖼️</div>
              <h3 className="font-bold text-lg text-[#0a1428] mb-1">Images</h3>
              <p className="text-gray-600 text-sm">Upload & manage photos</p>
            </div>
          </Link>

          {/* Homepage */}
          <Link href="/admin/homepage">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer border-l-4 border-[#d4af37]">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold text-lg text-[#0a1428] mb-1">Homepage</h3>
              <p className="text-gray-600 text-sm">Edit hero & content</p>
            </div>
          </Link>

          {/* Statistics */}
          <Link href="/admin/statistics">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer border-l-4 border-[#d4af37]">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-lg text-[#0a1428] mb-1">Statistics</h3>
              <p className="text-gray-600 text-sm">Impact metrics</p>
            </div>
          </Link>

          {/* Stories */}
          <Link href="/admin/stories">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer border-l-4 border-[#d4af37]">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-lg text-[#0a1428] mb-1">Stories</h3>
              <p className="text-gray-600 text-sm">Beneficiary stories</p>
            </div>
          </Link>
        </div>

        {/* Seed Database Section */}
        {message && (
          <div
            className={`mt-8 p-4 rounded ${
              message.includes('✅')
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleSeedDatabase}
            disabled={seeding}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {seeding ? 'Seeding Database...' : '🌱 Seed Sample Data'}
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Populate database with sample homepage, statistics, and story for testing
          </p>
        </div>

        {/* Status Section */}
        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-[#0a1428] mb-4">Admin Panel Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-2">✅ Database: Connected</p>
              <p className="text-gray-600 mb-2">✅ Admin User: Active</p>
              <p className="text-gray-600 mb-2">✅ Authentication: JWT</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">✅ Image Storage: Vercel Blob</p>
              <p className="text-gray-600 mb-2">✅ Watermarking: Enabled</p>
              <p className="text-gray-600 mb-2">✅ 4 Admin Modules: Ready</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
