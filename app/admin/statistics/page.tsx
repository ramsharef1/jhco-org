'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Statistic {
  id: string;
  label: string;
  value: string;
  unit: string;
  category: string;
  createdAt: string;
}

export default function StatisticsPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const [newStat, setNewStat] = useState({
    label: '',
    value: '',
    unit: '',
    category: 'impact',
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/statistics', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setStats(data);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStat = async () => {
    if (!newStat.label || !newStat.value) {
      setMessage('❌ Please fill in all fields');
      return;
    }

    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/statistics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newStat),
      });

      if (!response.ok) throw new Error('Failed to add statistic');
      const stat = await response.json();
      setStats([stat, ...stats]);
      setNewStat({ label: '', value: '', unit: '', category: 'impact' });
      setMessage('✅ Statistic added successfully!');
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteStat = async (id: string) => {
    if (!confirm('Delete this statistic?')) return;

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/admin/statistics/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete');
      setStats(stats.filter(s => s.id !== id));
      setMessage('✅ Statistic deleted!');
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a1428] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="hover:opacity-80">
            <h1 className="text-2xl font-bold">JHCO Admin - Statistics</h1>
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
        <h2 className="text-3xl font-bold text-[#0a1428] mb-8">Manage Impact Statistics</h2>

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

        {/* Add New Statistic */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0a1428] mb-6">Add New Statistic</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                <input
                  type="text"
                  value={newStat.label}
                  onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                  placeholder="e.g., People Helped"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
                <input
                  type="text"
                  value={newStat.value}
                  onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                  placeholder="e.g., 50000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <input
                  type="text"
                  value={newStat.unit}
                  onChange={(e) => setNewStat({ ...newStat, unit: e.target.value })}
                  placeholder="e.g., people, kg, schools"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newStat.category}
                  onChange={(e) => setNewStat({ ...newStat, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none"
                >
                  <option value="impact">Impact</option>
                  <option value="reach">Reach</option>
                  <option value="programs">Programs</option>
                  <option value="donors">Donors</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAddStat}
              disabled={saving}
              className="w-full bg-[#0a1428] text-white py-2 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0a1428] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Adding...' : 'Add Statistic'}
            </button>
          </div>
        </div>

        {/* Statistics List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h3 className="text-xl font-bold text-[#0a1428] p-8 border-b">
            Current Statistics ({stats.length})
          </h3>

          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : stats.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No statistics yet. Add one above!</div>
          ) : (
            <div className="divide-y">
              {stats.map((stat) => (
                <div key={stat.id} className="p-6 flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <p className="font-semibold text-[#0a1428]">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#d4af37]">
                      {stat.value} <span className="text-sm text-gray-500">{stat.unit}</span>
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-[#0a1428] text-white px-2 py-1 rounded">
                        {stat.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(stat.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteStat(stat.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
